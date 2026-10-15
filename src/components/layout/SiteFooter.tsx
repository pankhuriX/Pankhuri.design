import { GeometricAccent } from '../ui/GeometricAccent';
import '../../styles/footer-geometry.css';
import { PageContainer } from './PageContainer';
export function SiteFooter() {
  return <footer id="contact" className="site-footer" aria-labelledby="contact-title"><PageContainer>
    <div className="footer-grid"><div className="footer-heading"><div className="footer-geometry" aria-hidden="true"><GeometricAccent shape="square" tone="red" /><GeometricAccent shape="circle" tone="blue" /><GeometricAccent shape="triangle" tone="yellow" /></div><h2 id="contact-title">LET’S<br />CONNECT</h2></div><div className="contact-details">
      <p className="body-large">Open to opportunities, collaborations,<br />and interesting conversations.</p>
      <a className="arrow-link" href="mailto:ppankhuri.verma21@gmail.com">ppankhuri.verma21@gmail.com <span aria-hidden="true">↗</span></a>
      <a className="arrow-link" href="https://www.linkedin.com/in/pankhuri-verma-503498185/">LinkedIn <span aria-hidden="true">↗</span></a>
    </div></div>
    <div className="footer-colophon"><p>© 2026 Pankhuri Verma</p><p>Designed and built from scratch — with curiosity and a lot of iterations.</p></div>
  </PageContainer></footer>;
}
