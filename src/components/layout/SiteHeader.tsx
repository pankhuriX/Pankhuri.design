import { useEffect, useRef, useState } from 'react';
import { createPortal, flushSync } from 'react-dom';
import { PageContainer } from './PageContainer';
import { navigation } from '../../data/home';
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeMenu = () => { setMenuOpen(false); menuButton.current?.focus({ preventScroll: true }); };
  useEffect(() => {
    if (!menuOpen) return;
    const surface = dialog.current;
    if (!surface) return;
    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPosition = body.style.position;
    const previousTop = body.style.top;
    const previousWidth = body.style.width;
    const scrollY = window.scrollY;
    body.style.overflow = 'hidden'; body.style.position = 'fixed'; body.style.top = `-${scrollY}px`; body.style.width = '100%';
    surface.showModal();
    const desktop = window.matchMedia('(min-width: 80rem)');
    const onResize = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener('change', onResize);
    return () => {
      surface.close();
      body.style.overflow = previousOverflow; body.style.position = previousPosition; body.style.top = previousTop; body.style.width = previousWidth;
      const behavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, scrollY);
      document.documentElement.style.scrollBehavior = behavior;
      desktop.removeEventListener('change', onResize);
    };
  }, [menuOpen]);
  const onAbout = window.location.pathname.replace(/\/+$/, '') === '/about';
  const [active, setActive] = useState(onAbout ? 'about' : 'hero');
  useEffect(() => {
    const update = () => {
      const ids = onAbout ? ['about', 'contact'] : ['hero', 'work', 'experiments', 'contact'];
      let current = onAbout ? 'about' : 'hero';
      for (const id of ids) if ((document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= window.innerHeight / 3) current = id;
      setActive(current);
    };
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [onAbout]);
  return <header className="site-header"><PageContainer className="header-inner">
    <a className="wordmark" href="/" aria-label="Pankhuri — home">Pankhuri</a>
    <button ref={menuButton} className="mobile-menu-toggle" type="button" aria-label="Open navigation" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(true)}><span aria-hidden="true">☰</span></button>
    <nav className="desktop-navigation" aria-label="Main navigation">{navigation.map(item => <a key={item.id} href={item.href} aria-current={active === item.id ? item.id === 'about' ? 'page' : 'location' : undefined}>{item.label}</a>)}</nav>
    {createPortal(<dialog ref={dialog} id="mobile-navigation" className="mobile-navigation" aria-label="Main navigation" onCancel={event => { event.preventDefault(); closeMenu(); }}>
      <div className="mobile-navigation-header">
        <a className="wordmark" href="/" aria-label="Pankhuri — home" onClick={closeMenu}>Pankhuri</a>
        <button type="button" className="mobile-menu-close" aria-label="Close navigation" autoFocus onClick={closeMenu}>×</button>
      </div>
      <nav aria-label="Mobile navigation">{navigation.map(item => <a key={item.id} href={item.href} aria-current={active === item.id ? item.id === 'about' ? 'page' : 'location' : undefined} onClick={event => {
        // Unlock and restore the page before following a same-page anchor.
        event.preventDefault(); flushSync(closeMenu);
        window.location.href = item.href;
      }}>{item.label}</a>)}</nav>
    </dialog>, document.body)}
  </PageContainer></header>;
}
