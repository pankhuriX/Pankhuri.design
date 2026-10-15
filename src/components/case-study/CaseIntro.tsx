import type { ReactNode } from 'react';

/** Shared opening order; each page retains its existing cover and project details. */
export function CaseIntro({ label, heading, subcaption, keywords, cover, children, whiteCover = false }: {
  label: string;
  heading: string;
  subcaption: string;
  keywords: string;
  cover: ReactNode;
  children: ReactNode;
  whiteCover?: boolean;
}) {
  return <header className={`case-hero case-intro${whiteCover ? ' case-intro--white-cover' : ''}`}>
    <p className="number-label case-label">{label}</p>
    <h1>{heading}</h1>
    <p className="case-subtitle">{subcaption}</p>
    <p className="case-tags number-label">{keywords}</p>
    {cover}
    {children}
  </header>;
}
