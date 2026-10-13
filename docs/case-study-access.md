# Locked case studies

Hyundai and Allianz homepage titles now link to their protected routes. Both use one shared password and an eight-hour signed session stored in an HttpOnly, SameSite=Strict cookie (Secure over HTTPS).

## Local setup

The requested password is configured in ignored `.env.local`, alongside a generated 256-bit session secret. Neither value is shipped to the browser or committed. `npm run dev` and `npm run preview` run the same access checks as the Vercel middleware. The local production preview used for verification is port 5174.

## Vercel setup required before redeploying

In the project's Settings → Environment Variables, set both values for Production and any Preview environments that need access:

- `CASE_STUDY_PASSWORD`: the shared password requested by the owner.
- `CASE_STUDY_SESSION_SECRET`: use the generated value in local `.env.local`, or generate a separate random secret of at least 32 bytes.

Do not prefix these with `VITE_`. Commit/push the implementation and redeploy after configuring the variables. No live environment variables or deployment were changed during implementation. Missing configuration fails closed.

## Protection boundary

Root `middleware.ts` uses Vercel Routing Middleware before static delivery and SPA rewrites. It protects `/work/allianz-design-system`, `/work/hyundai`, `/images/allianz/*`, `/images/hyundai/*`, and `/protected/*`. Vite lazy-loads case-study code into protected chunks so private narrative is not embedded in the public application bundle. Source maps are disabled. Protected responses disable caching. Public homepage cover logos remain public intentionally.

The POST login endpoint checks same-origin requests, compares password digests, issues signed expiring cookies, and applies a basic per-instance retry limit. For stronger distributed abuse controls, configure Vercel Firewall rate limiting; in-memory counters do not span instances. Rotating either environment variable invalidates existing sessions. The password screen only accepts allowlisted return destinations.

Hyundai's case study is sourced from the supplied Hyundai Presentation.pdf and is available after authentication. Its images remain under the protected `/images/hyundai/` path.

## Verification

- Production build passes and emits Allianz/Hyundai JS under `dist/protected/`.
- Public JS checked for password and Allianz narrative: absent.
- Automated tests cover route/media/code denial, successful login, wrong passwords, cross-origin rejection, invalid/expired cookies, rotation, and fail-closed missing configuration.
- Local production HTTP checks: public homepage 200, locked routes 303 to form, unauthenticated image/chunk 401, authenticated resources 200.
- Browser: wrong-password feedback, correct unlock, refresh persistence, no runtime errors.

Implementation follows https://vercel.com/docs/routing-middleware/api. Do not publish `dist` to a plain static host without equivalent middleware: the Vercel/server access checks are part of this protection.
