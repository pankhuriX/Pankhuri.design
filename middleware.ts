import { next } from '@vercel/functions';
import { caseAccess, protectedPath } from './server/caseAccess.ts';
export default async function middleware(request: Request) {
  const response = await caseAccess(request, { password: process.env.CASE_STUDY_PASSWORD, secret: process.env.CASE_STUDY_SESSION_SECRET });
  if (response) return response;
  const path = decodeURIComponent(new URL(request.url).pathname);
  return next({ headers: protectedPath(path) ? { 'Cache-Control': 'private, no-store', 'Vercel-CDN-Cache-Control': 'no-store' } : {} });
}
