const STEPS = [
  {
    n: '01',
    title: 'Échange découverte',
    text: "On fait le point sur votre organisme, vos formations et vos points de blocage administratifs. 30 minutes, gratuit et sans engagement.",
  },
  {
    n: '02',
    title: 'Plan d\'action sur-mesure',
    text: "Je vous propose un périmètre clair : ce que je prends en charge, le rythme, et un devis transparent adapté à votre volume.",
  },
  {
    n: '03',
    title: 'Mise en place',
    text: "Je récupère vos accès et vos modèles, je structure vos process et je crée vos premiers documents conformes Qualiopi.",
  },
  {
    n: '04',
    title: 'Suivi & sérénité',
    text: "Vous suivez tout via un tableau de bord partagé. Vous vous concentrez sur vos formations, je gère le reste.",
  },
]

export default function Process() {
  return (
    <section className="section" id="methode">
      <div className="container">
        <div className="center">
          <span className="label">Ma méthode</span>
          <h2 className="heading">Simple, cadré, <em>rassurant</em>.</h2>
          <p className="subheading">
            Quatre étapes pour déléguer l&apos;esprit tranquille, dès la première semaine.
          </p>
        </div>

        <div className="process-grid">
          {STEPS.map((s) => (
            <div className="process-step" key={s.n}>
              <div className="process-line" />
              <div className="process-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
