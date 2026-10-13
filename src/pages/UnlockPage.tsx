import { projects } from '../data/projects';
import { useState } from 'react';
import { PageShell } from '../components/layout/PageShell';
import { PageContainer } from '../components/layout/PageContainer';
import '../styles/access.css';
export function UnlockPage() {
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);
  const requested = new URLSearchParams(window.location.search).get('next');
  const selected = projects.find(project => project.href === requested) ?? projects[0];
  const destination = selected.href!;
  const project = selected.title;
  return <PageShell><PageContainer><section className="case-access" aria-labelledby="access-title">
    <p className="number-label">Password protected</p><h1 id="access-title">{project}</h1>
    <p>Enter the shared password to view this case study.</p>
    <form onSubmit={async event => {
      event.preventDefault(); setError(''); setPending(true);
      const password = new FormData(event.currentTarget).get('password');
      try {
        const response = await fetch('/api/case-access', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) });
        const result = await response.json();
        if (response.ok) window.location.assign(destination);
        else setError(result.error || 'Unable to unlock. Please try again.');
      } catch { setError('Unable to connect. Please try again.'); }
      finally { setPending(false); }
    }}>
      <label htmlFor="case-password">Password</label>
      <input id="case-password" name="password" type="password" autoComplete="current-password" required maxLength={256} aria-invalid={!!error} aria-describedby={error ? 'access-error' : undefined} />
      <p id="access-error" role="alert">{error}</p>
      <button type="submit" disabled={pending}>{pending ? 'Unlocking…' : 'View case study →'}</button>
    </form><a href="/#work">Back to selected work</a>
  </section></PageContainer></PageShell>;
}
