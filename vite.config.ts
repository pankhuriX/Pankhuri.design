import { defineConfig, loadEnv, type ViteDevServer, type PreviewServer } from 'vite';
import react from '@vitejs/plugin-react';
import { caseAccess, protectedPath } from './server/caseAccess.ts';
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'CASE_STUDY_');
  const config = { password: env.CASE_STUDY_PASSWORD, secret: env.CASE_STUDY_SESSION_SECRET };
  const accessMiddleware = (server: ViteDevServer | PreviewServer) => {
    server.middlewares.use(async (req, res, next) => {
      try {
        const url = new URL(req.url || '/', `http://${req.headers.host || '127.0.0.1:5173'}`);
        if (url.pathname !== '/api/case-access' && !protectedPath(decodeURIComponent(url.pathname))) return next();
        let body = '';
        if (req.method === 'POST') {
          for await (const chunk of req) {
            body += chunk.toString();
            if (body.length > 2048) { res.statusCode = 413; res.end('Request too large'); return; }
          }
        }
        const headers = new Headers();
        for (const [key, value] of Object.entries(req.headers)) if (value) headers.set(key, Array.isArray(value) ? value.join(',') : value);
        const response = await caseAccess(new Request(url, { method: req.method, headers, ...(body ? { body } : {}) }), config);
        if (!response) { res.setHeader('Cache-Control', 'private, no-store'); next(); return; }
        res.statusCode = response.status;
        response.headers.forEach((value, key) => res.setHeader(key, value));
        res.end(await response.text());
      } catch { res.statusCode = 500; res.end('Unable to check access'); }
    });
  };
  return {
    plugins: [react(), { name: 'case-study-access', configureServer: accessMiddleware, configurePreviewServer: accessMiddleware }],
    build: { sourcemap: false, rollupOptions: { output: {
      chunkFileNames: chunk => /^(AllianzPage|HyundaiPage|BajajHealthPage|ReckittAdminPage|ReckittIntranetPage)$/.test(chunk.name) ? 'protected/[name]-[hash].js' : 'assets/[name]-[hash].js',
    } } },
  };
});
