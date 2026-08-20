import Link from "next/link";
import { 
  Shield, 
  Code2, 
  Cpu, 
  Monitor, 
  Brain,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import "../../../styles/secteurs/defense.css";

export const metadata = {
  title: "Défense",
  description: "La défense bénéficie d'un effort budgétaire inédit de 6,7 milliards d'€ en 2026. Syslearn Group accompagne vos projets embarqués, cyberdéfense et IA avec une rigueur méthodologique adaptée.",
};

export default function DefensePage() {
  const expertises = [
    { icon: Code2, text: "Développement d'applications métier sécurisées" },
    { icon: Cpu, text: "Systèmes embarqués pour environnements critiques" },
    { icon: Monitor, text: "Interfaces homme-machine à haute fiabilité" },
    { icon: Brain, text: "Intelligence artificielle et data science appliquées" },
  ];

  return (
    <main className="defense-page">
      <section className="defense-hero">
        <div className="defense-hero__inner">
          <div className="defense-hero__content">
            <div>
              <span className="defense-hero__badge">Secteur</span>
              <h1 className="defense-hero__title">Défense : conseil et ingénierie sur mesure</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="defense-content">
        <div className="defense-content__inner">
          <div className="defense-content__intro text-justify-hyphens">
            <p>
              Sur des systèmes où la fiabilité et la confidentialité sont non négociables 
              <strong> Syslearn Group</strong> intervient auprès d'acteurs du secteur de la défense avec une 
              rigueur méthodologique adaptée à ce niveau d'exigence.
            </p>
          </div>

          <div className="defense-content__block">
            <h2 className="defense-content__title">Le contexte</h2>
            <p className="text-justify-hyphens">
              Les projets défense combinent souvent contraintes réglementaires strictes, cycles longs de validation 
              et exigence de sécurité renforcée à chaque étape du développement logiciel.
            </p>
          </div>

          <div className="defense-content__block">
            <h2 className="defense-content__title">Expertises mobilisées</h2>
            <div className="defense-expertises">
              {expertises.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="defense-expertise">
                    <div className="defense-expertise__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="defense-expertise__text">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="defense-content__image-wrapper">
            <img
              src="/images/secteur-defense.png"
              alt="Secteur de la defense - Syslearn Group"
              className="defense-content__image"
            />
          </div>

          <div className="defense-content__block">
            <h2 className="defense-content__title">Pourquoi le choix du langage compte dans la défense</h2>
            <p className="text-justify-hyphens">
              La défense est aujourd'hui l'un des secteurs où l'effort budgétaire et technologique est le plus 
              soutenu en France. Le budget de la mission Défense pour 2026 augmente de 
              <strong> 6,7 milliards d'euros</strong> par rapport à 2025, soit 3,5 milliards au-delà de la 
              trajectoire initialement prévue par la loi de programmation militaire, un effort qualifié d'inédit 
              par le ministère des Armées.
            </p>
            <p className="text-justify-hyphens">
              Cette hausse s'accompagne d'un investissement ciblé sur le numérique : plus de 
              <strong> 500 millions d'euros</strong> sont fléchés vers la cyberdéfense et plus de 
              <strong> 400 millions d'euros</strong> vers l'intelligence artificielle, afin de doter la France 
              de capacités souveraines.
              <Link 
                href="https://www.info.gouv.fr/actualite/cybersecurite-le-premier-ministre-annonce-un-plan-d-action-pour-renforcer-la-protection-numerique-de-l-etat" 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="defense-content__link"
              >
                <ExternalLink size={14} />
                Info.gouv.fr
              </Link>
            </p>
            <p className="text-justify-hyphens">
              Sur le plan humain, cet effort se traduit aussi par des recrutements massifs : près de 
              <strong> 40 000 recrutements</strong> sont prévus en 2026, dont 800 postes supplémentaires ciblés 
              en priorité sur le réarmement capacitaire, la cyberdéfense, la transformation numérique et 
              l'intelligence artificielle.
              <Link 
                href="https://www.senat.fr/rap/r22-638/r22-638_mono.html" 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="defense-content__link"
              >
                <ExternalLink size={14} />
                Sénat
              </Link>
            </p>
          </div>

          <div className="defense-content__block">
            <h2 className="defense-content__title">Une exigence de fiabilité qui structure les choix techniques</h2>
            <p className="text-justify-hyphens">
              Dans ce contexte, le langage et l'architecture logicielle ne sont jamais un détail d'implémentation : 
              ce sont des garanties de robustesse sur des systèmes où une défaillance n'est pas une option. Le 
              rapport annexé à la loi de programmation militaire 2024-2030 flèche à lui seul 
              <strong> 4 milliards d'euros</strong> pour la cyberdéfense, destinés à renforcer les effectifs, 
              moderniser les capacités techniques et accompagner les entreprises du secteur de la défense.
              <Link 
                href="https://www.blog-qhse.com/lpm-2024-2030" 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="defense-content__link"
              >
                <ExternalLink size={14} />
                Blog QHSE
              </Link>
            </p>
            <p className="text-justify-hyphens">
              Cet effort cyber, réparti sur l'ensemble de la période 2024-2030, est considéré comme sans précédent 
              dans l'histoire récente de la cyberdéfense française.
            </p>
            <p className="text-justify-hyphens">
              Cette dynamique dépasse d'ailleurs le strict périmètre militaire : la loi de programmation militaire 
              rapproche progressivement le cadre français des exigences européennes <strong> NIS2</strong>, ce qui 
              pousse les entreprises accompagnant des opérateurs d'importance vitale ou des donneurs d'ordre 
              sensibles à anticiper ces standards de conformité numérique bien avant un audit.
            </p>
          </div>

          <div className="defense-content__block">
            <h2 className="defense-content__title">Ce que cela implique concrètement</h2>
            <p className="text-justify-hyphens">
              Sur des applications métier sécurisées, des systèmes embarqués critiques ou des interfaces 
              homme-machine à haute fiabilité, ce niveau d'exigence impose une discipline de développement à part : 
              validation à chaque étape, traçabilité complète du code, résistance dans la durée sur des cycles de 
              vie souvent bien plus longs que ceux du secteur civil.
            </p>
            <p className="text-justify-hyphens">
              C'est cette rigueur méthodologique que <strong> Syslearn Group</strong> met au service de ses clients 
              de la défense, en conjuguant maîtrise technique et compréhension fine des contraintes réglementaires 
              propres à ce secteur régalien.
            </p>
          </div>
        </div>
      </section>

      <section className="defense-cta">
        <div className="defense-cta__inner">
          <div className="defense-cta__content">
            <h2 className="defense-cta__title">Prêt à discuter de votre projet ?</h2>
            <p className="defense-cta__text text-justify-hyphens">
              Découvrez comment Syslearn Group peut vous accompagner dans vos projets du secteur de la défense.
            </p>
            <div className="defense-cta__actions">
              <Link href="https://www.syslearn.fr/qui-sommes-nous/secteurs-dactivites" className="defense-cta__btn defense-cta__btn--primary">
                Découvrir Syslearn
                <ExternalLink size={18} />
              </Link>
              <Link href="/contact" className="defense-cta__btn defense-cta__btn--secondary">
                Discuter de votre projet Défense
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}