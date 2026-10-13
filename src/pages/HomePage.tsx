import { useState } from 'react';
import { useHomeInteractions } from '../hooks/useHomeInteractions';
import '../styles/interactions.css';
import { PageShell } from '../components/layout/PageShell';
import { Hero } from '../components/home/Hero';
import { SelectedWork } from '../components/work/SelectedWork';
import { Experiments } from '../components/home/Experiments';
export function HomePage() {
  const [workAccess, setWorkAccess] = useState(false);
  useHomeInteractions(workAccess);
  return <PageShell><Hero /><SelectedWork onAccessChange={setWorkAccess} /><Experiments /><div className="preview-cursor" aria-hidden="true"><span className="preview-cursor-label" /></div></PageShell>;
}
