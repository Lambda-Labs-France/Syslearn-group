import Link from "next/link";
import { 
  Sparkles, 
  Filter, 
  PenTool, 
  Layers,
  CheckCircle2,
  Users,
  GitBranch,
  ExternalLink
} from "lucide-react";
import "../../../styles/nos-entites/stackjobs.css";

export const metadata = {
  title: "StackJobs",
  description: "Plus de 4 000 offres d'emploi tech en France sur StackJobs. Matching IA entre développeurs, data scientists et entreprises qui recrutent.",
};

export default function StackJobsPage() {
  const features = [
    { icon: Sparkles, text: "Matching par intelligence artificielle entre profils et offres" },
    { icon: Filter, text: "Filtrage par stack technique précis : Python, C++, Go, React, Kafka, et plus de 40 technologies référencées" },
    { icon: PenTool, text: "Rédaction d'offres assistée par IA pour les recruteurs" },
    { icon: Layers, text: "Base 100 % tech & engineering, sans dilution avec d'autres secteurs d'activité" },
  ];

  const raisons = [
    { icon: CheckCircle2, text: "Un matching qui réduit le bruit  moins de candidatures hors-sujet, moins d'offres non pertinentes" },
    { icon: Users, text: "Une communauté de recruteurs déjà exigeants sur la qualité technique des profils" },
    { icon: GitBranch, text: "Une intégration directe avec PointerLab et Syslearn pour les offres du groupe" },
  ];

  const stackjobsUrl = "https://www.stackjobs.com?utm_source=syslearn-groupe&utm_medium=website&utm_campaign=entite_stackjobs";

  return (
    <main className="stackjobs-page">
      <section className="stackjobs-hero">
        <div className="stackjobs-hero__inner">
          <div className="stackjobs-hero__content">
            <div>
              <span className="stackjobs-hero__badge">StackJobs</span>
              <h1 className="stackjobs-hero__title">
                StackJobs : la plateforme de recrutement tech qui matche vraiment
              </h1>
            </div>
            <Link 
              href={stackjobsUrl}
              target="_blank" 
              rel=" dofollow noopener noreferrer"
              className="stackjobs-hero__btn"
            >
              Visiter le site de StackJobs
              <ExternalLink size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="stackjobs-section">
        <div className="stackjobs-section__inner">
          <div className="stackjobs-section__grid">
            <div className="stackjobs-section__text">
              <h2 className="stackjobs-section__title">Présentation</h2>
              <p>
                Des milliers d'offres disponibles, mais rarement adaptées à votre profil réel : c'est le problème 
                que StackJobs a été conçue pour résoudre.
              </p>
              <p>
                La plateforme réunit plus de 4 000 offres actives en développement, data et cloud, avec un moteur 
                de matching par intelligence artificielle qui croise votre stack technique, votre expérience et vos 
                préférences avec les besoins réels des recruteurs  pas seulement des mots-clés repérés dans un CV.
              </p>
              <p>
                Développeurs, data scientists, ingénieurs cloud ou spécialistes cybersécurité y créent un profil 
                en quelques minutes, avec la possibilité de valoriser un GitHub ou des projets personnels plutôt 
                qu'un simple CV formaté.
              </p>
            </div>
            <div className="stackjobs-section__image">
              <img
                src="https://picsum.photos/seed/stackjobs-presentation/600/400"
                alt="StackJobs"
                className="stackjobs-section__img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="stackjobs-features">
        <div className="stackjobs-features__inner">
          <h2 className="stackjobs-features__title">Fonctionnalités clés</h2>
          <div className="stackjobs-features__grid">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="stackjobs-feature-card">
                  <div className="stackjobs-feature-card__icon">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <p className="stackjobs-feature-card__text">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="stackjobs-raisons">
        <div className="stackjobs-raisons__inner">
          <h2 className="stackjobs-raisons__title">
            Pourquoi StackJobs plutôt qu'un job board généraliste
          </h2>
          <div className="stackjobs-raisons__grid">
            {raisons.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="stackjobs-raison-card">
                  <div className="stackjobs-raison-card__icon">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <p className="stackjobs-raison-card__text">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="stackjobs-faq">
        <div className="stackjobs-faq__inner">
          <h2 className="stackjobs-faq__title">Questions fréquentes</h2>
          <div className="stackjobs-faq__list">
            <div className="stackjobs-faq-item">
              <h3 className="stackjobs-faq-item__question">StackJobs est-elle gratuite pour les candidats ?</h3>
              <p className="stackjobs-faq-item__answer">
                Oui, la création de profil et la candidature aux offres sont gratuites pour les candidats.
              </p>
            </div>
            <div className="stackjobs-faq-item">
              <h3 className="stackjobs-faq-item__question">Quels types de postes trouve-t-on sur StackJobs ?</h3>
              <p className="stackjobs-faq-item__answer">
                Principalement des postes en développement (front, back, mobile), data science, cloud, DevOps et 
                cybersécurité, en CDI comme en mission freelance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}