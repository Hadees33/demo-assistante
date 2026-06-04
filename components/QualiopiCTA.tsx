import { IconCheck, IconArrowRight } from './icons'

export default function QualiopiCTA() {
  return (
    <section className="section section-navy qualiopi-feature" id="qualiopi">
      <div className="qf-glow" />
      <div className="container qf-grid">
        {/* Texte */}
        <div>
          <span className="label">Ma spécialité</span>
          <h2 className="heading">Vos fiches de formation,<br /><em>rédigées pour vous</em>.</h2>
          <p className="subheading">
            La fiche de formation est le premier document qu&apos;examine un auditeur Qualiopi.
            Je la rédige avec vous, champ par champ, sans rien oublier des indicateurs obligatoires —
            vous restez concentré sur vos formations.
          </p>
          <ul className="qf-list">
            <li>
              <span className="ic"><IconCheck size={14} /></span>
              <span><b>Tous les indicateurs couverts</b> — objectifs, prérequis, modalités, évaluation, accessibilité handicap.</span>
            </li>
            <li>
              <span className="ic"><IconCheck size={14} /></span>
              <span><b>À votre charte</b> — des fiches claires et homogènes pour tout votre catalogue.</span>
            </li>
            <li>
              <span className="ic"><IconCheck size={14} /></span>
              <span><b>Prêtes pour l&apos;audit</b> — relues, conformes et livrées en PDF.</span>
            </li>
          </ul>
          <a href="/qualiopi" className="btn btn-primary btn-lg">Découvrir mon accompagnement <IconArrowRight size={17} /></a>
        </div>

        {/* Exemple de fiche (visuel de mise en valeur, pas un outil) */}
        <div className="qf-mock">
          <span className="qf-mock-tag">EXEMPLE DE FICHE</span>
          <div className="qf-mock-head">
            <h4>Excel — Maîtriser les tableaux croisés dynamiques</h4>
            <span className="ref">FO-2026-018</span>
          </div>
          <div className="qf-mock-q">Indicateur 1 — Objectifs</div>
          <div className="qf-mock-row"><span className="k">Objectifs</span><span className="v">Construire, filtrer et mettre en forme un TCD en autonomie.</span></div>
          <div className="qf-mock-row"><span className="k">Public visé</span><span className="v">Tout utilisateur d&apos;Excel souhaitant analyser des données.</span></div>
          <div className="qf-mock-row"><span className="k">Prérequis</span><span className="v">Connaître les bases d&apos;Excel (saisie, formules simples).</span></div>
          <div className="qf-mock-row"><span className="k">Durée</span><span className="v">14 h — 2 jours</span></div>
          <div className="qf-mock-row"><span className="k">Tarif</span><span className="v">980 € net de taxes / participant</span></div>
          <div className="qf-mock-foot">
            <span className="qf-mock-chip"><IconCheck size={11} /> Accessibilité handicap</span>
            <span className="qf-mock-chip"><IconCheck size={11} /> Modalités d&apos;évaluation</span>
            <span className="qf-mock-chip"><IconCheck size={11} /> Délais d&apos;accès</span>
          </div>
        </div>
      </div>
    </section>
  )
}
