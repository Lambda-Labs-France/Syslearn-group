import Link from "next/link";
import "../../../styles/groupe/about.css";

export const metadata = {
  title: "Qui sommes-nous",
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
            <p className="quisommes-block__text text-justify-hyphens">
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
                  <p className="text-justify-hyphens">
                    <strong>Naissance de Syslearn</strong> - Du constat qu'un conseil informatique générique ne suffit plus 
                    dès qu'un secteur impose ses propres règles du jeu : cycles longs de l'énergie, exigences de sécurité 
                    de la défense.
                  </p>
                </div>
                <div className="quisommes-timeline-item">
                  <span className="quisommes-timeline-item__year">2021</span>
                  <p className="text-justify-hyphens">
                    <strong>Naissance de StackJobs</strong> - Pour combler un manque commun aux deux premières entités : 
                    trouver rapidement les bons profils techniques, sans diluer l'exigence dans le volume.
                  </p>
                </div>
                <div className="quisommes-timeline-item">
                  <span className="quisommes-timeline-item__year">2023</span>
                  <p className="text-justify-hyphens">
                    <strong>Lancement de PointerLab</strong> - Une trajectoire différente : au lieu d'élargir le champ des compétences, PointerLab a choisi de creuser un seul sillon technique, l'écosystème C++, jusqu'à devenir partenaire official de Qt Group.
                  </p>
                </div>
                <div className="quisommes-timeline-item">
                  <span className="quisommes-timeline-item__year">2026</span>
                  <p className="text-justify-hyphens">
                    <strong>Création du groupe Syslearn</strong> - Réunir trois expertises complémentaires sous une même 
                    identité, avec un modèle horizontal et transparent.
                  </p>
                </div>
              </div>
            </div>
            <div className="quisommes-block__image">
              <img src="/images/groupe/history2.jpg" alt="Notre histoire" className="quisommes-block__img" />
            </div>
          </div>

          {/* SECTION NOTRE PHILOSOPHIE - NOUVEAU CONTENU */}
          <div className="quisommes-block">
            <h2 className="quisommes-block__title">Notre philosophie</h2>
            
            <p className="quisommes-block__text text-justify-hyphens">
              <strong>Syslearn Group</strong> réunit trois entités qui, ensemble, couvrent tout le parcours : 
              {" "}<Link href="https://www.syslearn.fr" target="_blank" rel="dofollow noopener noreferrer" className="quisommes-block__link">Syslearn</Link>{" "} 
              pour le conseil Data, Ingénierie Tech, IA, IoT et Cybersécurité, 
              {" "}<Link href="https://www.pointerlab.fr" target="_blank" rel="dofollow noopener noreferrer" className="quisommes-block__link">PointerLab</Link>{" "} 
              pour le développement logiciel sur l'écosystème C++ appliqué aux projets les plus exigeants, et 
              {" "}<Link href="https://www.stackjobs.com" target="_blank" rel="dofollow noopener noreferrer" className="quisommes-block__link">StackJobs</Link>{" "} 
              pour connecter les bons profils aux bonnes entreprises.
            </p>
            
            <p className="quisommes-block__text text-justify-hyphens">
              Cette architecture n'est pas un assemblage opportuniste de trois marques : c'est une réponse structurelle 
              à un problème que rencontrent la plupart des entreprises technologiques françaises. Le marché IT français 
              compte aujourd'hui plus de 
              {" "}<Link 
                href="https://www.cobalt-ia.com/fr/blog/radiographie-marche-it-francais" 
                target="_blank" 
                rel="nofollow noopener noreferrer" 
                className="quisommes-block__link"
              >
                48 000 entreprises actives, dont le top 10 concentre moins de 20 % du marché
              </Link>{", "}
              un niveau de fragmentation nettement plus élevé qu'au Royaume-Uni ou aux États-Unis. Résultat concret 
              pour les entreprises clientes : 
              {" "}<Link 
                href="https://www.lemag-numerique.com/workspace/piloter-infogerance-environnement-multi-prestataires" 
                target="_blank" 
                rel="nofollow noopener noreferrer" 
                className="quisommes-block__link"
              >
                sept grandes entreprises françaises sur dix confient désormais leurs services IT à au moins trois 
                fournisseurs différents
              </Link>{", "}
              une dispersion qui complique le pilotage au point que la « confusion sur la responsabilité » figure 
              aujourd'hui en tête des défis cités par 62 % des DSI interrogés.
            </p>
            
            <p className="quisommes-block__text text-justify-hyphens">
              Cette fragmentation a un coût direct : jongler entre plusieurs prestataires pour couvrir le conseil 
              généraliste, l'ingénierie critique et le recrutement spécialisé entraîne à chaque interface une perte 
              d'information, un délai de plus et une responsabilité qui se dilue. Chez nous, ces trois briques restent 
              connectées, sous une même exigence de rigueur et de transparence.
            </p>
          </div>

          <div className="quisommes-engagement">
            <h3 className="quisommes-engagement__title">Notre engagement</h3>
            <p className="quisommes-engagement__text text-justify-hyphens">
              Permettre à toutes et tous de trouver la meilleure opportunité, que ce soit pour les entreprises 
              que nous accompagnons ou pour les talents que nous recrutons.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}