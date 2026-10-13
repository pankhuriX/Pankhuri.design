import { useRef } from 'react';
import { caseAsset } from './CaseMedia';

/** Native dialog supplies focus trapping, Escape dismissal, and focus restoration. */
export function ExpandableCaseImage({ root, file, width, height, alt, caption }: { root: string; file: string; width: number; height: number; alt: string; caption: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const src = caseAsset(file, root);
  return <figure className="case-media hyundai-media">
    <button className="hyundai-image-open" type="button" onClick={() => dialog.current?.showModal()} aria-label={`Enlarge: ${caption}`}><img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" /></button>
    <figcaption><span>{caption}</span><button type="button" onClick={() => dialog.current?.showModal()}>Enlarge ↗</button></figcaption>
    <dialog ref={dialog} className="hyundai-lightbox" aria-label={caption} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="hyundai-lightbox-content"><button type="button" autoFocus onClick={() => dialog.current?.close()}>Close ×</button><img src={src} alt={alt} width={width} height={height} /><a href={src} target="_blank" rel="noopener noreferrer">Open original image ↗<span className="case-sr-only"> (opens in a new tab)</span></a></div>
    </dialog>
  </figure>;
}
