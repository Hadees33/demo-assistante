import type { SVGProps, ReactNode } from 'react'

// ── Jeu d'icônes vectorielles maison (trait fin, cohérent) ──────────────
// Volontairement dessinées à la main (pas d'emoji, pas de librairie « par défaut »)
// pour donner un rendu soigné et unique, loin du look « template IA ».

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function Svg({ size = 22, children, strokeWidth = 1.6, ...p }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...p}
    >
      {children}
    </svg>
  )
}

export const IconFiche = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 2.9h7l5.25 5.3v12.9H6z" />
    <path d="M13 2.9V8.2h5.25" />
    <path d="M8.7 12.5h6.6M8.7 15.4h6.6M8.7 18.2h4" />
  </Svg>
)

export const IconInvoice = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 2.9h12v18.2l-2-1.25-2 1.25-2-1.25-2 1.25-2-1.25-2 1.25z" />
    <path d="M9 8.2h6M9 11.4h6M9 14.6h3.5" />
  </Svg>
)

export const IconCalendar = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.7" y="5" width="16.6" height="15.3" rx="2.6" />
    <path d="M3.7 9.4h16.6M8 3.1v3.6M16 3.1v3.6" />
    <path d="M7.6 13.4h2.2M11 13.4h2.2M14.4 13.4h2M7.6 16.6h2.2M11 16.6h2.2" />
  </Svg>
)

export const IconSpark = (p: IconProps) => (
  <Svg {...p}>
    <path d="M11.5 3.2c.45 4 1.95 5.5 5.95 5.95-4 .45-5.5 1.95-5.95 5.95-.45-4-1.95-5.5-5.95-5.95 4-.45 5.5-1.95 5.95-5.95z" />
    <path d="M18 14.5c.2 1.7.85 2.35 2.55 2.55-1.7.2-2.35.85-2.55 2.55-.2-1.7-.85-2.35-2.55-2.55 1.7-.2 2.35-.85 2.55-2.55z" />
  </Svg>
)

export const IconUsers = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="9" cy="8" r="3.3" />
    <path d="M3.4 19.6c0-3.05 2.5-5.1 5.6-5.1s5.6 2.05 5.6 5.1" />
    <path d="M16.1 5.3a3.1 3.1 0 0 1 0 5.7M17 14.7c2.2.55 3.85 2.45 3.85 4.9" />
  </Svg>
)

export const IconChart = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 3.6v16.8h16.4" />
    <path d="M7.5 16.5v-3M11.3 16.5v-6.5M15.1 16.5v-4.5M18.9 16.5V8" />
  </Svg>
)

export const IconShieldCheck = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 2.8 19 5.5v5.6c0 4.7-3 7.9-7 9.7-4-1.8-7-5-7-9.7V5.5z" />
    <path d="m8.8 11.8 2.2 2.2 4.2-4.6" />
  </Svg>
)

export const IconRefresh = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20.2 11.4a8.2 8.2 0 1 0-.5 4" />
    <path d="M20.4 19.5v-4.4h-4.4" />
  </Svg>
)

export const IconFolderCheck = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.8 6.6a1.8 1.8 0 0 1 1.8-1.8h3.3l1.85 2.15h7.6A1.8 1.8 0 0 1 20.15 8.8v8.95a1.8 1.8 0 0 1-1.8 1.8H5.6a1.8 1.8 0 0 1-1.8-1.8z" />
    <path d="m9.2 13.5 1.9 1.9 3.5-3.7" />
  </Svg>
)

export const IconClock = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.4" />
    <path d="M12 7.4V12l3 1.9" />
  </Svg>
)

export const IconPin = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21.6c4.1-4.3 6.6-7.6 6.6-10.9A6.6 6.6 0 0 0 5.4 10.7c0 3.3 2.5 6.6 6.6 10.9z" />
    <circle cx="12" cy="10.7" r="2.45" />
  </Svg>
)

export const IconEuro = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.4" />
    <path d="M15.4 8.5a4.3 4.3 0 0 0-7 3.5 4.3 4.3 0 0 0 7 3.5M7 11.1h5.2M7 13.1h4.4" />
  </Svg>
)

export const IconCheck = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.5 12.6 9.5 17.5 19.7 6.7" />
  </Svg>
)

export const IconCheckCircle = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.4" />
    <path d="m8.4 12.2 2.5 2.5 4.6-5.2" />
  </Svg>
)

export const IconBolt = (p: IconProps) => (
  <Svg {...p}>
    <path d="M13 2.9 5.2 13.4h6l-1 7.7L18.8 10.6h-6z" />
  </Svg>
)

export const IconLock = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4.8" y="10.4" width="14.4" height="9.9" rx="2.2" />
    <path d="M8 10.4V8a4 4 0 0 1 8 0v2.4" />
    <path d="M12 14.2v2.3" />
  </Svg>
)

export const IconMail = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.2" y="5.4" width="17.6" height="13.2" rx="2.6" />
    <path d="m4.4 7.6 7.6 5.6 7.6-5.6" />
  </Svg>
)

export const IconPhone = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 3.6 9.6 4.2 11 8.3 8.9 9.7a11.2 11.2 0 0 0 5.4 5.4l1.4-2.1 4.1 1.4.6 2.6c0 1.35-1.1 2.45-2.45 2.45A14.6 14.6 0 0 1 3.55 6.95C3.55 5.6 4.65 4.5 6 4.5z" />
  </Svg>
)

export const IconArrowRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.6 12h14M12.8 6.4 18.6 12l-5.8 5.6" />
  </Svg>
)

export const IconQuote = (p: IconProps) => (
  <Svg {...p} fill="currentColor" stroke="none">
    <path d="M9.4 6.4C6.3 7.6 4.7 10.2 4.7 13.8V18h5.3v-5.3H7.3c.05-1.9.95-3.1 2.95-3.85zM19.3 6.4c-3.1 1.2-4.7 3.8-4.7 7.4V18h5.3v-5.3h-2.7c.05-1.9.95-3.1 2.95-3.85z" />
  </Svg>
)

export const IconStar = (p: IconProps) => (
  <Svg {...p} fill="currentColor" stroke="none">
    <path d="M12 3.1l2.45 5.1 5.6.72-4.12 3.86 1.05 5.56L12 17.7l-5.03 2.65 1.05-5.56-4.12-3.86 5.6-.72z" />
  </Svg>
)

// ── Monogramme « C. » — la marque dessinée à la main ────────────────
export const Monogram = ({ size = 30, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 34 34" fill="none" aria-hidden="true" {...p}>
    <path
      d="M24 10.2a9.2 9.2 0 1 0 0 13.6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="24.6" cy="17" r="2.15" fill="currentColor" />
  </svg>
)
