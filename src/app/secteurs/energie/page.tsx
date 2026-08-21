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
  title: "Énergie : conseil et ingénierie IT pour la transformation numérique",
  description: "Le secteur de l'énergie affiche une croissance de 6,0 % en 2026. Syslearn Group accompagne vos projets Java, cybersécurité, IoT et SCADA avec une expertise des contraintes réglementaires NIS2.",
};

export default function EnergiePage() {
  const expertises = [
    { icon: Database, text: "Développement Java pour les applications métier critiques" },
    { icon: Shield, text: "Cybersécurité et conformité NIS2 pour les OIV/OSE" },
    { icon: Wifi, text: "IoT industriel et remontée de données terrain (MQTT, OPC-UA)" },
    { icon: Monitor, text: "Interfaces homme-machine et supervision SCADA" },
    { icon: BarChart3, text: "Business intelligence et pilotage de la donnée énergétique" },
  ];

  return (
    <main className="energie-page">
      {/* HERO */}
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

      {/* CONTENU */}
      <section className="energie-content">
        <div className="energie-content__inner">
          
          {/* UN SECTEUR EN PLEINE TRANSFORMATION NUMÉRIQUE */}
          <div className="energie-content__block">
            <h2 className="energie-content__title">Un secteur en pleine transformation numérique</h2>
            
            <h3 className="energie-content__subtitle">Modernisation des systèmes d'information énergétiques</h3>
            <p className="text-justify-hyphens">
              Le secteur de l'énergie est l'un des plus exigeants en matière de transformation numérique - et l'un des moins indulgents en cas d'erreur. La transition énergétique accélère la digitalisation des réseaux : déploiement massif de compteurs communicants, intégration des énergies renouvelables intermittentes, supervision temps réel des flux de production et de distribution, smart grids capables d'équilibrer offre et demande à la milliseconde.
            </p>
            <p className="text-justify-hyphens">
              En 2026, la croissance numérique du secteur énergie atteint <strong>6 %</strong> en France - l'un des taux les plus élevés parmi les secteurs clients du numérique. Ce chiffre traduit une réalité opérationnelle : les directions IT des énergéticiens investissent, recrutent et externalisent des compétences qu'elles ne peuvent pas toujours constituer en interne.
            </p>
            <p className="text-justify-hyphens">
              La supervision temps réel des réseaux, la collecte de données issues de milliers de capteurs terrain, le pilotage de la production décentralisée - tout cela repose sur des systèmes d'information qui doivent fonctionner 24h/24, sans tolérance à l'interruption.
            </p>
          </div>

          {/* COHABITATION SYSTÈMES LEGACY ET NOUVELLES EXIGENCES */}
          <div className="energie-content__block">
            <h2 className="energie-content__title">Cohabitation systèmes legacy et nouvelles exigences</h2>
            <p className="text-justify-hyphens">
              Le défi technique central du secteur n'est pas de construire des SI from scratch. C'est d'intégrer de nouvelles couches - supervision, données temps réel, sécurité - dans des architectures conçues pour durer 20 à 30 ans.
            </p>
            <p className="text-justify-hyphens">
              Un système SCADA déployé en 2005 n'a pas été conçu pour être exposé à des flux IoT, ni pour répondre aux exigences de notification d'incidents imposées par la réglementation actuelle. Pourtant, il tourne, il est fiable, et personne ne va le remplacer du jour au lendemain. C'est là que les choix technologiques deviennent stratégiques : comment greffer de la modernité sur des systèmes legacy sans fragiliser ce qui fonctionne ?
            </p>
            <p className="text-justify-hyphens">
              Cette contrainte impose une rigueur particulière dans le choix des langages, des protocoles d'intégration et des architectures. Elle impose aussi des profils qui comprennent les deux mondes - l'ancien et le nouveau.
            </p>
          </div>

          {/* NOS EXPERTISES TECHNIQUES POUR L'ÉNERGIE */}
          <div className="energie-content__block">
            <h2 className="energie-content__title">Nos expertises techniques pour l'énergie</h2>
            <div className="energie-expertises">
              {expertises.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="energie-expertise">
                    <div className="energie-expertise__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="energie-expertise__text text-justify-hyphens">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* IMAGE */}
          <div className="energie-content__image-wrapper">
            <img
              src="/images/secteur-energie.png"
              alt="Secteur de l'énergie - Syslearn Group"
              className="energie-content__image"
            />
          </div>

          {/* DÉVELOPPEMENT JAVA POUR LES APPLICATIONS MÉTIER CRITIQUES */}
          <div className="energie-content__block">
            <h2 className="energie-content__title">Développement Java pour les applications métier critiques</h2>
            <p className="text-justify-hyphens">
              Java est une référence dans les SI énergétiques, et ce n'est pas un hasard. La stabilité de la JVM sur des cycles de vie longs, la portabilité entre environnements hétérogènes, l'écosystème mature autour de Spring Boot et Quarkus - tout cela correspond aux contraintes réelles du secteur.
            </p>
            <p className="text-justify-hyphens">
              Un système de gestion de la production ou de facturation d'énergie ne peut pas être réécrit tous les trois ans parce qu'un framework est passé de mode. Java industriel offre cette pérennité. Les librairies d'intégration OPC-UA disponibles dans l'écosystème Java (Eclipse Milo, notamment) permettent de connecter des applications métier directement aux équipements industriels sans couche intermédiaire fragile.
            </p>
            <p className="text-justify-hyphens">
              Nos ingénieurs Java interviennent sur des applications critiques : systèmes de gestion de réseau, plateformes de facturation à fort volume, interfaces de supervision, APIs d'intégration entre SCADA et SI de gestion.
            </p>
          </div>

          {/* CYBERSÉCURITÉ ET CONFORMITÉ NIS2 */}
          <div className="energie-content__block">
            <h2 className="energie-content__title">Cybersécurité et conformité NIS2</h2>
            <p className="text-justify-hyphens">
              La directive NIS2 couvre plus de 15 000 entités dans dix-huit secteurs, dont l'énergie figure en tête des secteurs hautement critiques. Pour les OIV et OSE du secteur, les obligations sont concrètes : analyse de risques, mesures de sécurité sur les systèmes OT et IT, notification des incidents à l'ANSSI dans des délais stricts.
            </p>
            <p className="text-justify-hyphens">
              Le contexte cyber justifie cette pression réglementaire. Les attaques visant les systèmes SCADA du secteur énergétique représentent <strong>13 %</strong> des cyberattaques détectées en France en 2025. Le secteur énergie concentre plus de <strong>8 %</strong> des cyberattaques recensées, avec le segment électrique qui représente près de <strong>44 %</strong> de ces incidents (source : ANSSI).
            </p>
            <p className="text-justify-hyphens">
              Ce ne sont pas des chiffres abstraits. Ce sont des incidents réels, sur des systèmes de production, de distribution, de contrôle-commande.
            </p>
            <p className="text-justify-hyphens">
              Syslearn Group intervient sur l'ensemble de la chaîne : audit de l'existant OT/IT, sécurisation des architectures, gouvernance des risques, préparation aux processus de notification d'incidents. Nos experts cybersécurité connaissent les spécificités des environnements industriels - la segmentation réseau IT/OT, les contraintes de disponibilité qui rendent certaines mesures de sécurité classiques inapplicables telles quelles.
            </p>
          </div>

          {/* IOT INDUSTRIEL ET REMONTÉE DE DONNÉES TERRAIN */}
          <div className="energie-content__block">
            <h2 className="energie-content__title">IoT industriel et remontée de données terrain</h2>
            <p className="text-justify-hyphens">
              Les capteurs terrain se multiplient : compteurs intelligents, capteurs de pression sur les réseaux de gaz, sondes de température sur les transformateurs, équipements de mesure sur les parcs éoliens et photovoltaïques. Derrière chaque capteur, il faut un protocole, une passerelle, un pipeline de données.
            </p>
            <p className="text-justify-hyphens">
              Nous travaillons sur les protocoles industriels qui structurent ces échanges : <strong>MQTT</strong> pour la remontée légère de données en environnement contraint, <strong>Modbus</strong> pour l'interfaçage avec les équipements historiques, <strong>OPC-UA</strong> pour les architectures de supervision modernes qui exigent sécurité et interopérabilité.
            </p>
            <p className="text-justify-hyphens">
              L'edge computing joue un rôle croissant : traiter localement les données avant de les remonter réduit la bande passante, diminue la latence et limite la surface d'exposition. Nos développeurs IoT/embarqué conçoivent ces architectures en tenant compte d'une réalité préoccupante : les attaques visant les environnements IoT et OT du secteur énergie ont bondi de <strong>387 % en un an</strong>. La sécurité n'est pas une option à ajouter après coup - elle se conçoit dès l'architecture.
            </p>
            <p className="text-justify-hyphens">
              Pour aller plus loin sur nos <Link href="/secteurs/iot" className="energie-content__link-inline">projets IoT industriel</Link>.
            </p>
          </div>

          {/* INTERFACES HOMME-MACHINE ET SUPERVISION SCADA */}
          <div className="energie-content__block">
            <h2 className="energie-content__title">Interfaces homme-machine et supervision SCADA</h2>
            <p className="text-justify-hyphens">
              Les IHM de supervision dans le secteur énergétique ne ressemblent pas à des interfaces applicatives classiques. Elles doivent répondre à des exigences d'ergonomie strictes pour des opérateurs sous pression, afficher des données temps réel sans latence perceptible, et déclencher des alertes fiables sans faux positifs qui épuisent la vigilance.
            </p>
            <p className="text-justify-hyphens">
              Nous développons des interfaces de supervision pour des environnements SCADA critiques : tableaux de bord opérateurs, vues synoptiques de réseau, systèmes d'alarme hiérarchisés, interfaces de contrôle-commande. La fiabilité de l'affichage et le temps de réponse ne sont pas des critères de confort - ce sont des exigences fonctionnelles.
            </p>
            <p className="text-justify-hyphens">
              Les choix technologiques pour ces interfaces (Qt, JavaFX, ou frameworks web selon les contraintes de déploiement) sont guidés par les exigences de maintenabilité à long terme et de compatibilité avec les environnements d'exploitation existants.
            </p>
          </div>

          {/* BUSINESS INTELLIGENCE ET PILOTAGE DE LA DONNÉE ÉNERGÉTIQUE */}
          <div className="energie-content__block">
            <h2 className="energie-content__title">Business intelligence et pilotage de la donnée énergétique</h2>
            <p className="text-justify-hyphens">
              La donnée produite par les réseaux énergétiques a une valeur opérationnelle réelle : prévision de charge, détection d'anomalies de consommation, optimisation de la production, maintenance prédictive des équipements critiques. Encore faut-il la structurer, la fiabiliser et la rendre accessible aux décideurs.
            </p>
            <p className="text-justify-hyphens">
              Nous construisons des pipelines de données et des dashboards décisionnels adaptés aux volumes et aux contraintes du secteur : données de comptage à haute fréquence, séries temporelles longues, croisement de données terrain et de données de gestion. Les outils BI que nous intégrons (Power BI, Grafana, solutions sur mesure) sont choisis en fonction des usages réels des équipes, pas des tendances du marché.
            </p>
          </div>

          {/* POURQUOI LE CHOIX TECHNOLOGIQUE EST STRATÉGIQUE DANS L'ÉNERGIE */}
          <div className="energie-content__block">
            <h2 className="energie-content__title">Pourquoi le choix technologique est stratégique dans l'énergie</h2>
            
            <h3 className="energie-content__subtitle">Cycles de vie longs et exigences de maintenabilité</h3>
            <p className="text-justify-hyphens">
              Un système développé aujourd'hui pour un réseau de distribution sera opérationnel dans 15 à 20 ans. Ce n'est pas une métaphore - c'est la réalité opérationnelle du secteur. Cela change radicalement les critères de choix technologique.
            </p>
            <p className="text-justify-hyphens">
              Un langage à la mode sans garantie de pérennité de l'écosystème, une architecture qui suppose une équipe de spécialistes introuvables dans cinq ans, une documentation insuffisante - ce sont des risques qui se matérialisent à l'échelle de temps du secteur énergie. Nous privilégions des langages stables, des architectures maintenables, une documentation rigoureuse et une évolutivité réelle, pas théorique.
            </p>
            <p className="text-justify-hyphens">
              La conformité réglementaire s'inscrit dans cette même logique : les exigences évoluent, et un système bien architecturé doit pouvoir intégrer de nouvelles contraintes sans refonte complète.
            </p>

            <h3 className="energie-content__subtitle">Exposition cyber : une menace structurelle sur les OT/IoT</h3>
            <p className="text-justify-hyphens">
              Les chiffres parlent d'eux-mêmes : <strong>+387 %</strong> d'attaques sur les environnements IoT et OT du secteur énergie en un an, <strong>13 %</strong> des cyberattaques françaises ciblant les SCADA énergétiques, NIS2 qui impose des obligations concrètes à plus de 15 000 entités. La cybersécurité n'est plus une couche optionnelle que l'on ajoute en fin de projet - c'est une contrainte d'architecture dès la conception.
            </p>
            <p className="text-justify-hyphens">
              Cela signifie concevoir des architectures segmentées dès le départ, choisir des protocoles qui intègrent l'authentification et le chiffrement nativement (OPC-UA le fait, Modbus non), et anticiper les exigences de traçabilité et d'audit que la réglementation impose.
            </p>
            <p className="text-justify-hyphens">
              Pour nos approches sur les <Link href="/secteurs/iot" className="energie-content__link-inline">systèmes industriels critiques</Link>.
            </p>
          </div>

          {/* CE QUE SYsLEARN GROUP APPORTE CONCRÈTEMENT */}
          <div className="energie-content__block">
            <h2 className="energie-content__title">Ce que Syslearn Group apporte concrètement</h2>
            
            <h3 className="energie-content__subtitle">Une approche méthodologique adaptée aux systèmes critiques</h3>
            <p className="text-justify-hyphens">
              Intervenir sur des systèmes en production dans le secteur énergie, c'est travailler sous contrainte de disponibilité. Une mise à jour ne peut pas provoquer une interruption de service. Un bug en production sur un système de supervision n'a pas les mêmes conséquences que sur une application e-commerce.
            </p>
            <p className="text-justify-hyphens">
              Notre approche intègre ces contraintes dès la phase de cadrage : analyse d'impact avant toute modification, stratégies de déploiement progressif, tests en environnement de préproduction représentatif, documentation des procédures de rollback. Nous maîtrisons les contraintes réglementaires du secteur - normes IEC, exigences ANSSI, cadre NIS2 - et nous les intégrons dans notre méthodologie de développement, pas en bout de chaîne.
            </p>

            <h3 className="energie-content__subtitle">Des profils techniques maîtrisant les contraintes du secteur</h3>
            <p className="text-justify-hyphens">
              Les ingénieurs que nous mobilisons sur des projets énergie ne découvrent pas le secteur en arrivant. Ils connaissent les protocoles industriels, les architectures OT/IT, les exigences de certification, les contraintes d'exploitation en environnement critique.
            </p>
            <p className="text-justify-hyphens">
              Ingénieurs Java spécialisés sur les SI industriels, experts cybersécurité OT, développeurs IoT/embarqué maîtrisant MQTT et OPC-UA, architectes systèmes capables de faire dialoguer legacy et nouvelles couches - ce sont des profils rares, que nous savons identifier et mobiliser.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="energie-cta">
        <div className="energie-cta__inner">
          <div className="energie-cta__content">
            <h2 className="energie-cta__title">Discutons de votre projet énergie</h2>
            <p className="energie-cta__text text-justify-hyphens">
              Vous pilotez un projet de modernisation d'un SI de supervision, une mise en conformité NIS2, l'intégration de nouveaux équipements IoT dans votre architecture existante, ou le renforcement d'une équipe technique sur un chantier critique ? Parlons-en directement - sans présentation commerciale générique, avec les bonnes questions techniques dès le premier échange.
            </p>
            <div className="energie-cta__actions">
              <Link href="https://www.syslearn.fr/qui-sommes-nous/secteurs-dactivites" target="_blank" rel="dofollow noopener noreferrer" className="energie-cta__btn energie-cta__btn--primary">
                Découvrir Syslearn
                <ExternalLink size={18} />
              </Link>
              <Link href="https://www.pointerlab.fr/secteurs/energie" target="_blank" rel="dofollow noopener noreferrer" className="energie-cta__btn energie-cta__btn--primary">
                Découvrir PointerLab
                <ExternalLink size={18} />
              </Link>
              <Link href="https://www.stackjobs.com/sectors/energie" target="_blank" rel="dofollow noopener noreferrer" className="energie-cta__btn energie-cta__btn--primary">
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