import Link from "next/link";
import { 
  Shield, 
  Code2, 
  Cpu, 
  Monitor, 
  Brain,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import "../../../styles/secteurs/defense.css";

export const metadata = {
  title: "Défense | ESN conseil informatique Syslearn Groupe",
  description: "Conseil informatique et ingénierie pour le secteur de la défense. Syslearn intervient sur des systèmes critiques avec un haut niveau d'exigence et de confidentialité.",
};

export default function DefensePage() {
  const expertises = [
    { icon: Code2, text: "Développement d'applications métier sécurisées" },
    { icon: Cpu, text: "Systèmes embarqués pour environnements critiques" },
    { icon: Monitor, text: "Interfaces homme-machine à haute fiabilité" },
    { icon: Brain, text: "Intelligence artificielle et data science appliquées" },
  ];

  return (
    <main className="defense-page">
      <section className="defense-hero">
        <div className="defense-hero__inner">
          <div className="defense-hero__content">
            <div>
              <span className="defense-hero__badge">Secteur</span>
              <h1 className="defense-hero__title">Défense : conseil et ingénierie sur mesure</h1>
              <p className="defense-hero__subtitle">
                Entité(s) : <strong>Syslearn</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="defense-content">
        <div className="defense-content__inner">
          <div className="defense-content__intro">
            <p>
              Sur des systèmes où la fiabilité et la confidentialité sont non négociables, Syslearn intervient auprès
              d'acteurs du secteur de la défense avec une rigueur méthodologique adaptée à ce niveau d'exigence.
            </p>
          </div>

          <div className="defense-content__block">
            <h2 className="defense-content__title">Le contexte</h2>
            <p>
              Les projets défense combinent souvent contraintes réglementaires strictes, cycles longs de validation
              et exigence de sécurité renforcée à chaque étape du développement logiciel.
            </p>
          </div>

          <div className="defense-content__block">
            <h2 className="defense-content__title">Expertises mobilisées</h2>
            <div className="defense-expertises">
              {expertises.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="defense-expertise">
                    <div className="defense-expertise__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="defense-expertise__text">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="defense-cta">
        <div className="defense-cta__inner">
          <div className="defense-cta__content">
            <h2 className="defense-cta__title">Prêt à discuter de votre projet ?</h2>
            <p className="defense-cta__text">
              Découvrez comment Syslearn peut vous accompagner dans vos projets du secteur de la défense.
            </p>
            <div className="defense-cta__actions">
              <Link href="/nos-entites/syslearn" className="defense-cta__btn defense-cta__btn--primary">
                Découvrir Syslearn
                <ExternalLink size={18} />
              </Link>
              <Link href="/contact" className="defense-cta__btn defense-cta__btn--secondary">
                Discuter de votre projet Défense
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}