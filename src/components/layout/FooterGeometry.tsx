import { useEffect, useRef, useState } from 'react';

export function FooterGeometry() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`footer-geometry${visible ? ' footer-geometry--visible' : ''}`} aria-hidden="true">
    <span className="footer-square" /><span className="footer-circle" /><span className="footer-triangle" />
  </div>;
}
