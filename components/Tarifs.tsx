const PLANS = [
  {
    name: 'Ponctuel',
    desc: 'Pour un besoin précis ou un coup de bourre.',
    price: '45',
    unit: '€ / heure',
    feats: [
      'Sans engagement',
      'Création de fiches Qualiopi à l\'unité',
      'Facturation & relances ponctuelles',
      'Réponse sous 24 h',
    ],
    cta: 'Demander un devis',
  },
  {
    name: 'Sérénité',
    desc: 'Le forfait mensuel le plus choisi par les organismes.',
    price: '690',
    unit: '€ / mois',
    badge: 'Recommandé',
    pop: true,
    feats: [
      '20 h d\'assistanat / mois',
      'Fiches & dossiers Qualiopi illimités',
      'Facturation + relances automatisées',
      'Tableau de bord partagé',
      'Préparation des audits',
    ],
    cta: 'Choisir Sérénité',
  },
  {
    name: 'Organisme',
    desc: 'Accompagnement complet pour structures actives.',
    price: 'Sur devis',
    unit: '',
    feats: [
      'Volume horaire sur-mesure',
      'Support stagiaires & BPF',
      'Veille réglementaire dédiée',
      'Automatisations IA personnalisées',
      'Interlocutrice unique prioritaire',
    ],
    cta: 'Construire mon offre',
  },
]

export default function Tarifs() {
  return (
    <section className="section" id="tarifs">
      <div className="container">
        <div className="center">
          <span className="label">Tarifs</span>
          <h2 className="heading">Des formules <em>claires</em>, sans surprise.</h2>
          <p className="subheading">
            Vous ne payez que ce dont vous avez besoin. Résiliable à tout moment, devis gratuit sous 24 h.
          </p>
        </div>

        <div className="tarifs-grid">
          {PLANS.map((p) => (
            <div className={`tarif-card${p.pop ? ' pop' : ''}`} key={p.name}>
              {p.badge && <span className="tarif-badge">{p.badge}</span>}
              <div className="tarif-name">{p.name}</div>
              <p className="tarif-desc">{p.desc}</p>
              <div className="tarif-price">
                {p.price}{p.unit && <span> {p.unit}</span>}
              </div>
              <ul className="tarif-feats">
                {p.feats.map((f) => (
                  <li key={f}><span className="ic">✓</span> {f}</li>
                ))}
              </ul>
              <a href="/#contact" className={`btn ${p.pop ? 'btn-white' : 'btn-dark'}`}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
