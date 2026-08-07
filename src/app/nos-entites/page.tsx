import Link from "next/link";
import { 
  Code2, 
  Brain, 
  Monitor, 
  Cpu, 
  BarChart3, 
  Layers,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import "../../styles/nos-entites/syslearn.css";

export const metadata = {
  title: "Nos entités",
  description: "Syslearn accompagne ses clients de l'énergie, la défense et l'industrie en conseil informatique et ingénierie sur mesure. Consultants qualifiés, missions exigeantes.",
};

export default function SyslearnPage() {
  const syslearnUrl = "https://www.syslearn.fr?utm_source=syslearn-groupe&utm_medium=website&utm_campaign=entite_syslearn";

  const expertises = [
    { icon: Code2, text: "Développement d'applications métier et systèmes d'information" },
    { icon: Brain, text: "Intelligence artificielle et data science appliquées à l'industrie" },
    { icon: Monitor, text: "Interfaces homme-machine (IHM) pour environnements critiques" },
    { icon: Cpu, text: "Systèmes embarqués et IoT industriel" },
    { icon: BarChart3, text: "Business intelligence et pilotage de la donnée" },
    { icon: Layers, text: "CAO, réalité virtuelle et augmentée" },
  ];

  const raisons = [
    "Une double compétence technique et sectorielle, rare sur des marchés aussi réglementés que l'énergie ou la défense",
    "Des formats d'intervention flexibles : conseil ponctuel, régie longue durée, ou portage de consultants indépendants",
    "Une entité intégrée à un groupe qui partage ses consultants et ses opportunités avec PointerLab et StackJobs",
  ];

  return (
    <main className="syslearn-page">
      <section className="syslearn-hero">
        <div className="syslearn-hero__inner">
          <div className="syslearn-hero__content">
            <div>
              <span className="syslearn-hero__badge">Syslearn</span>
              <h1 className="syslearn-hero__title">
  Syslearn : conseil et ingénierie informatique
  pour l'énergie, la défense et l'industrie
</h1>
            </div>
            <Link 
              href={syslearnUrl}
              target="_blank" 
              rel="dofollow noopener noreferrer"
              className="syslearn-hero__btn"
            >
              Visiter le site de Syslearn
              <ExternalLink size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="syslearn-section">
        <div className="syslearn-section__inner">
          <div className="syslearn-section__grid">
            <div className="syslearn-section__text">
              <h2 className="syslearn-section__title">Présentation</h2>
              <p>
                Un projet de transformation numérique dans l'énergie ne se pilote pas comme un projet e-commerce. 
                Les cycles sont longs, les contraintes réglementaires nombreuses, et une erreur de conception peut 
                coûter bien plus qu'un simple retard de mise en production.
              </p>
              <p>
                Syslearn s'est construite sur cette conviction : la technique seule ne suffit pas, il faut aussi 
                comprendre en profondeur les enjeux critiques des secteurs de l'énergie, de la défense et de l'industrie.
              </p>
              <p>
                Nos consultants interviennent en conseil, en régie ou en portage salarial, sur des missions couvrant 
                le développement d'applications métier, l'intelligence artificielle et la data science, les interfaces 
                homme-machine, les systèmes embarqués, l'IoT industriel, la business intelligence, ou encore la CAO 
                et la réalité virtuelle et augmentée pour la formation et la maintenance.
              </p>
            </div>
            <div className="syslearn-section__image">
              <img
                src="https://picsum.photos/seed/syslearn-presentation/600/400"
                alt="Syslearn"
                className="syslearn-section__img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section className="syslearn-expertises">
        <div className="syslearn-expertises__inner">
          <h2 className="syslearn-expertises__title">Nos expertises</h2>
          <div className="syslearn-expertises__grid">
            {expertises.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="syslearn-expertise-card">
                  <div className="syslearn-expertise-card__icon">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <p className="syslearn-expertise-card__text">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Syslearn */}
      <section className="syslearn-raisons">
        <div className="syslearn-raisons__inner">
          <h2 className="syslearn-raisons__title">Pourquoi choisir Syslearn</h2>
          <div className="syslearn-raisons__grid">
            {raisons.map((item, index) => (
              <div key={index} className="syslearn-raison-card">
                <div className="syslearn-raison-card__icon">
                  <CheckCircle2 size={24} strokeWidth={1.5} />
                </div>
                <p className="syslearn-raison-card__text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="syslearn-faq">
        <div className="syslearn-faq__inner">
          <h2 className="syslearn-faq__title">Questions fréquentes</h2>
          <div className="syslearn-faq__list">
            <div className="syslearn-faq-item">
              <h3 className="syslearn-faq-item__question">Quels secteurs Syslearn accompagne-t-elle ?</h3>
              <p className="syslearn-faq-item__answer">
                Syslearn intervient principalement dans l'énergie, la défense et l'industrie, sur des missions de 
                conseil et d'ingénierie informatique.
              </p>
            </div>
            <div className="syslearn-faq-item">
              <h3 className="syslearn-faq-item__question">Quelle est la différence entre Syslearn et PointerLab ?</h3>
              <p className="syslearn-faq-item__answer">
                Syslearn est généraliste en conseil et ingénierie informatique. PointerLab est spécialisée exclusivement 
                sur le développement logiciel C++ et Qt pour des secteurs comme le médical, l'aéronautique ou la simulation 3D.
              </p>
              <Link href="/nos-entites/pointerlab" className="syslearn-faq-item__btn">
                Découvrir PointerLab →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}