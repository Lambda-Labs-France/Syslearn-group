import Link from "next/link";
import { 
  Code2, 
  Box, 
  Cpu, 
  Eye, 
  Calculator,
  Activity,
  Plane,
  Car,
  ExternalLink,
  Users,
  Target,
  Shield,
  Zap
} from "lucide-react";
import "../../../styles/nos-entites/pointerlab.css";

export const metadata = {
  title: "PointerLab",
  description: "PointerLab est une ESN spécialisée dans l'écosystème C++ pour vos projets logiciels critiques. +8000 profils C/C++ qualifiés. Découvrez notre expertise.",
};

export default function PointerLabPage() {
  const expertises = [
    { icon: Code2, text: "Développement C++ (C++98 à C++20) et framework Qt pour applications et IHM critiques" },
    { icon: Box, text: "3D, réalité virtuelle et rendu OpenGL pour la simulation temps réel" },
    { icon: Cpu, text: "Logiciel embarqué et systèmes temps réel pour environnements critiques" },
    { icon: Eye, text: "Vision par ordinateur (OpenCV) et traitement d'image médicale" },
    { icon: Calculator, text: "Logiciel scientifique et calcul haute performance" },
    { icon: Shield, text: "Sécurité logicielle et développement certifié pour secteurs réglementés" },
  ];

  const secteurs = [
    { icon: Activity, name: "Médical", desc: "Imagerie, dispositifs cliniques et simulation" },
    { icon: Plane, name: "Aéronautique", desc: "Systèmes embarqués, avionique et simulation de vol" },
    { icon: Car, name: "Automobile", desc: "Systèmes d'info-divertissement, automatisation et IoT" },
  ];

  const raisons = [
    {
      icon: Users,
      title: "Vivier de +8 000 profils C++",
      desc: "Un vivier qualifié, identifié et validé en continu par une combinaison d'IA et d'expertise humaine."
    },
    {
      icon: Target,
      title: "Expertise rare et recherchée",
      desc: "Des compétences C++ senior sur systèmes embarqués et temps réel, longues à former et très disputées sur le marché."
    },
    {
      icon: Zap,
      title: "Fiabilité et performance",
      desc: "Une maîtrise du temps réel et des architectures critiques où la sécurité des personnes est en jeu."
    }
  ];

  const pointerlabUrl = "https://www.pointerlab.fr?utm_source=syslearn-groupe&utm_medium=website&utm_campaign=entite_pointerlab";

  return (
    <main className="pointerlab-page">
      <section className="pointerlab-hero">
        <div className="pointerlab-hero__inner">
          <div className="pointerlab-hero__content">
            <div>
              <span className="pointerlab-hero__badge">PointerLab</span>
              <h1 className="pointerlab-hero__title">
                PointerLab : l'ESN spécialisée dans l'écosystème C++ pour vos projets logiciels critiques
              </h1>
            </div>
            <Link 
              href={pointerlabUrl}
              target="_blank" 
              rel="dofollow noopener noreferrer"
              className="pointerlab-hero__btn"
            >
              Visiter le site de PointerLab
              <ExternalLink size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pointerlab-section">
        <div className="pointerlab-section__inner">
          <div className="pointerlab-section__grid">
            <div className="pointerlab-section__text">
              <h2 className="pointerlab-section__title">Une expertise construite sur la rareté des compétences</h2>
              <p>
                Simulation, imagerie temps réel, systèmes de communication critiques : ce sont des projets où l'à-peu-près 
                n'a pas sa place.
              </p>
              <p>
                PointerLab est une <strong>ESN spécialisée dans l'écosystème C++</strong>, un choix stratégique dans les 
                environnements où la fiabilité, la performance et la maîtrise du temps réel priment sur tout le reste : 
                médical, aéronautique, automobile, industrie lourde. Dans ces secteurs, un logiciel défaillant n'est pas 
                une simple gêne : il peut mettre en jeu la sécurité des personnes ou la continuité d'un système industriel 
                entier. C'est précisément pour répondre à ces exigences que l'écosystème C++ reste, depuis des décennies, 
                la référence des architectures logicielles critiques.
              </p>
              <p>
                Recruter un profil C++ senior capable d'intervenir sur des systèmes embarqués ou temps réel est un défi 
                que connaissent bien les directions techniques : ces compétences sont rares, longues à former et très 
                disputées sur le marché. PointerLab a construit son modèle autour de cette contrainte.
              </p>
            </div>
            <div className="pointerlab-section__image">
              <img
                src="https://picsum.photos/seed/pointerlab-presentation/600/400"
                alt="PointerLab - ESN spécialisée C++"
                className="pointerlab-section__img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pointerlab-section pointerlab-section--alt">
        <div className="pointerlab-section__inner">
          <div className="pointerlab-section__grid pointerlab-section__grid--reverse">
            <div className="pointerlab-section__text">
              <h2 className="pointerlab-section__title">Un vivier de plus de 8 000 profils C++ qualifiés</h2>
              <p>
                Reconnue par les acteurs majeurs de cet écosystème, PointerLab s'appuie sur un vivier de plus de 
                8 000 profils C++ qualifiés, identifiés et validés en continu par une combinaison d'intelligence 
                artificielle et d'expertise humaine.
              </p>
              <p>
                Cette double approche permet de croiser la rigueur d'une évaluation technique automatisée avec le 
                jugement d'experts du domaine, pour ne présenter que des profils réellement opérationnels sur des 
                projets à forte criticité.
              </p>
              <p>
                Un accompagnement pensé pour les projets à forte criticité. Au-delà du sourcing, PointerLab accompagne 
                ses clients dans la structuration de leurs équipes techniques, de la définition du besoin jusqu'à 
                l'intégration du consultant. Une approche qui s'inscrit dans les tendances observées par des cabinets 
                comme le Syntec Numérique sur la tension du marché des compétences logicielles critiques en France.
              </p>
            </div>
            <div className="pointerlab-section__image">
              <img
                src="https://picsum.photos/seed/pointerlab-vivier/600/400"
                alt="Vivier de profils C++ PointerLab"
                className="pointerlab-section__img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pointerlab-expertises">
        <div className="pointerlab-expertises__inner">
          <h2 className="pointerlab-expertises__title">Nos expertises C++</h2>
          <div className="pointerlab-expertises__grid">
            {expertises.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="pointerlab-expertise-card">
                  <div className="pointerlab-expertise-card__icon">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <p className="pointerlab-expertise-card__text">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pointerlab-raisons">
        <div className="pointerlab-raisons__inner">
          <h2 className="pointerlab-raisons__title">Pourquoi choisir PointerLab</h2>
          <div className="pointerlab-raisons__grid">
            {raisons.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="pointerlab-raison-card">
                  <div className="pointerlab-raison-card__icon">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="pointerlab-raison-card__title">{item.title}</h3>
                  <p className="pointerlab-raison-card__desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pointerlab-secteurs-section">
        <div className="pointerlab-secteurs-section__inner">
          <h2 className="pointerlab-secteurs-section__title">Nos secteurs d'intervention</h2>
          <div className="pointerlab-secteurs-section__grid">
            {secteurs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="pointerlab-secteur-card">
                  <div className="pointerlab-secteur-card__icon">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="pointerlab-secteur-card__name">{item.name}</h3>
                  <p className="pointerlab-secteur-card__desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pointerlab-faq">
        <div className="pointerlab-faq__inner">
          <h2 className="pointerlab-faq__title">Questions fréquentes</h2>
          <div className="pointerlab-faq__list">
            <div className="pointerlab-faq-item">
              <h3 className="pointerlab-faq-item__question">
                Pourquoi choisir une ESN spécialisée plutôt qu'une ESN généraliste pour un projet C++ ?
              </h3>
              <p className="pointerlab-faq-item__answer">
                Sur des stacks aussi spécifiques que le C++, la profondeur d'expertise fait la différence : 
                une ESN généraliste doit souvent sous-traiter ou monter en compétence sur le projet, quand une ESN 
                spécialisée comme PointerLab dispose déjà du vivier et du savoir-faire nécessaires.
              </p>
            </div>
            <div className="pointerlab-faq-item">
              <h3 className="pointerlab-faq-item__question">PointerLab recrute-t-elle en CDI ou en mission ?</h3>
              <p className="pointerlab-faq-item__answer">
                Les deux formats existent : mise à disposition de consultants salariés ou freelances pour un pic de charge, 
                et recrutement direct en CDI pour intégrer durablement un profil C++.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}