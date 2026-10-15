import { useState } from 'react';
import { HeroGeometry } from './HeroGeometry';
import { GridToggle } from '../layout/GridOverlay';
import '../../styles/hero.css';
import { PageContainer } from '../layout/PageContainer';
import { NumberLabel } from '../ui/NumberLabel';
export function Hero() {
  const [paused, setPaused] = useState(false);
  return <section id="hero" className="hero hero--geometry" data-motion-paused={paused || undefined} aria-labelledby="hero-title">
    <PageContainer className="hero-grid">
      <div className="hero-main"><div className="hero-heading"><NumberLabel number="00">Welcome</NumberLabel><h1 id="hero-title"><span>PANKHURI</span><span>PRODUCT</span><span>DESIGNER</span></h1></div>
      <HeroGeometry />
      <p className="hero-principles">PEOPLE<br />SYSTEMS<br />BETTER EXPERIENCES</p>
      <div className="hero-intro"><p>Designing digital products and systems at the intersection of people, technology, and real-world impact.</p>
        <a className="text-link arrow-link" href="#work">Explore selected work <span aria-hidden="true">↗</span></a>
      </div>
      </div><div className="hero-bottom"><p className="hero-signature">INSPIRED BY<br />WEIMAR MODERNISM</p><button className="hero-motion-pause" type="button" aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? 'Resume hero motion' : 'Pause hero motion'}</button><GridToggle className="hero-grid-toggle" /><a className="hero-scroll arrow-link" href="#work">Scroll <span aria-hidden="true">↓</span></a></div>
    </PageContainer>
  </section>;
}
