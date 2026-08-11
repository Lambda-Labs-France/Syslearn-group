import Link from "next/link";
import { 
  Plane, 
  Box, 
  Cpu, 
  Monitor,
  Calculator,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import "../../../styles/secteurs/aeronautique.css";

export const metadata = {
  title: "Aéronautique",
  description: "PointerLab développe des systèmes embarqués et logiciels de simulation pour l'aéronautique en C++/Qt. Fiabilité et performance pour vos projets critiques.",
};

export default function AeronautiquePage() {
  const expertises = [
    { icon: Box, text: "Simulation 3D et environnements de vol" },
    { icon: Cpu, text: "Systèmes embarqués temps réel" },
    { icon: Monitor, text: "Interfaces homme-machine cockpit" },
    { icon: Calculator, text: "Logiciel scientifique et calcul haute performance" },
  ];

  return (
    <main className="aeronautique-page">
      <section className="aeronautique-hero">
        <div className="aeronautique-hero__inner">
          <div className="aeronautique-hero__content">
            <div>
              <span className="aeronautique-hero__badge">Secteur</span>
              <h1 className="aeronautique-hero__title">Aéronautique : conseil et ingénierie sur mesure</h1>
              
            </div>
          </div>
        </div>
      </section>

      <section className="aeronautique-content">
        <div className="aeronautique-content__inner">
          <div className="aeronautique-content__intro">
            <p>
              Un système avionique ne tolère pas l'approximation. PointerLab conçoit des logiciels de simulation et
              des systèmes embarqués pour l'aéronautique, sur des environnements où chaque ligne de code peut être
              soumise à certification.
            </p>
          </div>

          <div className="aeronautique-content__block">
            <h2 className="aeronautique-content__title">Le contexte</h2>
            <p>
              Simulation de vol, systèmes de communication embarqués, interfaces cockpit : les projets
              aéronautiques demandent une maîtrise fine du C++ temps réel et une culture de la fiabilité logicielle
              poussée à l'extrême.
            </p>
          </div>

          <div className="aeronautique-content__block">
            <h2 className="aeronautique-content__title">Expertises mobilisées</h2>
            <div className="aeronautique-expertises">
              {expertises.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="aeronautique-expertise">
                    <div className="aeronautique-expertise__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="aeronautique-expertise__text">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="aeronautique-cta">
        <div className="aeronautique-cta__inner">
          <div className="aeronautique-cta__content">
            <h2 className="aeronautique-cta__title">Prêt à discuter de votre projet ?</h2>
            <p className="aeronautique-cta__text">
              Découvrez comment PointerLab peut vous accompagner dans vos projets aéronautiques.
            </p>
            <div className="aeronautique-cta__actions">
              <Link href="/nos-entites/pointerlab" className="aeronautique-cta__btn aeronautique-cta__btn--primary">
                Découvrir PointerLab
                <ExternalLink size={18} />
              </Link>
              <Link href="/contact" className="aeronautique-cta__btn aeronautique-cta__btn--secondary">
                Discuter de votre projet Aéronautique
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}