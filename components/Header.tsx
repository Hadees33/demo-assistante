'use client'
import { useState, useEffect } from 'react'
import { Monogram } from './icons'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/#services', label: 'Services' },
    { href: '/#methode', label: 'Méthode' },
    { href: '/#qualiopi', label: 'Qualiopi' },
    { href: '/#tarifs', label: 'Tarifs' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">
          <a href="/" className="header-logo">
            <span className="header-mark"><Monogram size={30} /></span>
            <span className="header-logo-text">
              <span className="header-word">Cléa<span className="dot">.</span></span>
              <span className="header-logo-sub">Assistanat &amp; Qualiopi</span>
            </span>
          </a>
          <nav className="header-nav">
            {links.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
            <a href="/#contact" className="btn btn-primary header-cta">Demander un devis</a>
          </nav>
          <button className="header-mobile-btn" onClick={() => setMenuOpen(true)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Fermer">✕</button>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <a href="/#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Demander un devis</a>
      </div>
    </>
  )
}
