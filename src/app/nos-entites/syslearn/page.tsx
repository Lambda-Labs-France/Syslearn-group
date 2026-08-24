import Link from "next/link";
import { 
  Code2, 
  Brain, 
  Monitor, 
  Cpu, 
  BarChart3, 
  Layers,
  CheckCircle2,
  ExternalLink,
  Shield,
  Database,
  Cloud
} from "lucide-react";
import "../../../styles/nos-entites/syslearn.css";

export const metadata = {
  title: "Syslearn",
  description: "Syslearn est une ESN spécialisée dans l'accompagnement des secteurs de l'énergie, de la défense et de l'industrie sur leurs projets numériques les plus exigeants.",
};

export default function SyslearnPage() {
  const expertises = [
    { icon: Code2, text: "Écosystème Java pour applications métier robustes sur systèmes d'information complexes" },
    { icon: Brain, text: "Intelligence artificielle et data science pour transformer les données en décisions opérationnelles" },
    { icon: Cpu, text: "IoT industriel pour connecter, superviser et optimiser les équipements et infrastructures" },
    { icon: Shield, text: "Cybersécurité pour protéger les systèmes critiques contre les risques opérationnels" },
    { icon: BarChart3, text: "Business intelligence et pilotage de la donnée pour les secteurs stratégiques" },
    { icon: Layers, text: "Architecture et conception de systèmes critiques pour l'énergie, la défense et l'industrie" },
  ];

  const raisons = [
    "Une double compétence technique et sectorielle, rare sur des marchés aussi réglementés que l'énergie ou la défense",
    "Des formats d'intervention flexibles : conseil ponctuel, régie longue durée, ou portage de consultants indépendants",
    "Une entité intégrée à un groupe qui partage ses consultants et ses opportunités avec PointerLab et StackJobs",
  ];

  const syslearnUrl = "https://www.syslearn.fr?utm_source=syslearn-groupe&utm_medium=website&utm_campaign=entite_syslearn";

  return (
    <main className="syslearn-page">
      <section className="syslearn-hero">
        <div className="syslearn-hero__inner">
          <div className="syslearn-hero__content">
            <div>
              <span className="syslearn-hero__badge">Syslearn</span>
              <h1 className="syslearn-hero__title">
                Syslearn : Conseil Tech, Ingénierie Data, IA, IoT & Cybersécurité
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

      <section className="syslearn-section">
        <div className="syslearn-section__inner">
          <div className="syslearn-section__grid">
            <div className="syslearn-section__text">
              <h2 className="syslearn-section__title">Présentation</h2>
              <p className="text-justify-hyphens">
                Un projet de transformation numérique dans l'énergie ne se pilote pas comme un projet e-commerce. 
                Les cycles sont longs, les 
                <Link 
                  href="https://www.techniques-ingenieur.fr/base-documentaire/technologies-de-l-information-th9/systemes-embarques-42588210/vers-une-certification-continue-des-logiciels-critiques-en-aeronautique-h8060/" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  className="syslearn-content__link"
                >
                  {" "}contraintes réglementaires nombreuses
                </Link>, et une erreur de conception peut 
                coûter bien plus qu'un simple retard de mise en production.
              </p>
              <p className="text-justify-hyphens">
                Syslearn est une <strong>ESN spécialisée dans l'accompagnement des 
                <Link 
                  href="https://www.syslearn.fr/qui-sommes-nous/secteurs-dactivites" 
                  target="_blank" 
                  rel="dofollow noopener noreferrer" 
                  className="syslearn-content__link"
                >
                  {" "}secteurs de l'énergie, de la défense et de l'industrie
                </Link></strong> sur leurs projets numériques les plus exigeants. Notre conviction : la technique 
                seule ne suffit pas, il faut aussi comprendre en profondeur les enjeux métier, réglementaires et 
                opérationnels propres à ces environnements critiques.
              </p>
            </div>
            <div className="syslearn-section__image">
              <img
                src="/images/entites/syslearn--Page1.jpg"
                alt="Syslearn - Conseil et Ingénierie"
                className="syslearn-section__img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="syslearn-section syslearn-section--alt">
        <div className="syslearn-section__inner">
          <div className="syslearn-section__grid syslearn-section__grid--reverse">
            <div className="syslearn-section__text">
              <h2 className="syslearn-section__title">Quatre piliers d'expertise au service des systèmes critiques</h2>
              <p className="text-justify-hyphens">
                Nos consultants interviennent en conseil, en régie ou en portage salarial, sur quatre grands domaines 
                qui structurent aujourd'hui la transformation numérique des secteurs sensibles :
              </p>
              <ul className="syslearn-section__list">
                <li className="text-justify-hyphens">
                  <strong>L'écosystème Java</strong>, pour la conception et la maintenance d'applications métier robustes, 
                  capables de tenir dans la durée sur des systèmes d'information complexes.
                </li>
                <li className="text-justify-hyphens">
                  <strong>
                    <Link 
                      href="https://co-cto.fr/en/blog/lia-dans-le-developpement-logiciel-quand-lintelligence-artificielle-redefinit-les-pratiques-tech" 
                      target="_blank" 
                      rel="nofollow noopener noreferrer" 
                      className="syslearn-content__link"
                    >
                      L'intelligence artificielle et la data science
                    </Link>
                  </strong>, pour transformer des volumes de données 
                  industrielles en décisions opérationnelles fiables.
                </li>
                <li className="text-justify-hyphens">
                  <strong>
                    <Link 
                      href="https://www.syslearn-group.com/secteurs/iot" 
                      target="_blank" 
                      rel="dofollow noopener noreferrer" 
                      className="syslearn-content__link"
                    >
                      L'IoT industriel
                    </Link>
                  </strong>, pour connecter, superviser et optimiser des équipements et 
                  infrastructures sur le terrain.
                </li>
                <li className="text-justify-hyphens">
                  <strong>
                    <Link 
                      href="https://www.appvizer.fr/magazine/services-informatiques/securite-informatique/cybersecurite-outils-proteger-entreprise" 
                      target="_blank" 
                      rel="nofollow noopener noreferrer" 
                      className="syslearn-content__link"
                    >
                      La cybersécurité
                    </Link>
                  </strong>, pour protéger des systèmes où une faille ne se mesure pas seulement 
                  en pertes financières, mais parfois en risques opérationnels majeurs.
                </li>
              </ul>
            </div>
            <div className="syslearn-section__image">
              <img
                src="/images/entites/syslearnPage2.jpg"
                alt="Expertises Syslearn"
                className="syslearn-section__img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="syslearn-section">
        <div className="syslearn-section__inner">
          <div className="syslearn-section__grid">
            <div className="syslearn-section__text">
              <h2 className="syslearn-section__title">Une approche pensée pour la criticité, pas pour la vitesse</h2>
              <p className="text-justify-hyphens">
                Contrairement aux environnements où l'itération rapide prime, les projets de nos clients exigent une 
                approche méthodique : compréhension approfondie du contexte réglementaire, anticipation des risques, 
                et rigueur dans chaque livrable.
              </p>
              <p className="text-justify-hyphens">
                C'est cette culture de la criticité que l'on retrouve détaillée sur 
                <Link 
                  href="https://www.syslearn.fr/qui-sommes-nous/secteurs-dactivites" 
                  target="_blank" 
                  rel="dofollow noopener noreferrer" 
                  className="syslearn-content__link"
                >
                  {" "}notre page Nos expertises sectorielles
                </Link>, et qui rejoint les constats du 
                <Link 
                  href="https://numeum.fr/economie-marche/classement-2025-des-esn-ict-les-plus-performantes-en-france/" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  className="syslearn-content__link"
                >
                  {" "}Syntec Numérique
                </Link> sur la tension croissante des compétences IT dans les 
                secteurs stratégiques français.
              </p>
            </div>
            <div className="syslearn-section__image">
              <img
                src="/images/entites/syslearn-Page3.jpg"
                alt="Approche criticité Syslearn"
                className="syslearn-section__img"
              />
            </div>
          </div>
        </div>
      </section>

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
                  <p className="syslearn-expertise-card__text text-justify-hyphens">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="syslearn-raisons">
        <div className="syslearn-raisons__inner">
          <h2 className="syslearn-raisons__title">Pourquoi choisir Syslearn</h2>
          <div className="syslearn-raisons__grid">
            {raisons.map((item, index) => (
              <div key={index} className="syslearn-raison-card">
                <div className="syslearn-raison-card__icon">
                  <CheckCircle2 size={24} strokeWidth={1.5} />
                </div>
                <p className="syslearn-raison-card__text text-justify-hyphens">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="syslearn-faq">
        <div className="syslearn-faq__inner">
          <h2 className="syslearn-faq__title">Questions fréquentes</h2>
          <div className="syslearn-faq__list">
            <div className="syslearn-faq-item">
              <h3 className="syslearn-faq-item__question">Quels secteurs Syslearn accompagne-t-elle ?</h3>
              <p className="syslearn-faq-item__answer text-justify-hyphens">
                Syslearn intervient principalement dans l'énergie, la défense et l'industrie, sur des missions de 
                conseil et d'ingénierie informatique.
              </p>
            </div>
            <div className="syslearn-faq-item">
              <h3 className="syslearn-faq-item__question">Quelle est la différence entre Syslearn et PointerLab ?</h3>
              <p className="syslearn-faq-item__answer text-justify-hyphens">
                Syslearn est généraliste en conseil et ingénierie informatique. PointerLab est spécialisée exclusivement sur le développement logiciel autour de l'écosystème C++, pour des secteurs comme le médical, l'aéronautique ou la simulation 3D.
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