# Password-protected portfolio clone

Independent copy of the current portfolio. The original project is unchanged. No deployment or Git repository was created for this copy.

All five `/work/` case-study routes, their page bundles, and their case-study image/video folders require a valid server-side session. Home and About remain public. Selected Work shows a blurred abstract preview and one password form; real homepage project media is protected and loads only after authentication. The external Deutschle experiment remains an external link. One shared password unlocks every case study for eight hours. The clone uses its own signing secret and cookie name.

## Local preview

- `npm run build`
- `npm run preview -- --port 5175 --strictPort`
- Open http://127.0.0.1:5175/

The requested existing password is configured in ignored `.env.local`. Never commit this file. `.env.example` lists the required environment variables.

## Separate Vercel deployment

Deploy this directory as a separate Vercel project, either from a new repository containing this directory's contents or with this directory selected as Root Directory. Set `CASE_STUDY_PASSWORD` to the desired shared password and `CASE_STUDY_SESSION_SECRET` to a long random secret in Vercel. Rebuild/redeploy after setting them. Vercel middleware is required; a plain static file host cannot enforce this protection. Do not deploy only `dist` to an unprotected static host.

## Changes from original

- All case studies load lazily into protected production bundles.
- Server guard covers all work routes and all five case-study media folders.
- Unlock page selects the correct project from a safe local route allowlist.
- Homepage shows password labels for every case study without falsely marking the three public-source projects as NDA.
- Access regression tests cover all five projects and representative media/bundle URLs.

The homepage gate checks the HTTP-only session through GET /api/case-access. Wrong-password feedback is announced accessibly; success renders all five projects and focuses the section heading. The placeholder contains no project screenshots, clickable hidden content, or private media. Build and five regression tests pass; browser verification confirmed error feedback and all five projects appearing after login.
