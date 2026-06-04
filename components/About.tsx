import { IconArrowRight, IconCheck } from './icons'

// Portrait (Unsplash) — remplaçable par la vraie photo de la prospecte
const PORTRAIT = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=760&q=80&auto=format&fit=crop'

export default function About() {
  return (
    <section className="section about" id="apropos">
      <div className="container about-grid">
        {/* Portrait */}
        <div className="about-photo">
          <div className="about-photo-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PORTRAIT} alt="Portrait de Cléa Moreau, assistante administrative indépendante" loading="lazy" />
          </div>
          <div className="about-badge">
            <span className="about-badge-num">8 ans</span>
            <span className="about-badge-label">au service des organismes de formation</span>
          </div>
        </div>

        {/* Histoire */}
        <div className="about-text">
          <span className="label">Qui suis-je</span>
          <h2 className="heading">Enchantée, moi c&apos;est <em>Cléa</em>.</h2>
          <p>
            Pendant huit ans, j&apos;ai été l&apos;assistante administrative d&apos;un organisme de formation.
            J&apos;ai vu des formateurs passionnés s&apos;épuiser sur la paperasse, et l&apos;angoisse monter
            à l&apos;approche de chaque audit Qualiopi. Je me suis dit qu&apos;il existait forcément une
            façon plus sereine de faire les choses.
          </p>
          <p>
            Alors je me suis lancée à mon compte, pour mettre cette expérience au service des petits
            organismes et des formateurs indépendants. Mon truc à moi : transformer le casse-tête
            administratif en quelque chose de simple et carré — pour que vous puissiez vous concentrer
            sur ce que vous faites de mieux, <strong>transmettre</strong>.
          </p>
          <ul className="about-points">
            <li><span className="ic"><IconCheck size={14} /></span> Ancienne assistante en organisme de formation</li>
            <li><span className="ic"><IconCheck size={14} /></span> Spécialiste du Référentiel National Qualité (Qualiopi)</li>
            <li><span className="ic"><IconCheck size={14} /></span> Discrète, rigoureuse — et toujours joignable</li>
          </ul>
          <div className="about-foot">
            <div className="about-sign">
              <span className="about-sign-name">Cléa Moreau</span>
              <span className="about-sign-role">Votre futur bras droit administratif</span>
            </div>
            <a href="/#contact" className="btn btn-dark">Faisons connaissance <IconArrowRight size={16} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
