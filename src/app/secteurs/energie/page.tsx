import Link from "next/link";
import { 
  Zap, 
  BarChart3, 
  Monitor, 
  Wifi,
  Shield,
  Database,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import "../../../styles/secteurs/energie.css";

export const metadata = {
  title: "Énergie",
  description: "Le secteur de l'énergie affiche une croissance de 6,0 % en 2026. Syslearn Group accompagne vos projets Java, cybersécurité et IoT avec une expertise des contraintes réglementaires NIS2.",
};

export default function EnergiePage() {
  const expertises = [
    { icon: Database, text: "Applications métier pour la gestion et le pilotage énergétique" },
    { icon: BarChart3, text: "Business intelligence et supervision de la donnée" },
    { icon: Monitor, text: "Interfaces homme-machine pour environnements critiques" },
    { icon: Wifi, text: "IoT industriel et remontée de données terrain" },
  ];

  return (
    <main className="energie-page">
      <section className="energie-hero">
        <div className="energie-hero__inner">
          <div className="energie-hero__content">
            <div>
              <span className="energie-hero__badge">Secteur</span>
              <h1 className="energie-hero__title">Énergie : conseil et ingénierie sur mesure</h1>
              
            </div>
          </div>
        </div>
      </section>

      <section className="energie-content">
        <div className="energie-content__inner">
          <div className="energie-content__intro">
            <p>
              Le secteur de l'énergie impose des cycles de développement longs, une forte exigence de fiabilité 
              et un cadre réglementaire dense. <strong>Syslearn Group</strong> accompagne ses clients de ce 
              secteur en conseil et ingénierie informatique, avec une connaissance fine de ces contraintes 
              spécifiques.
            </p>
          </div>

          <div className="energie-content__block">
            <h2 className="energie-content__title">Le contexte</h2>
            <p>
              Entre transition énergétique, digitalisation des infrastructures et exigences de cybersécurité 
              renforcées, les acteurs de l'énergie doivent moderniser leurs systèmes d'information sans jamais 
              compromettre la continuité de service.
            </p>
          </div>

          <div className="energie-content__block">
            <h2 className="energie-content__title">Expertises mobilisées</h2>
            <div className="energie-expertises">
              {expertises.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="energie-expertise">
                    <div className="energie-expertise__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="energie-expertise__text">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="energie-content__block">
            <h2 className="energie-content__title">Pourquoi le choix du langage compte dans l'énergie</h2>
            <p>
              Le secteur de l'énergie n'est pas un terrain neutre pour la technique. C'est aujourd'hui l'un des 
              secteurs clients les plus dynamiques du marché numérique français : l'énergie affiche une croissance 
              de <strong>6,0 % en 2026</strong>, devant les services et la banque, portée par la modernisation 
              accélérée des systèmes d'information.
              <Link 
                href="https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/transformation-numerique-des-0" 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="energie-content__link"
              >
                <ExternalLink size={14} />
                France Num
              </Link>
            </p>
            <p>
              Cette dynamique s'explique en grande partie par la nécessité de faire cohabiter des systèmes 
              historiques, construits pour durer plusieurs décennies, avec de nouvelles exigences de supervision, 
              de données temps réel et de sécurité.
            </p>
            <p>
              C'est précisément dans ce contexte que le choix du langage et la rigueur avec laquelle il est mis 
              en œuvre devient stratégique. Un socle applicatif comme <strong>Java</strong>, connu pour sa stabilité, 
              sa portabilité et sa capacité à tenir dans la durée sur des systèmes d'information critiques, reste 
              une référence naturelle pour les applications métier qui pilotent la production, la distribution ou 
              la gestion énergétique des systèmes qui doivent rester opérationnels sur des cycles de vie bien plus 
              longs que ceux d'une application grand public classique.
            </p>
          </div>

          <div className="energie-content__block">
            <h2 className="energie-content__title">Une exposition cyber en forte hausse</h2>
            <p>
              Ce choix technique s'inscrit aussi dans un contexte de menace grandissante. En France, l'énergie est 
              aujourd'hui le secteur le plus visé par les intrusions ciblant les systèmes industriels : les attaques 
              visant les systèmes SCADA du secteur énergétique représentent <strong>13 %</strong> de l'ensemble des 
              cyberattaques détectées en France en 2025.
            </p>
            <p>
              Plus largement, le secteur de l'énergie concentre déjà plus de <strong> 8 %</strong> des cyberattaques 
              recensées, le seul segment électrique représentant près de <strong> 44 %</strong> de ces incidents , 
              une tendance confirmée par le dernier panorama annuel de l'ANSSI sur les menaces informatiques.
              <Link 
                href="https://shattered.io/fr/panorama-cybermenace-anssi-2025/" 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="energie-content__link"
              >
                <ExternalLink size={14} />
                Techniques de l'Ingénieur
              </Link>
            </p>
            <p>
              La bascule vers des infrastructures connectées amplifie encore ce risque : le secteur de l'énergie a 
              vu les attaques visant ses environnements IoT et technologies opérationnelles bondir de 
              <strong> 387 % en un an</strong>.
              <Link 
                href="https://www.i-leadconsulting.com/cyberattaques-france-2026/" 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="energie-content__link"
              >
                <ExternalLink size={14} />
                Ilead Consulting
              </Link>
            </p>
            <p>
              Face à cette pression, le cadre réglementaire se durcit fortement à l'échelle européenne. La directive 
              <strong> NIS2</strong> couvre désormais plus de 15 000 entités réparties dans dix-huit secteurs, dont 
              l'énergie, avec des obligations renforcées de gouvernance, de gestion des risques et de notification 
              des incidents à l'ANSSI.
            </p>
          </div>

          <div className="energie-content__block">
            <h2 className="energie-content__title">Ce que cela implique concrètement</h2>
            <p>
              Dans ce contexte, le langage de développement n'est jamais un simple choix technique : c'est un 
              engagement sur la maintenabilité, la traçabilité et la résistance dans le temps d'un système.
            </p>
            <p>
              C'est cette approche que <strong>Syslearn Group</strong> met au service de ses clients du secteur 
              énergétique, en combinant maîtrise de l'écosystème Java, exigence méthodologique et compréhension 
              fine des contraintes réglementaires propres au secteur.
            </p>
          </div>
        </div>
      </section>

      <section className="energie-cta">
        <div className="energie-cta__inner">
          <div className="energie-cta__content">
            <h2 className="energie-cta__title">Prêt à discuter de votre projet ?</h2>
            <p className="energie-cta__text">
              Découvrez comment les entités de Syslearn Group peuvent vous accompagner dans vos projets du secteur énergétique.
            </p>
            <div className="energie-cta__actions">
              <Link href="https://www.syslearn.fr/qui-sommes-nous/secteurs-dactivites" className="energie-cta__btn energie-cta__btn--primary">
                Découvrir Syslearn
                <ExternalLink size={18} />
              </Link>
              <Link href="https://www.pointerlab.fr/secteurs/energie" className="energie-cta__btn energie-cta__btn--primary">
                Découvrir PointerLab
                <ExternalLink size={18} />
              </Link>
              <Link href="https://www.stackjobs.com/sectors/energie" className="energie-cta__btn energie-cta__btn--primary">
                Découvrir StackJobs
                <ExternalLink size={18} />
              </Link>
              <Link href="/contact" className="energie-cta__btn energie-cta__btn--secondary">
                Discuter de votre projet Énergie
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}