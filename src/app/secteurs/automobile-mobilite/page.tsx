import Link from "next/link";
import { 
  Car, 
  Box, 
  Monitor, 
  Wifi,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import "../../../styles/secteurs/automobile-mobilite.css";

export const metadata = {
  title: "Automobile & Mobilité | ESN C++/Qt Syslearn Groupe",
  description: "PointerLab conçoit systèmes embarqués et logiciels de simulation pour l'automobile et la mobilité en C++/Qt. Info-divertissement, ADAS, simulation de conduite.",
};

export default function AutomobileMobilitePage() {
  const expertises = [
    { icon: Box, text: "Simulation de conduite et environnements 3D" },
    { icon: Monitor, text: "Info-divertissement et interfaces embarquées" },
    { icon: Car, text: "Systèmes ADAS et aide à la conduite" },
    { icon: Wifi, text: "IoT et connectivité véhicule" },
  ];

  return (
    <main className="automobile-page">
      <section className="automobile-hero">
        <div className="automobile-hero__inner">
          <div className="automobile-hero__content">
            <div>
              <span className="automobile-hero__badge">Secteur</span>
              <h1 className="automobile-hero__title">Automobile & Mobilité : conseil et ingénierie sur mesure</h1>
              <p className="automobile-hero__subtitle">
                Entité(s) : <strong>PointerLab</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="automobile-content">
        <div className="automobile-content__inner">
          <div className="automobile-content__intro">
            <p>
              De la simulation de conduite à l'info-divertissement embarqué, l'automobile et la mobilité combinent
              contraintes temps réel et exigences d'expérience utilisateur. PointerLab y développe des logiciels C++
              et Qt taillés pour ces deux impératifs à la fois.
            </p>
          </div>

          <div className="automobile-content__block">
            <h2 className="automobile-content__title">Le contexte</h2>
            <p>
              Les systèmes embarqués automobiles doivent conjuguer performance temps réel, interfaces fluides
              pour le conducteur et fiabilité absolue - un équilibre que peu de stacks techniques permettent aussi
              bien que le C++/Qt.
            </p>
          </div>

          <div className="automobile-content__block">
            <h2 className="automobile-content__title">Expertises mobilisées</h2>
            <div className="automobile-expertises">
              {expertises.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="automobile-expertise">
                    <div className="automobile-expertise__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="automobile-expertise__text">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="automobile-cta">
        <div className="automobile-cta__inner">
          <div className="automobile-cta__content">
            <h2 className="automobile-cta__title">Prêt à discuter de votre projet ?</h2>
            <p className="automobile-cta__text">
              Découvrez comment PointerLab peut vous accompagner dans vos projets automobile et mobilité.
            </p>
            <div className="automobile-cta__actions">
              <Link href="/nos-entites/pointerlab" className="automobile-cta__btn automobile-cta__btn--primary">
                Découvrir PointerLab
                <ExternalLink size={18} />
              </Link>
              <Link href="/contact" className="automobile-cta__btn automobile-cta__btn--secondary">
                Discuter de votre projet Automobile & Mobilité
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}