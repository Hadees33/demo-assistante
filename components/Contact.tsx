'use client'
import { useState } from 'react'
import { IconMail, IconPhone, IconPin, IconCheckCircle, IconArrowRight } from './icons'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section className="section section-alt" id="contact">
      <div className="container contact-grid">
        <div>
          <span className="label">Parlons-en</span>
          <h2 className="heading">Et si vous déléguiez<br />enfin <em>la paperasse</em>&nbsp;?</h2>
          <p className="subheading">
            Décrivez-moi votre situation en deux lignes. Je vous réponds sous 24&nbsp;h avec un
            premier plan d&apos;action et un devis clair — gratuit et sans engagement.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="ic"><IconMail size={19} /></span>
              <div>
                <div className="k">Email</div>
                <div className="v">contact@clea-assistante.fr</div>
              </div>
            </div>
            <div className="contact-item">
              <span className="ic"><IconPhone size={19} /></span>
              <div>
                <div className="k">Téléphone</div>
                <div className="v">06 12 34 56 78</div>
              </div>
            </div>
            <div className="contact-item">
              <span className="ic"><IconPin size={19} /></span>
              <div>
                <div className="k">Zone d&apos;intervention</div>
                <div className="v">Toute la France — 100&nbsp;% à distance</div>
              </div>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 10px' }}>
              <div style={{ color: 'var(--teal)', marginBottom: 14, display: 'flex', justifyContent: 'center' }}>
                <IconCheckCircle size={52} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, color: 'var(--ink)', marginBottom: 8 }}>
                Message bien reçu&nbsp;!
              </h3>
              <p style={{ color: 'var(--text-mid)', fontSize: 15 }}>
                Merci, je reviens vers vous sous 24&nbsp;h. (Démo&nbsp;: aucun message n&apos;a réellement été envoyé.)
              </p>
            </div>
          ) : (
            <>
              <div className="field-row">
                <div className="field">
                  <label>Prénom &amp; nom</label>
                  <input type="text" placeholder="Camille Durand" required />
                </div>
                <div className="field">
                  <label>Votre organisme</label>
                  <input type="text" placeholder="Nom de l'organisme" />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label>Email</label>
                  <input type="email" placeholder="vous@exemple.fr" required />
                </div>
                <div className="field">
                  <label>Besoin principal</label>
                  <select defaultValue="">
                    <option value="" disabled>Sélectionnez…</option>
                    <option>Fiches / dossiers Qualiopi</option>
                    <option>Facturation &amp; relances</option>
                    <option>Gestion administrative</option>
                    <option>Forfait mensuel complet</option>
                    <option>Autre</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label>Votre message</label>
                <textarea rows={4} placeholder="Décrivez votre besoin en quelques mots…" />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                Envoyer ma demande <IconArrowRight size={17} />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
