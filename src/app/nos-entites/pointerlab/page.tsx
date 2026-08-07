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
  ExternalLink
} from "lucide-react";
import "../../../styles/nos-entites/pointerlab.css";

export const metadata = {
  title: "PointerLab",
  description: "PointerLab, néo-ESN spécialisée en développement C++ et Qt pour la simulation 3D, le médical et l'aéronautique. Vivier de plus de 8 000 profils qualifiés.",
};

export default function PointerLabPage() {
  const expertises = [
    { icon: Code2, text: "Développement logiciel C++ (C++98 à C++20) et framework Qt, applications et IHM" },
    { icon: Box, text: "3D, réalité virtuelle et rendu OpenGL pour la simulation" },
    { icon: Cpu, text: "Logiciel embarqué pour systèmes critiques temps réel" },
    { icon: Eye, text: "Vision par ordinateur (OpenCV) et traitement d'image" },
    { icon: Calculator, text: "Logiciel scientifique et calcul haute performance" },
  ];

  const secteurs = [
    { icon: Activity, name: "Médical", desc: "imagerie et dispositifs cliniques" },
    { icon: Plane, name: "Aéronautique", desc: "simulation, systèmes embarqués avioniques" },
    { icon: Car, name: "Industrie et automobile", desc: "automatisation, info-divertissement embarqué, IoT" },
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
                PointerLab : l'ESN spécialisée C++ et Qt pour vos projets logiciels critiques
              </h1>
            </div>
            <Link 
              href={pointerlabUrl}
              target="_blank" 
              rel=" dofollow noopener noreferrer"
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
              <h2 className="pointerlab-section__title">Présentation</h2>
              <p>
                Un logiciel de simulation de conduite, une interface d'imagerie médicale 3D en temps réel, 
                un système de communication avionique nouvelle génération : ce sont des projets où l'à-peu-près 
                n'a pas sa place.
              </p>
              <p>
                PointerLab s'est spécialisée sur le C++ et le Qt précisément parce que ces technologies dominent 
                les environnements où la fiabilité prime sur la vitesse d'exécution brute — médical, aéronautique, 
                automobile, industrie lourde.
              </p>
              <p>
                Partenaire officiel de Qt Group, PointerLab s'appuie sur un vivier de plus de 8 000 profils C/C++ 
                qualifiés, identifiés et validés en continu par une combinaison d'intelligence artificielle et 
                d'expertise humaine.
              </p>
            </div>
            <div className="pointerlab-section__image">
              <img
                src="https://picsum.photos/seed/pointerlab-presentation/600/400"
                alt="PointerLab"
                className="pointerlab-section__img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pointerlab-expertises">
        <div className="pointerlab-expertises__inner">
          <h2 className="pointerlab-expertises__title">Nos expertises</h2>
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

      {/* Secteurs */}
      <section className="pointerlab-secteurs-section">
        <div className="pointerlab-secteurs-section__inner">
          <h2 className="pointerlab-secteurs-section__title">Nos secteurs</h2>
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

      {/* FAQ */}
      <section className="pointerlab-faq">
        <div className="pointerlab-faq__inner">
          <h2 className="pointerlab-faq__title">Questions fréquentes</h2>
          <div className="pointerlab-faq__list">
            <div className="pointerlab-faq-item">
              <h3 className="pointerlab-faq-item__question">
                Pourquoi choisir une ESN spécialisée plutôt qu'une ESN généraliste pour un projet C++ ?
              </h3>
              <p className="pointerlab-faq-item__answer">
                Sur des stacks aussi spécifiques que le C++ et le Qt, la profondeur d'expertise fait la différence : 
                une ESN généraliste doit souvent sous-traiter ou monter en compétence sur le projet, quand une ESN 
                spécialisée comme PointerLab dispose déjà du vivier et du savoir-faire nécessaires.
              </p>
            </div>
            <div className="pointerlab-faq-item">
              <h3 className="pointerlab-faq-item__question">PointerLab recrute-t-elle en CDI ou en mission ?</h3>
              <p className="pointerlab-faq-item__answer">
                Les deux formats existent : mise à disposition de consultants salariés ou freelances pour un pic de charge, 
                et recrutement direct en CDI pour intégrer durablement un profil C++/Qt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}