import Link from "next/link";
import { 
  Wifi, 
  Cpu, 
  BarChart3, 
  Shield,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import "../../../styles/secteurs/iot.css";

export const metadata = {
  title: "IoT | Conseil et ingénierie objets connectés Syslearn Groupe",
  description: "Syslearn et PointerLab accompagnent vos projets IoT, du prototype au déploiement industriel. Systèmes embarqués, remontée de données, conseil informatique.",
};

export default function IotPage() {
  const expertises = [
    { icon: Cpu, text: "Développement de firmware et systèmes embarqués" },
    { icon: Wifi, text: "Remontée et traitement de données terrain" },
    { icon: BarChart3, text: "Business intelligence et supervision" },
    { icon: Shield, text: "Sécurisation des flux de données IoT" },
  ];

  return (
    <main className="iot-page">
      <section className="iot-hero">
        <div className="iot-hero__inner">
          <div className="iot-hero__content">
            <div>
              <span className="iot-hero__badge">Secteur</span>
              <h1 className="iot-hero__title">IoT : conseil et ingénierie sur mesure</h1>
              <p className="iot-hero__subtitle">
                Entité(s) : <strong>Syslearn / PointerLab</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="iot-content">
        <div className="iot-content__inner">
          <div className="iot-content__intro">
            <p>
              Un objet connecté ne se résume pas à un capteur qui envoie des données : c'est un système complet,
              du firmware embarqué jusqu'à la plateforme de supervision. Syslearn et PointerLab accompagnent ces
              projets de bout en bout, du prototype au déploiement à grande échelle.
            </p>
          </div>

          <div className="iot-content__block">
            <h2 className="iot-content__title">Le contexte</h2>
            <p>
              Entre multiplication des capteurs, exigences de sécurité renforcées et besoin de traiter des volumes de
              données croissants en temps réel, les projets IoT industriels demandent une expertise à la fois
              embarquée et logicielle.
            </p>
          </div>

          <div className="iot-content__block">
            <h2 className="iot-content__title">Expertises mobilisées</h2>
            <div className="iot-expertises">
              {expertises.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="iot-expertise">
                    <div className="iot-expertise__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="iot-expertise__text">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="iot-cta">
        <div className="iot-cta__inner">
          <div className="iot-cta__content">
            <h2 className="iot-cta__title">Prêt à discuter de votre projet ?</h2>
            <p className="iot-cta__text">
              Découvrez comment Syslearn et PointerLab peuvent vous accompagner dans vos projets IoT.
            </p>
            <div className="iot-cta__actions">
              <Link href="/nos-entites/syslearn" className="iot-cta__btn iot-cta__btn--primary">
                Découvrir Syslearn & PointerLab
                <ExternalLink size={18} />
              </Link>
              <Link href="/contact" className="iot-cta__btn iot-cta__btn--secondary">
                Discuter de votre projet IoT
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}