import Link from "next/link";
import { 
  Factory, 
  Cpu, 
  Wifi, 
  Box,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import "../../../styles/secteurs/industrie.css";

export const metadata = {
  title: "Industrie",
  description: "Conseil informatique et ingénierie logicielle pour l'industrie 4.0. Syslearn et PointerLab accompagnent l'automatisation et la supervision de vos systèmes.",
};

export default function IndustriePage() {
  const expertises = [
    { icon: Factory, text: "Automatisation et supervision de lignes de production" },
    { icon: Cpu, text: "Logiciels embarqués pour équipements industriels" },
    { icon: Wifi, text: "IoT industriel et remontée de données terrain" },
    { icon: Box, text: "Interfaces 3D pour la maintenance et la formation" },
  ];

  return (
    <main className="industrie-page">
      <section className="industrie-hero">
        <div className="industrie-hero__inner">
          <div className="industrie-hero__content">
            <div>
              <span className="industrie-hero__badge">Secteur</span>
              <h1 className="industrie-hero__title">Industrie : conseil et ingénierie sur mesure</h1>
              <p className="industrie-hero__subtitle">
                Entité(s) : <strong>Syslearn / PointerLab</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="industrie-content">
        <div className="industrie-content__inner">
          <div className="industrie-content__intro">
            <p>
              L'industrie 4.0 exige des systèmes capables de superviser, automatiser et fiabiliser des lignes de
              production entières. Syslearn et PointerLab interviennent conjointement sur ce secteur, chacune
              apportant sa spécialité - conseil généraliste pour l'une, expertise C++/Qt pour l'autre.
            </p>
          </div>

          <div className="industrie-content__block">
            <h2 className="industrie-content__title">Le contexte</h2>
            <p>
              Entre modernisation des chaînes de production, remontée de données terrain en temps réel et
              exigences de sécurité industrielle, les projets logiciels pour l'industrie demandent une double
              compétence rarement réunie ailleurs.
            </p>
          </div>

          <div className="industrie-content__block">
            <h2 className="industrie-content__title">Expertises mobilisées</h2>
            <div className="industrie-expertises">
              {expertises.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="industrie-expertise">
                    <div className="industrie-expertise__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="industrie-expertise__text">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="industrie-cta">
        <div className="industrie-cta__inner">
          <div className="industrie-cta__content">
            <h2 className="industrie-cta__title">Prêt à discuter de votre projet ?</h2>
            <p className="industrie-cta__text">
              Découvrez comment Syslearn et PointerLab peuvent vous accompagner dans vos projets industriels.
            </p>
            <div className="industrie-cta__actions">
              <Link href="/nos-entites/syslearn" className="industrie-cta__btn industrie-cta__btn--primary">
                Découvrir Syslearn & PointerLab
                <ExternalLink size={18} />
              </Link>
              <Link href="/contact" className="industrie-cta__btn industrie-cta__btn--secondary">
                Discuter de votre projet Industrie
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}