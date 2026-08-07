import Link from "next/link";
import { Briefcase, Code2, Users, ArrowRight } from "lucide-react";
import "../../../styles/carrieres/recrutement.css";

export const metadata = {
  title: "Recrutement",
  description: "Consultez nos offres d'emploi tech et rejoignez Syslearn, PointerLab ou StackJobs.",
};

export default function RecrutementPage() {
  const offres = [
    {
      title: "Consultant informatique",
      entity: "Syslearn",
      icon: Briefcase,
      description: "Missions en énergie, défense et industrie.",
    },
    {
      title: "Ingénieur C++ / Qt",
      entity: "PointerLab",
      icon: Code2,
      description: "Développement logiciel pour projets critiques.",
    },
    {
      title: "Développeur full-stack",
      entity: "StackJobs",
      icon: Users,
      description: "Amélioration de la plateforme de recrutement tech.",
    },
  ];

  return (
    <main className="recrutement-page">
      <section className="recrutement-hero">
        <div className="recrutement-hero__inner">
          <h1 className="recrutement-hero__title">Recrutement</h1>
        </div>
      </section>

      <section className="recrutement-content">
        <div className="recrutement-content__inner">
          <div className="recrutement-offres">
            {offres.map((offre, index) => {
              const Icon = offre.icon;
              return (
                <div key={index} className="recrutement-offre">
                  <div className="recrutement-offre__icon">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="recrutement-offre__title">{offre.title}</h3>
                    <span className="recrutement-offre__entity">{offre.entity}</span>
                    <p className="recrutement-offre__desc">{offre.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="recrutement-cta">
            <p className="recrutement-cta__text">
              Toutes nos offres sont disponibles sur StackJobs.
            </p>
            <Link
              href="/nos-entites/stackjobs"
              className="recrutement-cta__btn"
            >
              Découvrir StackJobs
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}