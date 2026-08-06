import Link from "next/link";
import { 
  Briefcase, 
  Code2, 
  Users, 
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import "../../styles/carrieres/carrieres.css";

export const metadata = {
  title: "Carrières | Rejoindre Syslearn Group - Syslearn, PointerLab, StackJobs",
  description: "Consultant IT, ingénieur C++/Qt ou équipe produit tech : découvrez les métiers de Syslearn Group et postulez dès aujourd'hui via StackJobs.",
};

export default function CarrieresPage() {
  const metiers = [
    {
      icon: Briefcase,
      name: "Consultant informatique",
      entity: "Syslearn",
      description: "Missions généralistes en énergie, défense, industrie, avec une vraie diversité de contextes clients.",
    },
    {
      icon: Code2,
      name: "Ingénieur logiciel C++ / Qt",
      entity: "PointerLab",
      description: "Simulation 3D, médical, aéronautique, sur des projets où la technique compte vraiment.",
    },
    {
      icon: Users,
      name: "Équipes produit & tech",
      entity: "StackJobs",
      description: "Développement de la plateforme, amélioration continue du moteur de matching IA.",
    },
  ];

  const raisons = [
    "Un modèle horizontal : deux strates hiérarchiques, pas dix",
    "Une transparence totale sur les objectifs et les marges de votre mission",
    "Une trajectoire d'évolution possible vers l'association",
    "Une spécialisation technique reconnue plutôt qu'une promesse généraliste diluée",
  ];

  const faqs = [
    {
      question: "Comment postuler à une offre du groupe ?",
      answer: "Toutes les offres actives sont centralisées sur StackJobs. Une candidature spontanée reste possible directement depuis la page Carrières du site groupe.",
    },
    {
      question: "Les consultants du groupe sont-ils salariés ou freelances ?",
      answer: "Les deux statuts coexistent selon l'entité et la mission : salariat classique, portage salarial, ou freelance pour certaines missions PointerLab et Syslearn.",
    },
  ];

  return (
    <main className="carrieres-page">
      <section className="carrieres-hero">
        <div className="carrieres-hero__inner">
          <h1 className="carrieres-hero__title">
            Carrières : rejoindre un groupe où la spécialisation technique paie vraiment
          </h1>
        </div>
      </section>

      <section className="carrieres-intro">
        <div className="carrieres-intro__inner">
          <p className="carrieres-intro__text">
            On vous a peut-être déjà vendu la « culture d'entreprise » d'une ESN. Chez Syslearn Groupe, on préfère
            parler concrètement : peu de strates hiérarchiques, des marges connues de tous, et la possibilité réelle
            de devenir associé si vous le souhaitez. C'est le modèle que PointerLab a rodé sur le C++/Qt, et que
            Syslearn comme StackJobs appliquent à leur façon.
          </p>
        </div>
      </section>

      <section className="carrieres-metiers">
        <div className="carrieres-metiers__inner">
          <h2 className="carrieres-metiers__title">Nos métiers</h2>
          <div className="carrieres-metiers__grid">
            {metiers.map((metier, index) => {
              const Icon = metier.icon;
              return (
                <div key={index} className="carrieres-metier">
                  <div className="carrieres-metier__icon">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="carrieres-metier__name">{metier.name}</h3>
                    <span className="carrieres-metier__entity">{metier.entity}</span>
                    <p className="carrieres-metier__desc">{metier.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="carrieres-raisons">
        <div className="carrieres-raisons__inner">
          <h2 className="carrieres-raisons__title">Pourquoi nous rejoindre</h2>
          <div className="carrieres-raisons__grid">
            {raisons.map((raison, index) => (
              <div key={index} className="carrieres-raison">
                <CheckCircle2 size={20} strokeWidth={1.5} className="carrieres-raison__icon" />
                <span className="carrieres-raison__text">{raison}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="carrieres-cta">
        <div className="carrieres-cta__inner">
          <h3 className="carrieres-cta__title">Prêt à rejoindre l'aventure ?</h3>
          <p className="carrieres-cta__text">
            Découvrez nos offres ou déposez une candidature spontanée.
          </p>
          <div className="carrieres-cta__actions">
            <Link href="/carrieres/recrutement" className="carrieres-cta__btn carrieres-cta__btn--primary">
              Voir les offres
              <ArrowRight size={18} />
            </Link>
            <Link href="/carrieres/candidature-spontanee" className="carrieres-cta__btn carrieres-cta__btn--secondary">
              Candidature spontanée
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="carrieres-faq">
        <div className="carrieres-faq__inner">
          <h2 className="carrieres-faq__title">Questions fréquentes</h2>
          <div className="carrieres-faq__list">
            {faqs.map((faq, index) => (
              <div key={index} className="carrieres-faq-item">
                <h3 className="carrieres-faq-item__question">{faq.question}</h3>
                <p className="carrieres-faq-item__answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}