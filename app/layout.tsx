import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

// Police titre : Fraunces (serif chaleureux et professionnel, donne de la personnalité)
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

// Police texte / interface : Inter (lisibilité maximale, idéale pour l'outil Qualiopi)
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cléa — Assistante administrative & support Qualiopi',
  description:
    "Cléa, votre assistante administrative indépendante spécialisée dans l'accompagnement des organismes de formation : gestion administrative, facturation, et création de fiches de formation conformes Qualiopi.",
  keywords:
    'assistante administrative, freelance, Qualiopi, organisme de formation, fiche de formation, gestion administrative, externalisation',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
