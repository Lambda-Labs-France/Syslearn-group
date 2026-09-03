import Link from "next/link";
import { Briefcase, Code2, Users, ArrowRight } from "lucide-react";
import "../../../styles/carrieres/metier.css";

export const metadata = {
  title: "Nos métiers",
  description: "Découvrez les métiers de Syslearn Group : consultant informatique, ingénieur C++/Qt et équipes produit tech.",
  alternates: { canonical: "/carrieres/metiers" },
};

export default function MetiersPage() {
  const metiers = [
    {
      icon: Briefcase,
      name: "Conseil informatique",
      entity: "Syslearn",
      description: "Missions généralistes en énergie, défense, industrie, avec une vraie diversité de contextes clients.",
      details: [
        "Conseil en transformation numérique",
        "Ingénierie IT sur mesure",
        "Portage salarial ou régie",
      ],
    },
    {
      icon: Code2,
      name: "Ingénieur logiciel écosystème C++",
      entity: "PointerLab",
      description: "Simulation 3D, médical, aéronautique, sur des projets où la technique compte vraiment.",
      details: [
        "Développement C++ (C++98 à C++20)",
        "Framework Qt et interfaces IHM",
        "Systèmes embarqués temps réel",
      ],
    },
    {
      icon: Users,
      name: "Équipes produit & tech",
      entity: "StackJobs",
      description: "Développement de la plateforme, amélioration continue du moteur de matching IA.",
      details: [
        "Développement full-stack",
        "Machine learning & IA",
        "Amélioration continue du produit",
      ],
    },
  ];

  return (
    <main className="metiers-page">
      <section className="metiers-hero">
        <div className="metiers-hero__inner">
          <h1 className="metiers-hero__title">Nos métiers</h1>
        </div>
      </section>

      

      <section className="metiers-content">
        <div className="metiers-content__inner">
          {metiers.map((metier, index) => {
            const Icon = metier.icon;
            return (
              <div key={index} className="metier-card">
                <div className="metier-card__header">
                  <div className="metier-card__icon">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="metier-card__name">{metier.name}</h2>
                    <span className="metier-card__entity">{metier.entity}</span>
                  </div>
                </div>
                <p className="metier-card__description">{metier.description}</p>
                <ul className="metier-card__list">
                  {metier.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}