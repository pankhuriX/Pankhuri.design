import { lazy, Suspense } from 'react';
import { UnlockPage } from './pages/UnlockPage';
const AllianzPage = lazy(() => import('./pages/AllianzPage').then(module => ({ default: module.AllianzPage })));
const HyundaiPage = lazy(() => import('./pages/HyundaiPage').then(module => ({ default: module.HyundaiPage })));
const BajajHealthPage = lazy(() => import('./pages/BajajHealthPage').then(module => ({ default: module.BajajHealthPage })));
const ReckittIntranetPage = lazy(() => import('./pages/ReckittIntranetPage').then(module => ({ default: module.ReckittIntranetPage })));
const ReckittAdminPage = lazy(() => import('./pages/ReckittAdminPage').then(module => ({ default: module.ReckittAdminPage })));
import { useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PageShell } from './components/layout/PageShell';
import { PageContainer } from './components/layout/PageContainer';
export function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  useEffect(() => {
    document.title = path === '/unlock' ? 'Protected case study — Pankhuri' : path === '/work/hyundai' ? 'Hyundai — Pankhuri' : path === '/work/allianz-design-system' ? 'Allianz Design System — Pankhuri' : path === '/work/bajaj-health' ? 'Bajaj Health — Pankhuri' : path === '/work/reckitt-intranet' ? 'Reckitt Sales Intranet — Pankhuri' : path === '/work/reckitt-admin' ? 'Reckitt Admin Portal — Pankhuri' : path === '/about' ? 'About — Pankhuri' : path === '/' ? 'Pankhuri — Product Designer' : 'Page not found — Pankhuri';
  }, [path]);
  useEffect(() => {
    if (!window.location.hash) return;
    const frame = requestAnimationFrame(() => document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView());
    return () => cancelAnimationFrame(frame);
  }, [path]);
  if (path === '/unlock') return <UnlockPage />;
  if (path === '/work/hyundai') return <Suspense fallback={<p role="status">Loading case study…</p>}><HyundaiPage /></Suspense>;
  if (path === '/work/allianz-design-system') return <Suspense fallback={<p role="status">Loading case study…</p>}><AllianzPage /></Suspense>;
  if (path === '/work/bajaj-health') return <Suspense fallback={<p role="status">Loading case study…</p>}><BajajHealthPage /></Suspense>;
  if (path === '/work/reckitt-intranet') return <Suspense fallback={<p role="status">Loading case study…</p>}><ReckittIntranetPage /></Suspense>;
  if (path === '/work/reckitt-admin') return <Suspense fallback={<p role="status">Loading case study…</p>}><ReckittAdminPage /></Suspense>;
  if (path === '/about') return <AboutPage />;
  if (path === '/') return <HomePage />;
  return <PageShell><PageContainer className="section"><h1>Page not found</h1><a href="/">Return home</a></PageContainer></PageShell>;
}
