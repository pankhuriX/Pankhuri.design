import { Reveal } from '../ui/Reveal';
import { caseAsset } from './CaseMedia';
import '../../styles/legacy-portal.css';

function Annotation({ children, upward = false }: { children: string; upward?: boolean }) {
  return <div className={`legacy-note${upward ? ' legacy-note--up' : ''}`}>
    <span>{children}</span>
    <svg viewBox="0 0 100 48" aria-hidden="true" focusable="false">
      <path d="M8 5 C32 1 68 9 81 38 M69 31 L82 40 L86 25" />
    </svg>
  </div>;
}

export function LegacyPortalFigure() {
  const src = caseAsset('Legacy Portal.png');
  return <Reveal className="case-media legacy-portal"><figure>
    <div className="legacy-notes"><Annotation>Unclear navigation</Annotation><Annotation>Weak visual hierarchy</Annotation></div>
    <a href={src} target="_blank" rel="noopener noreferrer" aria-label="Legacy portal — open full-size image in a new tab">
      <img src={src} alt="Legacy sales administration screen with dense navigation, product lists, and item-update fields." width={2414} height={1224} loading="lazy" decoding="async" />
    </a>
    <div className="legacy-notes"><Annotation upward>Dense layout</Annotation><Annotation upward>No inline validation</Annotation></div>
    <figcaption><span>Legacy portal</span><a href={src} target="_blank" rel="noopener noreferrer">View full size <span aria-hidden="true">↗</span><span className="case-sr-only"> (opens in a new tab)</span></a></figcaption>
  </figure></Reveal>;
}
