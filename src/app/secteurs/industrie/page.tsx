import Link from "next/link";
import { 
  Factory, 
  Cpu, 
  Wifi, 
  Box,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import "../../../styles/secteurs/industrie.css";

export const metadata = {
  title: "Industrie",
  description: "L'industrie 4.0 exige des systèmes capables de superviser, automatiser et fiabiliser des lignes de production. Syslearn Group accompagne vos projets industriels avec une double expertise.",
};

export default function IndustriePage() {
  const expertises = [
    { icon: Factory, text: "Automatisation et supervision de lignes de production" },
    { icon: Cpu, text: "Logiciels embarqués pour équipements industriels" },
    { icon: Wifi, text: "IoT industriel et remontée de données terrain" },
    { icon: Box, text: "Interfaces 3D pour la maintenance et la formation" },
  ];

  return (
    <main className="industrie-page">
      <section className="industrie-hero">
        <div className="industrie-hero__inner">
          <div className="industrie-hero__content">
            <div>
              <span className="industrie-hero__badge">Secteur</span>
              <h1 className="industrie-hero__title">Industrie : conseil et ingénierie sur mesure</h1>
              
            </div>
          </div>
        </div>
      </section>

      <section className="industrie-content">
        <div className="industrie-content__inner">
          <div className="industrie-content__intro">
            <p>
              L'industrie 4.0 exige des systèmes capables de superviser, automatiser et fiabiliser des lignes de 
              production entières. <strong>Syslearn Group</strong> accompagne les acteurs de ce secteur en conseil 
              et ingénierie informatique, en combinant compréhension métier et expertise technique sur les systèmes 
              les plus exigeants.
            </p>
          </div>

          <div className="industrie-content__block">
            <h2 className="industrie-content__title">Le contexte</h2>
            <p>
              Entre modernisation des chaînes de production, remontée de données terrain en temps réel et 
              exigences de sécurité industrielle, les projets logiciels pour l'industrie demandent une double 
              compétence rarement réunie ailleurs : la capacité à raisonner à l'échelle d'une usine connectée, 
              et la rigueur nécessaire pour développer des systèmes qui ne tolèrent pas l'approximation.
            </p>
            <p>
              Cette transformation représente un enjeu financier considérable en France : l'adaptation de 
              l'ensemble de l'industrie manufacturière aux standards de l'industrie 4.0 nécessiterait un 
              investissement estimé à <strong>130 milliards d'euros</strong>, selon les travaux de l'Alliance 
              Industrie du Futur.
              <Link 
                href="https://www.industrie-dufutur.org/" 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="industrie-content__link"
              >
                <ExternalLink size={14} />
                Alliance Industrie du Futur
              </Link>
            </p>
            <p>
              À l'échelle mondiale, le marché de l'industrie 4.0 poursuit une croissance annuelle de 
              <strong>19,4 %</strong>, portée par l'intelligence artificielle, l'IoT et l'automatisation avancée 
              des lignes de production.
            </p>
          </div>

          <div className="industrie-content__block">
            <h2 className="industrie-content__title">Expertises mobilisées</h2>
            <div className="industrie-expertises">
              {expertises.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="industrie-expertise">
                    <div className="industrie-expertise__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="industrie-expertise__text">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="industrie-content__block">
            <h2 className="industrie-content__title">Pourquoi l'écosystème C++ intervient dans l'industrie</h2>
            <p>
              Sur les systèmes qui pilotent une ligne de production, un automate ou un équipement embarqué, la 
              contrainte n'est pas seulement fonctionnelle : elle est temporelle. Un défaut de synchronisation ou 
              un temps de réponse trop long peut arrêter une chaîne entière, voire créer un risque de sécurité 
              sur le terrain.
            </p>
            <p>
              C'est dans ce type d'environnement que l'écosystème <strong>C++</strong> conserve une place centrale, 
              précisément parce qu'il permet un contrôle fin des ressources matérielles et des délais d'exécution 
              ,deux exigences que peu d'autres écosystèmes logiciels satisfont au même niveau.
            </p>
            <p>
              Cette réalité technique explique pourquoi la modernisation de l'industrie française ne se limite pas 
              à ajouter des capteurs ou des tableaux de bord : elle suppose de faire évoluer des systèmes embarqués 
              existants, souvent conçus il y a plusieurs décennies, sans jamais compromettre leur fiabilité. 
              Le gouvernement soutient d'ailleurs directement cette dynamique, avec un objectif d'accompagnement 
              de <strong>500 PME et ETI</strong> françaises dans l'adoption de solutions d'intelligence artificielle 
              sur leurs lignes de production.
            </p>
          </div>

          <div className="industrie-content__block">
            <h2 className="industrie-content__title">Ce que cela implique concrètement</h2>
            <p>
              Sur des logiciels embarqués industriels ou des systèmes de supervision temps réel, l'écosystème C++ 
              reste ainsi le socle technique de référence, quand l'IoT industriel, la donnée et les interfaces de 
              pilotage s'appuient davantage sur des couches applicatives complémentaires.
            </p>
            <p>
              C'est cette double lecture criticité technique d'un côté, vision d'ensemble de l'usine connectée 
              de l'autre que <strong>Syslearn Group</strong> met au service de ses clients industriels, du 
              diagnostic initial jusqu'à la mise en production.
            </p>
          </div>
        </div>
      </section>

      <section className="industrie-cta">
        <div className="industrie-cta__inner">
          <div className="industrie-cta__content">
            <h2 className="industrie-cta__title">Prêt à discuter de votre projet ?</h2>
            <p className="industrie-cta__text">
              Découvrez comment les entités de Syslearn Group peuvent vous accompagner dans vos projets industriels.
            </p>
            <div className="industrie-cta__actions">
              <Link href="https://www.syslearn.fr/qui-sommes-nous/secteurs-dactivites" className="industrie-cta__btn industrie-cta__btn--primary">
                Découvrir Syslearn
                <ExternalLink size={18} />
              </Link>
              <Link href="https://www.pointerlab.fr/secteurs/industrie" className="industrie-cta__btn industrie-cta__btn--primary">
                Découvrir PointerLab
                <ExternalLink size={18} />
              </Link>
              <Link href="https://www.stackjobs.com/sectors/industrie" className="industrie-cta__btn industrie-cta__btn--primary">
                Découvrir StackJobs
                <ExternalLink size={18} />
              </Link>
              <Link href="/contact" className="industrie-cta__btn industrie-cta__btn--secondary">
                Discuter de votre projet Industrie
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}