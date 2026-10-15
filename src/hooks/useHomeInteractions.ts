import { useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

/** Event-driven motion only: no perpetual animation loop or scroll interception. */
export function useHomeInteractions(workAccess = false) {
  const reduced = useReducedMotion();
  useEffect(() => {
    const media = matchMedia('(min-width: 80rem) and (hover: hover) and (pointer: fine)');
    const pointer = matchMedia('(min-width: 80rem) and (hover: hover) and (pointer: fine)');
    const hero = document.querySelector<HTMLElement>('.hero');
    const geometry = hero?.querySelector<HTMLElement>('.hero-geometry');
    const list = document.querySelector<HTMLElement>('.project-list, .work-gate');
    const cursor = document.querySelector<HTMLElement>('.preview-cursor');
    if (!hero || !geometry || !list || !cursor || reduced) return;
    const sheets = list.matches('.project-list') ? [...list.children] as HTMLElement[] : [];
    const targets = [...document.querySelectorAll<HTMLElement>('[data-preview-cursor]')];
    let heroVisible = false;
    let frame = 0;
    let cursorFrame = 0;
    let x = 0, y = 0;
    let active: HTMLElement | null = null;
    let heroBounds = geometry.getBoundingClientRect();
    const paint = () => {
      frame = 0;
      hero.style.setProperty('--pointer-x', String(x));
      hero.style.setProperty('--pointer-y', String(y));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    const reset = () => { x = y = 0; schedule(); };
    const moveHero = (event: PointerEvent) => {
      if (!pointer.matches || event.pointerType !== 'mouse') return;
      x = Math.max(-1, Math.min(1, (event.clientX - heroBounds.left) / heroBounds.width * 2 - 1));
      y = Math.max(-1, Math.min(1, (event.clientY - heroBounds.top) / heroBounds.height * 2 - 1));
      schedule();
    };
    const refreshHeroBounds = () => { heroBounds = geometry.getBoundingClientRect(); };
    const hideCursor = () => {
      active?.removeAttribute('data-cursor-active');
      active = null;
      cursor.classList.remove('preview-cursor--visible');
      cancelAnimationFrame(cursorFrame);
      cursorFrame = 0;
    };
    let cursorX = 0, cursorY = 0, cursorRadius = 0;
    const moveCursor = (event: PointerEvent) => {
      if (!pointer.matches || event.pointerType !== 'mouse') return;
      const target = event.currentTarget as HTMLElement;
      if (active && active !== target) active.removeAttribute('data-cursor-active');
      active = target;
      target.setAttribute('data-cursor-active', '');
      if (cursor.firstElementChild) cursor.firstElementChild.textContent = target.dataset.previewCursor || '';
      cursorX = Math.max(cursorRadius, Math.min(innerWidth - cursorRadius, event.clientX));
      cursorY = Math.max(cursorRadius, Math.min(innerHeight - cursorRadius, event.clientY));
      if (!cursorFrame) cursorFrame = requestAnimationFrame(() => {
        cursorFrame = 0;
        cursor.style.setProperty('--cursor-x', `${cursorX}px`);
        cursor.style.setProperty('--cursor-y', `${cursorY}px`);
        cursor.classList.add('preview-cursor--visible');
      });
    };
    const sizeStack = () => {
      // Read token-based offsets once per resize, never on scroll.
      const style = getComputedStyle(list);
      const rootSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const pixels = (name: string) => { const value = style.getPropertyValue(name).trim(); return parseFloat(value) * (value.endsWith('rem') ? rootSize : 1); };
      const base = pixels('--stack-top');
      const step = pixels('--stack-step');
      const tallest = Math.max(0, ...sheets.map(sheet => sheet.getBoundingClientRect().height));
      const header = document.querySelector('.site-header')?.getBoundingClientRect().height || 0;
      const top = Math.max(base, header);
      list.style.setProperty('--stack-header', `${top}px`);
      // Compress exposed sheet strips on short desktops instead of losing the stack.
      const availableStep = Math.max(0, Math.min(step, (innerHeight - top - tallest) / Math.max(1, sheets.length - 1)));
      list.style.setProperty('--stack-visible-step', `${availableStep}px`);
      list.classList.toggle('project-list--stack', sheets.length > 0 && media.matches && tallest + top <= innerHeight);
      heroBounds = geometry.getBoundingClientRect();
      cursorRadius = parseFloat(getComputedStyle(cursor).width) / 2 || 0;
    };
    const bindHero = (enabled: boolean) => {
      hero.classList.toggle('hero--visible', enabled && pointer.matches);
      geometry.removeEventListener('pointermove', moveHero);
      geometry.removeEventListener('pointerleave', reset);
      geometry.removeEventListener('pointerenter', refreshHeroBounds);
      if (enabled && pointer.matches) {
        geometry.addEventListener('pointermove', moveHero, { passive: true });
        geometry.addEventListener('pointerleave', reset);
        geometry.addEventListener('pointerenter', refreshHeroBounds, { passive: true });
        refreshHeroBounds();
      } else { x = y = 0; schedule(); }
    };
    const observer = new IntersectionObserver(entries => {
      heroVisible = entries[0].isIntersecting;
      bindHero(heroVisible);
    });
    observer.observe(hero);
    const resize = new ResizeObserver(sizeStack);
    resize.observe(list);
    sheets.forEach((sheet, index) => {
      sheet.style.setProperty('--sheet-index', String(index));
      resize.observe(sheet);
    });
    const change = () => { hideCursor(); bindHero(heroVisible); sizeStack(); };
    media.addEventListener('change', change);
    pointer.addEventListener('change', change);
    window.addEventListener('resize', change);
    window.addEventListener('scroll', hideCursor, { passive: true });
    window.addEventListener('blur', hideCursor);
    window.addEventListener('keydown', hideCursor);
    targets.forEach(target => {
      target.addEventListener('pointermove', moveCursor, { passive: true });
      target.addEventListener('pointerleave', hideCursor);
    });
    sizeStack();
    return () => {
      observer.disconnect(); resize.disconnect(); bindHero(false); hideCursor();
      cancelAnimationFrame(frame);
      media.removeEventListener('change', change);
      pointer.removeEventListener('change', change);
      window.removeEventListener('resize', change);
      window.removeEventListener('scroll', hideCursor);
      window.removeEventListener('blur', hideCursor);
      window.removeEventListener('keydown', hideCursor);
      targets.forEach(target => {
        target.removeEventListener('pointermove', moveCursor);
        target.removeEventListener('pointerleave', hideCursor);
      });
      list.classList.remove('project-list--stack');
      sheets.forEach(sheet => sheet.style.removeProperty('--sheet-index'));
      ['--pointer-x', '--pointer-y'].forEach(name => hero.style.removeProperty(name));
    };
  }, [reduced, workAccess]);
}
