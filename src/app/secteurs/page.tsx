import Link from "next/link";
import { 
  Zap, 
  Shield, 
  Factory, 
  Heart, 
  Plane, 
  Car, 
  Wifi,
  ArrowRight
} from "lucide-react";
import "../../styles/secteurs/secteurs.css";

export const metadata = {
  title: "Secteurs | Énergie, défense, médical, aéronautique...",
  description: "Découvrez les secteurs accompagnés par Syslearn Group : énergie, défense, industrie, médical, aéronautique, automobile et IoT. Conseil et ingénierie sur mesure.",
};

export default function SecteursPage() {
  const secteurs = [
    {
      name: "Énergie",
      icon: Zap,
      description: "Conseil et ingénierie pour les acteurs de l'énergie, sur des cycles longs et réglementés.",
      link: "/secteurs/energie",
      color: "#2563eb",
      entities: ["Syslearn"],
    },
    {
      name: "Défense",
      icon: Shield,
      description: "Systèmes critiques où la fiabilité et la confidentialité sont non négociables.",
      link: "/secteurs/defense",
      color: "#4f46e5",
      entities: ["Syslearn"],
    },
    {
      name: "Industrie",
      icon: Factory,
      description: "Industrie 4.0 : automatisation, supervision et fiabilisation des lignes de production.",
      link: "/secteurs/industrie",
      color: "#7c3aed",
      entities: ["Syslearn", "PointerLab"],
    },
    {
      name: "Médical",
      icon: Heart,
      description: "Imagerie médicale 3D et dispositifs cliniques où la fiabilité prime sur tout.",
      link: "/secteurs/medical",
      color: "#059669",
      entities: ["PointerLab"],
    },
    {
      name: "Aéronautique",
      icon: Plane,
      description: "Simulation et systèmes embarqués pour l'aéronautique, où chaque ligne de code compte.",
      link: "/secteurs/aeronautique",
      color: "#0284c7",
      entities: ["PointerLab"],
    },
    {
      name: "Automobile & Mobilité",
      icon: Car,
      description: "Systèmes embarqués, simulation de conduite et info-divertissement.",
      link: "/secteurs/automobile-mobilite",
      color: "#d97706",
      entities: ["PointerLab"],
    },
    {
      name: "IoT",
      icon: Wifi,
      description: "Objets connectés, du firmware embarqué à la plateforme de supervision.",
      link: "/secteurs/iot",
      color: "#0891b2",
      entities: ["Syslearn", "PointerLab"],
    },
  ];

  return (
    <main className="secteurs-page">      <section className="secteurs-hero">
        <div className="secteurs-hero__inner">
          <h1 className="secteurs-hero__title">Nos secteurs : une expertise technique adaptée à chaque contexte</h1>
          <p className="secteurs-hero__subtitle">
            Un logiciel pour l'énergie et un logiciel pour le médical n'obéissent pas aux mêmes règles. 
            Nos trois entités interviennent sur des secteurs à forte exigence technique et réglementaire.
          </p>
        </div>
      </section>

      <section className="secteurs-content">
        <div className="secteurs-content__inner">
          <div className="secteurs-grid">
            {secteurs.map((secteur) => {
              const Icon = secteur.icon;
              return (
                <Link key={secteur.name} href={secteur.link} className="secteur-card">
                  <div className="secteur-card__icon" style={{ color: secteur.color }}>
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="secteur-card__title">{secteur.name}</h3>
                  <p className="secteur-card__description">{secteur.description}</p>
                  <div className="secteur-card__footer">
                    <span className="secteur-card__entities">
                      {secteur.entities.map((entity, index) => (
                        <span key={entity} className="secteur-card__entity">
                          {entity}
                          {index < secteur.entities.length - 1 && " / "}
                        </span>
                      ))}
                    </span>
                    <span className="secteur-card__arrow">
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}