import { PageContainer } from './PageContainer';
import { FooterGeometry } from './FooterGeometry';
import '../../styles/footer.css';

export function SiteFooter() {
  return <footer id="contact" className="site-footer" aria-labelledby="contact-title"><PageContainer>
    <div className="footer-grid">
      <div className="footer-signature"><FooterGeometry /><h2 id="contact-title">LET’S<br />CONNECT</h2></div>
      <div className="contact-details">
        <p className="body-large">Open to opportunities, collaborations,<br />and interesting conversations.</p>
        <a className="arrow-link" href="mailto:ppankhuri.verma21@gmail.com">EMAIL <span aria-hidden="true">↗</span></a>
        <a className="arrow-link" href="https://www.linkedin.com/in/pankhuri-verma-503498185/">LINKEDIN <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <div className="footer-colophon"><p className="footer-copyright">© 2026 Pankhuri Verma</p><p className="footer-credit">Designed and built from scratch — with curiosity and a lot of iterations.</p></div>
  </PageContainer></footer>;
}
