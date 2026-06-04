const STATS = [
  { num: '320', accent: '+', label: 'Fiches de formation rédigées' },
  { num: '100', accent: '%', label: 'Audits Qualiopi réussis' },
  { num: '40', accent: 'h', label: 'Gagnées par mois en moyenne' },
  { num: '24', accent: 'h', label: 'Délai de réponse maximum' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-inner">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-num">
                {s.num}<span>{s.accent}</span>
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
