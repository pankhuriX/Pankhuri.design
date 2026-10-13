export type AccessConfig = { password?: string; secret?: string };
const cookieName = 'portfolio_all_cases_access';
const lifetime = 8 * 60 * 60;
const encoder = new TextEncoder();
const headers = { 'Cache-Control': 'private, no-store', 'Vercel-CDN-Cache-Control': 'no-store' };
const attempts = new Map<string, { count: number; until: number }>();
async function digest(value: string) {
  return new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(value)));
}
async function equal(a: string, b: string) {
  const [left, right] = await Promise.all([digest(a), digest(b)]);
  let difference = 0;
  for (let i = 0; i < left.length; i++) difference |= left[i] ^ right[i];
  return difference === 0;
}
async function signature(payload: string, config: AccessConfig) {
  const key = await crypto.subtle.importKey('raw', encoder.encode(`${config.secret}:${config.password}`), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const signed = new Uint8Array(await crypto.subtle.sign('HMAC', key, encoder.encode(payload)));
  return Array.from(signed, byte => byte.toString(16).padStart(2, '0')).join('');
}
export async function authorized(request: Request, config: AccessConfig) {
  if (!config.password || !config.secret) return false;
  const token = request.headers.get('cookie')?.split(';').map(c => c.trim()).find(c => c.startsWith(`${cookieName}=`))?.slice(cookieName.length + 1);
  if (!token) return false;
  const [expires, sig, extra] = token.split('.');
  const now = Math.floor(Date.now() / 1000);
  if (extra || !/^\d+$/.test(expires) || !sig || Number(expires) <= now || Number(expires) > now + lifetime) return false;
  return equal(sig, await signature(expires, config));
}
export function protectedPath(path: string) {
  return /^\/images\/homepage\/(Reckitt admin Cover\.mp4|Reckitt Intranet Cover\.mp4|reckitt-admin-poster\.jpg|reckitt-intranet-poster\.jpg|Bajaj Cover\.png|hyundai-logo\.png|allianz-logo\.png)$/.test(path) ||
    /^\/work(\/|$)/.test(path) ||
    /^\/images\/(allianz|hyundai|reckitt-admin|reckitt-intranet|bajaj-health)(\/|$)/.test(path) || path.startsWith('/protected/') ||
    /^\/src\/pages\/(AllianzPage|HyundaiPage|ReckittAdminPage|ReckittIntranetPage|BajajHealthPage)\.tsx/.test(path);
}
export async function caseAccess(request: Request, config: AccessConfig): Promise<Response | null> {
  const url = new URL(request.url);
  let path: string;
  try { path = decodeURIComponent(url.pathname); } catch { return new Response('Invalid path', { status: 400, headers }); }
  if (path === '/api/case-access') {
    if (request.method === 'GET') return Response.json({ authorized: await authorized(request, config) }, { headers });
    if (request.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: { ...headers, Allow: 'POST' } });
    if (request.headers.get('origin') !== url.origin) return new Response('Forbidden', { status: 403, headers });
    if (!config.password || !config.secret) return Response.json({ error: 'Access is not configured yet. Please contact Pankhuri.' }, { status: 503, headers });
    // A per-instance abuse guard; Vercel Firewall can provide distributed rate limits.
    const ip = request.headers.get('x-vercel-forwarded-for') || 'local';
    const now = Date.now();
    for (const [key, value] of attempts) if (value.until < now) attempts.delete(key);
    const count = attempts.get(ip) ?? { count: 0, until: now + 60_000 };
    if (count.count >= 10) return Response.json({ error: 'Too many attempts. Please try again in a minute.' }, { status: 429, headers: { ...headers, 'Retry-After': '60' } });
    attempts.set(ip, { ...count, count: count.count + 1 });
    if (Number(request.headers.get('content-length')) > 2048) return new Response('Request too large', { status: 413, headers });
    let password: unknown;
    try { password = (await request.json()).password; } catch { return Response.json({ error: 'Invalid request.' }, { status: 400, headers }); }
    if (typeof password !== 'string' || password.length > 256 || !await equal(password, config.password)) return Response.json({ error: 'Incorrect password. Please try again.' }, { status: 401, headers });
    attempts.delete(ip);
    const expires = String(Math.floor(now / 1000) + lifetime);
    const token = `${expires}.${await signature(expires, config)}`;
    return Response.json({ ok: true }, { headers: { ...headers, 'Set-Cookie': `${cookieName}=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${lifetime}${url.protocol === 'https:' ? '; Secure' : ''}` } });
  }
  if (!protectedPath(path)) return null;
  if (await authorized(request, config)) return null;
  if (path.startsWith('/work/')) {
    const next = path;
    return new Response(null, { status: 303, headers: { ...headers, Location: `/unlock?next=${encodeURIComponent(next)}` } });
  }
  return new Response('Password required', { status: 401, headers });
}
