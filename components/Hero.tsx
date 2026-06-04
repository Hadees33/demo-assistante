import { IconShieldCheck, IconCheck, IconBolt, IconLock, IconFiche, IconStar, IconArrowRight } from './icons'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-dots" />
      <div className="container hero-grid">
        {/* Texte */}
        <div>
          <span className="hero-pill">
            <b><IconShieldCheck size={13} /> Spécialiste Qualiopi</b>
            Assistante administrative indépendante
          </span>
          <h1>
            Votre bras droit<br />administratif, <em>enfin serein</em>.
          </h1>
          <p className="hero-lead">
            Je libère les organismes de formation et indépendants de leur charge administrative —
            gestion, facturation, et surtout des <strong>fiches de formation 100&nbsp;% conformes Qualiopi</strong>.
          </p>
          <div className="hero-actions">
            <a href="/#contact" className="btn btn-primary btn-lg">Demander un devis gratuit <IconArrowRight size={17} /></a>
            <a href="/#services" className="btn btn-ghost btn-lg">Découvrir mes services</a>
          </div>
          <div className="hero-trust">
            <div className="hero-trust-item">
              <span className="ic"><IconCheck size={15} /></span> Sans engagement
            </div>
            <div className="hero-trust-item">
              <span className="ic"><IconBolt size={15} /></span> Réponse sous 24&nbsp;h
            </div>
            <div className="hero-trust-item">
              <span className="ic"><IconLock size={15} /></span> Confidentialité garantie
            </div>
          </div>
        </div>

        {/* Visuel : carte « plan de travail » */}
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-top">
              <div className="hero-card-avatar">CM</div>
              <div>
                <div className="hero-card-name">Cléa Moreau</div>
                <div className="hero-card-role">Assistante administrative</div>
              </div>
              <span className="hero-card-badge"><span className="pulse-dot" /> Disponible</span>
            </div>
            <div className="hero-task">
              <span className="hero-task-check"><IconCheck size={13} /></span>
              <span className="hero-task-label">Fiche de formation — « Excel niveau 1 »</span>
              <span className="hero-task-meta">Qualiopi</span>
            </div>
            <div className="hero-task">
              <span className="hero-task-check"><IconCheck size={13} /></span>
              <span className="hero-task-label">Relances factures clients</span>
              <span className="hero-task-meta">12 envoyées</span>
            </div>
            <div className="hero-task">
              <span className="hero-task-check"><IconCheck size={13} /></span>
              <span className="hero-task-label">Dossier audit de surveillance</span>
              <span className="hero-task-meta">Prêt</span>
            </div>
            <div className="hero-task">
              <span className="hero-task-check"><IconCheck size={13} /></span>
              <span className="hero-task-label">Convocations stagiaires — session 34</span>
              <span className="hero-task-meta">Envoyées</span>
            </div>
          </div>
          <div className="hero-float hero-float-1">
            <span className="ic"><IconFiche size={18} /></span>
            <div>
              <div className="big">+320</div>
              <div className="small">fiches Qualiopi rédigées</div>
            </div>
          </div>
          <div className="hero-float hero-float-2">
            <span className="ic gold"><IconStar size={17} /></span>
            <div>
              <div className="big">100%</div>
              <div className="small">audits réussis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
