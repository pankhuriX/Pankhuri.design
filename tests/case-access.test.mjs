import test from 'node:test';
import assert from 'node:assert/strict';
import { caseAccess, authorized } from '../server/caseAccess.ts';
const config = { password: 'test-password', secret: 'test-secret-at-least-thirty-two-characters' };
const origin = 'https://portfolio.example';
const login = password => new Request(`${origin}/api/case-access`, { method: 'POST', headers: { origin, 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) });
test('public pages remain open while routes, images, and protected bundles require access', async () => {
  for (const path of ['/', '/about', '/images/homepage/Allianz.png']) assert.equal(await caseAccess(new Request(origin + path), config), null);
  for (const path of ['/work/reckitt-admin', '/work/reckitt-intranet', '/work/bajaj-health', '/work/allianz-design-system', '/work/hyundai']) {
    const response = await caseAccess(new Request(origin + path), config);
    assert.equal(response.status, 303); assert.equal(response.headers.get('location'), `/unlock?next=${encodeURIComponent(path)}`);
  }
  for (const path of ['/images/allianz/specs%201.png', '/images/hyundai/test.png', '/protected/AllianzPage-123.js', '/images/%61llianz/specs.png', '/images/reckitt-admin/Cover.png', '/images/reckitt-intranet/Cover.png', '/images/bajaj-health/Cover.png', '/src/pages/ReckittAdminPage.tsx', '/src/pages/BajajHealthPage.tsx', '/protected/ReckittIntranetPage-123.js']) assert.equal((await caseAccess(new Request(origin + path), config)).status, 401);
});
test('wrong passwords and cross-origin posts cannot create a session', async () => {
  const failed = await caseAccess(login('wrong'), config);
  assert.equal(failed.status, 401); assert.equal(failed.headers.get('set-cookie'), null);
  const forged = new Request(login(config.password), { headers: { origin: 'https://elsewhere.example' } });
  assert.equal((await caseAccess(forged, config)).status, 403);
});
test('correct password grants every project with an HTTP-only secure signed cookie', async () => {
  const response = await caseAccess(login(config.password), config);
  assert.equal(response.status, 200);
  const cookie = response.headers.get('set-cookie');
  for (const attribute of ['HttpOnly', 'Secure', 'SameSite=Strict', 'Max-Age=28800']) assert.ok(cookie.includes(attribute));
  for (const path of ['/work/reckitt-admin', '/work/reckitt-intranet', '/work/bajaj-health', '/work/allianz-design-system', '/work/hyundai', '/images/reckitt-admin/Cover.png', '/images/bajaj-health/Cover.png', '/images/allianz/Frame%2015.png', '/protected/AllianzPage-123.js']) {
    assert.equal(await caseAccess(new Request(origin + path, { headers: { cookie } }), config), null);
  }
  assert.equal(await authorized(new Request(origin, { headers: { cookie: cookie.replace(/=\d+/, '=1') } }), config), false);
  assert.equal(await authorized(new Request(origin, { headers: { cookie } }), { ...config, password: 'rotated' }), false);
});
test('missing configuration fails closed, malformed cookies cannot bypass access', async () => {
  assert.equal((await caseAccess(login(config.password), {})).status, 503);
  assert.equal(await authorized(new Request(origin, { headers: { cookie: 'portfolio_all_cases_access=invalid' } }), config), false);
  assert.equal((await caseAccess(new Request(origin + '/images/allianz/test.png'), {})).status, 401);
});
test('work gate checks session and protects actual homepage preview media', async () => {
  const status = await caseAccess(new Request(origin + '/api/case-access'), config);
  assert.deepEqual(await status.json(), { authorized: false });
  const result = await caseAccess(login(config.password), config);
  const cookie = result.headers.get('set-cookie');
  assert.deepEqual(await (await caseAccess(new Request(origin + '/api/case-access', { headers: { cookie } }), config)).json(), { authorized: true });
  for (const asset of ['Reckitt%20admin%20Cover.mp4', 'Reckitt%20Intranet%20Cover.mp4', 'Bajaj%20Cover.png', 'reckitt-admin-poster.jpg', 'reckitt-intranet-poster.jpg', 'hyundai-logo.png', 'allianz-logo.png']) {
    const url = origin + '/images/homepage/' + asset;
    assert.equal((await caseAccess(new Request(url), config)).status, 401);
    assert.equal(await caseAccess(new Request(url, { headers: { cookie } }), config), null);
  }
});
