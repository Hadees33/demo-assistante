import { Monogram } from './icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo"><span className="footer-mark"><Monogram size={30} /></span> Cléa<span>.</span></div>
            <p className="footer-about">
              Assistante administrative indépendante, spécialisée dans l&apos;accompagnement
              des organismes de formation et la conformité Qualiopi.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <div className="footer-links">
              <a href="/#services">Fiches Qualiopi</a>
              <a href="/#services">Facturation</a>
              <a href="/#services">Gestion administrative</a>
              <a href="/#services">Automatisations IA</a>
            </div>
          </div>
          <div>
            <h4>Navigation</h4>
            <div className="footer-links">
              <a href="/#methode">Méthode</a>
              <a href="/#tarifs">Tarifs</a>
              <a href="/qualiopi">Accompagnement Qualiopi</a>
              <a href="/#contact">Contact</a>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <div className="footer-links">
              <a href="mailto:contact@clea-assistante.fr">contact@clea-assistante.fr</a>
              <a href="tel:+33612345678">06 12 34 56 78</a>
              <span style={{ color: '#9DAAB8', fontSize: 14 }}>Toute la France — à distance</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Cléa — Assistante administrative. Démo non contractuelle.</span>
          <span className="made">Site réalisé par TEYLA Studio 🇫🇷</span>
        </div>
      </div>
    </footer>
  )
}
