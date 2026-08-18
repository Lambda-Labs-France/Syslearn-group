import Link from "next/link";
import { 
  Wifi, 
  Cpu, 
  BarChart3, 
  Shield,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import "../../../styles/secteurs/iot.css";

export const metadata = {
  title: "IoT",
  description: "Syslearn Group accompagne vos projets IoT du firmware embarqué à la plateforme de supervision. Cyber Resilience Act, Data Act, migration 2G/3G vers LTE-M/NB-IoT.",
};

export default function IotPage() {
  const expertises = [
    { icon: Cpu, text: "Développement de firmware et systèmes embarqués" },
    { icon: Wifi, text: "Remontée et traitement de données terrain" },
    { icon: BarChart3, text: "Business intelligence et supervision" },
    { icon: Shield, text: "Sécurisation des flux de données IoT" },
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
          <div className="iot-content__intro">
            <p>
              Un objet connecté ne se résume pas à un capteur qui envoie des données : c'est un système complet, 
              du firmware embarqué jusqu'à la plateforme de supervision. <strong> Syslearn Group</strong> accompagne 
              ces projets de bout en bout, du prototype au déploiement à grande échelle.
            </p>
          </div>

          <div className="iot-content__block">
            <h2 className="iot-content__title">Le contexte</h2>
            <p>
              Entre multiplication des capteurs, exigences de sécurité renforcées et besoin de traiter des volumes de 
              données croissants en temps réel, les projets IoT industriels demandent une expertise à la fois 
              embarquée et logicielle.
            </p>
            <p>
              Cette dynamique s'inscrit dans un marché en croissance continue. La France comptait près de 
              <strong> 350 millions d'objets connectés actifs en 2025</strong>, avec une croissance annuelle moyenne 
              du marché estimée à <strong> 18 %</strong> entre 2020 et 2025  l'IoT industriel restant le principal 
              moteur de cette expansion. À l'échelle mondiale, le nombre d'objets connectés en activité dépasse 
              désormais <strong> 21,5 milliards en 2026</strong>, porté par l'adoption massive dans les secteurs 
              industriel, domestique et urbain.
            </p>
            <p>
              Cette croissance s'accompagne d'un mur réglementaire de plus en plus dense : le 
              <strong> Cyber Resilience Act</strong> européen impose de nouvelles obligations de sécurité pour tout 
              produit connecté, tandis que le <strong> Data Act</strong> encadre l'accès et le partage des données 
              générées par les objets. En parallèle, un mouvement technique majeur est en cours en France : 
              l'extinction progressive des réseaux <strong> 2G et 3G</strong>, engagée par les principaux opérateurs 
              entre fin 2025 et fin 2026, oblige des millions d'équipements IoT déjà déployés  télérelève, alarmes, 
              trackers, capteurs industriels  à migrer vers des réseaux cellulaires modernes comme le 
              <strong> LTE-M</strong> ou le <strong> NB-IoT</strong>.
            </p>
          </div>

          <div className="iot-content__block">
            <h2 className="iot-content__title">Expertises mobilisées</h2>
            <div className="iot-expertises">
              {expertises.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="iot-expertise">
                    <div className="iot-expertise__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="iot-expertise__text">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="iot-content__image-wrapper">
            <img
              src="/images/secteur-iot.jpg"
              alt="Secteur de l'iot - Syslearn Group"
              className="iot-content__image"
            />
          </div>
          <div className="iot-content__block">
            <h2 className="iot-content__title">Pourquoi un projet IoT ne se résume pas au capteur</h2>
            <p>
              La partie visible d'un objet connecté  le capteur, le boîtier, l'application de suivi  ne représente 
              qu'une fraction du système réel. Derrière chaque donnée remontée se trouve une chaîne complète : un 
              firmware capable de fonctionner de manière fiable avec des ressources matérielles limitées, un protocole 
              de communication sécurisé, une plateforme de collecte et de traitement capable d'absorber des volumes 
              croissants de données terrain, et une couche de supervision qui transforme ces données brutes en 
              informations exploitables.
            </p>
            <p>
              C'est cette vision de bout en bout qui distingue un projet IoT réussi d'un simple prototype de capteur 
              connecté. La multiplication des points d'entrée physiques créés par chaque nouvel objet connecté élargit 
              également la surface d'exposition aux cybermenaces, ce qui explique pourquoi la sécurisation des flux  
              chiffrement, authentification des équipements, contrôle des accès  doit être pensée dès la conception 
              du firmware, et non ajoutée après coup.
            </p>
          </div>

          <div className="iot-content__block">
            <h2 className="iot-content__title">Ce que cela implique concrètement</h2>
            <p>
              Un projet IoT industriel exige donc de faire cohabiter deux mondes qui obéissent à des logiques 
              différentes : la rigueur du développement embarqué, où chaque octet de mémoire et chaque cycle de 
              calcul comptent, et l'agilité des plateformes de données, où l'enjeu est de transformer un flux 
              continu d'informations terrain en décisions opérationnelles.
            </p>
            <p>
              C'est cette double expertise  firmware embarqué et ingénierie logicielle  que 
              <strong> Syslearn Group</strong> met au service de ses clients IoT, du premier prototype jusqu'au 
              déploiement à grande échelle.
            </p>
          </div>
        </div>
      </section>

      <section className="iot-cta">
        <div className="iot-cta__inner">
          <div className="iot-cta__content">
            <h2 className="iot-cta__title">Prêt à discuter de votre projet ?</h2>
            <p className="iot-cta__text">
              Découvrez comment les entités de Syslearn Group peuvent vous accompagner dans vos projets IoT.
            </p>
            <div className="iot-cta__actions">
              
              <Link href="https://www.pointerlab.fr/secteurs/iot" className="iot-cta__btn iot-cta__btn--primary">
                Découvrir PointerLab
                <ExternalLink size={18} />
              </Link>
              <Link href="https://www.stackjobs.com/sectors/iot" className="iot-cta__btn iot-cta__btn--primary">
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