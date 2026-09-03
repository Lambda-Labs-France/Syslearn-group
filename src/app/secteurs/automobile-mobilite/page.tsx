import Link from "next/link";
import { 
  Car, 
  Box, 
  Monitor, 
  Wifi,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import "../../../styles/secteurs/automobile-mobilite.css";

export const metadata = {
  title: "Automobile & Mobilité",
  description: "Syslearn Group développe des systèmes embarqués et logiciels de simulation pour l'automobile avec l'écosystème C++. ISO 26262, MISRA C/C++, ADAS, Autosar et info-divertissement.",
  alternates: { canonical: "/secteurs/automobile-mobilite" },
};

export default function AutomobileMobilitePage() {
  const expertises = [
    { icon: Car, text: "Systèmes ADAS et aide à la conduite (ISO 26262, SOTIF)" },
    { icon: Box, text: "Systèmes embarqués critiques et conformité ISO 26262 (ASIL A à D)" },
    { icon: Monitor, text: "Architecture Autosar et middleware embarqué (Classic / Adaptive)" },
    { icon: Box, text: "Simulation de conduite et environnements 3D (CARLA, CarMaker)" },
    { icon: Monitor, text: "Info-divertissement et interfaces embarquées (C++/Qt, QML)" },
    { icon: Wifi, text: "IoT et connectivité véhicule (UN R155, UN R156, OTA)" },
  ];

  return (
    <main className="automobile-page">
      <section className="automobile-hero">
        <div className="automobile-hero__inner">
          <div className="automobile-hero__content">
            <div>
              <span className="automobile-hero__badge">Secteur</span>
              <h1 className="automobile-hero__title">Automobile & Mobilité : conseil et ingénierie sur mesure</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="automobile-content">
        <div className="automobile-content__inner">
          
          <div className="automobile-content__intro text-justify-hyphens">
            <p>
              De la <Link href="/secteurs/simulation" className="automobile-content__link-inline">simulation de conduite et environnements 3D</Link> à l'<Link href="/secteurs/simulation" className="automobile-content__link-inline">info-divertissement embarqué</Link>, l'automobile et la mobilité combinent 
              contraintes temps réel et exigences d'expérience utilisateur. <strong>Syslearn Group</strong> y 
              développe des logiciels bâtis sur l'écosystème <strong>C++</strong>, taillés pour répondre à ces 
              deux impératifs à la fois.
            </p>
          </div>

          <div className="automobile-content__block">
            <h2 className="automobile-content__title">Un secteur en mutation technologique profonde</h2>
            
            <h3 className="automobile-content__subtitle">De la mécanique au logiciel : un basculement structurel</h3>
            <p className="text-justify-hyphens">
              Le secteur automobile française représente <strong>329 000 salariés</strong> et <strong>1,1 % du PIB</strong> national selon 
              <Link href="https://www.insee.fr/fr/statistiques" target="_blank" rel="nofollow noopener noreferrer" className="automobile-content__link-inline"> l'INSEE</Link>. Elle traverse actuellement une mutation technologique profonde, portée par trois facteurs convergents : la transition vers l'électrique, le durcissement des normes européennes d'émissions, et la généralisation des architectures logicielles complexes.
            </p>
            <p className="text-justify-hyphens">
              Cette complexité se mesure très concrètement. Un véhicule haut de gamme embarque aujourd'hui entre <strong>70 et 100 unités de commande électronique (ECU)</strong> exécutant plus de <strong>100 millions de lignes de code</strong> - soit environ 15 fois plus qu'un avion de ligne. Selon une étude PwC largement reprise dans le secteur, 
              <Link href="https://www.pwc.fr/fr/publications/industrie/automobile-et-mobilite.html" target="_blank" rel="nofollow noopener noreferrer" className="automobile-content__link-inline"> le logiciel devrait représenter jusqu'à 60 % de la valeur d'une voiture d'ici 2030</Link>, marquant un basculement complet du modèle économique automobile : le logiciel embarqué n'est plus une couche secondaire, il est devenu le cœur de la valeur produit.
            </p>
            <p className="text-justify-hyphens">
              Pour les équipes R&D des constructeurs et équipementiers, cette mutation implique une refonte complète des processus de développement. Le logiciel embarqué automobile n'est pas un logiciel ordinaire - chaque ligne de code peut avoir des conséquences directes sur la sécurité des occupants et des usagers de la route.
            </p>
          </div>

          <div className="automobile-content__block">
            <h2 className="automobile-content__title">Une complexité logicielle qui exige des compétences rares</h2>
            <p className="text-justify-hyphens">
              Cette complexité crée une tension structurelle sur le marché des compétences. Les ingénieurs capables de maîtriser à la fois le <strong>C++ temps réel</strong>, les normes de sécurité fonctionnelle (
              <Link href="https://www.iso.org/standard/68383.html" target="_blank" rel="nofollow noopener noreferrer" className="automobile-content__link-inline">ISO 26262</Link>, 
              <Link href="https://www.misra.org.uk/" target="_blank" rel="nofollow noopener noreferrer" className="automobile-content__link-inline">MISRA C/C++</Link>), et les architectures embarquées automobiles (
              <Link href="https://www.autosar.org/" target="_blank" rel="nofollow noopener noreferrer" className="automobile-content__link-inline">Autosar</Link>) sont rares. La plupart des développeurs C++ généralistes n'ont pas de culture ISO 26262, et inversement.
            </p>
            <p className="text-justify-hyphens">
              La transition vers les véhicules électriques et connectés amplifie cette tension. De nouveaux domaines s'ajoutent aux compétences embarquées traditionnelles : les mises à jour logicielles OTA (Over-The-Air), la cybersécurité embarquée, et l'IA pour les <Link href="/secteurs/automobile-mobilite" className="automobile-content__link-inline">systèmes ADAS et aide à la conduite</Link>. Un ingénieur automobile doit désormais raisonner dans plusieurs registres à la fois : déterminisme strict pour les systèmes critiques, richesse fonctionnelle pour les interfaces utilisateur, et sécurité face aux menaces cyber.
            </p>
            <p className="text-justify-hyphens">
              C'est pour cette raison que les constructeurs et équipementiers s'appuient sur des ESN spécialisées - non pas pour déléguer, mais pour renforcer leurs équipes internes avec des profils rares et une expertise normative combinée.
            </p>
          </div>

          <div className="automobile-content__block">
            <h2 className="automobile-content__title">Nos expertises techniques pour l'automobile</h2>
            <div className="automobile-expertises">
              {expertises.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="automobile-expertise">
                    <div className="automobile-expertise__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="automobile-expertise__text text-justify-hyphens">
                      {item.text.includes("Systèmes ADAS") ? (
                        <>
                          <Link href="/secteurs/automobile-mobilite" className="automobile-content__link-inline">Systèmes ADAS</Link> et aide à la conduite (ISO 26262, SOTIF)
                        </>
                      ) : item.text.includes("Simulation de conduite") ? (
                        <>
                          <Link href="/secteurs/simulation" className="automobile-content__link-inline">Simulation de conduite</Link> et environnements 3D (CARLA, CarMaker)
                        </>
                      ) : item.text.includes("Info-divertissement") ? (
                        <>
                          <Link href="/secteurs/simulation" className="automobile-content__link-inline">Info-divertissement</Link> et interfaces embarquées (C++/Qt, QML)
                        </>
                      ) : item.text.includes("IoT et connectivité") ? (
                        <>
                          <Link href="/secteurs/iot" className="automobile-content__link-inline">IoT</Link> et connectivité véhicule (UN R155, UN R156, OTA)
                        </>
                      ) : (
                        item.text
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="automobile-content__image-wrapper">
            <img
              src="/images/secteur-automobile.jpg"
              alt="Secteur de l'automobile - Syslearn Group"
              className="automobile-content__image"
            />
          </div>

          <div className="automobile-content__block">
            <h2 className="automobile-content__title">Systèmes ADAS et aide à la conduite</h2>
            <p className="text-justify-hyphens">
              Les systèmes ADAS (Advanced Driver Assistance Systems) - freinage automatique d'urgence, régulateur adaptatif de vitesse, détection de piétons, maintien de voie, aide au stationnement - reposent sur une chaîne technique complexe : capteurs (LiDAR, radar, caméra) → fusion de données → algorithmes de décision → actionneurs.
            </p>
            <p className="text-justify-hyphens">
              La contrainte est absolue : les temps de réponse se mesurent en millisecondes, et la fiabilité n'est pas négociable. Un bug ADAS n'est pas un bug ordinaire - il peut avoir des conséquences réelles sur la route.
            </p>
            <p className="text-justify-hyphens">
              <Link href="https://www.iso.org/standard/77490.html" target="_blank" rel="nofollow noopener noreferrer" className="automobile-content__link-inline"><strong>SOTIF (ISO 21448)</strong></Link> complète ISO 26262 en adressant les situations inattendues non couvertes par la sécurité fonctionnelle classique. Elle impose une analyse des scénarios d'utilisation anormaux et des défaillances du système face à des entrées inattendues. Pour les systèmes ADAS et autonomes, SOTIF est devenue incontournable.
            </p>
          </div>

          <div className="automobile-content__block">
            <h2 className="automobile-content__title">Systèmes embarqués critiques et conformité ISO 26262</h2>
            <p className="text-justify-hyphens">
              <Link href="https://www.iso.org/standard/68383.html" target="_blank" rel="nofollow noopener noreferrer" className="automobile-content__link-inline"><strong>ISO 26262</strong></Link> est la norme internationale de sécurité fonctionnelle pour l'électronique automobile. Elle définit quatre niveaux de criticité - <strong>ASIL A à D</strong> (D = criticité maximale) - et impose un cadre de développement strict :
            </p>
            <ul className="automobile-list">
              <li><strong>Analyse de risques (HARA) :</strong> identification des défaillances potentielles et de leurs conséquences</li>
              <li><strong>Décomposition des exigences de sécurité :</strong> traçabilité complète de la conception à l'implémentation</li>
              <li><strong>Architecture redondante :</strong> mécanismes de détection et de mitigation des défaillances</li>
              <li><strong>Tests de couverture :</strong> validation exhaustive des chemins de code critiques</li>
            </ul>
            <p className="text-justify-hyphens">
              <Link href="https://www.misra.org.uk/" target="_blank" rel="nofollow noopener noreferrer" className="automobile-content__link-inline"><strong>MISRA C/C++</strong></Link> est un standard de codage embarqué automobile qui impose des règles précises pour éliminer les constructions dangereuses du langage. MISRA n'est pas une option stylistique - c'est une exigence de certification. Elle limite les pointeurs bruts, les conversions implicites, et les constructions non déterministes qui pourraient introduire des comportements imprévisibles.
            </p>
            <p className="text-justify-hyphens">
              Comme pour les <Link href="/secteurs/aeronautique" className="automobile-content__link-inline">systèmes embarqués certifiés DO-178C en aéronautique</Link>, la culture de certification est comparable : une exigence de rigueur absolue dès la phase de conception, pas une couche de vérification en fin de projet.
            </p>
          </div>

          <div className="automobile-content__block">
            <h2 className="automobile-content__title">Architecture Autosar et middleware embarqué</h2>
            <p className="text-justify-hyphens">
              <Link href="https://www.autosar.org/" target="_blank" rel="nofollow noopener noreferrer" className="automobile-content__link-inline"><strong>Autosar</strong></Link> (AUTomotive Open System ARchitecture) est devenu le standard incontournable pour l'architecture logicielle embarquée automobile. Deux variantes coexistent :
            </p>
            <ul className="automobile-list">
              <li><strong>Autosar Classic Platform :</strong> architecture pour les ECU temps réel traditionnels (RTOS, BSW, RTE)</li>
              <li><strong>Autosar Adaptive Platform :</strong> architecture pour les ECU haute performance (SoC, POSIX, service-oriented)</li>
            </ul>
            <p className="text-justify-hyphens">
              Autosar impose une séparation stricte entre le logiciel applicatif et la couche d'abstraction matérielle (BSW - Basic Software). Cette séparation offre trois avantages majeurs :
            </p>
            <ul className="automobile-list">
              <li><strong>Interopérabilité :</strong> les composants logiciels peuvent être réutilisés sur différentes architectures matérielles</li>
              <li><strong>Réutilisabilité :</strong> les fournisseurs de composants (Tier 1, éditeurs de logiciels) peuvent vendre des briques logicielles certifiées</li>
              <li><strong>Maintenabilité :</strong> les évolutions matérielles n'impactent pas le code applicatif</li>
            </ul>
            <p className="text-justify-hyphens">
              Pour les développeurs, cela implique une maîtrise de la toolchain Autosar (Vector, dSPACE, ETAS) et une compréhension fine des mécanismes de communication inter-ECU (CAN, LIN, Ethernet embarqué).
            </p>
          </div>

          <div className="automobile-content__block">
            <h2 className="automobile-content__title">Simulation de conduite et environnements 3D</h2>
            <p className="text-justify-hyphens">
              Les simulateurs de conduite reproduisent fidèlement la dynamique véhicule en temps réel, permettant la validation des algorithmes ADAS sans kilomètres réels. Les outils de référence - 
              <Link href="https://carla.org/" target="_blank" rel="nofollow noopener noreferrer" className="automobile-content__link-inline"> CARLA</Link>, <strong>IPG CarMaker</strong>, <strong>dSPACE ASM</strong> - offrent des environnements virtuels où les capteurs ADAS (LiDAR virtuel, caméra synthétique, radar) peuvent être testés dans des scénarios impossibles ou dangereux en conditions réelles.
            </p>
            <p className="text-justify-hyphens">
              Les cas d'usage sont multiples :
            </p>
            <ul className="automobile-list">
              <li><strong>Validation des algorithmes ADAS :</strong> test de milliers de scénarios sans risque</li>
              <li><strong>Homologation virtuelle :</strong> démonstration de la conformité aux normes avant les essais réels</li>
              <li><strong>Développement itératif :</strong> boucles de test rapides et reproductibles</li>
              <li><strong>Analyse de défaillances :</strong> reproduction de scénarios critiques pour le débogage</li>
            </ul>
            <p className="text-justify-hyphens">
              Le C++ est le socle de performance pour la simulation temps réel. Les simulateurs doivent reproduire la physique du véhicule (dynamique longitudinale, latérale, verticale) avec une précision de quelques millisecondes, tout en rendant les environnements 3D avec une fluidité suffisante pour que les algorithmes ADAS puissent être validés.
            </p>
          </div>

          <div className="automobile-content__block">
            <h2 className="automobile-content__title">Info-divertissement et interfaces embarquées</h2>
            <p className="text-justify-hyphens">
              Les systèmes d'info-divertissement (IVI) - cluster numérique, écran central, Head-Up Display, intégration 
              <Link href="https://source.android.com/docs/automotive" target="_blank" rel="nofollow noopener noreferrer" className="automobile-content__link-inline"> Android Automotive</Link> / CarPlay - doivent concilier deux exigences paradoxales :
            </p>
            <ul className="automobile-list">
              <li>Fluidité et richesse graphique attendues d'une interface grand public</li>
              <li>Ressources contraintes d'un système embarqué automobile</li>
            </ul>
            <p className="text-justify-hyphens">
              Les technologies de référence incluent <strong>C++/Qt</strong>, <strong>OpenGL ES</strong>, <strong>Vulkan</strong>, et les frameworks <strong>QML</strong>. Le défi technique est de maintenir une expérience utilisateur fluide (60 fps) tout en respectant les contraintes temps réel du système embarqué.
            </p>
            <p className="text-justify-hyphens">
              L'architecture logicielle doit permettre une séparation claire entre les domaines de criticité : les systèmes ASIL-D (freinage, direction) s'exécutent dans un domaine isolé, tandis que l'IVI s'exécute dans un domaine non critique avec des ressources moins contraintes. Un hyperviseur ou un RTOS sophistiqué gère cette coexistence.
            </p>
          </div>

          <div className="automobile-content__block">
            <h2 className="automobile-content__title">IoT et connectivité véhicule</h2>
            <p className="text-justify-hyphens">
              Le véhicule connecté introduit une nouvelle surface d'attaque sur des systèmes critiques pour la sécurité. Les protocoles de communication embarqués - CAN, LIN, Ethernet embarqué (100BASE-T1), SOME/IP - doivent coexister avec des connexions cloud et des mises à jour logicielles OTA.
            </p>
            <p className="text-justify-hyphens">
              Les normes de référence sont :
            </p>
            <ul className="automobile-list">
              <li>
                <Link href="https://unece.org/transport/documents/2021/03/standards/un-regulation-no-155-cyber-security-and-cyber-security?__cf_chl_rt_tk=Mv6C6C2uPsTS4BgcgDc1QyQqUP_Ke.ABuzFLmfnDPKE-1787562492-1.0.1.1-n3rI73Beu.6C_cYBt0mVYLEK6si_ECnAtwiqKTg_dXQ" target="_blank" rel="nofollow noopener noreferrer" className="automobile-content__link-inline"><strong>UN R155</strong></Link> : règlement ONU sur la cybersécurité automobile (gestion des risques cyber, architecture de sécurité)
              </li>
              <li>
                <Link href="https://unece.org/transport/documents/2021/03/standards/un-regulation-no-156-software-update-and-software-update" target="_blank" rel="nofollow noopener noreferrer" className="automobile-content__link-inline"><strong>UN R156</strong></Link> : gestion des mises à jour logicielles (OTA) avec intégrité et authentification
              </li>
            </ul>
            <p className="text-justify-hyphens">
              La connectivité véhicule crée une tension architecturale : comment intégrer la flexibilité et la richesse fonctionnelle d'une plateforme connectée avec la rigueur et l'isolation des systèmes critiques ? La réponse passe par une architecture en domaines isolés, avec des pare-feux logiciels et une gestion stricte des flux de données entre domaines.
            </p>
          </div>

          <div className="automobile-content__block">
            <h2 className="automobile-content__title">Pourquoi le choix technologique est déterminant dans l'automobile</h2>
            
            <h3 className="automobile-content__subtitle">C++ : performance temps réel et contrôle des ressources comme exigences absolues</h3>
            <p className="text-justify-hyphens">
              Dans l'automobile embarquée, un retard de quelques millisecondes sur un système de freinage ou de direction peut avoir des conséquences directes sur la route. C'est pourquoi C++ reste le socle de référence des systèmes embarqués automobiles critiques.
            </p>
            <p className="text-justify-hyphens">
              Contrairement à Python ou Java, C++ offre :
            </p>
            <ul className="automobile-list">
              <li><strong>Absence de garbage collector :</strong> pas de pauses imprévisibles</li>
              <li><strong>Contrôle fin de la mémoire :</strong> allocation et libération déterministes</li>
              <li><strong>Déterminisme temporel :</strong> les délais d'exécution sont prévisibles et bornés</li>
              <li><strong>Performances proches du C :</strong> avec les abstractions de l'orienté objet</li>
            </ul>
            <p className="text-justify-hyphens">
              Le C++ moderne (C++17/20) apporte des améliorations significatives pour l'embarqué :
            </p>
            <ul className="automobile-list">
              <li><strong>constexpr :</strong> évaluation à la compilation, zéro overhead à l'exécution</li>
              <li><strong>Move semantics :</strong> gestion efficace des ressources sans copies inutiles</li>
              <li><strong>Smart pointers :</strong> gestion automatique de la mémoire sans garbage collector</li>
              <li><strong>std::optional, std::variant :</strong> alternatives type-safe aux pointeurs null</li>
            </ul>
            <p className="text-justify-hyphens">
              <strong>Pourquoi ni Python ni Java ne conviennent seuls pour les systèmes ASIL-C/D ?</strong> Parce que le garbage collector introduit des pauses imprévisibles, et parce que la JVM ajoute une couche d'abstraction qui rend le déterminisme temporel difficile à garantir. Pour les systèmes critiques, la prévisibilité est plus importante que la facilité de développement.
            </p>

            <h3 className="automobile-content__subtitle">La double exigence : sécurité fonctionnelle et expérience utilisateur</h3>
            <p className="text-justify-hyphens">
              Le paradoxe de l'automobile moderne : le même véhicule embarque des systèmes ASIL-D (freinage, direction) et des interfaces IVI grand public. Ces deux mondes ont des contraintes opposées :
            </p>
            <div className="automobile-table-wrapper">
              <table className="automobile-table">
                <thead>
                  <tr>
                    <th>Aspect</th>
                    <th>Systèmes ASIL-D</th>
                    <th>Interfaces IVI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Déterminisme</strong></td>
                    <td>Strict, borné</td>
                    <td>Flexible, best-effort</td>
                  </tr>
                  <tr>
                    <td><strong>Isolation</strong></td>
                    <td>Complète</td>
                    <td>Intégration requise</td>
                  </tr>
                  <tr>
                    <td><strong>Richesse fonctionnelle</strong></td>
                    <td>Minimale</td>
                    <td>Maximale</td>
                  </tr>
                  <tr>
                    <td><strong>Temps de réponse</strong></td>
                    <td>Millisecondes</td>
                    <td>Centaines de ms acceptable</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-justify-hyphens">
              Une architecture logicielle bien conçue permet de les faire coexister :
            </p>
            <ul className="automobile-list">
              <li><strong>Hyperviseur ou RTOS sophistiqué :</strong> isolation des domaines de criticité</li>
              <li><strong>Séparation des ressources :</strong> CPU, mémoire, I/O dédiés à chaque domaine</li>
              <li><strong>Pare-feu logiciels :</strong> contrôle strict des flux de données entre domaines</li>
              <li><strong>Monitoring et diagnostics :</strong> détection des défaillances inter-domaines</li>
            </ul>
            <p className="text-justify-hyphens">
              Ce que cela implique pour les équipes de développement : des profils capables de raisonner dans les deux registres à la fois. Un ingénieur automobile doit comprendre les contraintes temps réel ASIL-D, mais aussi les exigences d'expérience utilisateur des interfaces modernes.
            </p>
          </div>

          <div className="automobile-content__block">
            <h2 className="automobile-content__title">Ce que Syslearn Group apporte concrètement</h2>
            
            <h3 className="automobile-content__subtitle">Une maîtrise technique et normative combinée</h3>
            <p className="text-justify-hyphens">
              La valeur ajoutée d'une ESN spécialisée sur ce secteur : des ingénieurs qui maîtrisent à la fois l'écosystème C++ embarqué et les normes du secteur (ISO 26262, MISRA, Autosar, SOTIF).
            </p>
            <p className="text-justify-hyphens">
              Cette combinaison est rare. La plupart des développeurs C++ généralistes n'ont pas de culture ISO 26262. Inversement, les ingénieurs certifiés ISO 26262 ne maîtrisent pas toujours les subtilités du C++ moderne ou les architectures Autosar complexes.
            </p>
            <p className="text-justify-hyphens">
              L'approche Syslearn Group : intégrer les contraintes normatives dès la phase de conception, pas en fin de projet pour la certification. Cela signifie :
            </p>
            <ul className="automobile-list">
              <li>Analyse de risques (HARA) menée en parallèle avec la conception architecturale</li>
              <li>Décomposition des exigences de sécurité tracée dans les outils de gestion de configuration</li>
              <li>Revues de conception impliquant à la fois des experts techniques et des experts en sécurité fonctionnelle</li>
              <li>Tests de couverture planifiés dès la phase de spécification</li>
            </ul>

            <h3 className="automobile-content__subtitle">Des profils techniques adaptés à vos projets automobile</h3>
            <p className="text-justify-hyphens">
              Syslearn Group dispose de profils variés pour couvrir l'ensemble de la chaîne de valeur automobile :
            </p>
            <ul className="automobile-list">
              <li><strong>Ingénieurs C++ embarqué automobile :</strong> ISO 26262, MISRA, Autosar, temps réel</li>
              <li><strong>Développeurs ADAS :</strong> fusion de capteurs, algorithmes de décision, validation</li>
              <li><strong>Développeurs IVI :</strong> Qt, QML, Android Automotive, interfaces fluides</li>
              <li><strong>Ingénieurs simulation :</strong> CARLA, CarMaker, environnements 3D temps réel</li>
              <li><strong>Experts cybersécurité embarquée :</strong> UN R155, UN R156, architecture sécurisée</li>
            </ul>
            <p className="text-justify-hyphens">
              Ces profils connaissent la toolchain du secteur (Vector, dSPACE, ETAS, Autosar tools) et les processus de développement des Tier 1 et constructeurs. Ils ont travaillé sur des programmes critiques et comprennent les enjeux réels du développement automobile.
            </p>
          </div>

        </div>
      </section>

      <section className="automobile-cta">
        <div className="automobile-cta__inner">
          <div className="automobile-cta__content">
            <h2 className="automobile-cta__title">Discutons de votre projet automobile</h2>
            <p className="automobile-cta__text text-justify-hyphens">
              Vous travaillez sur un projet de développement ADAS, de mise en conformité ISO 26262, de simulation de conduite, de développement IVI, ou de renforcement d'une équipe embarquée sur un programme critique ? Contactez-nous pour explorer comment Syslearn Group peut vous accompagner.
            </p>
            <div className="automobile-cta__actions">
              <Link href="https://www.syslearn.fr/qui-sommes-nous/secteurs-dactivites" target="_blank" rel="dofollow noopener noreferrer" className="automobile-cta__btn automobile-cta__btn--primary">
                Découvrir Syslearn
                <ExternalLink size={18} />
              </Link>
              <Link href="https://www.pointerlab.fr/secteurs/automobile" target="_blank" rel="dofollow noopener noreferrer" className="automobile-cta__btn automobile-cta__btn--primary">
                Découvrir PointerLab
                <ExternalLink size={18} />
              </Link>
              <Link href="https://www.stackjobs.com/sectors/automobile" target="_blank" rel="dofollow noopener noreferrer" className="automobile-cta__btn automobile-cta__btn--primary">
                Découvrir StackJobs
                <ExternalLink size={18} />
              </Link>
              <Link href="/contact" className="automobile-cta__btn automobile-cta__btn--secondary">
                Discuter de votre projet Automobile & Mobilité
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}