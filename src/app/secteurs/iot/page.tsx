import Link from "next/link";
import { 
  Wifi, 
  Cpu, 
  BarChart3, 
  Shield,
  ArrowRight,
  ExternalLink,
  Database,
  Network,
  Cloud
} from "lucide-react";
import "../../../styles/secteurs/iot.css";

export const metadata = {
  title: "IoT",
  description: "Syslearn Group accompagne vos projets IoT du firmware embarqué à la plateforme de supervision. Cyber Resilience Act, Data Act, migration 2G/3G vers LTE-M/NB-IoT.",
};

export default function IotPage() {
  const expertises = [
    { icon: Cpu, text: "Développement de firmware et systèmes embarqués (C, C++, RTOS)" },
    { icon: Wifi, text: "Protocoles de communication IoT (MQTT, LoRaWAN, OPC-UA)" },
    { icon: Network, text: "Edge computing et traitement local des données" },
    { icon: Database, text: "Plateforme de supervision et valorisation des données terrain" },
    { icon: Shield, text: "Sécurisation des flux de données IoT (Cyber Resilience Act)" },
    { icon: Cloud, text: "Migration 2G/3G vers LTE-M/NB-IoT" },
  ];

  return (
    <main className="iot-page">
      <section className="iot-hero">
        <div className="iot-hero__inner">
          <div className="iot-hero__content">
            <div>
              <span className="iot-hero__badge">Secteur</span>
              <h1 className="iot-hero__title">IoT : conseil et ingénierie sur mesure</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="iot-content">
        <div className="iot-content__inner">
          
          <div className="iot-content__intro text-justify-hyphens">
            <p>
              Un objet connecté ne se résume pas à un capteur qui envoie des données : c'est un système complet, 
              du firmware embarqué jusqu'à la plateforme de supervision. <strong>Syslearn Group</strong> accompagne 
              ces projets de bout en bout, du prototype au déploiement à grande échelle.
            </p>
          </div>

          <div className="iot-content__block">
            <h2 className="iot-content__title">Un marché en croissance rapide sous pression réglementaire</h2>
            
            <h3 className="iot-content__subtitle">21,5 milliards d'objets connectés : une expansion qui ne ralentit pas</h3>
            <p className="text-justify-hyphens">
              La France comptait près de <strong>350 millions d'objets connectés actifs en 2025</strong>, avec une croissance annuelle moyenne du marché estimée à <strong>18 %</strong> entre 2020 et 2025. À l'échelle mondiale, le nombre d'objets connectés en activité dépasse désormais 
              <Link href="https://www.iotanalytics.com" target="_blank" rel="nofollow noopener noreferrer" className="iot-content__link-inline"> 21,5 milliards en 2026</Link>, porté par l'adoption massive dans les secteurs industriel, domestique et urbain. L'IoT industriel reste le principal moteur de cette expansion.
            </p>
            <p className="text-justify-hyphens">
              Ces chiffres traduisent une réalité concrète pour les projets IoT : volumes de données croissants, hétérogénéité des équipements, contraintes de scalabilité dès la conception. Les projets IoT industriels sont structurellement plus complexes que l'IoT grand public : ils exigent une fiabilité sans compromis, une latence maîtrisée, une durée de vie des équipements souvent mesurée en années ou décennies, et une exploitation en environnement difficile (températures extrêmes, humidité, vibrations, interférences électromagnétiques).
            </p>
          </div>

          <div className="iot-content__block">
            <h2 className="iot-content__title">Cyber Resilience Act, Data Act et migration réseau : trois contraintes simultanées</h2>
            <p className="text-justify-hyphens">
              Les projets IoT en 2025-2026 font face à trois pressions réglementaires et techniques qui s'imposent simultanément :
            </p>
            <ul className="iot-list">
              <li>
                <Link href="https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act" target="_blank" rel="nofollow noopener noreferrer" className="iot-content__link-inline"><strong>Cyber Resilience Act</strong></Link> : Le cadre européen impose de nouvelles obligations de sécurité pour tout produit connecté mis sur le marché européen. Cela signifie : sécurité dès la conception du produit, documentation complète des vulnérabilités connues, mises à jour de sécurité garanties sur toute la durée de vie du produit.
              </li>
              <li>
                <Link href="https://digital-strategy.ec.europa.eu/en/policies/data-act" target="_blank" rel="nofollow noopener noreferrer" className="iot-content__link-inline"><strong>Data Act</strong></Link> : Le droit d'accès aux données générées par les objets connectés s'étend. Les obligations de partage des données impactent directement l'architecture des plateformes de collecte et les modèles de gouvernance des données.
              </li>
              <li><strong>Migration 2G/3G vers LTE-M/NB-IoT :</strong> Un mouvement technique majeur est en cours en France. L'extinction progressive des réseaux 2G et 3G, engagée par les principaux opérateurs entre fin 2025 et fin 2026, oblige des millions d'équipements IoT déjà déployés - télérelève, alarmes, trackers, capteurs industriels - à migrer vers des réseaux cellulaires modernes. Concrètement, cela implique : re-certification des équipements, mise à jour firmware Over-The-Air (OTA), et dans certains cas remplacement physique des modules de communication.
              </li>
            </ul>
          </div>

          <div className="iot-content__block">
            <h2 className="iot-content__title">Un projet IoT, c'est une chaîne complète - pas un capteur</h2>
            
            <h3 className="iot-content__subtitle">Le firmware : là où tout commence</h3>
            <p className="text-justify-hyphens">
              Le firmware est la couche logicielle qui fait fonctionner le matériel IoT. Les contraintes spécifiques sont sévères : ressources matérielles limitées (quelques Ko de RAM, processeur basse consommation), fiabilité sur des cycles de vie longs (5–10 ans sans intervention), gestion de l'alimentation (batterie, energy harvesting), démarrage déterministe.
            </p>
            <p className="text-justify-hyphens">
              Les langages privilégiés sont le <strong>C</strong> et le <strong>C++ embarqué</strong>, souvent complétés par du <strong>Rust</strong> pour les nouveaux projets. Les systèmes d'exploitation temps réel (RTOS) courants incluent 
              <Link href="https://www.freertos.org/" target="_blank" rel="nofollow noopener noreferrer" className="iot-content__link-inline"> FreeRTOS</Link>, 
              <Link href="https://zephyrproject.org/" target="_blank" rel="nofollow noopener noreferrer" className="iot-content__link-inline"> Zephyr</Link> et <strong>Mbed OS</strong>. Le firmware est la fondation sur laquelle repose toute la fiabilité du système IoT : une défaillance au niveau firmware se propage à l'ensemble de la chaîne.
            </p>

            <h3 className="iot-content__subtitle">Protocoles de communication : choisir selon les contraintes terrain</h3>
            <p className="text-justify-hyphens">
              Le choix du protocole IoT n'est pas un détail technique - il détermine la consommation, la portée, la sécurité et le coût d'exploitation sur toute la durée de vie du déploiement.
            </p>
            <ul className="iot-list">
              <li><strong>Courte portée, faible consommation :</strong> Zigbee, BLE, Z-Wave (smart building, domotique industrielle)</li>
              <li>
                <strong>Longue portée, faible consommation (LPWAN) :</strong> 
                <Link href="https://lora-alliance.org/" target="_blank" rel="nofollow noopener noreferrer" className="iot-content__link-inline"> LoRaWAN</Link>, Sigfox, LTE-M, NB-IoT (compteurs, capteurs terrain, trackers)
              </li>
              <li>
                <strong>Protocoles industriels :</strong> 
                <Link href="https://mqtt.org/" target="_blank" rel="nofollow noopener noreferrer" className="iot-content__link-inline"> MQTT</Link> (remontée légère), CoAP (contraintes), 
                <Link href="https://opcfoundation.org/" target="_blank" rel="nofollow noopener noreferrer" className="iot-content__link-inline"> OPC-UA</Link> (supervision industrielle), Modbus (équipements legacy)
              </li>
              <li><strong>Haut débit :</strong> Wi-Fi, 4G/5G (caméras, passerelles)</li>
            </ul>
            <p className="text-justify-hyphens">
              Le choix du protocole structure l'architecture entière du projet. Une mauvaise décision au départ entraîne des coûts de refonte importants. <Link href="/secteurs/industrie" className="iot-content__link-inline">Syslearn Group accompagne les projets IoT industriels et supervision</Link> en guidant ce choix selon les contraintes réelles de déploiement.
            </p>

            <h3 className="iot-content__subtitle">Edge computing et traitement local des données</h3>
            <p className="text-justify-hyphens">
              L'edge computing joue un rôle croissant dans les architectures IoT modernes : traiter les données au plus près des capteurs plutôt que de tout remonter au cloud.
            </p>
            <p className="text-justify-hyphens">
              <strong>Avantages concrets :</strong> réduction de la bande passante (critique pour les déploiements massifs), latence réduite (essentiel pour les décisions temps réel), fonctionnement en mode dégradé (déconnecté du réseau), réduction de la surface d'exposition aux cybermenaces.
            </p>
            <p className="text-justify-hyphens">
              <strong>Cas d'usage :</strong> détection d'anomalies en temps réel sur une ligne de production, agrégation de données capteurs avant remontée, décisions locales sans dépendance réseau.
            </p>
            <p className="text-justify-hyphens">
              <strong>Technologies :</strong> passerelles edge (Raspberry Pi industriel, modules ARM), conteneurisation (Docker sur edge), protocoles de synchronisation robustes.
            </p>

            <h3 className="iot-content__subtitle">Plateforme de supervision et valorisation des données terrain</h3>
            <p className="text-justify-hyphens">
              La donnée remontée n'a de valeur que si elle est exploitable. La chaîne complète comprend : collecte → normalisation → stockage → visualisation → alertes → décision.
            </p>
            <ul className="iot-list">
              <li>
                <strong>Plateformes de supervision :</strong> dashboards temps réel 
                <Link href="https://grafana.com/" target="_blank" rel="nofollow noopener noreferrer" className="iot-content__link-inline"> (Grafana</Link>, Kibana), time-series databases 
                <Link href="https://www.influxdata.com/" target="_blank" rel="nofollow noopener noreferrer" className="iot-content__link-inline"> (InfluxDB</Link>, TimescaleDB), intégration avec les ERP/MES existants.
              </li>
              <li><strong>Business intelligence IoT :</strong> détection d'anomalies, maintenance prédictive, optimisation de consommation énergétique.</li>
            </ul>
            <p className="text-justify-hyphens">
              <Link href="/secteurs/energie" className="iot-content__link-inline">Syslearn Group accompagne les systèmes IoT pour l'énergie</Link> en construisant des plateformes de supervision capables de gérer des millions de points de données et de transformer ces données en décisions opérationnelles.
            </p>
          </div>

          <div className="iot-content__image-wrapper">
            <img
              src="/images/secteur-iot.jpg"
              alt="Secteur IoT - Syslearn Group"
              className="iot-content__image"
            />
          </div>

          <div className="iot-content__block">
            <h2 className="iot-content__title">La sécurité IoT : une contrainte d'architecture, pas une couche optionnelle</h2>
            
            <h3 className="iot-content__subtitle">Une surface d'attaque qui croît avec chaque nouvel objet connecté</h3>
            <p className="text-justify-hyphens">
              Chaque nouvel objet connecté est un point d'entrée potentiel. Concrètement : firmware non mis à jour = vulnérabilité persistante, protocoles sans chiffrement = interception des données, authentification faible = accès non autorisé aux équipements.
            </p>
            <p className="text-justify-hyphens">
              Le <strong>Cyber Resilience Act</strong> impose des obligations de sécurité dès la conception, mises à jour de sécurité sur toute la durée de vie, documentation des vulnérabilités connues. La sécurité IoT est plus difficile que la sécurité IT classique : équipements contraints (pas de CPU pour du chiffrement lourd), déploiements massifs difficiles à patcher, durées de vie longues (5–10 ans).
            </p>

            <h3 className="iot-content__subtitle">Sécuriser dès le firmware : chiffrement, authentification, OTA</h3>
            <p className="text-justify-hyphens">
              Les bonnes pratiques de sécurité IoT au niveau firmware incluent :
            </p>
            <ul className="iot-list">
              <li>
                <strong>Chiffrement des communications :</strong> 
                <Link href="https://www.rfc-editor.org/rfc/rfc8446.txt" target="_blank" rel="nofollow noopener noreferrer" className="iot-content__link-inline"> TLS/DTLS</Link> pour les flux sensibles
              </li>
              <li><strong>Authentification mutuelle :</strong> certificats X.509, Pre-Shared Keys (PSK)</li>
              <li>
                <strong>Stockage sécurisé des clés :</strong> secure element, 
                <Link href="https://trustedcomputinggroup.org/" target="_blank" rel="nofollow noopener noreferrer" className="iot-content__link-inline"> TPM (Trusted Platform Module)</Link>
              </li>
              <li><strong>Mécanisme de mise à jour OTA sécurisé :</strong> signature cryptographique, rollback protection</li>
            </ul>
            <p className="text-justify-hyphens">
              Ces mécanismes doivent être conçus dès le départ. Les ajouter après coup sur un firmware existant est coûteux et souvent incomplet. Le Cyber Resilience Act transforme ces pratiques en obligations légales pour les produits mis sur le marché européen.
            </p>
          </div>

          <div className="iot-content__block">
            <h2 className="iot-content__title">Ce que Syslearn Group apporte concrètement</h2>
            
            <h3 className="iot-content__subtitle">Une expertise de bout en bout : du firmware à la plateforme</h3>
            <p className="text-justify-hyphens">
              La valeur ajoutée ESN sur ce secteur : des ingénieurs qui couvrent toute la chaîne IoT, du firmware embarqué jusqu'à la plateforme de supervision. Cette vision de bout en bout est rare - la plupart des prestataires sont soit spécialisés embarqué, soit spécialisés data/cloud, rarement les deux.
            </p>
            <p className="text-justify-hyphens">
              L'approche Syslearn Group : cadrage de l'architecture dès le prototype, choix technologiques guidés par les contraintes de déploiement à grande échelle, sécurité intégrée dès la conception.
            </p>

            <h3 className="iot-content__subtitle">Du prototype au déploiement à grande échelle</h3>
            <p className="text-justify-hyphens">
              Les deux phases critiques d'un projet IoT industriel sont souvent sous-estimées :
            </p>
            <ul className="iot-list">
              <li><strong>Prototype :</strong> validation du concept, choix des composants, premier firmware, validation des protocoles.</li>
              <li><strong>Passage à l'échelle :</strong> industrialisation du firmware (robustesse, performance, consommation), robustesse de la plateforme (capacité, latence, disponibilité), gestion du parc d'équipements, OTA à grande échelle.</li>
            </ul>
            <p className="text-justify-hyphens">
              Syslearn Group anticipe ce passage à l'échelle dès la phase de conception, en évitant les refactorisations coûteuses.
            </p>

            <h3 className="iot-content__subtitle">Des profils techniques couvrant toute la chaîne IoT</h3>
            <ul className="iot-list">
              <li><strong>Ingénieurs firmware C/C++ embarqué :</strong> FreeRTOS, Zephyr, Mbed OS</li>
              <li>
                <strong>Développeurs protocoles IoT :</strong> 
                <Link href="/secteurs/industrie" className="iot-content__link-inline"> MQTT, OPC-UA, LoRaWAN, CoAP</Link>
              </li>
              <li><strong>Architectes edge computing :</strong> passerelles, conteneurisation, synchronisation</li>
              <li><strong>Développeurs plateformes de supervision :</strong> Grafana, InfluxDB, intégrations ERP/MES</li>
              <li><strong>Experts cybersécurité IoT :</strong> Cyber Resilience Act, TLS/DTLS, OTA sécurisé</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="iot-cta">
        <div className="iot-cta__inner">
          <div className="iot-cta__content">
            <h2 className="iot-cta__title">Discutons de votre projet IoT</h2>
            <p className="iot-cta__text text-justify-hyphens">
              Vous avez un projet de développement firmware, d'intégration de protocoles IoT, de migration réseau (2G/3G vers LTE-M/NB-IoT), de mise en conformité Cyber Resilience Act, ou de construction d'une plateforme de supervision ? Contactez-nous pour explorer comment Syslearn Group peut vous accompagner du prototype au déploiement à grande échelle.
            </p>
            <div className="iot-cta__actions">
              <Link href="https://www.pointerlab.fr/secteurs/iot" target="_blank" rel="dofollow noopener noreferrer" className="iot-cta__btn iot-cta__btn--primary">
                Découvrir PointerLab
                <ExternalLink size={18} />
              </Link>
              <Link href="https://www.stackjobs.com/sectors/iot" target="_blank" rel="dofollow noopener noreferrer" className="iot-cta__btn iot-cta__btn--primary">
                Découvrir StackJobs
                <ExternalLink size={18} />
              </Link>
              <Link href="/contact" className="iot-cta__btn iot-cta__btn--secondary">
                Discuter de votre projet IoT
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}