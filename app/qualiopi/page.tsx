import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  IconFiche, IconShieldCheck, IconFolderCheck, IconUsers, IconChart, IconRefresh,
  IconClock, IconPin, IconEuro, IconCheck, IconArrowRight,
} from '@/components/icons'

export const metadata: Metadata = {
  title: 'Accompagnement Qualiopi — Cléa, assistante administrative',
  description:
    "Je rédige et mets en conformité vos fiches de formation Qualiopi, et je prépare vos dossiers d'audit. Vous restez concentré sur vos formations.",
}

// Page de PRÉSENTATION (vitrine) — aucun outil interactif : on met en valeur la
// prestation et on pousse au contact. C'est l'assistante qui réalise le travail.
export default function QualiopiPage() {
  return (
    <>
      <Header />

      {/* ── Intro ── */}
      <section className="section qpage-intro">
        <div className="container qf-grid">
          <div>
            <span className="label">Ma spécialité</span>
            <h1 className="heading">Vos fiches de formation<br /><em>conformes Qualiopi</em>.</h1>
            <p className="subheading">
              La fiche de formation est le premier document qu&apos;examine un auditeur.
              Je la rédige <strong>avec vous et pour vous</strong>, en couvrant chaque indicateur
              obligatoire — pour que vous abordiez votre audit l&apos;esprit tranquille.
            </p>
            <div className="hero-actions" style={{ marginTop: 34, marginBottom: 0 }}>
              <a href="/#contact" className="btn btn-primary btn-lg">Demander un devis gratuit <IconArrowRight size={17} /></a>
              <a href="/#services" className="btn btn-ghost btn-lg">Mes autres services</a>
            </div>
          </div>

          {/* Exemple de fiche (visuel — pas un outil) */}
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

      {/* ── Ce que je prends en charge ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="center">
            <span className="label">Mon accompagnement</span>
            <h2 className="heading">Ce dont je vous <em>décharge</em>.</h2>
            <p className="subheading">
              De la rédaction d&apos;une simple fiche à la préparation complète de votre audit de
              certification, je m&apos;adapte à votre organisme.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card featured">
              <div className="service-icon"><IconFiche size={25} /></div>
              <h3>Rédaction des fiches</h3>
              <p>Je rédige vos fiches de formation, claires et homogènes, en couvrant tous les indicateurs : objectifs, prérequis, modalités, évaluation, accessibilité.</p>
              <span className="service-tag">Le cœur du métier</span>
            </div>
            <div className="service-card">
              <div className="service-icon"><IconShieldCheck size={25} /></div>
              <h3>Mise en conformité</h3>
              <p>J&apos;audite vos fiches existantes, je corrige les manques et je les aligne sur les 32 indicateurs du Référentiel National Qualité.</p>
              <span className="service-tag">Avant l&apos;audit</span>
            </div>
            <div className="service-card">
              <div className="service-icon"><IconFolderCheck size={25} /></div>
              <h3>Dossier d&apos;audit</h3>
              <p>Je prépare et j&apos;organise les preuves attendues pour vos audits initial et de surveillance. Vous arrivez serein le jour J.</p>
              <span className="service-tag">Certification</span>
            </div>
            <div className="service-card">
              <div className="service-icon"><IconUsers size={25} /></div>
              <h3>Suivi des apprenants</h3>
              <p>Conventions, convocations, émargements, attestations, questionnaires de satisfaction : tout le cycle administratif d&apos;une session.</p>
              <span className="service-tag">Au quotidien</span>
            </div>
            <div className="service-card">
              <div className="service-icon"><IconChart size={25} /></div>
              <h3>Indicateurs &amp; BPF</h3>
              <p>Je consolide vos taux de satisfaction et de réussite et je prépare votre Bilan Pédagogique et Financier pour vos financeurs.</p>
              <span className="service-tag">Reporting</span>
            </div>
            <div className="service-card">
              <div className="service-icon"><IconRefresh size={25} /></div>
              <h3>Veille réglementaire</h3>
              <p>Le référentiel évolue : je vous alerte sur les nouveautés et je maintiens vos documents à jour, sans que vous ayez à y penser.</p>
              <span className="service-tag">Tranquillité</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Exemple complet de livrable ── */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 46 }}>
            <span className="label">Un exemple de livrable</span>
            <h2 className="heading">La fiche que je vous <em>remets</em>.</h2>
            <p className="subheading">
              Un document propre, à votre charte, directement exploitable et présentable à votre auditeur.
            </p>
          </div>

          <div className="fiche" style={{ maxWidth: 820, margin: '0 auto' }}>
            <div className="fiche-header">
              <div className="fiche-brand">
                Votre Organisme de Formation
                <small>Fiche de formation · Document Qualiopi</small>
              </div>
              <div className="fiche-ref">
                <div><b>Réf.</b> FO-2026-018</div>
                <div><b>N° DA</b> 11 75 00000 75</div>
                <div>Mise à jour : 2026</div>
              </div>
            </div>

            <div className="fiche-title">Excel — Maîtriser les tableaux croisés dynamiques</div>
            <div className="fiche-sub">Attestation de fin de formation + attestation de réussite</div>

            <div className="fiche-pills">
              <span className="fiche-pill"><b><IconClock size={13} /></b> 14 h · 2 jours</span>
              <span className="fiche-pill"><b><IconPin size={13} /></b> Présentiel ou classe virtuelle</span>
              <span className="fiche-pill"><b><IconUsers size={13} /></b> 4 à 8 participants</span>
              <span className="fiche-pill"><b><IconEuro size={13} /></b> 980 € net de taxes</span>
            </div>

            <div className="fiche-block">
              <div className="fiche-block-head"><span className="q">Indic. 1</span><h3>Objectifs pédagogiques</h3></div>
              <ul>
                <li>Construire un tableau croisé dynamique à partir d&apos;une base de données.</li>
                <li>Filtrer, regrouper et trier les données pour en extraire l&apos;essentiel.</li>
                <li>Mettre en forme et actualiser un TCD en toute autonomie.</li>
                <li>Créer un graphique croisé dynamique synthétique.</li>
              </ul>
            </div>

            <div className="fiche-block">
              <div className="fiche-cols">
                <div>
                  <div className="fiche-block-head"><h3>Public visé</h3></div>
                  <p>Tout utilisateur d&apos;Excel amené à analyser des données chiffrées.</p>
                </div>
                <div>
                  <div className="fiche-block-head"><span className="q">Indic. 1</span><h3>Prérequis</h3></div>
                  <p>Maîtriser les bases d&apos;Excel : saisie, mise en forme et formules simples.</p>
                </div>
              </div>
            </div>

            <div className="fiche-block">
              <div className="fiche-cols">
                <div className="fiche-kv">
                  <div className="k">Délais &amp; accès</div>
                  <div className="v">Inscription jusqu&apos;à 7 jours avant le démarrage.</div>
                </div>
                <div className="fiche-kv">
                  <div className="k">Modalités</div>
                  <div className="v">Présentiel ou classe virtuelle</div>
                </div>
                <div className="fiche-kv">
                  <div className="k">Méthodes</div>
                  <div className="v">70 % de pratique, un poste par participant.</div>
                </div>
                <div className="fiche-kv">
                  <div className="k">Évaluation</div>
                  <div className="v">Exercices continus + quiz final de validation.</div>
                </div>
              </div>
            </div>

            <div className="fiche-block">
              <div className="fiche-handicap">
                <span className="q">Indic. 26 — Accessibilité handicap</span>
                <p>Formation accessible aux personnes en situation de handicap. Locaux PMR. Notre référent handicap étudie chaque besoin spécifique pour proposer les adaptations nécessaires.</p>
              </div>
            </div>

            <div className="fiche-foot">
              <div>
                <div><b>Résultats :</b> 4,8 / 5 — 96 % de stagiaires satisfaits (124 avis)</div>
                <div>contact@votre-organisme.fr · 06 12 34 56 78</div>
              </div>
              <div className="sign">
                <div>Référent pédagogique &amp; handicap</div>
                <div>Fiche conforme — indicateurs Qualiopi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA contact ── */}
      <section className="section section-navy qpage-cta">
        <div className="container center">
          <span className="label">Passons à l&apos;action</span>
          <h2 className="heading">Confiez-moi vos fiches,<br /><em>gardez votre énergie pour former</em>.</h2>
          <p className="subheading" style={{ margin: '0 auto 32px' }}>
            Décrivez-moi votre besoin : je vous réponds sous 24&nbsp;h avec un devis clair et sans engagement.
          </p>
          <a href="/#contact" className="btn btn-primary btn-lg">Demander un devis gratuit <IconArrowRight size={17} /></a>
        </div>
      </section>

      <Footer />
    </>
  )
}
