import { useEffect, useRef, useState } from 'react';
import { PageContainer } from '../layout/PageContainer';
import { ProjectPreview } from './ProjectPreview';
import { projects } from '../../data/projects';
import '../../styles/work-access.css';

export function SelectedWork({ onAccessChange }: { onAccessChange: (ready: boolean) => void }) {
  const [access, setAccess] = useState(false);
  const [checking, setChecking] = useState(true);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/case-access', { signal: controller.signal, cache: 'no-store' })
      .then(response => response.json()).then(result => { setAccess(result.authorized === true); onAccessChange(result.authorized === true); })
      .catch(() => {}).finally(() => { if (!controller.signal.aborted) setChecking(false); });
    return () => controller.abort();
  }, [onAccessChange]);
  return <section id="work" className="section selected-work" aria-labelledby="work-title">
    <PageContainer>
      <h2 id="work-title" ref={heading} tabIndex={-1} className="number-label work-section-title">01 — Selected Work</h2>
      {access ? <div className="project-list">{projects.map(project => <ProjectPreview key={project.id} project={project} />)}</div> :
        <div className="work-gate" aria-busy={checking || pending}>
          <div className="work-gate-preview" aria-hidden="true">{[1,2,3].map(number => <div className="work-gate-sheet" key={number}><div><span /><span /><span /></div><div /></div>)}</div>
          <div className="work-gate-prompt">
            <p className="number-label">Private portfolio</p><h3>Explore selected work.</h3>
            <p>Enter the password to explore my projects and case studies.</p>
            <form onSubmit={async event => {
              event.preventDefault(); setPending(true); setError('');
              const password = new FormData(event.currentTarget).get('password');
              try {
                const response = await fetch('/api/case-access', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) });
                const result = await response.json();
                if (!response.ok) { setError(result.error || 'Unable to unlock. Please try again.'); return; }
                setAccess(true); onAccessChange(true); heading.current?.focus();
              } catch { setError('Unable to connect. Please try again.'); }
              finally { setPending(false); }
            }}>
              <label htmlFor="work-password">Password</label>
              <input id="work-password" name="password" type="password" autoComplete="current-password" required maxLength={256} aria-invalid={!!error} aria-describedby={error ? 'work-access-error' : undefined} disabled={checking || pending} />
              <p id="work-access-error" role="alert">{error}</p>
              <button type="submit" disabled={checking || pending}>{checking ? 'Checking access…' : pending ? 'Unlocking…' : 'Unlock selected work →'}</button>
            </form>
          </div>
        </div>}
    </PageContainer>
  </section>;
}
