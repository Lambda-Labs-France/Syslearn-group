import Link from "next/link";
import { 
  Sparkles, 
  Filter, 
  PenTool, 
  Layers,
  CheckCircle2,
  Users,
  GitBranch,
  ExternalLink,
  Brain,
  Code2,
  Shield,
  Cloud
} from "lucide-react";
import "../../../styles/nos-entites/stackjobs.css";

export const metadata = {
  title: "StackJobs",
  description: "StackJobs est une plateforme de recrutement tech avec +4000 offres actives. Matching IA pour développeurs, data scientists, ingénieurs cloud et spécialistes cybersécurité.",
};

export default function StackJobsPage() {
  const features = [
    { icon: Brain, text: "Moteur de matching par IA qui croise votre stack technique, votre expérience et vos préférences avec les besoins réels des recruteurs" },
    { icon: Filter, text: "Plus de 40 technologies référencées : Python, C++, Go, React, Kafka, et bien plus encore" },
    { icon: Code2, text: "Valorisez votre GitHub, vos projets personnels ou contributions open source pour une vision fidèle de votre travail" },
    { icon: Layers, text: "Base 100 % Tech & Engineering : développement, data, cloud, cybersécurité, systèmes embarqués et ingénierie industrielle" },
  ];

  const raisons = [
    { icon: CheckCircle2, text: "Un matching qui réduit le bruit : moins de candidatures hors-sujet, moins d'offres non pertinentes" },
    { icon: Users, text: "Une communauté de recruteurs exigeants sur la qualité technique des profils" },
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
                StackJobs : La référence du recrutement tech & engineering en France
              </h1>
            </div>
            <Link 
              href={stackjobsUrl}
              target="_blank" 
              rel="dofollow noopener noreferrer"
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
              <p className="text-justify-hyphens">
                Des milliers d'offres disponibles, mais rarement adaptées à votre profil réel : c'est le problème 
                que StackJobs a été conçue pour résoudre.
              </p>
              <p className="text-justify-hyphens">
                La plupart des plateformes d'emploi fonctionnent encore par correspondance de mots-clés : un CV qui 
                contient les bons termes remonte, celui qui ne les contient pas disparaît même si le profil 
                correspond parfaitement au poste. StackJobs part d'un constat différent : un bon matching ne se 
                joue pas sur la forme d'un CV, mais sur la réalité d'un parcours technique.
              </p>
            </div>
            <div className="stackjobs-section__image">
              <img
                src="/images/entites/stackjobs-Page1.jpg"
                alt="StackJobs - Plateforme Tech & Engineering"
                className="stackjobs-section__img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="stackjobs-section stackjobs-section--alt">
        <div className="stackjobs-section__inner">
          <div className="stackjobs-section__grid stackjobs-section__grid--reverse">
            <div className="stackjobs-section__text">
              <h2 className="stackjobs-section__title">Un moteur de matching pensé pour la Tech & Engineering</h2>
              <p className="text-justify-hyphens">
                La plateforme réunit plus de{" "}
                <Link 
                  href="https://www.stackjobs.com/jobs" 
                  target="_blank" 
                  rel="dofollow noopener noreferrer"
                >
                  <strong>4 000 offres actives</strong>
                </Link>{" "}
                couvrant l'ensemble de l'écosystème 
                Tech & Engineering : développement, data, cloud, 
                <Link href="/secteurs/defense" className="stackjobs-content__link"> cybersécurité </Link>, 
                <Link href="/secteurs/iot" className="stackjobs-content__link"> systèmes embarqués </Link> et ingénierie 
                industrielle.
              </p>
              <p className="text-justify-hyphens">
                Son moteur de matching par 
                <Link href="https://co-cto.fr/en/blog/lia-dans-le-developpement-logiciel-quand-lintelligence-artificielle-redefinit-les-pratiques-tech" target="_blank" rel="nofollow noopener noreferrer" className="stackjobs-content__link"> intelligence artificielle </Link> 
                croise la stack technique, l'expérience réelle et les préférences du candidat avec les besoins concrets des recruteurs, au-delà de la simple détection de mots-clés dans un document.
              </p>
              <p className="text-justify-hyphens">
                Cette approche permet de faire remonter des opportunités réellement pertinentes, y compris pour des 
                profils atypiques ou en reconversion, dont les compétences ne se résument pas à une liste de 
                technologies alignées sur une fiche de poste.
              </p>
            </div>
            <div className="stackjobs-section__image">
              <img
                src="/images/entites/stackjobsPage2.jpg"
                alt="Matching IA StackJobs"
                className="stackjobs-section__img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="stackjobs-section">
        <div className="stackjobs-section__inner">
          <div className="stackjobs-section__grid">
            <div className="stackjobs-section__text">
              <h2 className="stackjobs-section__title">Un profil qui reflète un vrai parcours technique</h2>
              <p className="text-justify-hyphens">
                Développeurs, data scientists, ingénieurs cloud ou spécialistes cybersécurité créent leur profil en 
                quelques minutes, avec la possibilité de valoriser un GitHub, des projets personnels ou des 
                <Link href="https://www.developernation.net/blog/tag/guest-post/" target="_blank" rel="nofollow noopener noreferrer" className="stackjobs-content__link"> contributions open source </Link> 
                plutôt qu'un simple CV formaté.
              </p>
              <p className="text-justify-hyphens">
                Une manière de donner aux recruteurs une vision plus fidèle de la façon dont un candidat travaille 
                réellement, au-delà des intitulés de poste et des années d'expérience.
              </p>
              <p className="text-justify-hyphens">
                Cette logique s'inscrit dans une tendance plus large observée par des acteurs comme 
                <Link href="https://www.apec.fr/" target="_blank" rel="nofollow noopener noreferrer" className="stackjobs-content__link"> l'APEC </Link> 
                sur l'évolution des critères de recrutement dans les métiers techniques, où la preuve par la pratique 
                prend une place croissante face au CV traditionnel. 
              </p>
            </div>
            <div className="stackjobs-section__image">
              <img
                src="/images/entites/stackjobsPage3.jpg"
                alt="Profil technique StackJobs"
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
                  <p className="stackjobs-feature-card__text text-justify-hyphens">
                    {item.text.includes("C++") ? (
                      <>
                        Plus de 40 technologies référencées : Python, 
                        <Link href="https://c.developpez.com/" target="_blank" rel="nofollow noopener noreferrer" className="stackjobs-content__link"> C++ </Link>, 
                        Go, React, Kafka, et bien plus encore
                      </>
                    ) : (
                      item.text
                    )}
                  </p>
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
                  <p className="stackjobs-raison-card__text text-justify-hyphens">
                    {item.text.includes("PointerLab") && item.text.includes("Syslearn") ? (
                      <>
                        Une intégration directe avec 
                        <Link href="/nos-entites/pointerlab" className="stackjobs-content__link"> PointerLab </Link> 
                        et 
                        <Link href="/nos-entites/syslearn" className="stackjobs-content__link"> Syslearn </Link> 
                        pour les offres du groupe
                      </>
                    ) : (
                      item.text
                    )}
                  </p>
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
              <p className="stackjobs-faq-item__answer text-justify-hyphens">
                Oui, la création de profil et la candidature aux offres sont gratuites pour les candidats.
              </p>
            </div>
            <div className="stackjobs-faq-item">
              <h3 className="stackjobs-faq-item__question">Quels types de postes trouve-t-on sur StackJobs ?</h3>
              <p className="stackjobs-faq-item__answer text-justify-hyphens">
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