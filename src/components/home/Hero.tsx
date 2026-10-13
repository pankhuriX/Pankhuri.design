import { useState } from 'react';
import { GeometricAccent } from '../ui/GeometricAccent';
import { GridToggle } from '../layout/GridOverlay';
import '../../styles/hero.css';
import { PageContainer } from '../layout/PageContainer';
import { NumberLabel } from '../ui/NumberLabel';
export function Hero() {
  const [paused, setPaused] = useState(false);
  return <section id="hero" className="hero hero--geometry" data-motion-paused={paused || undefined} aria-labelledby="hero-title">
    <PageContainer className="hero-grid">
      <NumberLabel number="00">Welcome</NumberLabel>
      <h1 id="hero-title"><span>PANKHURI</span><span>PRODUCT</span><span>DESIGNER</span></h1>
      <div className="hero-art" aria-hidden="true">
        <div className="hero-circle"><GeometricAccent shape="circle" tone="red" className="hero-form hero-plane" /></div>
        <div className="hero-square"><span className="hero-form" /></div>
        <div className="hero-quarter"><span className="hero-form" /></div>
        <div className="hero-yellow"><span className="hero-form" /></div>
        <div className="hero-counterpoint"><GeometricAccent shape="triangle" tone="blue" className="hero-form" /></div>
        <span className="hero-rule hero-rule--vertical" />
        <span className="hero-rule hero-rule--cross" />
        <span className="hero-rule hero-rule--lower" />
      </div>
      <p className="hero-principles">PEOPLE<br />SYSTEMS<br />BETTER EXPERIENCES</p>
      <div className="hero-intro"><p>Designing digital products and systems at the intersection of people, technology, and real-world impact.</p>
        <a className="text-link arrow-link" href="#work">Explore selected work <span aria-hidden="true">↗</span></a>
      </div>
      <div className="hero-bottom"><p className="hero-signature">INSPIRED BY<br />WEIMAR MODERNISM</p><button className="hero-motion-pause" type="button" aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? 'Resume hero motion' : 'Pause hero motion'}</button><GridToggle className="hero-grid-toggle" /><a className="hero-scroll arrow-link" href="#work">Scroll <span aria-hidden="true">↓</span></a></div>
    </PageContainer>
  </section>;
}
