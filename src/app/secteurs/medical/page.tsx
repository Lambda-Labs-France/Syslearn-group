import Link from "next/link";
import { 
  Heart, 
  Scan, 
  Cpu, 
  Eye,
  Monitor,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import "../../../styles/secteurs/medical.css";

export const metadata = {
  title: "Médical",
  description: "Syslearn Group développe des logiciels d'imagerie médicale et des interfaces de dispositifs cliniques avec l'écosystème C++, choisi pour sa robustesse face aux contraintes réglementaires MDR et AI Act.",
};

export default function MedicalPage() {
  const expertises = [
    { icon: Scan, text: "Imagerie médicale 3D en temps réel" },
    { icon: Monitor, text: "Interfaces homme-machine pour dispositifs cliniques" },
    { icon: Cpu, text: "Logiciel embarqué pour équipements médicaux" },
    { icon: Eye, text: "Vision par ordinateur appliquée au diagnostic" },
  ];

  return (
    <main className="medical-page">
      <section className="medical-hero">
        <div className="medical-hero__inner">
          <div className="medical-hero__content">
            <div>
              <span className="medical-hero__badge">Secteur</span>
              <h1 className="medical-hero__title">Médical : conseil et ingénierie sur mesure</h1>
              
            </div>
          </div>
        </div>
      </section>

      <section className="medical-content">
        <div className="medical-content__inner">
          <div className="medical-content__intro">
            <p>
              Dans le médical, un bug n'est jamais qu'un bug , c'est potentiellement un risque pour un patient. 
              <strong>Syslearn Group</strong> développe des logiciels d'imagerie et des interfaces de dispositifs 
              cliniques en s'appuyant sur l'écosystème <strong>C++</strong>, choisi précisément pour sa robustesse 
              et sa capacité à tenir des contraintes temps réel strictes.
            </p>
          </div>

          <div className="medical-content__block">
            <h2 className="medical-content__title">Le contexte</h2>
            <p>
              Les dispositifs médicaux et logiciels d'imagerie 3D en temps réel exigent une précision extrême et une 
              conformité réglementaire stricte, dans un secteur où la fiabilité logicielle a un impact direct sur 
              les soins.
            </p>
            <p>
              La France compte aujourd'hui environ <strong>1 500 entreprises</strong> actives sur le marché des 
              dispositifs médicaux, en très large majorité des TPE et PME. Ce tissu industriel évolue dans un cadre 
              réglementaire de plus en plus dense : les échéances de mise en conformité au règlement européen 
              <strong>MDR</strong> se resserrent, avec une obligation de conformité pour les dispositifs de classe C 
              dès mai 2026, tandis que le durcissement des exigences de cybersécurité s'accélère en parallèle  les 
              entités de santé classées « essentielles » devront répondre à des audits de cybersécurité dès début 
              2026, sous peine d'amendes pouvant atteindre <strong>10 millions d'euros</strong>.
            </p>
            <p>
              L'intelligence artificielle amplifie encore ces exigences. La quasi-totalité des dispositifs médicaux 
              intégrant de l'IA  logiciels d'aide au diagnostic, imagerie autonome, systèmes de triage  sont 
              classés « à haut risque » par le règlement européen sur l'intelligence artificielle. Les obligations 
              de fond (documentation, gestion des risques, supervision humaine) restent applicables même si leur 
              calendrier a été partiellement ajusté à l'échelle européenne pour les dispositifs médicaux au cours 
              de l'année 2026, avec une application complète attendue pour les systèmes incorporés dans des produits 
              réglementés dès 2027-2028.
            </p>
          </div>

          <div className="medical-content__block">
            <h2 className="medical-content__title">Expertises mobilisées</h2>
            <div className="medical-expertises">
              {expertises.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="medical-expertise">
                    <div className="medical-expertise__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="medical-expertise__text">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="medical-content__image-wrapper">
            <img
              src="/images/secteur-medical.png"
              alt="Secteur de l'énergie - Syslearn Group"
              className="medical-content__image"
            />
          </div>
          <div className="medical-content__block">
            <h2 className="medical-content__title">Pourquoi la fiabilité logicielle est non négociable dans le médical</h2>
            <p>
              Un dispositif médical n'a pas droit à l'approximation, car ses défauts ne se mesurent pas seulement 
              en coût ou en délai, mais potentiellement en conséquences cliniques directes. Un écart d'affichage 
              sur une image de guidage chirurgical, une latence excessive sur un signal vital, ou une imprécision 
              dans une mesure de dosage peuvent avoir un impact immédiat sur le patient.
            </p>
            <p>
              Cette réalité impose une culture de développement radicalement différente de celle des logiciels 
              grand public : chaque fonctionnalité doit être spécifiée, tracée et validée avant d'atteindre un 
              environnement clinique.
            </p>
          </div>

          <div className="medical-content__block">
            <h2 className="medical-content__title">Un cadre réglementaire parmi les plus exigeants du numérique</h2>
            <p>
              Peu de secteurs logiciels cumulent autant de strates réglementaires que le médical : 
              <strong>MDR</strong> pour la conformité du dispositif, <strong>ISO 13485</strong> pour le système de 
              management de la qualité, <strong>NF EN 62366-1</strong> pour l'aptitude à l'utilisation, 
              <strong>RGPD</strong> et hébergement de données de santé (<strong>HDS</strong>) pour les données 
              patients, et désormais l'<strong>AI Act</strong> pour les dispositifs intégrant de l'intelligence 
              artificielle.
            </p>
            <p>
              En France, l'<strong>ANSM</strong> reste l'autorité compétente pour la surveillance des dispositifs 
              médicaux, tandis que la <strong>Haute Autorité de Santé</strong> encadre l'évaluation clinique des 
              dispositifs intégrant de l'IA.
            </p>
          </div>

          <div className="medical-content__block">
            <h2 className="medical-content__title">Pourquoi l'écosystème C++ intervient dans le médical</h2>
            <p>
              C'est précisément parce que le contrôle des ressources matérielles et des délais d'exécution est une 
              exigence absolue que l'écosystème <strong>C++</strong> conserve une place centrale dans le développement 
              de logiciels médicaux critiques. Il permet de maîtriser finement la latence d'un flux d'imagerie, la 
              synchronisation d'un capteur ou la fiabilité d'un pilotage temps réel  des garanties que peu 
              d'environnements de développement offrent au même niveau.
            </p>
          </div>

          <div className="medical-content__block">
            <h2 className="medical-content__title">La vision par ordinateur au service du diagnostic</h2>
            <p>
              Sur le terrain de l'imagerie et du diagnostic assisté, la vision par ordinateur occupe une place 
              croissante : détection d'anomalies pulmonaires, mammaires ou neurologiques, aide au centrage lors 
              d'un examen, ou analyse prédictive de signaux cliniques.
            </p>
            <p>
              Ces algorithmes n'ont de valeur clinique que s'ils s'intègrent dans une chaîne logicielle capable de 
              garantir leur temps de réponse et la fiabilité de leur exécution  un point de jonction naturel entre 
              l'écosystème C++ et les couches d'intelligence artificielle appliquées au diagnostic.
            </p>
          </div>

          <div className="medical-content__block">
            <h2 className="medical-content__title">Ce que cela implique concrètement</h2>
            <p>
              Développer un logiciel médical ne se résume donc jamais à un choix technologique isolé : c'est un 
              engagement de bout en bout sur la fiabilité, la traçabilité et la conformité réglementaire, du 
              premier prototype jusqu'à la surveillance post-commercialisation.
            </p>
            <p>
              C'est cette double exigence  maîtrise de l'écosystème C++ et compréhension fine des normes du 
              secteur  que <strong>Syslearn Group</strong> met au service de ses clients du médical, de la 
              conception du dispositif jusqu'à sa mise sur le marché.
            </p>
          </div>
        </div>
      </section>

      <section className="medical-cta">
        <div className="medical-cta__inner">
          <div className="medical-cta__content">
            <h2 className="medical-cta__title">Prêt à discuter de votre projet ?</h2>
            <p className="medical-cta__text">
              Découvrez comment les entités de Syslearn Group peuvent vous accompagner dans vos projets du secteur médical.
            </p>
            <div className="medical-cta__actions">
              <Link href="https://www.syslearn.fr/qui-sommes-nous/secteurs-dactivites" className="medical-cta__btn medical-cta__btn--primary">
                Découvrir Syslearn
                <ExternalLink size={18} />
              </Link>
              <Link href="https://www.pointerlab.fr/secteurs/medical" className="medical-cta__btn medical-cta__btn--primary">
                Découvrir PointerLab
                <ExternalLink size={18} />
              </Link>
              <Link href="https://www.stackjobs.com/sectors/medical" className="medical-cta__btn medical-cta__btn--primary">
                Découvrir StackJobs
                <ExternalLink size={18} />
              </Link>
              <Link href="/contact" className="medical-cta__btn medical-cta__btn--secondary">
                Discuter de votre projet Médical
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}