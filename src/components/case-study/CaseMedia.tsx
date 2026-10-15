import { useEffect, useRef } from 'react';
import { Reveal } from '../ui/Reveal';
import { useReducedMotion } from '../../hooks/useReducedMotion';
const assetRoot = '/images/reckitt-admin/';
export const caseAsset = (name: string, root = assetRoot) => root + encodeURIComponent(name);
export function CaseImage({ file, alt, caption, width, height, eager = false, root = assetRoot }: { file: string; alt: string; caption: string; width: number; height: number; eager?: boolean; root?: string }) {
  return <Reveal className="case-media"><figure><a href={caseAsset(file, root)} target="_blank" rel="noopener noreferrer" aria-label={`${caption} — open full-size image in a new tab`}><img src={caseAsset(file, root)} alt={alt} width={width} height={height} loading={eager ? 'eager' : 'lazy'} decoding="async" /></a><figcaption><span>{caption}</span><a href={caseAsset(file, root)} target="_blank" rel="noopener noreferrer">View full size <span aria-hidden="true">↗</span><span className="case-sr-only"> (opens in a new tab)</span></a></figcaption></figure></Reveal>;
}
export function CaseVideo({ file, poster, caption, root = assetRoot, playbackGroup, loop = true, assetVersion }: { file: string; poster: string; caption: string; root?: string; playbackGroup?: string; loop?: boolean; assetVersion?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  // Remember a deliberate native-control pause across viewport changes.
  const userPaused = useRef(false);
  const automaticPause = useRef(false);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const pause = () => { if (!video.paused) { automaticPause.current = true; video.pause(); } };
    const onPause = () => { if (automaticPause.current) automaticPause.current = false; else userPaused.current = true; };
    const onPlay = () => {
      userPaused.current = false;
      if (playbackGroup) document.dispatchEvent(new CustomEvent('case-video-play', { detail: { group: playbackGroup, video } }));
    };
    const onGroupPlay = (event: Event) => {
      const detail = (event as CustomEvent<{ group: string; video: HTMLVideoElement }>).detail;
      if (playbackGroup && detail.group === playbackGroup && detail.video !== video) pause();
    };
    if (playbackGroup) document.addEventListener('case-video-play', onGroupPlay);
    video.addEventListener('pause', onPause); video.addEventListener('play', onPlay);
    let visible = false;
    const sync = () => {
      if (!visible || document.hidden || reduced) pause();
      else if (!userPaused.current) void video.play().catch(() => {});
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { threshold: 0.2 });
    observer.observe(video);
    document.addEventListener('visibilitychange', sync);
    if (reduced) pause();
    return () => { observer.disconnect(); if (playbackGroup) document.removeEventListener('case-video-play', onGroupPlay); document.removeEventListener('visibilitychange', sync); video.removeEventListener('pause', onPause); video.removeEventListener('play', onPlay); video.pause(); };
  }, [reduced, playbackGroup]);
  return <figure className="case-video"><video ref={ref} muted loop={loop} playsInline controls preload="none" poster={caseAsset(poster, root)} aria-label={caption}><source src={caseAsset(file, root) + (assetVersion ? `?v=${encodeURIComponent(assetVersion)}` : '')} type="video/mp4" /></video><figcaption>{caption}</figcaption></figure>;
}
