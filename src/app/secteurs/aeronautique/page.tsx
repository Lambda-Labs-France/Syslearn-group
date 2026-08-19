import Link from "next/link";
import { 
  Plane, 
  Box, 
  Cpu, 
  Monitor,
  Calculator,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import "../../../styles/secteurs/aeronautique.css";

export const metadata = {
  title: "Aéronautique",
  description: "Syslearn Group conçoit des systèmes embarqués et logiciels de simulation pour l'aéronautique avec l'écosystème C++. Conformité DO-178C, certification et fiabilité pour vos projets critiques.",
};

export default function AeronautiquePage() {
  const expertises = [
    { icon: Box, text: "Simulation 3D et environnements de vol" },
    { icon: Cpu, text: "Systèmes embarqués temps réel" },
    { icon: Monitor, text: "Interfaces homme-machine cockpit" },
    { icon: Calculator, text: "Logiciel scientifique et calcul haute performance" },
  ];

  return (
    <main className="aeronautique-page">
      <section className="aeronautique-hero">
        <div className="aeronautique-hero__inner">
          <div className="aeronautique-hero__content">
            <div>
              <span className="aeronautique-hero__badge">Secteur</span>
              <h1 className="aeronautique-hero__title">Aéronautique : conseil et ingénierie sur mesure</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="aeronautique-content">
        <div className="aeronautique-content__inner">
          <div className="aeronautique-content__intro text-justify-hyphens">
            <p>
              Un système avionique ne tolère pas l'approximation. <strong>Syslearn Group</strong> conçoit des 
              logiciels de simulation et des systèmes embarqués pour l'aéronautique, sur des environnements où 
              chaque ligne de code peut être soumise à certification.
            </p>
          </div>

          <div className="aeronautique-content__block">
            <h2 className="aeronautique-content__title">Le contexte</h2>
            <p className="text-justify-hyphens">
              Simulation de vol, systèmes de communication embarqués, interfaces cockpit : les projets 
              aéronautiques demandent une maîtrise fine du <strong>C++ temps réel</strong> et une culture de la 
              fiabilité logicielle poussée à l'extrême.
            </p>
            <p className="text-justify-hyphens">
              Cette exigence s'inscrit dans une filière parmi les plus stratégiques de l'industrie française. 
              En 2025, l'aérospatiale française a réalisé un chiffre d'affaires de
              <strong> 85,6 milliards d'euros</strong>, en hausse de <strong> 12 %</strong> sur un an, portée par 
              la reprise du trafic aérien, des exportations solides et une montée en cadence industrielle continue.
            </p>
            <p className="text-justify-hyphens">
              Le secteur emploie désormais <strong>230 500 salariés</strong> en France, après une création nette de
              <strong> 7 000 emplois</strong> en 2025, et prévoit environ <strong> 20 000 recrutements</strong> 
              supplémentaires en 2026. Les ingénieurs et cadres techniques constituent une part majeure de ces 
              recrutements : la filière aéronautique et spatiale est aujourd'hui le <strong> premier employeur 
              d'ingénieurs en France</strong>, selon les données consolidées par IESF.
            </p>
            <p className="text-justify-hyphens">
              Cette dynamique se heurte cependant à une tension structurelle sur les compétences : la France forme 
              chaque année environ <strong> 40 000 ingénieurs</strong>, alors que les besoins cumulés de l'aéronautique, 
              du spatial et des autres filières industrielles nécessiteraient près du double. Dans ce contexte de 
              pénurie, la maîtrise de compétences rares comme le <strong> développement C++ temps réel</strong> sur 
              systèmes critiques devient un avantage déterminant pour les entreprises du secteur.
            </p>
          </div>

          <div className="aeronautique-content__block">
            <h2 className="aeronautique-content__title">Expertises mobilisées</h2>
            <div className="aeronautique-expertises">
              {expertises.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="aeronautique-expertise">
                    <div className="aeronautique-expertise__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="aeronautique-expertise__text ">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="aeronautique-content__image-wrapper">
            <img
              src="/images/secteur-aeronautique.jpg"
              alt="Secteur de l'aéronautique - Syslearn Group"
              className="aeronautique-content__image"
            />
          </div>
          <div className="aeronautique-content__block">
            <h2 className="aeronautique-content__title">Pourquoi la certification structure tout le développement logiciel</h2>
            <p className="text-justify-hyphens">
              L'aéronautique est l'un des rares secteurs où un logiciel doit littéralement obtenir une autorisation 
              avant de voler. Tout logiciel destiné à des systèmes critiques pour la sécurité des vols doit 
              démontrer sa conformité à la norme <strong>DO-178C</strong>, un référentiel qui encadre la 
              planification, le développement, la vérification et la certification des logiciels embarqués.
            </p>
            <p className="text-justify-hyphens">
              Cette norme classe les logiciels selon <strong>cinq niveaux de criticité</strong>, du niveau A 
              (catastrophique en cas de défaillance, pouvant entraîner des pertes de vies humaines) jusqu'au 
              niveau E (sans impact sur la sécurité). Sans cette conformité, il est pratiquement impossible 
              d'obtenir l'agrément d'autorités comme la <strong>FAA</strong> ou l'<strong>AESA</strong>.
            </p>
            <p className="text-justify-hyphens">
              Cette structure impose une discipline de développement où chaque exigence doit être tracée jusqu'au 
              code, chaque ligne de code jusqu'aux tests, et chaque test jusqu'à un objectif de couverture précis 
              pouvant aller jusqu'à une couverture complète des conditions et décisions modifiées 
              (<strong>MC/DC</strong>) pour les logiciels de niveau A.
            </p>
          </div>

          <div className="aeronautique-content__block">
            <h2 className="aeronautique-content__title">Pourquoi l'écosystème C++ intervient dans l'aéronautique</h2>
            <p className="text-justify-hyphens">
              C'est dans ce cadre extrêmement normé que l'écosystème <strong>C++</strong> conserve un rôle central. 
              Il permet un contrôle fin des ressources matérielles et des délais d'exécution, une exigence 
              incontournable pour les systèmes de commandes de vol, de navigation ou de communication embarquée, 
              où le moindre écart de timing peut compromettre la sûreté d'un aéronef.
            </p>
            <p className="text-justify-hyphens">
              Cette même rigueur s'applique aux logiciels de simulation de vol, qui doivent reproduire fidèlement 
              le comportement physique d'un appareil en temps réel, sans latence perceptible pour l'utilisateur.
            </p>
          </div>

          <div className="aeronautique-content__block">
            <h2 className="aeronautique-content__title">Ce que cela implique concrètement</h2>
            <p className="text-justify-hyphens">
              Développer un logiciel aéronautique, ce n'est donc jamais seulement écrire du code : c'est construire 
              une chaîne complète de traçabilité, de vérification et de certification, de la première exigence 
              jusqu'au dernier test de couverture.
            </p>
            <p className="text-justify-hyphens">
              C'est cette double maîtrise (expertise technique de l'écosystème <strong>C++ temps réel</strong> et 
              culture rigoureuse de la certification) que <strong>Syslearn Group</strong> met au service de ses 
              clients de l'aéronautique.
            </p>
          </div>
        </div>
      </section>

      <section className="aeronautique-cta">
        <div className="aeronautique-cta__inner">
          <div className="aeronautique-cta__content">
            <h2 className="aeronautique-cta__title">Prêt à discuter de votre projet ?</h2>
            <p className="aeronautique-cta__text text-justify-hyphens">
              Découvrez comment les entités de Syslearn Group peuvent vous accompagner dans vos projets aéronautiques.
            </p>
            <div className="aeronautique-cta__actions">
              <Link href="https://www.pointerlab.fr/secteurs/aeronautique" className="aeronautique-cta__btn aeronautique-cta__btn--primary">
                Découvrir PointerLab
                <ExternalLink size={18} />
              </Link>
              <Link href="https://www.stackjobs.com/sectors/aeronautique" className="aeronautique-cta__btn aeronautique-cta__btn--primary">
                Découvrir StackJobs
                <ExternalLink size={18} />
              </Link>
              <Link href="/contact" className="aeronautique-cta__btn aeronautique-cta__btn--secondary">
                Discuter de votre projet Aéronautique
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}