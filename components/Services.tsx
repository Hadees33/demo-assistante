import { IconFiche, IconInvoice, IconCalendar, IconSpark, IconUsers, IconChart } from './icons'
import type { ComponentType } from 'react'

type Service = {
  Icon: ComponentType<{ size?: number }>
  title: string
  text: string
  tag: string
  featured?: boolean
}

const SERVICES: Service[] = [
  {
    Icon: IconFiche,
    title: 'Fiches & dossiers Qualiopi',
    text: "Rédaction de vos fiches de formation conformes aux 32 indicateurs, préparation des dossiers d'audit (initial et de surveillance), veille réglementaire.",
    tag: 'Spécialité',
    featured: true,
  },
  {
    Icon: IconInvoice,
    title: 'Facturation & relances',
    text: 'Émission de vos devis et factures, suivi des paiements, relances clients automatisées, rapprochement et tableaux de bord de trésorerie.',
    tag: 'Le plus demandé',
  },
  {
    Icon: IconCalendar,
    title: 'Gestion administrative',
    text: 'Gestion de votre boîte mail, agenda, convocations et conventions de stage, attestations, émargements et suivi des sessions de formation.',
    tag: 'Au quotidien',
  },
  {
    Icon: IconSpark,
    title: 'Automatisations & IA',
    text: "Mise en place d'outils boostés à l'IA : génération de documents, modèles d'e-mails, classement intelligent. Vous gagnez des heures chaque semaine.",
    tag: 'Nouveauté',
  },
  {
    Icon: IconUsers,
    title: 'Support stagiaires',
    text: "Accueil et suivi des apprenants, gestion des inscriptions, questionnaires de satisfaction, bilans pédagogiques et indicateurs de résultats.",
    tag: 'Relation apprenant',
  },
  {
    Icon: IconChart,
    title: 'Reporting & BPF',
    text: 'Préparation du Bilan Pédagogique et Financier, suivi des indicateurs, statistiques de satisfaction et tableaux de bord pour vos financeurs.',
    tag: 'Conformité',
  },
]

export default function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div className="services-head">
          <div>
            <span className="label">Mes services</span>
            <h2 className="heading">Tout votre <em>administratif</em>,<br />géré pour vous.</h2>
          </div>
          <p className="subheading">
            Un seul interlocuteur pour décharger votre organisme de formation de toute la paperasse —
            et rester serein avant chaque audit.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className={`service-card${s.featured ? ' featured' : ''}`} key={s.title}>
              <div className="service-icon"><s.Icon size={25} /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="service-tag">{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
