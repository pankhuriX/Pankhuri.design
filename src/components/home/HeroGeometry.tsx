/** One local artboard: all shapes scale together and remain decorative. */
export function HeroGeometry() {
  return <div className="hero-geometry-wrap" aria-hidden="true">
    <div className="hero-geometry">
      <div className="hero-shape hero-circle" />
      <div className="hero-shape hero-blue-rect" />
      <div className="hero-shape hero-black-quarter" />
      <div className="hero-shape hero-yellow-bar" />
      <span className="hero-line hero-line-v1" />
      <span className="hero-line hero-line-v2" />
    </div>
  </div>;
}
