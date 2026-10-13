import { useEffect, useId, useRef, useState } from 'react';
export const chapters = [
  { id: 'overview', number: '00', title: 'Overview' },
  { id: 'challenge', number: '01', title: 'Challenge' },
  { id: 'decisions', number: '02', title: 'Design decisions' },
  { id: 'journey', number: '03', title: 'Key journey' },
  { id: 'final-design', number: '04', title: 'Final design' },
  { id: 'outcome', number: '05', title: 'Outcome' },
  { id: 'reflection', number: '06', title: 'Reflection' },
];
export function CaseNavigation({ items = chapters, caseNumber = "01" }: { items?: typeof chapters; caseNumber?: string }) {
  const [active, setActive] = useState('overview');
  const ref = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLOListElement>(null);
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const current = items.find(item => item.id === active) ?? items[0];
  useEffect(() => {
    if (!open) return;
    const dismiss = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 80rem)');
    const close = () => setOpen(false);
    document.addEventListener('pointerdown', dismiss);
    desktop.addEventListener('change', close);
    return () => { document.removeEventListener('pointerdown', dismiss); desktop.removeEventListener('change', close); };
  }, [open]);
  const focusItem = (index: number) => menu.current?.querySelectorAll<HTMLAnchorElement>('a')[index]?.focus();
  useEffect(() => {
    const root = ref.current?.closest<HTMLElement>('.reckitt-case');
    const header = root?.querySelector<HTMLElement>('.site-header');
    if (!root || !header) return;
    let frame = 0;
    let headerHeight = header.getBoundingClientRect().height;
    const update = () => {
      frame = 0;
      const overview = document.getElementById('overview');
      const marker = overview ? Number.parseFloat(getComputedStyle(overview).scrollMarginTop) + 1 : headerHeight;
      let current = items[0].id;
      for (const chapter of items) {
        if ((document.getElementById(chapter.id)?.getBoundingClientRect().top ?? Infinity) <= marker) current = chapter.id;
      }
      setActive(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const resize = new ResizeObserver(() => {
      headerHeight = header.getBoundingClientRect().height;
      root.style.setProperty('--case-header-height', `${headerHeight}px`);
      schedule();
    });
    resize.observe(header);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();
    return () => { resize.disconnect(); cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); };
  }, [items]);
  return <nav ref={ref} className="case-navigation" aria-label="Case study sections">
    <div className="case-rail"><p className="number-label">CASE STUDY {caseNumber}</p><ol>{items.map(chapter => <li key={chapter.id}><a href={`#${chapter.id}`} aria-current={active === chapter.id ? 'location' : undefined}><span>{chapter.number}</span>{chapter.title}</a></li>)}</ol></div>
    <div className="case-mobile-nav" onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
    }} onKeyDown={event => {
      if (event.key === 'Escape') { event.preventDefault(); setOpen(false); trigger.current?.focus(); }
    }}>
      <button ref={trigger} className="case-section-trigger" type="button" aria-expanded={open} aria-controls={menuId}
        aria-label={`Case study section: ${current.number} / ${current.title}`}
        onClick={() => setOpen(value => !value)}
        onKeyDown={event => {
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault(); setOpen(true);
            requestAnimationFrame(() => focusItem(event.key === 'ArrowUp' ? items.length - 1 : items.findIndex(item => item.id === active)));
          }
        }}>
        <span className="case-section-label">Section</span>
        <span className="case-section-current">{current.number} / {current.title}</span>
        <span className="case-section-arrow" aria-hidden="true">{open ? '↑' : '↓'}</span>
      </button>
      <ol ref={menu} id={menuId} className="case-section-menu" hidden={!open} onKeyDown={event => {
        const links = Array.from(menu.current?.querySelectorAll('a') ?? []);
        const index = links.indexOf(document.activeElement as HTMLAnchorElement);
        const next = event.key === 'ArrowDown' ? (index + 1) % items.length : event.key === 'ArrowUp' ? (index - 1 + items.length) % items.length : event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : null;
        if (next !== null) { event.preventDefault(); focusItem(next); }
      }}>
        {items.map(chapter => <li key={chapter.id}><a href={`#${chapter.id}`} aria-current={active === chapter.id ? 'location' : undefined}
          onClick={() => { setOpen(false); trigger.current?.focus({ preventScroll: true }); }}>
          <span>{chapter.number}</span><span>/ {chapter.title}</span>
        </a></li>)}
      </ol>
    </div>
  </nav>;
}
