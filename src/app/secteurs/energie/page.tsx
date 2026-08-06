import Link from "next/link";
import { 
  Zap, 
  BarChart3, 
  Monitor, 
  Wifi,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import "../../../styles/secteurs/energie.css";

export const metadata = {
  title: "Énergie | ESN conseil informatique Syslearn Group",
  description: "Conseil informatique et ingénierie pour le secteur de l'énergie. Syslearn accompagne vos projets de transformation numérique sur des cycles longs et réglementés.",
};

export default function EnergiePage() {
  const expertises = [
    { icon: BarChart3, text: "Applications métier pour la gestion et le pilotage énergétique" },
    { icon: Zap, text: "Business intelligence et supervision de la donnée" },
    { icon: Monitor, text: "Interfaces homme-machine pour environnements critiques" },
    { icon: Wifi, text: "IoT industriel et remontée de données terrain" },
  ];

  return (
    <main className="energie-page">
      {/* Hero */}
      <section className="energie-hero">
        <div className="energie-hero__inner">
          <div className="energie-hero__content">
            <div>
              <span className="energie-hero__badge">Secteur</span>
              <h1 className="energie-hero__title">Énergie : conseil et ingénierie sur mesure</h1>
              <p className="energie-hero__subtitle">
                Entité(s) : <strong>Syslearn</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="energie-content">
        <div className="energie-content__inner">
          <div className="energie-content__intro">
            <p>
              Le secteur de l'énergie impose des cycles de développement longs, une forte exigence de fiabilité et
              un cadre réglementaire dense. Syslearn accompagne ses clients de ce secteur en conseil et ingénierie
              informatique, avec une connaissance fine de ces contraintes spécifiques.
            </p>
          </div>

          <div className="energie-content__block">
            <h2 className="energie-content__title">Le contexte</h2>
            <p>
              Entre transition énergétique, digitalisation des infrastructures et exigences de cybersécurité
              renforcées, les acteurs de l'énergie doivent moderniser leurs systèmes d'information sans jamais
              compromettre la continuité de service.
            </p>
          </div>

          <div className="energie-content__block">
            <h2 className="energie-content__title">Expertises mobilisées</h2>
            <div className="energie-expertises">
              {expertises.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="energie-expertise">
                    <div className="energie-expertise__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="energie-expertise__text">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ✅ CTA - Boutons en bas de page */}
      <section className="energie-cta">
        <div className="energie-cta__inner">
          <div className="energie-cta__content">
            <h2 className="energie-cta__title">Prêt à discuter de votre projet ?</h2>
            <p className="energie-cta__text">
              Découvrez comment Syslearn peut vous accompagner dans vos projets du secteur énergétique.
            </p>
            <div className="energie-cta__actions">
              <Link href="/nos-entites/syslearn" className="energie-cta__btn energie-cta__btn--primary">
                Découvrir Syslearn
                <ExternalLink size={18} />
              </Link>
              <Link href="/contact" className="energie-cta__btn energie-cta__btn--secondary">
                Discuter de votre projet Énergie
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}