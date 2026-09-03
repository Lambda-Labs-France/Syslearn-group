import Link from "next/link";
import { 
  ArrowRight,
  ExternalLink
} from "lucide-react";
import "../../../styles/secteurs/simulation.css";

export const metadata = {
  title: "Simulation ",
  description: "Types, langages, frameworks, Digital Twin, profils recrutés : tout ce qu'il faut savoir sur la simulation informatique pour développer ou recruter efficacement.",
  alternates: { canonical: "/secteurs/simulation" },
};

export default function SimulationPage() {
  const langagesData = [
    { name: "C++", usage: "Simulation temps réel, industrielle, robotique, automobile", strengths: "Performance maximale, contrôle mémoire, écosystème riche", limits: "Complexité, temps de développement" },
    { name: "C", usage: "Systèmes embarqués, bas niveau", strengths: "Légèreté, portabilité, RTOS", limits: "Pas d'abstraction objet, maintenance difficile" },
    { name: "Python", usage: "Prototypage, simulation numérique, IA, Monte Carlo", strengths: "Productivité, écosystème scientifique", limits: "Performances limitées, GIL" },
    { name: "MATLAB/Simulink", usage: "Contrôle-commande, MBD, aéronautique", strengths: "Environnement intégré, génération de code", limits: "Coût de licence, propriétaire" },
    { name: "Java", usage: "Simulation distribuée, systèmes complexes", strengths: "Portabilité, robustesse", limits: "Performances inférieures à C++" },
    { name: "C#", usage: "Visualisation 3D, Unity, formation", strengths: "Intégration Unity, Windows", limits: "Moins adapté au temps réel strict" },
    { name: "Fortran", usage: "HPC, météo, nucléaire, CFD", strengths: "Performances numériques, codes hérités", limits: "Courbe d'apprentissage, écosystème limité" },
    { name: "Julia", usage: "Simulation numérique, calcul scientifique", strengths: "Performances JIT, syntaxe mathématique", limits: "Écosystème encore jeune" },
    { name: "Rust", usage: "Simulateurs critiques modernes", strengths: "Sécurité mémoire, performances C++", limits: "Courbe d'apprentissage élevée" },
    { name: "CUDA/C++", usage: "Simulation GPU, Monte Carlo, IA", strengths: "Parallélisme massif, GPU NVIDIA", limits: "Matériel spécifique, complexité" },
    { name: "JS/TypeScript", usage: "Simulateurs web, visualisation", strengths: "Accessibilité navigateur, visualisation", limits: "Inadapté aux calculs intensifs" },
  ];

  const profilsData = [
    { name: "Ingénieur C++ / Qt", skills: "C++17/20, Qt5/6, temps réel, multi-threading", domains: "Industriel, automobile, aéro, défense" },
    { name: "Ingénieur logiciel simulation", skills: "Architecture simulateur, C++, Python, modèles physiques", domains: "Système, industriel, Digital Twin" },
    { name: "Ingénieur systèmes", skills: "MBSE, SysML, Simulink, architecture système", domains: "Aéro, automobile, défense" },
    { name: "Ingénieur embarqué", skills: "C, C++, RTOS, SIL/HIL, protocoles embarqués", domains: "Automobile, aéro, médical" },
    { name: "Ingénieur HPC", skills: "C++, Fortran, MPI, OpenMP, CUDA", domains: "CFD, météo, nucléaire, finance" },
    { name: "Ingénieur 3D / visualisation", skills: "OpenGL/Vulkan, Unity/Unreal, Qt3D", domains: "Formation, VR industrielle, visualisation" },
    { name: "Ingénieur robotique", skills: "C++, Python, ROS 2, Gazebo, Isaac Sim", domains: "Robotique industrielle, mobile, drones" },
    { name: "Ingénieur IA simulation", skills: "Python, PyTorch, RL, surrogate models", domains: "Robotique, autonome, Digital Twin" },
    { name: "Développeur Python scientifique", skills: "NumPy, SciPy, SimPy, visualisation", domains: "Numérique, Monte Carlo, DES" },
    { name: "Software Architect simulation", skills: "Architecture, C++, HLA/RTI, performance", domains: "Grands systèmes, simulation distribuée" },
  ];

  const simTypes = [
    { type: "2D", constraint: "Simplicité du modèle", hardware: "PC standard", langs: "Python, C++, Java", usage: "Réseaux, trafic, circuits" },
    { type: "3D", constraint: "Rendu et calcul", hardware: "PC/GPU puissant", langs: "C++, C#, Python", usage: "Robotique, aéro, formation" },
    { type: "Temps réel", constraint: "Déterminisme temporel", hardware: "RTOS + matériel dédié", langs: "C, C++", usage: "HIL, simulateurs de vol" },
    { type: "HPC", constraint: "Volume de calcul", hardware: "Cluster multi-nœuds", langs: "C++, Fortran, MPI", usage: "CFD, météo, nucléaire" },
    { type: "Distribuée", constraint: "Cohérence inter-simulateurs", hardware: "Réseau haut débit", langs: "C++, Java", usage: "Défense, grands systèmes" },
  ];

  const simulationTypes = [
    { 
      title: "2.1 Simulation physique", 
      definition: "reproduction des lois de la physique classique (mécanique newtonienne, gravité, collisions, déformations) dans un environnement numérique.", 
      objective: "visualiser et prédire le comportement d'objets soumis à des forces.",
      example: "moteurs de jeux vidéo (PhysX, Bullet) simulant des corps rigides ; simulation de chutes et d'impacts en ingénierie.",
      tools: "NVIDIA PhysX, Bullet Physics, Havok.", 
      lang: "C++, C." 
    },
    { 
      title: "2.2 Simulation numérique", 
      definition: "résolution numérique d'équations différentielles décrivant un phénomène continu (thermique, fluidique, électromagnétique…).", 
      objective: "obtenir une solution approchée là où aucune solution analytique n'existe.",
      example: "simulation de la propagation d'une onde de choc dans un matériau composite.",
      tools: "SciPy, NumPy, MATLAB, Julia.", 
      lang: "Python, Julia, Fortran, C++." 
    },
    { 
      title: "2.3 Simulation mécanique - éléments finis (FEA)", 
      definition: "méthode des éléments finis (Finite Element Analysis) pour calculer contraintes, déformations et modes propres d'une structure.", 
      objective: "valider la résistance mécanique d'une pièce sans prototype physique.",
      example: "calcul de la tenue d'un bras de suspension automobile sous charge dynamique.",
      tools: "ANSYS Mechanical, Abaqus, Code_Aster (open source).", 
      lang: "C++, Fortran (solveurs), Python (scripting)." 
    },
    { 
      title: "2.4 Simulation thermique", 
      definition: "modélisation des transferts de chaleur (conduction, convection, rayonnement) dans un système.", 
      objective: "prévenir les surchauffes, optimiser le refroidissement.",
      example: "simulation thermique d'un dissipateur de carte électronique embarquée.",
      tools: "ANSYS Fluent, COMSOL Multiphysics, Icepak.", 
      lang: "-" 
    },
    { 
      title: "2.5 Simulation électromagnétique", 
      definition: "résolution des équations de Maxwell pour modéliser champs électriques et magnétiques, antennes, compatibilité électromagnétique (CEM).", 
      objective: "concevoir des antennes, blindages, filtres sans banc de mesure coûteux.",
      example: "simulation du rayonnement d'une antenne 5G en environnement urbain.",
      tools: "ANSYS HFSS, CST Studio Suite, OpenEMS (open source).", 
      lang: "C++, Python." 
    },
    { 
      title: "2.6 Simulation électronique (SPICE)", 
      definition: "simulation de circuits électroniques analogiques et mixtes par résolution des équations de Kirchhoff.", 
      objective: "valider le comportement d'un circuit avant le routage PCB.",
      example: "simulation d'un régulateur de tension DC-DC avec LTspice.",
      tools: "LTspice (gratuit), HSPICE, Ngspice (open source), Cadence Spectre.", 
      lang: "SPICE netlist, C++ (moteurs de simulation)." 
    },
    { 
      title: "2.7 Simulation de systèmes (system-level)", 
      definition: "modélisation du comportement global d'un système multi-domaines (mécanique + électronique + logiciel) à un niveau d'abstraction élevé.", 
      objective: "valider l'architecture système avant le développement détaillé.",
      example: "simulation d'un groupe motopropulseur hybride incluant batterie, moteur électrique et transmission.",
      tools: "MATLAB/Simulink, Modelica/OpenModelica, Dymola.", 
      lang: "Modelica, MATLAB, C++." 
    },
    { 
      title: "2.8 Simulation de systèmes embarqués", 
      definition: "exécution virtuelle d'un firmware ou d'un système d'exploitation temps réel sur un processeur émulé ou simulé.", 
      objective: "tester le logiciel embarqué avant que le matériel cible soit disponible.",
      example: "simulation d'un microcontrôleur STM32 avec QEMU pour valider un driver UART.",
      tools: "QEMU, Renode, MATLAB/Simulink Embedded Coder.", 
      lang: "C, C++, assembleur." 
    },
    { 
      title: "2.9 Simulation automobile (véhicule, ADAS, conduite autonome)", 
      definition: "simulation de la dynamique véhicule, des capteurs (LiDAR, caméra, radar) et des algorithmes de conduite autonome dans un environnement virtuel.", 
      objective: "valider les systèmes ADAS et autonomes sans kilomètres réels.",
      example: "simulation de scénarios de freinage d'urgence avec un capteur LiDAR virtuel dans CARLA.",
      tools: "CARLA, MATLAB/Simulink Vehicle Dynamics Blockset, IPG CarMaker, dSPACE.", 
      lang: "C++, Python, MATLAB." 
    },
    { 
      title: "2.10 Simulation aéronautique et spatiale", 
      definition: "simulation de la dynamique de vol, des structures aérospatiales, des trajectoires orbitales et des systèmes de guidage.", 
      objective: "certifier des systèmes critiques sans vols d'essai coûteux.",
      example: "simulation de la rentrée atmosphérique d'une capsule spatiale (contraintes thermiques + aérodynamiques).",
      tools: "MATLAB/Simulink, OpenFOAM (CFD), ANSYS, STK (Systems Tool Kit).", 
      lang: "C++, Fortran, MATLAB, Python." 
    },
    { 
      title: "2.11 Simulation robotique", 
      definition: "simulation du comportement d'un robot (cinématique, dynamique, perception, planification) dans un environnement virtuel.", 
      objective: "développer et tester des algorithmes de contrôle sans risque pour le robot ou son environnement.",
      example: "test d'un algorithme de navigation autonome sur un robot mobile dans Gazebo avant déploiement en entrepôt.",
      tools: "Gazebo, NVIDIA Isaac Sim, Webots, MuJoCo.", 
      lang: "C++, Python (ROS 2)." 
    },
    { 
      title: "2.12 Simulation de procédés industriels", 
      definition: "modélisation des procédés chimiques, pétroliers ou pharmaceutiques (réactions, séparations, transferts de masse).", 
      objective: "optimiser les conditions opératoires, réduire la consommation énergétique.",
      example: "simulation d'une colonne de distillation pour optimiser le ratio reflux/énergie.",
      tools: "Aspen Plus, HYSYS, gPROMS.", 
      lang: "Fortran (solveurs historiques), C++, Python." 
    },
    { 
      title: "2.13 Simulation de réseaux informatiques", 
      definition: "modélisation du comportement d'un réseau (routage, congestion, latence, protocoles) sans infrastructure physique.", 
      objective: "tester des architectures réseau, des protocoles ou des politiques QoS.",
      example: "simulation d'un réseau SDN avec NS-3 pour évaluer l'impact d'une politique de routage.",
      tools: "NS-3, GNS3, Cisco Packet Tracer.", 
      lang: "C++, Python." 
    },
    { 
      title: "2.14 Simulation IoT", 
      definition: "simulation de flottes de capteurs, d'actionneurs et de passerelles IoT pour tester les protocoles de communication et les architectures de données.", 
      objective: "valider une architecture IoT à grande échelle avant déploiement.",
      example: "simulation de 10 000 capteurs MQTT pour tester la montée en charge d'un broker.",
      tools: "AWS IoT Device Simulator, Eclipse Mosquitto (tests), NS-3.", 
      lang: "Python, C++, JavaScript." 
    },
    { 
      title: "2.15 Simulation de trafic et mobilité", 
      definition: "modélisation du comportement de véhicules, piétons et transports en commun dans un réseau de voirie.", 
      objective: "optimiser les plans de circulation, évaluer l'impact de nouvelles infrastructures.",
      example: "simulation de l'impact d'un nouveau carrefour giratoire sur les temps de parcours avec SUMO.",
      tools: "SUMO (open source), PTV Vissim, Aimsun.", 
      lang: "C++, Python." 
    },
    { 
      title: "2.16 Simulation financière", 
      definition: "modélisation stochastique des marchés financiers, des portefeuilles et des risques (VaR, stress tests).", 
      objective: "évaluer des stratégies d'investissement et quantifier les risques.",
      example: "simulation Monte Carlo de 100 000 scénarios de marché pour calculer la VaR d'un portefeuille obligataire.",
      tools: "Python (NumPy, SciPy, QuantLib), MATLAB, R.", 
      lang: "Python, C++, R, Java." 
    },
    { 
      title: "2.17 Simulation médicale", 
      definition: "reproduction de procédures chirurgicales, de physiologie humaine ou de propagation épidémique dans un environnement numérique.", 
      objective: "former des praticiens, tester des dispositifs médicaux, modéliser des épidémies.",
      example: "simulateur de laparoscopie pour la formation chirurgicale avec retour haptique.",
      tools: "SOFA Framework, Unity (visualisation), MATLAB.", 
      lang: "C++, Python." 
    },
    { 
      title: "2.18 Simulation scientifique (CFD, météo, physique des particules)", 
      definition: "simulation de phénomènes naturels complexes à grande échelle - dynamique des fluides computationnelle (CFD), prévision météorologique, simulation de collisions de particules.", 
      objective: "comprendre des phénomènes inaccessibles à l'expérimentation directe.",
      example: "simulation CFD de l'écoulement autour d'un profil d'aile avec OpenFOAM ; simulation de collisions hadroniques au CERN avec Geant4.",
      tools: "OpenFOAM, Geant4, WRF (météo), CESM.", 
      lang: "C++, Fortran, Python." 
    },
    { 
      title: "2.19 Simulation militaire et défense", 
      definition: "simulation de scénarios tactiques, d'entraînement au combat, de systèmes d'armes et de logistique militaire.", 
      objective: "former les personnels, tester des doctrines, évaluer des équipements sans engagement opérationnel.",
      example: "simulateur de conduite de char ou de pilotage de drone pour l'entraînement des forces armées.",
      tools: "VBS4 (Bohemia Interactive Simulations), JSAF, OneSAF.", 
      lang: "C++, C#." 
    },
    { 
      title: "2.20 Simulation énergétique", 
      definition: "modélisation des réseaux électriques, des bâtiments ou des systèmes de production d'énergie renouvelable.", 
      objective: "optimiser la gestion de l'énergie, planifier les investissements, évaluer l'intégration des EnR.",
      example: "simulation de l'intégration d'un parc éolien offshore dans un réseau régional avec PowerFactory.",
      tools: "DIgSILENT PowerFactory, EnergyPlus, OpenDSS.", 
      lang: "Python, C++, MATLAB." 
    },
    { 
      title: "2.21 Simulation nucléaire", 
      definition: "simulation du comportement neutronique des réacteurs, des transferts thermiques dans le cœur et des scénarios accidentels.", 
      objective: "concevoir des réacteurs sûrs, former les opérateurs, analyser les incidents.",
      example: "simulation neutronique d'un cœur de réacteur à eau pressurisée avec MCNP ou OpenMC.",
      tools: "MCNP, OpenMC, RELAP, CATHARE.", 
      lang: "Fortran, C++, Python." 
    },
    { 
      title: "2.22 Simulation environnementale", 
      definition: "modélisation de la dispersion de polluants, de l'évolution climatique, de la qualité de l'air ou de l'eau.", 
      objective: "évaluer l'impact environnemental, guider les politiques publiques.",
      example: "simulation de la dispersion d'un rejet industriel dans une rivière avec TELEMAC.",
      tools: "TELEMAC, MIKE by DHI, WRF.", 
      lang: "Fortran, C++, Python." 
    },
    { 
      title: "2.23 Simulation de cybersécurité", 
      definition: "reproduction d'environnements réseau et de scénarios d'attaque pour tester des défenses ou former des équipes SOC.", 
      objective: "entraîner les équipes de sécurité, valider des architectures de défense.",
      example: "cyber range simulant une attaque par ransomware sur un SI industriel (OT/IT).",
      tools: "GNS3, Cyber Range platforms (KYPO, Cyberbit), CALDERA (MITRE).", 
      lang: "Python, Go, C++." 
    },
    { 
      title: "2.24 Simulation multi-agents", 
      definition: "modélisation de systèmes composés d'agents autonomes interagissant selon des règles locales, produisant des comportements émergents.", 
      objective: "étudier des phénomènes complexes : marchés, foules, épidémies, essaims de robots.",
      example: "simulation de la propagation d'une épidémie dans une population hétérogène avec NetLogo ou Mesa.",
      tools: "NetLogo, Mesa (Python), AnyLogic, Repast.", 
      lang: "Python, Java, C++." 
    },
    { 
      title: "2.25 Simulation à événements discrets (DES)", 
      definition: "modélisation d'un système dont l'état ne change qu'à des instants précis (arrivée d'un client, panne d'une machine, fin d'un traitement).", 
      objective: "optimiser des files d'attente, des chaînes logistiques, des processus de service.",
      example: "simulation d'un service d'urgences hospitalières pour optimiser l'affectation des ressources médicales.",
      tools: "SimPy (Python), AnyLogic, Arena, FlexSim.", 
      lang: "Python, Java, C++." 
    },
    { 
      title: "2.26 Simulation Monte Carlo", 
      definition: "technique utilisant des tirages aléatoires répétés pour estimer des grandeurs probabilistes ou résoudre des problèmes déterministes complexes.", 
      objective: "quantifier l'incertitude, calculer des intégrales multidimensionnelles, évaluer des risques.",
      example: "calcul de la probabilité de défaillance d'une structure composite par tirage de 10 000 scénarios.",
      tools: "MATLAB, R, C++ (bibliothèques custom).", 
      lang: "Python, C++, R, Fortran." 
    },
    { 
      title: "2.27 Simulation temps réel", 
      definition: "simulation dont le temps de calcul est contraint pour correspondre au temps physique (1 seconde simulée = 1 seconde réelle), avec des garanties de latence strictes.", 
      objective: "interfacer le simulateur avec des équipements réels ou des opérateurs humains.",
      example: "simulateur de vol temps réel connecté à une cabine de pilotage physique.",
      tools: "Simulink Real-Time, dSPACE SCALEXIO, VxWorks, QNX.", 
      lang: "C++, C, Ada." 
    },
    { 
      title: "2.28 Hardware-in-the-Loop (HIL)", 
      definition: "technique de test où un composant matériel réel (ECU, calculateur, actionneur) est connecté à un simulateur qui reproduit son environnement.", 
      objective: "tester le matériel dans des conditions réalistes sans le système complet.",
      example: "test d'un calculateur ABS réel connecté à un simulateur de dynamique véhicule temps réel.",
      tools: "dSPACE SCALEXIO, NI VeriStand, ETAS LABCAR.", 
      lang: "C, C++, MATLAB/Simulink." 
    },
    { 
      title: "2.29 Software-in-the-Loop (SIL)", 
      definition: "variante du HIL où c'est le code logiciel embarqué (compilé pour le PC hôte) qui est testé dans la boucle de simulation, sans matériel cible.", 
      objective: "valider le comportement fonctionnel du logiciel embarqué tôt dans le cycle de développement.",
      example: "test du code de contrôle d'un système de freinage régénératif compilé sur PC, connecté à un modèle de dynamique véhicule.",
      tools: "MATLAB/Simulink, dSPACE SystemDesk, Vector CANoe.", 
      lang: "C, C++, MATLAB." 
    },
    { 
      title: "2.30 Digital Twin / Jumeau numérique", 
      definition: "modèle numérique vivant d'un objet ou système physique, continuellement alimenté par des données temps réel issues de capteurs.", 
      objective: "surveiller, prédire et optimiser en continu.",
      example: "jumeau numérique d'une turbine à gaz pour la maintenance prédictive.",
      tools: "NVIDIA Omniverse, Azure Digital Twins, AWS IoT TwinMaker.", 
      lang: "C++, Python." 
    },
  ];

  return (
    <main className="simulation-page">
      <section className="simulation-hero">
        <div className="simulation-hero__inner">
          <div className="simulation-hero__content">
            <div>
              <span className="simulation-hero__badge">Secteur</span>
              <h1 className="simulation-hero__title">Simulation : conseil et ingénierie sur mesure</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="simulation-content">
        <div className="simulation-content__inner">
          
          <div className="simulation-content__intro text-justify-hyphens">
            <p>
              La simulation informatique consiste à reproduire le comportement d'un système réel dans un environnement numérique, pour tester, valider ou optimiser sans risque ni coût physique. Il existe une trentaine de grandes familles de simulateurs, du calcul par éléments finis au Digital Twin en passant par le "Hardware in the Loop". C++ reste le langage dominant pour les simulateurs industriels et temps réel, mais Python, MATLAB/Simulink, Julia et Rust gagnent du terrain selon les contextes. Développer un simulateur sérieux mobilise des profils rares : ingénieurs C++/Qt, spécialistes HPC, ingénieurs systèmes embarqués et architectes logiciel simulation.
            </p>
          </div>

          <div className="simulation-content__image-wrapper">
            <img
              src="/images/simulation.jpg"
              alt="Simulation informatique - Syslearn Group"
              className="simulation-content__image"
            />
          </div>

          <div className="simulation-content__block">
            <h2 className="simulation-content__title">1. Introduction : simulation, modélisation, émulation - de quoi parle-t-on ?</h2>
            
            <h3 className="simulation-content__subtitle">Qu'est-ce qu'une simulation informatique ?</h3>
            <p className="text-justify-hyphens">
              Une simulation informatique est l'exécution d'un modèle mathématique ou logique sur un ordinateur pour reproduire le comportement d'un système physique, biologique, économique ou technique dans le temps. Le système réel n'est pas nécessairement construit - ou ne peut pas l'être dans des conditions de test réalistes. On simule un crash automobile avant de construire le prototype, on simule la dispersion d'un polluant avant d'intervenir sur le terrain, on simule un réseau électrique avant de modifier son architecture.
            </p>

            <h3 className="simulation-content__subtitle">Qu'est-ce qu'un simulateur ?</h3>
            <p className="text-justify-hyphens">
              Un simulateur est le logiciel (et parfois le dispositif matériel associé) qui exécute cette simulation. Il encapsule un modèle, un moteur de calcul, une interface de contrôle et souvent une couche de visualisation. Un simulateur de vol, par exemple, reproduit la dynamique d'un aéronef avec une précision suffisante pour former des pilotes sans mettre un avion en l'air.
            </p>

            <h3 className="simulation-content__subtitle">Différence entre simulation, modélisation et émulation</h3>
            <p className="text-justify-hyphens">
              Ces trois termes sont souvent confondus. Voici la distinction opérationnelle :
            </p>
            <div className="simulation-table-wrapper">
              <table className="simulation-table">
                <thead>
                  <tr>
                    <th>Concept</th>
                    <th>Définition</th>
                    <th>Objectif principal</th>
                    <th>Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Modélisation</strong></td>
                    <td>Représentation abstraite d'un système par des équations ou des règles</td>
                    <td>Comprendre, formaliser</td>
                    <td>Modèle mathématique d'un moteur thermique</td>
                  </tr>
                  <tr>
                    <td><strong>Simulation</strong></td>
                    <td>Exécution dynamique d'un modèle dans le temps</td>
                    <td>Tester, prédire, valider</td>
                    <td>Simuler le comportement du moteur sous charge variable</td>
                  </tr>
                  <tr>
                    <td><strong>Émulation</strong></td>
                    <td>Reproduction du comportement d'un système cible sur un système hôte différent</td>
                    <td>Compatibilité, portabilité</td>
                    <td>Émuler un processeur ARM sur x86 pour tester un firmware</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-justify-hyphens">
              La différence entre simulation et émulation est fondamentale : l'émulation cherche à reproduire fidèlement l'interface et le comportement observable d'un système (souvent matériel), sans nécessairement modéliser ses mécanismes internes. La simulation, elle, modélise les mécanismes eux-mêmes.
            </p>

            <h3 className="simulation-content__subtitle">Pourquoi les entreprises utilisent-elles des simulateurs ?</h3>
            <ul className="simulation-list">
              <li><strong>Réduction des coûts :</strong> tester virtuellement coûte une fraction du test physique (prototypes, bancs d'essai, matières premières).</li>
              <li><strong>Réduction des risques :</strong> on peut simuler des scénarios dangereux ou destructifs sans danger réel.</li>
              <li><strong>Accélération des cycles :</strong> les itérations de conception sont bien plus rapides en numérique qu'en physique.</li>
              <li><strong>Tests impossibles en réel :</strong> conditions extrêmes, échelles de temps incompatibles, systèmes non encore construits.</li>
              <li><strong>Formation :</strong> simulateurs de conduite, de chirurgie, de pilotage - former sans conséquences.</li>
            </ul>
          </div>

          <div className="simulation-content__block">
            <h2 className="simulation-content__title">2. Les 30 grands types de simulations informatiques</h2>
            
            <div className="simulation-types-grid">
              {simulationTypes.map((item, index) => (
                <div key={index} className="simulation-type-card">
                  <h4 className="simulation-type-card__title">{item.title}</h4>
                  <p><strong>Définition :</strong> {item.definition}</p>
                  <p><strong>Objectif :</strong> {item.objective}</p>
                  <p><strong>Exemple concret :</strong> {item.example}</p>
                  <div className="simulation-type__meta">
                    <p><strong>Outils :</strong> {item.tools}</p>
                    {item.lang !== "-" && <p><strong>Langages courants :</strong> {item.lang}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="simulation-content__block">
            <h2 className="simulation-content__title">3. Les langages de programmation pour développer un simulateur</h2>
            <p className="text-justify-hyphens">
              Choisir un langage pour un simulateur, ce n'est pas une question de préférence - c'est une décision d'architecture. Voici comment raisonner.
            </p>

            <h3 className="simulation-content__subtitle">C++ : le socle des simulateurs industriels</h3>
            <p className="text-justify-hyphens">
              C++ est le langage de référence dès que la performance, le déterminisme temporel ou la complexité du modèle entrent en jeu. Il offre un contrôle fin de la mémoire, une gestion explicite des ressources et des performances proches du C, tout en permettant une architecture orientée objet robuste. C'est le choix naturel pour la simulation temps réel, les simulateurs embarqués, la robotique, l'automobile et l'aéronautique.
            </p>
            <p className="text-justify-hyphens">
              <strong>Quand choisir C++ :</strong> simulation temps réel, HIL/SIL, simulateurs industriels complexes, moteurs de simulation physique, calcul haute performance avec contrôle mémoire. <strong>Frameworks associés :</strong> Qt (interfaces et architecture), Boost, Eigen (algèbre linéaire), ROS 2.
            </p>

            <h3 className="simulation-content__subtitle">C : systèmes embarqués et simulation bas niveau</h3>
            <p className="text-justify-hyphens">
              Le C reste incontournable pour les simulateurs de systèmes embarqués où les ressources sont contraintes et où l'on cible des microcontrôleurs ou des RTOS. Il est aussi utilisé dans les couches basses des grands codes de simulation (solveurs, interfaces matérielles).
            </p>
            <p className="text-justify-hyphens">
              <strong>Quand choisir C :</strong> simulation de firmware, émulation de microcontrôleurs, couches bas niveau de simulateurs HIL.
            </p>

            <h3 className="simulation-content__subtitle">Python : prototypage, IA et simulation scientifique</h3>
            <p className="text-justify-hyphens">
              Python s'est imposé comme le langage du prototypage rapide et de la simulation numérique. Son écosystème (NumPy, SciPy, SimPy, Mesa) couvre la simulation à événements discrets, Monte Carlo, multi-agents et scientifique. Il est rarement utilisé seul pour des simulateurs temps réel, mais il orchestre souvent des solveurs C++ via des bindings (pybind11, ctypes).
            </p>
            <p className="text-justify-hyphens">
              <strong>Quand choisir Python :</strong> prototypage de modèles, simulation numérique, Monte Carlo, multi-agents, post-traitement de résultats, scripting de simulateurs C++.
            </p>

            <h3 className="simulation-content__subtitle">MATLAB / Simulink : modélisation et contrôle-commande</h3>
            <p className="text-justify-hyphens">
              MATLAB et Simulink dominent dans les domaines où l'ingénierie des systèmes dynamiques prime : automobile, aéronautique, contrôle-commande. Simulink permet de construire des modèles graphiquement et de générer du code C/C++ embarqué (Embedded Coder). C'est l'environnement de référence pour le développement Model-Based (MBD).
            </p>
            <p className="text-justify-hyphens">
              <strong>Quand choisir MATLAB/Simulink :</strong> systèmes de contrôle, modélisation multi-domaines, génération de code embarqué, SIL/HIL.
            </p>

            <h3 className="simulation-content__subtitle">Java : simulation distribuée et systèmes complexes</h3>
            <p className="text-justify-hyphens">
              Java est utilisé dans des plateformes de simulation distribuée (HLA/RTI) et des outils comme AnyLogic. Sa portabilité et sa robustesse pour les applications longue durée en font un choix viable pour les simulations de systèmes complexes à grande échelle.
            </p>
            <p className="text-justify-hyphens">
              <strong>Quand choisir Java :</strong> simulation distribuée, simulation d'entreprise, outils de simulation avec interface graphique riche.
            </p>

            <h3 className="simulation-content__subtitle">C# : visualisation 3D et Unity</h3>
            <p className="text-justify-hyphens">
              C# est le langage natif d'Unity, moteur 3D largement utilisé pour les simulateurs de formation, les simulateurs de conduite et les applications de réalité virtuelle industrielle. Il est aussi présent dans les applications Windows industrielles.
            </p>
            <p className="text-justify-hyphens">
              <strong>Quand choisir C# :</strong> simulateurs avec rendu 3D temps réel, formation, réalité virtuelle, applications industrielles Windows.
            </p>

            <h3 className="simulation-content__subtitle">Fortran : calcul scientifique haute performance</h3>
            <p className="text-justify-hyphens">
              Fortran est loin d'être mort. Les grands codes de simulation numérique (météo, nucléaire, CFD, physique des particules) reposent encore massivement sur des bases Fortran optimisées depuis des décennies. Fortran 2018 est un langage moderne avec support natif du parallélisme.
            </p>
            <p className="text-justify-hyphens">
              <strong>Quand choisir Fortran :</strong> codes de simulation scientifique hérités, HPC, météorologie, nucléaire, physique computationnelle.
            </p>

            <h3 className="simulation-content__subtitle">Julia : montée en puissance pour la simulation numérique</h3>
            <p className="text-justify-hyphens">
              Julia combine la productivité de Python et les performances de C++ grâce à la compilation JIT. Il gagne du terrain dans la simulation numérique, la physique computationnelle et la modélisation différentielle (DifferentialEquations.jl).
            </p>
            <p className="text-justify-hyphens">
              <strong>Quand choisir Julia :</strong> simulation numérique intensive, calcul scientifique, prototypage haute performance, remplacement de MATLAB pour le calcul.
            </p>

            <h3 className="simulation-content__subtitle">Rust : performance et sécurité mémoire</h3>
            <p className="text-justify-hyphens">
              Rust offre des performances comparables à C++ avec des garanties de sécurité mémoire à la compilation, sans garbage collector. Il commence à apparaître dans des simulateurs modernes où la fiabilité est critique et où C++ montre ses limites en termes de sécurité.
            </p>
            <p className="text-justify-hyphens">
              <strong>Quand choisir Rust :</strong> nouveaux simulateurs critiques, systèmes embarqués modernes, remplacement progressif de C++ dans des contextes de sécurité.
            </p>

            <h3 className="simulation-content__subtitle">CUDA / C++ : simulation accélérée par GPU</h3>
            <p className="text-justify-hyphens">
              CUDA permet d'exécuter des milliers de threads en parallèle sur GPU NVIDIA. Combiné à C++, il est utilisé pour les simulations massivement parallèles : Monte Carlo financier, simulation de particules, rendu physique, apprentissage par renforcement en simulation.
            </p>
            <p className="text-justify-hyphens">
              <strong>Quand choisir CUDA/C++ :</strong> simulation Monte Carlo à grande échelle, simulation de particules, entraînement de modèles IA en simulation, rendu temps réel.
            </p>

            <h3 className="simulation-content__subtitle">JavaScript / TypeScript : simulation web et visualisation</h3>
            <p className="text-justify-hyphens">
              JavaScript et TypeScript permettent de créer des simulateurs interactifs dans le navigateur, des outils de visualisation de données de simulation et des interfaces de contrôle. Three.js, D3.js et WebGL sont les briques habituelles.
            </p>
            <p className="text-justify-hyphens">
              <strong>Quand choisir JS/TS :</strong> simulateurs pédagogiques web, dashboards de visualisation, interfaces de contrôle de simulateurs, démonstrations interactives.
            </p>

            <div className="simulation-table-wrapper">
              <table className="simulation-table">
                <thead>
                  <tr>
                    <th>Langage</th>
                    <th>Cas d'usage principal</th>
                    <th>Points forts</th>
                    <th>Limites</th>
                  </tr>
                </thead>
                <tbody>
                  {langagesData.map((item, index) => (
                    <tr key={index}>
                      <td><strong>{item.name}</strong></td>
                      <td>{item.usage}</td>
                      <td>{item.strengths}</td>
                      <td>{item.limits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="simulation-content__block">
            <h2 className="simulation-content__title">4. Technologies et frameworks pour le développement de simulateurs</h2>

            <h3 className="simulation-content__subtitle">Rendu et visualisation</h3>
            <ul className="simulation-list">
              <li><strong>OpenGL :</strong> API graphique standard pour le rendu 2D/3D, utilisée dans les simulateurs industriels et scientifiques nécessitant un rendu performant sans moteur 3D complet.</li>
              <li><strong>Vulkan :</strong> successeur d'OpenGL, plus bas niveau, offrant un contrôle fin du GPU. Utilisé dans les simulateurs haute performance où la latence de rendu est critique.</li>
              <li><strong>DirectX :</strong> API Microsoft pour Windows, utilisée dans les simulateurs de formation et les applications industrielles Windows.</li>
              <li><strong>Qt / Qt3D :</strong> framework C++ incontournable pour les interfaces de simulateurs industriels. Qt3D permet d'intégrer une visualisation 3D directement dans une application Qt, sans moteur de jeu. Qt est massivement utilisé dans les simulateurs embarqués, automobiles et aéronautiques.</li>
            </ul>

            <h3 className="simulation-content__subtitle">Moteurs 3D et simulation visuelle</h3>
            <ul className="simulation-list">
              <li><strong>Unity :</strong> moteur 3D en C# très utilisé pour les simulateurs de formation, les environnements de réalité virtuelle industrielle et les simulateurs de conduite. Son écosystème d'assets et sa facilité de déploiement multi-plateforme en font un choix courant hors simulation temps réel strict.</li>
              <li><strong>Unreal Engine :</strong> moteur C++ avec un rendu photoréaliste. Utilisé pour des simulateurs de conduite autonome (CARLA est basé sur Unreal), des simulateurs militaires et des environnements de formation haute fidélité visuelle.</li>
            </ul>

            <h3 className="simulation-content__subtitle">Simulation robotique</h3>
            <ul className="simulation-list">
              <li><strong>ROS 2 (Robot Operating System) :</strong> middleware standard de facto pour la robotique. Fournit les outils de communication inter-processus, de gestion des capteurs et d'intégration avec les simulateurs. Indispensable pour tout développement robotique sérieux.</li>
              <li><strong>Gazebo :</strong> simulateur robotique open source, intégré nativement avec ROS 2. Simule la physique, les capteurs (LiDAR, caméra, IMU) et les actionneurs dans un environnement 3D.</li>
              <li><strong>NVIDIA Isaac Sim :</strong> simulateur robotique basé sur NVIDIA Omniverse, avec rendu photoréaliste et simulation physique GPU-accélérée. Particulièrement adapté à l'entraînement de modèles IA (sim-to-real).</li>
            </ul>

            <h3 className="simulation-content__subtitle">Simulation système et contrôle</h3>
            <ul className="simulation-list">
              <li><strong>MATLAB / Simulink :</strong> environnement de référence pour la modélisation de systèmes dynamiques, le contrôle-commande et la génération de code embarqué. Utilisé de l'automobile à l'aéronautique en passant par l'énergie.</li>
              <li><strong>Modelica / OpenModelica :</strong> langage de modélisation orienté équations pour les systèmes multi-physiques. OpenModelica est l'implémentation open source de référence. Utilisé pour modéliser des systèmes complexes (véhicules, bâtiments, réseaux énergétiques) de façon déclarative.</li>
            </ul>

            <h3 className="simulation-content__subtitle">Simulation physique et ingénierie</h3>
            <ul className="simulation-list">
              <li><strong>ANSYS :</strong> suite commerciale couvrant la mécanique des structures (Mechanical), la fluidique (Fluent), l'électromagnétisme (HFSS) et le thermique. Standard industriel dans l'aéronautique, l'automobile et l'énergie.</li>
              <li><strong>COMSOL Multiphysics :</strong> outil de simulation multi-physiques par éléments finis, couvrant la thermique, l'électromagnétisme, la mécanique des fluides et les couplages entre physiques. Très utilisé en R&D académique et industrielle.</li>
              <li><strong>OpenFOAM :</strong> solveur CFD open source, massivement utilisé dans l'industrie et la recherche pour la simulation d'écoulements fluides complexes. Écrit en C++, extensible et gratuit.</li>
            </ul>

            <h3 className="simulation-content__subtitle">Calcul haute performance</h3>
            <ul className="simulation-list">
              <li><strong>CUDA :</strong> plateforme de calcul parallèle sur GPU NVIDIA. Permet d'accélérer massivement les simulations numériques intensives.</li>
              <li><strong>MPI (Message Passing Interface) :</strong> standard pour la communication entre processus dans les simulations distribuées sur clusters HPC.</li>
              <li><strong>OpenMP :</strong> API pour le parallélisme à mémoire partagée sur CPU multi-cœurs. Souvent combiné à MPI pour des simulations hybrides.</li>
            </ul>

            <h3 className="simulation-content__subtitle">IA dans la simulation</h3>
            <ul className="simulation-list">
              <li><strong>TensorFlow / PyTorch :</strong> frameworks d'apprentissage profond utilisés pour entraîner des modèles de substitution (surrogate models) qui remplacent des simulations coûteuses, ou pour l'apprentissage par renforcement en simulation (robotique, conduite autonome).</li>
            </ul>
          </div>

          <div className="simulation-content__block">
            <h2 className="simulation-content__title">5. Simulation 2D, 3D, temps réel et haute performance</h2>

            <h3 className="simulation-content__subtitle">Simulation 2D</h3>
            <p className="text-justify-hyphens">
              Moins gourmande en ressources, la simulation 2D est utilisée pour les systèmes plans (circuits électroniques, réseaux, flux logistiques simples) ou comme étape de prototypage avant la 3D. Les outils de simulation de réseaux (NS-3), de trafic (SUMO) ou de circuits (SPICE) opèrent principalement en 2D.
            </p>

            <h3 className="simulation-content__subtitle">Simulation 3D</h3>
            <p className="text-justify-hyphens">
              La simulation 3D modélise les systèmes dans l'espace tridimensionnel. Elle est indispensable pour la mécanique des structures, la CFD, la robotique, la conduite autonome et les simulateurs de formation. Elle exige des ressources de calcul et de rendu significativement plus importantes.
            </p>
            <p className="text-justify-hyphens">
              <strong>Exemple :</strong> simulation 3D d'un bras robotique dans NVIDIA Isaac Sim pour valider sa trajectoire avant déploiement.
            </p>

            <h3 className="simulation-content__subtitle">Simulation temps réel</h3>
            <p className="text-justify-hyphens">
              La simulation temps réel impose une contrainte temporelle stricte : le simulateur doit produire ses résultats dans un délai déterministe, synchronisé avec le temps physique. Cela nécessite des RTOS (VxWorks, QNX), des langages déterministes (C, C++) et souvent du matériel dédié (dSPACE, NI).
            </p>
            <p className="text-justify-hyphens">
              <strong>Exemple :</strong> simulateur HIL pour tester un calculateur de direction assistée électrique à 1 kHz.
            </p>

            <h3 className="simulation-content__subtitle">Simulation haute performance (HPC)</h3>
            <p className="text-justify-hyphens">
              Le HPC (High Performance Computing) mobilise des clusters de calcul (des centaines à des milliers de cœurs) pour des simulations qui dépassent les capacités d'un seul serveur. La simulation météorologique, nucléaire, CFD à grande échelle et la simulation de particules relèvent du HPC.
            </p>
            <p className="text-justify-hyphens">
              <strong>Exemple :</strong> simulation CFD d'un avion complet sur un cluster de 1 000 cœurs avec OpenFOAM et MPI.
            </p>

            <h3 className="simulation-content__subtitle">Simulation distribuée</h3>
            <p className="text-justify-hyphens">
              La simulation distribuée répartit le calcul sur plusieurs machines communicantes, souvent via des standards comme HLA (High Level Architecture) pour les simulations militaires ou de grands systèmes. Elle permet de combiner des simulateurs hétérogènes dans un environnement cohérent.
            </p>

            <div className="simulation-table-wrapper">
              <table className="simulation-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Contrainte principale</th>
                    <th>Matériel typique</th>
                    <th>Langages dominants</th>
                    <th>Cas d'usage</th>
                  </tr>
                </thead>
                <tbody>
                  {simTypes.map((item, index) => (
                    <tr key={index}>
                      <td><strong>{item.type}</strong></td>
                      <td>{item.constraint}</td>
                      <td>{item.hardware}</td>
                      <td>{item.langs}</td>
                      <td>{item.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="simulation-content__block">
            <h2 className="simulation-content__title">6. Le Digital Twin : bien plus qu'un simulateur</h2>

            <h3 className="simulation-content__subtitle">Définition précise</h3>
            <p className="text-justify-hyphens">
              Un jumeau numérique (Digital Twin) est une représentation numérique dynamique d'un objet, système ou processus physique, continuellement mise à jour par des données issues de capteurs temps réel, et capable de prédire, d'optimiser et d'informer des décisions sur son homologue physique.
            </p>
            <p className="text-justify-hyphens">
              La définition IEEE (standard IEEE 3835-2025) positionne le Digital Twin comme "un ensemble de constructs d'information virtuels qui reproduit la structure, le contexte et le comportement d'un système naturel, conçu ou social", avec une mise à jour dynamique et une capacité prédictive.
            </p>

            <h3 className="simulation-content__subtitle">Fonctionnement</h3>
            <p className="text-justify-hyphens">
              Un Digital Twin repose sur quatre composants essentiels :
            </p>
            <ul className="simulation-list">
              <li><strong>Le jumeau physique :</strong> l'objet réel équipé de capteurs (température, vibration, pression, position…).</li>
              <li><strong>Le flux de données :</strong> collecte temps réel via IoT, protocoles industriels (OPC-UA, MQTT) ou APIs.</li>
              <li><strong>Le modèle numérique :</strong> simulation physique, modèle de comportement, modèle IA ou combinaison des trois.</li>
              <li><strong>La couche analytique et décisionnelle :</strong> algorithmes de détection d'anomalies, de maintenance prédictive, d'optimisation.</li>
            </ul>

            <h3 className="simulation-content__subtitle">Architecture typique d'un Digital Twin</h3>
            <div className="simulation-architecture">
              <div className="simulation-architecture__step">Capteurs physiques</div>
              <div className="simulation-architecture__arrow">↓</div>
              <div className="simulation-architecture__step">Couche IoT / Edge Computing</div>
              <div className="simulation-architecture__arrow">↓</div>
              <div className="simulation-architecture__step">Plateforme de données temps réel</div>
              <div className="simulation-architecture__arrow">↓</div>
              <div className="simulation-architecture__step">Modèle numérique + Simulation</div>
              <div className="simulation-architecture__arrow">↓</div>
              <div className="simulation-architecture__step">Couche IA / Analytics</div>
              <div className="simulation-architecture__arrow">↓</div>
              <div className="simulation-architecture__step">Interface de décision / Alertes / Optimisation</div>
              <div className="simulation-architecture__arrow">↓</div>
              <div className="simulation-architecture__step simulation-architecture__step--last">Rétroaction vers le système physique</div>
            </div>

            <h3 className="simulation-content__subtitle">Différence fondamentale avec un simulateur classique</h3>
            <div className="simulation-table-wrapper">
              <table className="simulation-table">
                <thead>
                  <tr>
                    <th>Critère</th>
                    <th>Simulateur classique</th>
                    <th>Digital Twin</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Connexion au réel</strong></td>
                    <td>Aucune (modèle statique ou ponctuel)</td>
                    <td>Permanente (données temps réel)</td>
                  </tr>
                  <tr>
                    <td><strong>Mise à jour</strong></td>
                    <td>Manuelle, périodique</td>
                    <td>Continue et automatique</td>
                  </tr>
                  <tr>
                    <td><strong>Objectif</strong></td>
                    <td>Tester, valider, former</td>
                    <td>Surveiller, prédire, optimiser en continu</td>
                  </tr>
                  <tr>
                    <td><strong>Cycle de vie</strong></td>
                    <td>Lié au projet de conception</td>
                    <td>Parallèle à la vie de l'objet physique</td>
                  </tr>
                  <tr>
                    <td><strong>IA intégrée</strong></td>
                    <td>Optionnelle</td>
                    <td>Souvent centrale</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="simulation-content__subtitle">Exemples industriels concrets</h3>
            <ul className="simulation-list">
              <li><strong>Usine de fabrication :</strong> jumeau numérique d'une ligne d'assemblage (Siemens, avec Siemens Xcelerator) permettant de détecter les dérives de qualité en temps réel et d'optimiser les paramètres de production.</li>
              <li><strong>Turbine à gaz :</strong> GE Digital utilise des jumeaux numériques de ses turbines pour anticiper les maintenances et optimiser les rendements.</li>
              <li><strong>Réseau électrique :</strong> simulation continue d'un réseau de distribution pour détecter les surcharges et planifier les interventions.</li>
              <li><strong>Véhicule connecté :</strong> jumeau numérique d'un véhicule en flotte pour le suivi de l'usure des composants et la maintenance prédictive.</li>
            </ul>

            <h3 className="simulation-content__subtitle">Rôle de l'IA dans les Digital Twins</h3>
            <p className="text-justify-hyphens">
              L'IA joue un rôle croissant dans les Digital Twins modernes : les modèles de substitution (surrogate models) remplacent des simulations physiques coûteuses par des réseaux de neurones entraînés sur des données de simulation. Les algorithmes de détection d'anomalies (autoencodeurs, isolation forests) identifient les comportements anormaux. L'apprentissage par renforcement optimise les paramètres opératoires en continu.
            </p>
          </div>

          <div className="simulation-content__block">
            <h2 className="simulation-content__title">7. La simulation dans l'industrie : cas d'usage concrets</h2>

            <h3 className="simulation-content__subtitle">Maintenance prédictive</h3>
            <p className="text-justify-hyphens">
              La simulation, couplée aux données capteurs, permet de modéliser la dégradation des équipements et d'anticiper les pannes avant qu'elles surviennent. Un modèle de fatigue simulé, calibré sur les données de vibration d'un roulement, peut prédire sa durée de vie résiduelle avec une précision opérationnelle.
            </p>

            <h3 className="simulation-content__subtitle">Conception et validation produit</h3>
            <p className="text-justify-hyphens">
              Les simulations FEA, CFD et thermiques permettent de valider un design avant tout prototype physique. Dans l'automobile, un constructeur peut simuler des centaines de variantes de géométrie de carrosserie pour optimiser l'aérodynamique sans soufflerie.
            </p>

            <h3 className="simulation-content__subtitle">Tests virtuels</h3>
            <ul className="simulation-list">
              <li><strong>Crash test virtuel :</strong> simulation FEA de l'impact d'un véhicule à 56 km/h, réduisant le nombre de crash tests physiques nécessaires pour la certification.</li>
              <li><strong>Test de fatigue :</strong> simulation de millions de cycles de charge sur une pièce mécanique pour prédire sa durée de vie.</li>
              <li><strong>Test thermique :</strong> simulation de la montée en température d'un système électronique en conditions extrêmes.</li>
            </ul>

            <h3 className="simulation-content__subtitle">Optimisation des processus de fabrication</h3>
            <p className="text-justify-hyphens">
              La simulation industrielle (Siemens Plant Simulation, FlexSim) permet de modéliser une ligne de production entière, d'identifier les goulots d'étranglement et de tester des réorganisations sans arrêter la production.
            </p>

            <h3 className="simulation-content__subtitle">Formation des opérateurs</h3>
            <p className="text-justify-hyphens">
              Les simulateurs de formation sont utilisés dans des secteurs où l'erreur humaine a des conséquences graves : pilotage aérien, conduite de centrale nucléaire, chirurgie, conduite de véhicules lourds. Ils permettent de former dans des conditions réalistes, y compris des scénarios d'urgence impossibles à reproduire en réel.
            </p>

            <h3 className="simulation-content__subtitle">Sécurité et gestion des risques</h3>
            <p className="text-justify-hyphens">
              La simulation de scénarios accidentels (incendie, explosion, rupture de canalisation) permet d'évaluer les risques et de dimensionner les dispositifs de sécurité. Dans le nucléaire, les simulateurs de sûreté sont des outils réglementaires.
            </p>

            <h3 className="simulation-content__subtitle">Réduction des coûts et délais de mise sur le marché</h3>
            <p className="text-justify-hyphens">
              En réduisant le nombre de prototypes physiques et en détectant les défauts de conception tôt, la simulation raccourcit les cycles de développement et diminue les coûts d'ingénierie.
            </p>

            <div className="simulation-table-wrapper">
              <table className="simulation-table">
                <thead>
                  <tr>
                    <th>Secteur</th>
                    <th>Cas d'usage principal</th>
                    <th>Outils typiques</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Automobile</strong></td>
                    <td>ADAS, crash test virtuel, dynamique véhicule</td>
                    <td>CARLA, ANSYS, dSPACE, MATLAB</td>
                  </tr>
                  <tr>
                    <td><strong>Aéronautique</strong></td>
                    <td>Certification de systèmes, CFD, simulation de vol</td>
                    <td>OpenFOAM, ANSYS, Simulink</td>
                  </tr>
                  <tr>
                    <td><strong>Énergie</strong></td>
                    <td>Intégration EnR, gestion réseau, Digital Twin turbine</td>
                    <td>PowerFactory, MATLAB, Siemens</td>
                  </tr>
                  <tr>
                    <td><strong>Nucléaire</strong></td>
                    <td>Neutronique, sûreté, formation opérateurs</td>
                    <td>MCNP, OpenMC, CATHARE</td>
                  </tr>
                  <tr>
                    <td><strong>Défense</strong></td>
                    <td>Entraînement tactique, simulation de systèmes d'armes</td>
                    <td>VBS4, OneSAF, dSPACE</td>
                  </tr>
                  <tr>
                    <td><strong>Santé</strong></td>
                    <td>Formation chirurgicale, simulation épidémique</td>
                    <td>SOFA, NetLogo, Unity</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="simulation-content__block">
            <h2 className="simulation-content__title">8. Quels profils informatiques développent des simulateurs ?</h2>

            <h3 className="simulation-content__subtitle">Ingénieur C++ / Qt</h3>
            <p className="text-justify-hyphens">
              <strong>Compétences clés :</strong> C++ moderne (C++17/20), Qt5/Qt6, architecture logicielle, temps réel, multi-threading. <strong>Domaines :</strong> simulation industrielle, automobile, aéronautique, défense, systèmes embarqués.
            </p>
            <p className="text-justify-hyphens">
              C'est le profil le plus recherché dans le développement de simulateurs industriels. La maîtrise de Qt (pour les interfaces et l'architecture) combinée à un C++ solide est une combinaison rare et très valorisée.
            </p>

            <h3 className="simulation-content__subtitle">Ingénieur logiciel simulation</h3>
            <p className="text-justify-hyphens">
              <strong>Compétences clés :</strong> architecture de simulateurs, intégration de modèles physiques, C++, Python, interfaces de simulation. <strong>Domaines :</strong> simulation système, simulation industrielle, Digital Twin.
            </p>

            <h3 className="simulation-content__subtitle">Ingénieur systèmes</h3>
            <p className="text-justify-hyphens">
              <strong>Compétences clés :</strong> MBSE (Model-Based Systems Engineering), SysML, MATLAB/Simulink, architecture système, interfaces entre sous-systèmes. <strong>Domaines :</strong> aéronautique, automobile, défense, énergie.
            </p>

            <h3 className="simulation-content__subtitle">Ingénieur systèmes embarqués</h3>
            <p className="text-justify-hyphens">
              <strong>Compétences clés :</strong> C, C++, RTOS (FreeRTOS, VxWorks, QNX), SIL/HIL, protocoles embarqués (CAN, LIN, Ethernet embarqué). <strong>Domaines :</strong> automobile, aéronautique, médical, défense.
            </p>

            <h3 className="simulation-content__subtitle">Ingénieur calcul scientifique / HPC</h3>
            <p className="text-justify-hyphens">
              <strong>Compétences clés :</strong> C++, Fortran, MPI, OpenMP, CUDA, optimisation numérique, algèbre linéaire. <strong>Domaines :</strong> CFD, météo, nucléaire, physique des particules, finance quantitative.
            </p>

            <h3 className="simulation-content__subtitle">Ingénieur 3D / visualisation</h3>
            <p className="text-justify-hyphens">
              <strong>Compétences clés :</strong> C++, OpenGL/Vulkan, Unity/Unreal Engine, Qt3D, shaders, rendu temps réel. <strong>Domaines :</strong> simulateurs de formation, réalité virtuelle industrielle, visualisation scientifique.
            </p>

            <h3 className="simulation-content__subtitle">Ingénieur robotique</h3>
            <p className="text-justify-hyphens">
              <strong>Compétences clés :</strong> C++, Python, ROS 2, Gazebo, NVIDIA Isaac Sim, cinématique, planification de trajectoires. <strong>Domaines :</strong> robotique industrielle, robotique mobile, drones, cobots.
            </p>

            <h3 className="simulation-content__subtitle">Ingénieur IA appliquée à la simulation</h3>
            <p className="text-justify-hyphens">
              <strong>Compétences clés :</strong> Python, PyTorch/TensorFlow, apprentissage par renforcement, surrogate models, sim-to-real. <strong>Domaines :</strong> robotique, conduite autonome, Digital Twin, optimisation de procédés.
            </p>

            <h3 className="simulation-content__subtitle">Développeur Python scientifique</h3>
            <p className="text-justify-hyphens">
              <strong>Compétences clés :</strong> Python, NumPy, SciPy, SimPy, Pandas, visualisation (Matplotlib, Plotly), Jupyter. <strong>Domaines :</strong> simulation numérique, Monte Carlo, simulation à événements discrets, post-traitement.
            </p>

            <h3 className="simulation-content__subtitle">Software Architect simulation</h3>
            <p className="text-justify-hyphens">
              <strong>Compétences clés :</strong> architecture logicielle (patterns, SOLID, DDD), C++, intégration de simulateurs hétérogènes, HLA/RTI, performance. <strong>Domaines :</strong> grands systèmes de simulation, simulation distribuée, plateformes de simulation.
            </p>

            <div className="simulation-table-wrapper">
              <table className="simulation-table">
                <thead>
                  <tr>
                    <th>Profil</th>
                    <th>Compétences clés</th>
                    <th>Domaines d'application</th>
                  </tr>
                </thead>
                <tbody>
                  {profilsData.map((item, index) => (
                    <tr key={index}>
                      <td><strong>{item.name}</strong></td>
                      <td>{item.skills}</td>
                      <td>{item.domains}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="simulation-content__block">
            <h2 className="simulation-content__title">9. Comment choisir les technologies pour développer un simulateur ?</h2>

            <div className="simulation-table-wrapper">
              <table className="simulation-table">
                <thead>
                  <tr>
                    <th>Type de besoin</th>
                    <th>Langage recommandé</th>
                    <th>Technologies</th>
                    <th>Pourquoi ce choix</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Simulation temps réel stricte</td>
                    <td>C, C++</td>
                    <td>dSPACE, VxWorks, QNX</td>
                    <td>Déterminisme temporel, contrôle mémoire</td>
                  </tr>
                  <tr>
                    <td>HIL / SIL</td>
                    <td>C, C++, MATLAB</td>
                    <td>dSPACE, NI VeriStand, Simulink</td>
                    <td>Standards industrie, génération de code</td>
                  </tr>
                  <tr>
                    <td>Simulation physique 3D</td>
                    <td>C++, C#</td>
                    <td>Unreal Engine, Unity, Gazebo</td>
                    <td>Rendu, physique intégrée, écosystème</td>
                  </tr>
                  <tr>
                    <td>Simulation robotique</td>
                    <td>C++, Python</td>
                    <td>ROS 2, Gazebo, Isaac Sim</td>
                    <td>Standard robotique, intégration capteurs</td>
                  </tr>
                  <tr>
                    <td>Simulation numérique / scientifique</td>
                    <td>Python, Julia, Fortran</td>
                    <td>NumPy, SciPy, OpenFOAM</td>
                    <td>Productivité, bibliothèques scientifiques</td>
                  </tr>
                  <tr>
                    <td>Simulation HPC (CFD, météo)</td>
                    <td>C++, Fortran, MPI</td>
                    <td>OpenFOAM, ANSYS, MPI, CUDA</td>
                    <td>Scalabilité, performances cluster</td>
                  </tr>
                  <tr>
                    <td>Digital Twin</td>
                    <td>C++, Python</td>
                    <td>NVIDIA Omniverse, Azure DT, AWS IoT</td>
                    <td>Intégration IoT, IA, temps réel</td>
                  </tr>
                  <tr>
                    <td>Simulation multi-agents</td>
                    <td>Python, Java</td>
                    <td>Mesa, AnyLogic, NetLogo</td>
                    <td>Facilité de modélisation, visualisation</td>
                  </tr>
                  <tr>
                    <td>Simulation financière</td>
                    <td>Python, C++</td>
                    <td>QuantLib, NumPy</td>
                    <td>Bibliothèques financières, Monte Carlo</td>
                  </tr>
                  <tr>
                    <td>Simulateur de formation 3D</td>
                    <td>C#</td>
                    <td>Unity, Unreal Engine</td>
                    <td>Rendu, déploiement multi-plateforme</td>
                  </tr>
                  <tr>
                    <td>Simulation embarquée</td>
                    <td>C, C++</td>
                    <td>QEMU, Renode, FreeRTOS</td>
                    <td>Émulation matérielle, RTOS</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="simulation-content__subtitle">Les erreurs fréquentes dans le choix technologique</h3>
            <ul className="simulation-list">
              <li><strong>1. Choisir Python pour un simulateur temps réel.</strong> Python est excellent pour le prototypage, mais son GIL et son interprétation le rendent inadapté aux contraintes de déterminisme temporel strict. Le résultat : des performances insuffisantes découvertes tard dans le projet.</li>
              <li><strong>2. Sous-estimer la complexité de l'intégration matérielle.</strong> Un simulateur HIL n'est pas qu'un modèle logiciel - il implique des interfaces matérielles (bus CAN, FPGA, I/O temps réel) qui contraignent fortement le choix des outils et du matériel cible.</li>
              <li><strong>3. Ignorer la maintenabilité au profit des performances brutes.</strong> Un simulateur en C pur ultra-optimisé qui ne peut être maintenu que par son auteur original est un risque projet majeur. L'architecture et la lisibilité du code comptent autant que les performances.</li>
              <li><strong>4. Adopter un moteur de jeu pour de la simulation industrielle critique.</strong> Unity et Unreal Engine sont excellents pour la visualisation et la formation, mais leur cycle de mise à jour, leur modèle de licence et leur déterminisme physique ne sont pas adaptés aux simulations certifiables (aéronautique, nucléaire, médical).</li>
            </ul>
          </div>

          <div className="simulation-content__block">
            <h2 className="simulation-content__title">10. Tendance et avenir de la simulation informatique</h2>

            <h3 className="simulation-content__subtitle">IA générative et simulation</h3>
            <p className="text-justify-hyphens">
              Les modèles génératifs (LLM, modèles de diffusion) commencent à être utilisés pour générer automatiquement des scénarios de simulation - cas de test pour la conduite autonome, scénarios d'entraînement pour des systèmes de défense, variations de paramètres pour des études de robustesse. Les surrogate models (réseaux de neurones entraînés à imiter un simulateur coûteux) réduisent drastiquement les temps de calcul pour l'optimisation.
            </p>

            <h3 className="simulation-content__subtitle">Digital Twins de nouvelle génération</h3>
            <p className="text-justify-hyphens">
              Les Digital Twins évoluent vers des architectures plus autonomes, capables de s'auto-calibrer, de détecter leurs propres dérives de modèle et de proposer des actions correctives sans intervention humaine. L'intégration de l'IA générative dans les Digital Twins ouvre la voie à des jumeaux capables de répondre en langage naturel à des questions sur l'état du système physique.
            </p>

            <h3 className="simulation-content__subtitle">Simulation accélérée par GPU</h3>
            <p className="text-justify-hyphens">
              NVIDIA Omniverse s'impose comme une plateforme de référence pour la simulation physique GPU-accélérée et les Digital Twins industriels. La simulation de fluides, de corps rigides et de déformables en temps réel sur GPU ouvre des possibilités inaccessibles il y a cinq ans.
            </p>

            <h3 className="simulation-content__subtitle">Simulation cloud et HPC-as-a-service</h3>
            <p className="text-justify-hyphens">
              Les grands fournisseurs cloud (AWS, Azure, GCP) proposent des services HPC à la demande, permettant d'exécuter des simulations massives sans infrastructure propre. AWS SimSpace Weaver, Azure HPC ou les offres de simulation cloud d'ANSYS réduisent la barrière d'accès au calcul haute performance.
            </p>

            <h3 className="simulation-content__subtitle">Sim-to-real en robotique</h3>
            <p className="text-justify-hyphens">
              L'entraînement de robots dans des simulateurs (Isaac Sim, MuJoCo) avant déploiement physique - le sim-to-real - est devenu une approche standard. Les progrès dans la fidélité physique des simulateurs (rendu photoréaliste, simulation de contact précise) réduisent le "reality gap" qui limitait cette approche.
            </p>

            <h3 className="simulation-content__subtitle">Réalité virtuelle et augmentée dans la simulation</h3>
            <p className="text-justify-hyphens">
              La VR et l'AR s'intègrent de plus en plus dans les simulateurs de formation et d'ingénierie. Un opérateur peut interagir avec un jumeau numérique en réalité augmentée, superposant les données de simulation sur l'équipement réel.
            </p>

            <h3 className="simulation-content__subtitle">Edge Computing et simulation embarquée</h3>
            <p className="text-justify-hyphens">
              La miniaturisation des puces de calcul (NVIDIA Jetson, Apple Silicon) permet d'embarquer des simulations directement sur les équipements, sans dépendance au cloud. Un robot peut exécuter une simulation de planification de trajectoire localement, en temps réel.
            </p>

            <h3 className="simulation-content__subtitle">Intégration IoT + simulation temps réel</h3>
            <p className="text-justify-hyphens">
              La convergence entre IoT industriel et simulation temps réel produit des Digital Twins capables de réagir en millisecondes aux événements physiques - détection d'anomalie, reconfiguration automatique, alerte préventive. Les protocoles OPC-UA et MQTT jouent un rôle central dans cette intégration.
            </p>
          </div>

          <div className="simulation-content__block">
            <h2 className="simulation-content__title">FAQ - Simulation informatique</h2>

            <div className="simulation-faq">
              <div className="simulation-faq-item">
                <h3 className="simulation-faq-item__question">Qu'est-ce que la simulation informatique ?</h3>
                <p className="simulation-faq-item__answer text-justify-hyphens">
                  La simulation informatique consiste à reproduire le comportement d'un système réel dans un environnement numérique, en exécutant un modèle mathématique ou logique sur un ordinateur. Elle permet de tester, valider et optimiser des systèmes sans les construire physiquement ou sans les exposer à des conditions réelles dangereuses.
                </p>
              </div>

              <div className="simulation-faq-item">
                <h3 className="simulation-faq-item__question">Quelle est la différence entre simulation et émulation ?</h3>
                <p className="simulation-faq-item__answer text-justify-hyphens">
                  La simulation modélise les mécanismes internes d'un système pour reproduire son comportement dans le temps. L'émulation reproduit l'interface et le comportement observable d'un système cible sur un système hôte différent, sans nécessairement modéliser ses mécanismes internes. On émule un processeur ARM sur x86 ; on simule la dynamique d'un moteur thermique.
                </p>
              </div>

              <div className="simulation-faq-item">
                <h3 className="simulation-faq-item__question">Quel langage choisir pour développer un simulateur ?</h3>
                <p className="simulation-faq-item__answer text-justify-hyphens">
                  Cela dépend du contexte. C++ est le choix dominant pour les simulateurs industriels, temps réel et embarqués. Python convient au prototypage, à la simulation numérique et aux simulations à événements discrets. MATLAB/Simulink est la référence pour le contrôle-commande et le développement Model-Based. Julia monte en puissance pour le calcul scientifique haute performance. Rust est une option sérieuse pour les nouveaux simulateurs critiques.
                </p>
              </div>

              <div className="simulation-faq-item">
                <h3 className="simulation-faq-item__question">Comment développer un simulateur informatique ?</h3>
                <p className="simulation-faq-item__answer text-justify-hyphens">
                  Le développement d'un simulateur suit généralement ces étapes : (1) définir le périmètre et le niveau de fidélité requis, (2) choisir l'approche de modélisation (physique, empirique, IA), (3) sélectionner les langages et frameworks adaptés, (4) implémenter le modèle et le moteur de simulation, (5) valider le simulateur par comparaison avec des données réelles ou des références, (6) intégrer l'interface utilisateur et les interfaces matérielles si nécessaire.
                </p>
              </div>

              <div className="simulation-faq-item">
                <h3 className="simulation-faq-item__question">Quelle est la différence entre un Digital Twin et un simulateur classique ?</h3>
                <p className="simulation-faq-item__answer text-justify-hyphens">
                  Un simulateur classique est ponctuel : on le lance pour tester un scénario, puis on l'arrête. Un Digital Twin est permanent et connecté en temps réel à son homologue physique via des capteurs. Il se met à jour continuellement, peut prédire l'évolution du système et informer des décisions opérationnelles en continu. Un simulateur est un outil de conception ; un Digital Twin est un outil d'exploitation.
                </p>
              </div>

              <div className="simulation-faq-item">
                <h3 className="simulation-faq-item__question">Quels profils recrutent les entreprises pour développer des simulateurs ?</h3>
                <p className="simulation-faq-item__answer text-justify-hyphens">
                  Les profils les plus recherchés sont : ingénieur C++/Qt (le plus demandé), ingénieur systèmes embarqués, ingénieur calcul scientifique/HPC, ingénieur robotique (ROS 2, Gazebo), ingénieur 3D/visualisation et ingénieur IA appliquée à la simulation. Ces profils sont rares et très valorisés sur le marché.
                </p>
              </div>

              <div className="simulation-faq-item">
                <h3 className="simulation-faq-item__question">Quel est le coût de développement d'un simulateur ?</h3>
                <p className="simulation-faq-item__answer text-justify-hyphens">
                  Il varie considérablement selon la complexité et la fidélité requises. Un simulateur de prototypage en Python peut être développé en quelques semaines. Un simulateur industriel certifiable (aéronautique, nucléaire) mobilise des équipes pluridisciplinaires pendant plusieurs années. Les coûts de licence des outils commerciaux (ANSYS, dSPACE, MATLAB) s'ajoutent aux coûts de développement.
                </p>
              </div>

              <div className="simulation-faq-item">
                <h3 className="simulation-faq-item__question">Qu'est-ce que la simulation temps réel et en quoi diffère-t-elle d'une simulation classique ?</h3>
                <p className="simulation-faq-item__answer text-justify-hyphens">
                  Une simulation temps réel est contrainte de produire ses résultats dans un délai déterministe correspondant au temps physique. Si le simulateur calcule 1 seconde de comportement, il dispose exactement de 1 seconde réelle pour le faire. Cela impose des choix stricts : langages déterministes (C, C++), systèmes d'exploitation temps réel (RTOS), matériel dédié. Une simulation classique peut prendre le temps qu'il faut - on attend que le calcul soit terminé.
                </p>
              </div>
            </div>
          </div>

          <div className="simulation-content__block">
            <h2 className="simulation-content__title">Faire appel à une ESN spécialisée pour vos projets de simulation</h2>
            <p className="text-justify-hyphens">
              Développer ou faire évoluer un logiciel de simulation est un défi technique qui dépasse souvent les ressources internes des équipes R&D. Identifier des ingénieurs maîtrisant à la fois les exigences de performance (C++, temps réel, HPC), les frameworks spécialisés (Qt, ROS 2, Simulink, CUDA) et les contraintes métier (certification, sûreté, précision numérique) prend du temps - et ces profils sont en tension sur le marché.
            </p>
            <p className="text-justify-hyphens">
              Une ESN spécialisée dans le recrutement tech peut vous aider à identifier rapidement les bons profils : ingénieurs C++/Qt pour vos simulateurs industriels, développeurs Python scientifiques pour vos modèles numériques, ingénieurs systèmes embarqués pour vos projets SIL/HIL, ou ingénieurs robotique pour vos applications ROS 2. L'enjeu n'est pas seulement de trouver un développeur - c'est de trouver quelqu'un qui comprend les contraintes spécifiques de votre domaine de simulation.
            </p>
          </div>

                    <div className="simulation-content__block">
            <h2 className="simulation-content__title">Sources utiles</h2>
            <ul className="simulation-list">
              <li>
                <strong>ROS 2</strong> - 
                <Link href="https://docs.ros.org/en/rolling/" target="_blank" rel="nofollow noopener noreferrer" className="simulation-content__link-inline"> Documentation officielle</Link>
              </li>
              <li>
                <strong>NVIDIA Isaac Sim</strong> - 
                <Link href="https://docs.isaacsim.omniverse.nvidia.com/" target="_blank" rel="nofollow noopener noreferrer" className="simulation-content__link-inline"> Documentation officielle</Link>
              </li>
              <li>
                <strong>NVIDIA Omniverse</strong> - 
                <Link href="https://docs.omniverse.nvidia.com/" target="_blank" rel="nofollow noopener noreferrer" className="simulation-content__link-inline"> Documentation officielle</Link>
              </li>
              <li>
                <strong>Gazebo</strong> - 
                <Link href="https://gazebosim.org/docs" target="_blank" rel="nofollow noopener noreferrer" className="simulation-content__link-inline"> Documentation officielle</Link>
              </li>
              <li>
                <strong>OpenFOAM</strong> - 
                <Link href="https://openfoam.org/" target="_blank" rel="nofollow noopener noreferrer" className="simulation-content__link-inline"> Site officiel (OpenFOAM Foundation)</Link>
              </li>
              <li>
                <strong>ANSYS</strong> - 
                <Link href="https://www.ansys.com/products" target="_blank" rel="nofollow noopener noreferrer" className="simulation-content__link-inline"> Portail de documentation</Link>
              </li>
              <li>
                <strong>COMSOL Multiphysics</strong> - 
                <Link href="https://www.comsol.fr/documentation" target="_blank" rel="nofollow noopener noreferrer" className="simulation-content__link-inline"> Documentation officielle</Link>
              </li>
              <li>
                <strong>OpenModelica</strong> - 
                <Link href="https://openmodelica.org/" target="_blank" rel="nofollow noopener noreferrer" className="simulation-content__link-inline"> Site officiel</Link>
              </li>
              <li>
                <strong>MATLAB / Simulink</strong> - 
                <Link href="https://fr.mathworks.com/products/simulink.html" target="_blank" rel="nofollow noopener noreferrer" className="simulation-content__link-inline"> Documentation MathWorks</Link>
              </li>
              <li>
                <strong>IEEE</strong> - 
                <Link href="https://technav.ieee.org/tag/digital-twin" target="_blank" rel="nofollow noopener noreferrer" className="simulation-content__link-inline"> Digital Twin (Technav)</Link>
              </li>
              <li>
                <strong>NIST</strong> - 
                <Link href="https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-8.pdf" target="_blank" rel="nofollow noopener noreferrer" className="simulation-content__link-inline"> Digital Twins: Definitions and State of the Art</Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <section className="simulation-cta">
            <div className="simulation-cta__inner">
              <div className="simulation-cta__content">
                <h2 className="simulation-cta__title">Prêt à discuter de votre projet de simulation ?</h2>
                <p className="simulation-cta__text text-justify-hyphens">
                  Développer ou faire évoluer un logiciel de simulation est un défi technique qui dépasse souvent les ressources internes des équipes R&D. Découvrez comment les entités de Syslearn Group peuvent vous accompagner dans vos projets de simulation.
                </p>
                <div className="simulation-cta__actions">
                  <Link href="/contact" className="simulation-cta__btn simulation-cta__btn--primary">
                    Discuter de votre projet Simulation
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </div>
      </section>
    </main>
  );
}