import Link from "next/link";
import { Briefcase, Code2, Users, ArrowRight, CheckCircle2, Zap, TrendingUp, Target } from "lucide-react";
import "../../../styles/carrieres/recrutement.css";

export const metadata = {
  title: "Recrutement",
  description: "Découvrez nos offres d'emploi tech chez Syslearn Group. Consultant informatique, ingénieur C++, développeur full-stack. Rejoignez une ESN qui valorise votre expertise.",
  alternates: { canonical: "/carrieres/recrutement" },
};

export default function RecrutementPage() {
  const offres = [
    {
      title: "Consultant informatique",
      entity: "Pôle conseil",
      icon: Briefcase,
      description: "Missions en énergie, défense et industrie. Vous interviendrez sur des projets où les cycles longs et les contraintes réglementaires exigent une compréhension fine du métier client, au-delà de la seule compétence technique. Une mission n'est jamais un simple ticket à traiter : c'est un système complet à comprendre avant d'y toucher.",
    },
    {
      title: "Ingénieur écosystème C++",
      entity: "Pôle ingénierie",
      icon: Code2,
      description: "Développement logiciel pour projets critiques. Systèmes embarqués, interfaces temps réel, logiciels de simulation : vous rejoignez une équipe qui a fait de l'écosystème C++ sa spécialité, sur des environnements où la performance et la fiabilité ne sont jamais négociables. Un poste pour les développeurs qui veulent que leur code compte, littéralement.",
    },
    {
      title: "Développeur full-stack",
      entity: "Pôle recrutement tech",
      icon: Users,
      description: "Amélioration de la plateforme de recrutement tech. Vous participerez à faire évoluer un moteur de matching par intelligence artificielle qui connecte des milliers de profils techniques aux bonnes opportunités, un produit que vous utilisez vous-même en le construisant, ce qui change tout sur la qualité du feedback que vous recevez au quotidien.",
    },
  ];

  const changements = [
    { icon: Zap, title: "Modèle horizontal", desc: "Deux strates hiérarchiques, pas dix. Les décisions se prennent vite, par les personnes qui font réellement le travail." },
    { icon: TrendingUp, title: "Transparence totale", desc: "Des objectifs et des marges connus de tous. Chaque consultant connaît le taux journalier facturé sur sa mission." },
    { icon: Target, title: "Spécialisation technique", desc: "Une expertise reconnue sur des écosystèmes exigeants comme C++, Java ou l'IA, plutôt qu'une promesse diluée." },
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
          <div className="recrutement-intro">
            <p>
              En France, environ <strong> 85 000 postes de développeurs</strong> restent non pourvus en 2026, 
              et ce chiffre s'accentue chaque année. Dans la cybersécurité, l'intelligence artificielle et le 
              cloud, la tension est encore plus marquée : le marché ne récompense plus la polyvalence générique, 
              mais la rareté d'une spécialisation assumée. C'est exactement la conviction sur laquelle 
              <strong> Syslearn Group</strong> a construit ses trois pôles métiers et c'est ce qui nous permet 
              de vous proposer des missions où votre expertise compte vraiment, pas seulement votre disponibilité.
            </p>
            <p className="recrutement-intro__sub">
              Voici les postes ouverts aujourd'hui.
            </p>
          </div>

          <div className="recrutement-offres">
            {offres.map((offre, index) => {
              const Icon = offre.icon;
              return (
                <div key={index} className="recrutement-offre">
                  <div className="recrutement-offre__number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="recrutement-offre__content">
                    <div className="recrutement-offre__header">
                      <div className="recrutement-offre__icon">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="recrutement-offre__title">{offre.title}</h3>
                        <span className="recrutement-offre__entity">{offre.entity}</span>
                      </div>
                    </div>
                    <p className="recrutement-offre__desc">{offre.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="recrutement-pourquoi">
            <div className="recrutement-pourquoi__line"></div>
            <h3 className="recrutement-pourquoi__title">Pourquoi rejoindre Syslearn Group plutôt qu'ailleurs</h3>
            <p className="recrutement-pourquoi__text">
              Nous ne cherchons pas à recruter vite pour combler un trou dans un planning, une pratique qui 
              alimente justement la pénurie de compétences que subit tout le secteur. Nous cherchons des profils 
              qui veulent se spécialiser, monter en expertise, et voir concrètement l'impact de leur travail, 
              que ce soit sur un système critique, un logiciel embarqué ou une plateforme utilisée par des 
              milliers de développeurs.
            </p>
          </div>

          <div className="recrutement-change">
            <h3 className="recrutement-change__title">Ce que ça change concrètement pour vous</h3>
            <div className="recrutement-change__grid">
              {changements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="recrutement-change__card">
                    <div className="recrutement-change__card-icon">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h4 className="recrutement-change__card-title">{item.title}</h4>
                    <p className="recrutement-change__card-desc">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="recrutement-cta">
            <h3 className="recrutement-cta__title">Une offre qui vous correspond ?</h3>
            <p className="recrutement-cta__text">
              Ne laissez pas votre profil se noyer dans une pile de CV standardisés. Parlons directement de la 
              mission qui vous correspond.
            </p>
            <Link
              href="/carrieres/metiers"
              className="recrutement-cta__btn"
            >
              Voir toutes les offres et postuler 
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}