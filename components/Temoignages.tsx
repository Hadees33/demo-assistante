import { IconStar, IconQuote } from './icons'

const TESTIS = [
  {
    text: "Cléa a repris toutes nos fiches de formation avant l'audit de surveillance. Zéro non-conformité. Je ne pourrais plus m'en passer.",
    name: 'Sandrine L.',
    role: 'Directrice — Organisme de formation',
    initials: 'SL',
  },
  {
    text: "Entre la facturation et les relances, je perdais mes soirées. Aujourd'hui je récupère 8 heures par semaine pour mes formations.",
    name: 'Karim B.',
    role: 'Formateur indépendant',
    initials: 'KB',
  },
  {
    text: "Le générateur de fiches est bluffant. On décrit la formation, et la structure Qualiopi est déjà là. Un vrai gain de temps.",
    name: 'Émilie R.',
    role: 'Responsable pédagogique — CFA',
    initials: 'ÉR',
  },
]

export default function Temoignages() {
  return (
    <section className="section section-alt" id="temoignages">
      <div className="container">
        <div className="center">
          <span className="label">Elles &amp; ils me font confiance</span>
          <h2 className="heading">Des organismes <em>plus sereins</em>.</h2>
        </div>
        <div className="testi-grid">
          {TESTIS.map((t) => (
            <div className="testi-card" key={t.name}>
              <span className="testi-quote"><IconQuote size={28} /></span>
              <div className="testi-stars">
                {[0, 1, 2, 3, 4].map((i) => <IconStar key={i} size={15} />)}
              </div>
              <p className="testi-text">{t.text}</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
