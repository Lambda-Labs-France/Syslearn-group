import "../../../styles/groupe/about.css"

export const metadata = {
  title: "Qui sommes-nous | Syslearn Group",
  description: "Découvrez l'histoire du groupe Syslearn : la naissance de Syslearn, PointerLab et StackJobs.",
};

export default function QuiSommesNousPage() {
  return (
    <main className="quisommes-page">
      <section className="quisommes-hero">
        <div className="quisommes-hero__inner">
          <h1 className="quisommes-hero__title">Qui sommes-nous</h1>
          <p className="quisommes-hero__subtitle">Notre histoire, notre mission, notre engagement</p>
        </div>
      </section>

      <section className="quisommes-content">
        <div className="quisommes-content__inner">
          <div className="quisommes-block">
            <h2 className="quisommes-block__title">Notre mission</h2>
            <p className="quisommes-block__text">
              Syslearn Group a pour mission d'accompagner les entreprises et les talents dans leur transformation 
              numérique. Nous croyons que la technologie doit être au service de l'humain pour créer un impact positif 
              et durable.
            </p>
          </div>

          <div className="quisommes-block quisommes-block--image">
            <div className="quisommes-block__content">
              <h2 className="quisommes-block__title">Notre histoire</h2>
              <div className="quisommes-timeline">
                <div className="quisommes-timeline-item">
                  <span className="quisommes-timeline-item__year">2019</span>
                  <p>
                    <strong>Naissance de Syslearn</strong> - Du constat qu'un conseil informatique générique ne suffit plus 
                    dès qu'un secteur impose ses propres règles du jeu - cycles longs de l'énergie, exigences de sécurité 
                    de la défense.
                  </p>
                </div>
                <div className="quisommes-timeline-item">
                  <span className="quisommes-timeline-item__year">2021</span>
                   <p>
                    <strong>Naissance de StackJobs</strong> - Pour combler un manque commun aux deux premières entités : 
                    trouver rapidement les bons profils techniques, sans diluer l'exigence dans le volume.
                  </p>
                </div>
                <div className="quisommes-timeline-item">
                  <span className="quisommes-timeline-item__year">2023</span>
                 <p>
                    <strong>Lancement de PointerLab</strong> - Une trajectoire différente : au lieu d'élargir le champ des 
                    compétences, PointerLab a choisi de creuser un seul sillon technique, le C++ et le Qt, jusqu'à devenir 
                    partenaire officiel de Qt Group.
                  </p>
                </div>
                <div className="quisommes-timeline-item">
                  <span className="quisommes-timeline-item__year">2026</span>
                  <p>
                    <strong>Création du groupe Syslearn</strong> - Réunir trois expertises complémentaires sous une même 
                    identité, avec un modèle horizontal et transparent.
                  </p>
                </div>
              </div>
            </div>
            <div className="quisommes-block__image">
              <img src="https://picsum.photos/seed/histoire/600/400" alt="Notre histoire" className="quisommes-block__img" />
            </div>
          </div>

          <div className="quisommes-block">
            <h2 className="quisommes-block__title">Notre philosophie</h2>
            <p className="quisommes-block__text">
              La plupart des ESN grandissent en empilant les strates hiérarchiques et en diluant leurs marges dans l'opacité - 
              le consultant sur le terrain ignore souvent ce que sa mission facture réellement. Nous avons construit l'inverse. 
              PointerLab a été pensée dès le départ avec un modèle à deux niveaux seulement - associés et collaborateurs - 
              où chacun connaît les objectifs et les marges de son travail. Syslearn Group porte cette conviction à l'échelle 
              de ses trois entités : Syslearn, PointerLab et StackJobs.
            </p>
            <p className="quisommes-block__text">
              Trois entités, trois métiers distincts, une même colonne vertébrale. Syslearn conseille et déploie des solutions 
              informatiques dans des secteurs à forte contrainte réglementaire - énergie, défense, industrie. PointerLab construit 
              des logiciels C++ et Qt là où la fiabilité n'est pas négociable - médical, aéronautique, mobilité. StackJobs connecte 
              les meilleurs profils tech aux entreprises qui les recherchent vraiment, grâce à un matching propulsé par l'IA.
            </p>
          </div>

          <div className="quisommes-engagement">
            <h3 className="quisommes-engagement__title">Notre engagement</h3>
            <p className="quisommes-engagement__text">
              Permettre à toutes et tous de trouver la meilleure opportunité, que ce soit pour les entreprises 
              que nous accompagnons ou pour les talents que nous recrutons.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}