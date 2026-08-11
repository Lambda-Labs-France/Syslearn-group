import Link from "next/link";
import { 
  Heart, 
  Scan, 
  Cpu, 
  Eye,
  Monitor,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import "../../../styles/secteurs/medical.css";

export const metadata = {
  title: "Médical",
  description: "PointerLab développe des logiciels C++/Qt pour l'imagerie médicale et les dispositifs cliniques, où la fiabilité prime sur tout.",
};

export default function MedicalPage() {
  const expertises = [
    { icon: Scan, text: "Imagerie médicale 3D en temps réel" },
    { icon: Monitor, text: "Interfaces homme-machine pour dispositifs cliniques" },
    { icon: Cpu, text: "Logiciel embarqué pour équipements médicaux" },
    { icon: Eye, text: "Vision par ordinateur appliquée au diagnostic" },
  ];

  return (
    <main className="medical-page">
      <section className="medical-hero">
        <div className="medical-hero__inner">
          <div className="medical-hero__content">
            <div>
              <span className="medical-hero__badge">Secteur</span>
              <h1 className="medical-hero__title">Médical : conseil et ingénierie sur mesure</h1>
              
            </div>
          </div>
        </div>
      </section>

      <section className="medical-content">
        <div className="medical-content__inner">
          <div className="medical-content__intro">
            <p>
              Dans le médical, un bug n'est jamais qu'un bug - c'est potentiellement un risque pour un patient.
              PointerLab développe des logiciels d'imagerie et des interfaces de dispositifs cliniques en C++ et Qt,
              deux technologies choisies précisément pour leur robustesse.
            </p>
          </div>

          <div className="medical-content__block">
            <h2 className="medical-content__title">Le contexte</h2>
            <p>
              Les dispositifs médicaux et logiciels d'imagerie 3D en temps réel exigent une précision extrême et une
              conformité réglementaire stricte, dans un secteur où la fiabilité logicielle a un impact direct sur les soins.
            </p>
          </div>

          <div className="medical-content__block">
            <h2 className="medical-content__title">Expertises mobilisées</h2>
            <div className="medical-expertises">
              {expertises.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="medical-expertise">
                    <div className="medical-expertise__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="medical-expertise__text">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="medical-cta">
        <div className="medical-cta__inner">
          <div className="medical-cta__content">
            <h2 className="medical-cta__title">Prêt à discuter de votre projet ?</h2>
            <p className="medical-cta__text">
              Découvrez comment PointerLab peut vous accompagner dans vos projets du secteur médical.
            </p>
            <div className="medical-cta__actions">
              <Link href="/nos-entites/pointerlab" className="medical-cta__btn medical-cta__btn--primary">
                Découvrir PointerLab
                <ExternalLink size={18} />
              </Link>
              <Link href="/contact" className="medical-cta__btn medical-cta__btn--secondary">
                Discuter de votre projet Médical
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}