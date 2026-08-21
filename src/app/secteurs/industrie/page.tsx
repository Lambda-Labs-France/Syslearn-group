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
  title: "Industrie 4.0 : conseil et ingénierie IT pour usines connectées",
  description: "L'industrie 4.0 exige des systèmes capables de superviser, automatiser et fiabiliser des lignes de production. Syslearn Group accompagne vos projets industriels avec une double expertise.",
};

export default function IndustriePage() {
  const expertises = [
    { icon: Factory, text: "Développement C++ pour les systèmes de supervision et d'automatisation" },
    { icon: Cpu, text: "Logiciels embarqués pour équipements industriels (C, RTOS)" },
    { icon: Wifi, text: "IoT industriel et remontée de données terrain (MQTT, OPC-UA)" },
    { icon: Box, text: "Interfaces 3D pour la maintenance et la formation (C++/Qt, OpenGL)" },
    { icon: Factory, text: "Intelligence artificielle appliquée à la production" },
  ];

  return (
    <main className="industrie-page">
      {/* HERO */}
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

      {/* CONTENU */}
      <section className="industrie-content">
        <div className="industrie-content__inner">
          
          {/* L'INDUSTRIE 4.0 */}
          <div className="industrie-content__block">
            <h2 className="industrie-content__title">L'industrie 4.0 : une transformation qui exige des compétences rares</h2>
            
            <h3 className="industrie-content__subtitle">Modernisation des lignes de production et usine connectée</h3>
            <p className="text-justify-hyphens">
              L'industrie 4.0 impose une transformation profonde des chaînes de production. Capteurs connectés, automates programmables, systèmes de supervision temps réel (SCADA), plateformes MES (Manufacturing Execution System), maintenance prédictive basée sur l'IA - ces couches technologiques doivent s'intégrer dans des environnements industriels conçus pour fonctionner sans interruption pendant des décennies.
            </p>
            <p className="text-justify-hyphens">
              Cette transformation représente un enjeu financier considérable en France : l'adaptation de l'ensemble de l'industrie manufacturière aux standards de l'industrie 4.0 nécessiterait un investissement estimé à <strong>130 milliards d'euros</strong>, selon les travaux de l'Alliance Industrie du Futur. À l'échelle mondiale, le marché de l'industrie 4.0 poursuit une croissance annuelle de <strong>19,4 %</strong>, portée par l'intelligence artificielle, l'IoT et l'automatisation avancée des lignes de production.
            </p>
            <p className="text-justify-hyphens">
              Face à cette ampleur, les directions IT industrielles externalisent des compétences qu'elles ne peuvent pas constituer en interne : la capacité à raisonner à l'échelle d'une usine connectée, tout en respectant les contraintes de fiabilité, de sécurité fonctionnelle et de déterminisme temporel que l'industrie impose.
            </p>
          </div>

          {/* LA CONTRAINTE CENTRALE */}
          <div className="industrie-content__block">
            <h2 className="industrie-content__title">La contrainte centrale : faire évoluer des systèmes conçus pour durer</h2>
            <p className="text-justify-hyphens">
              Le défi n'est pas de construire from scratch. C'est d'intégrer de nouvelles couches - IoT, données temps réel, IA - dans des architectures embarquées conçues pour 20 à 30 ans de cycle de vie. Un système de contrôle de ligne de production installé en 1995 doit pouvoir accueillir des capteurs connectés en 2026 sans jamais compromettre sa fiabilité.
            </p>
            <p className="text-justify-hyphens">
              Cela impose des profils qui comprennent les deux mondes : le système legacy (ses contraintes, ses protocoles, ses limites) et la couche applicative moderne (IoT, cloud, données). Cette double lecture est rare et déterminante pour des projets qui touchent à la production.
            </p>
          </div>

          {/* NOS EXPERTISES TECHNIQUES */}
          <div className="industrie-content__block">
            <h2 className="industrie-content__title">Nos expertises techniques pour l'industrie</h2>
            <div className="industrie-expertises">
              {expertises.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="industrie-expertise">
                    <div className="industrie-expertise__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="industrie-expertise__text text-justify-hyphens">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* IMAGE */}
          <div className="industrie-content__image-wrapper">
            <img
              src="/images/secteur-industrie.png"
              alt="Secteur de l'industrie - Syslearn Group"
              className="industrie-content__image"
            />
          </div>

          {/* DÉVELOPPEMENT C++ */}
          <div className="industrie-content__block">
            <h2 className="industrie-content__title">Développement C++ pour les systèmes de supervision et d'automatisation</h2>
            <p className="text-justify-hyphens">
              C++ est le socle technique de référence pour les systèmes temps réel industriels. Pourquoi ? Parce qu'il offre un contrôle fin des ressources matérielles, un déterminisme temporel garanti et une faible latence - trois exigences que peu d'autres écosystèmes logiciels satisfont au même niveau.
            </p>
            <p className="text-justify-hyphens">
              Sur une ligne de production, un temps de réponse non garanti peut arrêter une chaîne entière ou créer un risque de sécurité physique. C'est dans ce contexte que C++ conserve une place centrale : pas de garbage collector imprévisible, pas de latence cachée, accès bas niveau aux ressources.
            </p>
            <p className="text-justify-hyphens">
              <strong>Cas d'usage concrets :</strong> automates logiciels, superviseurs de ligne, systèmes SCADA, contrôleurs de process, interfaces de pilotage temps réel. Chaque ligne de code doit être prévisible.
            </p>
          </div>

          {/* LOGICIELS EMBARQUÉS */}
          <div className="industrie-content__block">
            <h2 className="industrie-content__title">Logiciels embarqués pour équipements industriels</h2>
            <p className="text-justify-hyphens">
              Firmware et logiciels embarqués sur équipements de production : C, C++, RTOS (FreeRTOS, VxWorks), protocoles terrain (Modbus, Profibus, EtherCAT). La contrainte centrale est la fiabilité sur cycles longs, la mise à jour sans arrêt de production, et la certification fonctionnelle selon les normes IEC 61508 ou ISO 13849.
            </p>
            <p className="text-justify-hyphens">
              Un équipement embarqué industriel ne peut pas redémarrer pour appliquer une mise à jour. Il doit évoluer en production, avec les précautions méthodologiques que cela impose. C'est une expertise que seuls les profils ayant travaillé sur des systèmes critiques maîtrisent vraiment.
            </p>
            <p className="text-justify-hyphens">
              Nous accompagnons aussi vos projets de modernisation d'équipements existants - intégration de nouvelles fonctionnalités sans compromettre la stabilité, migration progressive vers des architectures plus modulaires. <Link href="/secteurs/energie" className="industrie-content__link-inline">Lien vers systèmes de supervision énergétique</Link> : les mêmes contraintes embarquées s'appliquent sur les réseaux de distribution.
            </p>
          </div>

          {/* IOT INDUSTRIEL */}
          <div className="industrie-content__block">
            <h2 className="industrie-content__title">IoT industriel et remontée de données terrain</h2>
            <p className="text-justify-hyphens">
              Capteurs de production, passerelles edge, protocoles OPC-UA et MQTT, pipelines de données vers les plateformes MES/ERP. La différence entre IoT grand public et IoT industriel (IIoT) est fondamentale : contraintes de fiabilité, de latence, de sécurité, de continuité de service.
            </p>
            <p className="text-justify-hyphens">
              Un capteur de température dans un smart home peut perdre une mesure. Un capteur de vibration sur un compresseur industriel ne peut pas. Nous concevons des architectures IoT qui garantissent la remontée de données même en cas de perte réseau temporaire, avec horodatage précis, intégrité des données et traçabilité complète.
            </p>
            <p className="text-justify-hyphens">
              Découvrez nos <Link href="/secteurs/iot" className="industrie-content__link-inline">architectures IoT industrielles</Link> pour comprendre comment nous structurons ces pipelines de données.
            </p>
          </div>

          {/* INTERFACES 3D */}
          <div className="industrie-content__block">
            <h2 className="industrie-content__title">Interfaces 3D pour la maintenance et la formation</h2>
            <p className="text-justify-hyphens">
              Interfaces de maintenance assistée en 3D, jumeaux numériques visuels, simulateurs de formation opérateur. Technologies : C++/Qt, OpenGL, moteurs 3D selon les contraintes de déploiement.
            </p>
            <p className="text-justify-hyphens">
              <strong>Valeur concrète :</strong> réduire les erreurs de maintenance (un opérateur peut visualiser l'intérieur d'un équipement sans le démonter), former sans arrêter la production, capitaliser sur la documentation 3D des équipements. Un simulateur bien conçu peut réduire de 30 % le temps de formation et les incidents lors de la mise en service.
            </p>
          </div>

          {/* INTELLIGENCE ARTIFICIELLE */}
          <div className="industrie-content__block">
            <h2 className="industrie-content__title">Intelligence artificielle appliquée à la production</h2>
            <p className="text-justify-hyphens">
              IA sur les lignes : détection de défauts par vision industrielle, maintenance prédictive, optimisation de paramètres de process, analyse de séries temporelles capteurs. Le gouvernement soutient directement cette dynamique, avec un objectif d'accompagnement de <strong>500 PME et ETI</strong> françaises dans l'adoption de solutions d'intelligence artificielle sur leurs lignes de production.
            </p>
            <p className="text-justify-hyphens">
              L'IA industrielle ≠ IA grand public. Données structurées, contraintes temps réel, explicabilité des décisions (pourquoi le modèle recommande-t-il un changement de paramètre ?), intégration dans des systèmes de contrôle existants. Nous développons des modèles IA qui s'intègrent dans votre écosystème industriel sans le déstabiliser.
            </p>
          </div>

          {/* POURQUOI LE CHOIX TECHNOLOGIQUE EST DÉTERMINANT */}
          <div className="industrie-content__block">
            <h2 className="industrie-content__title">Pourquoi le choix technologique est déterminant dans l'industrie</h2>
            
            <h3 className="industrie-content__subtitle">Déterminisme temporel et sécurité fonctionnelle</h3>
            <p className="text-justify-hyphens">
              Dans l'industrie, un temps de réponse non garanti peut arrêter une chaîne ou créer un risque de sécurité physique. Le déterminisme temporel - la garantie qu'une opération s'exécutera dans un délai maximal connu - structure le choix des langages (C, C++, Ada) et des OS (RTOS vs Linux temps réel).
            </p>
            <p className="text-justify-hyphens">
              Les normes de sécurité fonctionnelle (IEC 61508, ISO 13849) imposent au développement logiciel une rigueur que les projets IT classiques ne connaissent pas : traçabilité complète du code, tests exhaustifs, analyse de défaillance, certification. Chaque ligne de code doit être justifiée et testée.
            </p>

            <h3 className="industrie-content__subtitle">Interopérabilité et intégration dans l'écosystème existant</h3>
            <p className="text-justify-hyphens">
              Un nouveau logiciel industriel ne vit pas seul : il doit s'intégrer dans un écosystème d'automates, de SCADA, de MES, d'ERP existants. Protocoles d'intégration (OPC-UA, MQTT, REST), gestion des versions, compatibilité ascendante - tout cela doit être pensé dès le départ.
            </p>
            <p className="text-justify-hyphens">
              L'intégration est souvent plus complexe que le développement lui-même. Un système qui fonctionne parfaitement en isolation peut créer des goulots d'étranglement ou des conflits de synchronisation une fois connecté à l'écosystème existant. Nous avons l'expérience de ces intégrations complexes et des pièges à éviter.
            </p>
          </div>

          {/* CE QUE SYsLEARN GROUP APPORTE */}
          <div className="industrie-content__block">
            <h2 className="industrie-content__title">Ce que Syslearn Group apporte concrètement</h2>
            
            <h3 className="industrie-content__subtitle">Une double lecture : criticité technique et vision système</h3>
            <p className="text-justify-hyphens">
              La valeur ajoutée ESN sur ce secteur : des ingénieurs qui comprennent à la fois la contrainte bas niveau (embarqué, temps réel, C++) et la vision système (usine connectée, flux de données, intégration MES/ERP). Cette double lecture est rare et déterminante.
            </p>
            <p className="text-justify-hyphens">
              Nous ne vous proposons pas un développeur C++ généraliste. Nous vous proposons un ingénieur qui a travaillé sur des systèmes critiques, qui connaît les pièges de l'intégration industrielle, qui peut dialoguer avec vos équipes métier et vos responsables de production.
            </p>

            <h3 className="industrie-content__subtitle">Des profils techniques adaptés à vos projets industriels</h3>
            <p className="text-justify-hyphens">
              Ingénieurs C++/Qt industriel, développeurs embarqués (C, RTOS), intégrateurs IoT/IIoT, développeurs IA appliquée, architectes systèmes industriels. Profils capables d'intervenir sur des systèmes en production avec les précautions méthodologiques que cela impose.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="industrie-cta">
        <div className="industrie-cta__inner">
          <div className="industrie-cta__content">
            <h2 className="industrie-cta__title">Discutons de votre projet industriel</h2>
            <p className="industrie-cta__text text-justify-hyphens">
              Que vous modernisiez une ligne de production, intégriez une couche IoT, renforciez votre équipe technique ou que vous ayez besoin d'expertise en IA appliquée à la production, nous sommes là pour vous accompagner. Contactez-nous pour discuter de votre projet.
            </p>
            <div className="industrie-cta__actions">
              <Link href="https://www.syslearn.fr/qui-sommes-nous/secteurs-dactivites" target="_blank" rel="dofollow noopener noreferrer" className="industrie-cta__btn industrie-cta__btn--primary">
                Découvrir Syslearn
                <ExternalLink size={18} />
              </Link>
              <Link href="https://www.pointerlab.fr/secteurs/industrie" target="_blank" rel="dofollow noopener noreferrer" className="industrie-cta__btn industrie-cta__btn--primary">
                Découvrir PointerLab
                <ExternalLink size={18} />
              </Link>
              <Link href="https://www.stackjobs.com/sectors/industrie" target="_blank" rel="dofollow noopener noreferrer" className="industrie-cta__btn industrie-cta__btn--primary">
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