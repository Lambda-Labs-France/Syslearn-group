import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import "../../../styles/carrieres/nous-rejoindre.css";

export const metadata = {
  title: "Pourquoi nous rejoindre | Syslearn Group",
  description: "Découvrez pourquoi rejoindre Syslearn Group : modèle horizontal, transparence et spécialisation technique.",
};

export default function PourquoiNousRejoindrePage() {
  const raisons = [
    {
      title: "Modèle horizontal",
      description: "Deux strates hiérarchiques, pas dix. Les décisions se prennent vite, par les personnes qui font réellement le travail.",
    },
    {
      title: "Transparence totale",
      description: "Des objectifs et des marges connus de tous. Chaque consultant connaît le taux journalier facturé sur sa mission.",
    },
    {
      title: "Évolution vers l'association",
      description: "Une trajectoire d'évolution possible vers l'association pour celles et ceux qui le souhaitent.",
    },
    {
      title: "Spécialisation technique",
      description: "Une spécialisation technique reconnue plutôt qu'une promesse généraliste diluée.",
    },
  ];

  return (
    <main className="pourquoi-page">
      <section className="pourquoi-hero">
        <div className="pourquoi-hero__inner">
          <h1 className="pourquoi-hero__title">Pourquoi nous rejoindre</h1>
        </div>
      </section>

      <section className="pourquoi-content">
        <div className="pourquoi-content__inner">
          <div className="pourquoi-grid">
            {raisons.map((raison, index) => (
              <div key={index} className="pourquoi-card">
                <div className="pourquoi-card__number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="pourquoi-card__title">{raison.title}</h3>
                <p className="pourquoi-card__description">{raison.description}</p>
                <CheckCircle2 size={24} strokeWidth={1.5} className="pourquoi-card__icon" />
              </div>
            ))}
          </div>

          <div className="pourquoi-cta">
            <h3 className="pourquoi-cta__title">Prêt à rejoindre l'aventure ?</h3>
            <div className="pourquoi-cta__actions">
              <Link
                href="/carrieres/recrutement"
                className="pourquoi-cta__btn pourquoi-cta__btn--primary"
              >
                Voir les offres
              </Link>
              <Link
                href="/carrieres/candidature-spontanee"
                className="pourquoi-cta__btn pourquoi-cta__btn--secondary"
              >
                Candidature spontanée
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}