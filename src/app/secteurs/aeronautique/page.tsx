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
    { icon: Cpu, text: "Systèmes embarqués temps réel et commandes de vol (C++ avionique)" },
    { icon: Box, text: "Simulation de vol et logiciels de simulation aéronautique" },
    { icon: Monitor, text: "Interfaces homme-machine cockpit (C++/Qt, ARINC 661)" },
    { icon: Calculator, text: "Calcul scientifique et simulation haute performance (CFD, HPC)" },
    { icon: Plane, text: "Certification DO-178C : de l'exigence au test (MC/DC)" },
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
          
          <div className="aeronautique-content__intro-wrapper">
            <p className="aeronautique-content__intro-text text-justify-hyphens">
              Un système avionique ne tolère pas l'approximation. <strong>Syslearn Group</strong> conçoit des 
              logiciels de simulation et des systèmes embarqués pour l'aéronautique, sur des environnements où 
              chaque ligne de code peut être soumise à certification.
            </p>
            <div className="aeronautique-content__divider" />
          </div>

          <div className="aeronautique-content__block">
            <h2 className="aeronautique-content__title">Un secteur en forte croissance, des recrutements massifs</h2>
            <p className="text-justify-hyphens">
              Simulation de vol, systèmes de communication embarqués, interfaces cockpit : les projets aéronautiques demandent une maîtrise fine du <strong>C++ temps réel</strong> et une culture de la fiabilité logicielle poussée à l'extrême.
            </p>
            <p className="text-justify-hyphens">
              Cette exigence s'inscrit dans une filière parmi les plus stratégiques de l'industrie française. En 2025, l'aérospatiale française a réalisé un 
              <Link href="https://www.gifas.fr/" target="_blank" rel="nofollow noopener noreferrer" className="aeronautique-content__link-inline"> chiffre d'affaires de 85,6 milliards d'euros</Link>, en hausse de <strong>12 %</strong> sur un an, portée par la reprise du trafic aérien, des exportations solides et une montée en cadence industrielle continue. Le secteur emploie désormais <strong>230 500 salariés</strong> en France, après une création nette de <strong>7 000 emplois</strong> en 2025, et prévoit environ <strong>20 000 recrutements</strong> supplémentaires en 2026.
            </p>
            <p className="text-justify-hyphens">
              Les ingénieurs et cadres techniques constituent une part majeure de ces recrutements : la filière aéronautique et spatiale est aujourd'hui le <strong>premier employeur d'ingénieurs en France</strong>, selon les données consolidées par 
              <Link href="https://www.iesf.fr/" target="_blank" rel="nofollow noopener noreferrer" className="aeronautique-content__link-inline"> IESF</Link>. Cette dynamique crée une demande massive de profils techniques rares, notamment en systèmes embarqués critiques et certification logicielle.
            </p>
          </div>

          <div className="aeronautique-content__block">
            <h2 className="aeronautique-content__title">La rareté des profils C++ certifiables comme contrainte opérationnelle</h2>
            <p className="text-justify-hyphens">
              La France forme chaque année environ <strong>40 000 ingénieurs</strong>, alors que les besoins cumulés de l'aéronautique, du spatial et des autres filières industrielles nécessiteraient près du double. Cette tension structurelle sur les compétences crée un goulot d'étranglement particulier pour les profils maîtrisant à la fois le <strong>C++ temps réel</strong> ET la culture <strong>DO-178C</strong>.
            </p>
            <p className="text-justify-hyphens">
              Ce n'est pas un problème de salaire - c'est un problème de formation et d'expérience sectorielle. Les ingénieurs capables de naviguer dans un environnement de certification logicielle avionique, de comprendre la traçabilité des exigences, de maîtriser les outils qualifiés (DOORS, VectorCAST, LDRA, Polyspace) et de respecter les disciplines de couverture de test (MC/DC) sont rares. Ils ne s'improvisent pas : ils s'acquièrent par des années de pratique sur des projets certifiés.
            </p>
            <p className="text-justify-hyphens">
              C'est cette pénurie qui pousse les industriels aéronautiques à s'appuyer sur des ESN spécialisées capables de mobiliser des profils pré-qualifiés et expérimentés, plutôt que de former en interne des équipes sur des délais incompatibles avec les calendriers de développement.
            </p>
          </div>

          <div className="aeronautique-content__block">
            <h2 className="aeronautique-content__title">Nos expertises techniques pour l'aéronautique</h2>
            <div className="aeronautique-expertises">
              {expertises.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="aeronautique-expertise">
                    <div className="aeronautique-expertise__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="aeronautique-expertise__text text-justify-hyphens">
                      {item.text.includes("Simulation de vol") ? (
                        <>
                          <Link href="/secteurs/simulation" className="aeronautique-content__link-inline">Simulation de vol</Link> et logiciels de simulation aéronautique
                        </>
                      ) : item.text.includes("Calcul scientifique") ? (
                        <>
                          <Link href="/secteurs/simulation" className="aeronautique-content__link-inline">Calcul scientifique</Link> et simulation haute performance (CFD, HPC)
                        </>
                      ) : item.text.includes("Certification DO-178C") ? (
                        <>
                          <Link href="/secteurs/aeronautique" className="aeronautique-content__link-inline">Certification DO-178C</Link> : de l'exigence au test (MC/DC)
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

          <div className="aeronautique-content__image-wrapper">
            <img
              src="/images/secteur-aeronautique.jpg"
              alt="Secteur de l'aéronautique - Syslearn Group"
              className="aeronautique-content__image"
            />
          </div>

          <div className="aeronautique-content__block">
            <h2 className="aeronautique-content__title">Systèmes embarqués temps réel et commandes de vol</h2>
            <p className="text-justify-hyphens">
              Le C++ est le langage de référence pour les systèmes avioniques critiques : il offre un contrôle fin des ressources matérielles, une prédictibilité des temps d'exécution, l'absence de garbage collector et une gestion déterministe de la mémoire. Ces propriétés sont incontournables pour les systèmes où le moindre écart de timing peut compromettre la sûreté d'un aéronef.
            </p>
            <p className="text-justify-hyphens">
              Les cas d'usage incluent les calculateurs de commandes de vol (Flight Control Computers), les systèmes de navigation inertielle (IRS), les Flight Management Systems (FMS), les systèmes de communication embarquée et les calculateurs de gestion moteur. Chacun de ces systèmes exige une synchronisation précise, une latence garantie et une absence de comportements imprévisibles.
            </p>
            <p className="text-justify-hyphens">
              Syslearn Group maîtrise le développement de ces systèmes dans un cadre de certification stricte, en intégrant dès la conception les contraintes de traçabilité, de vérification et de test. Nous accompagnons aussi les projets de <Link href="/secteurs/defense" className="aeronautique-content__link-inline">systèmes embarqués critiques défense</Link>, où les mêmes exigences de déterminisme s'appliquent.
            </p>
          </div>

          <div className="aeronautique-content__block">
            <h2 className="aeronautique-content__title">Simulation de vol et logiciels de simulation aéronautique</h2>
            <p className="text-justify-hyphens">
              Les simulateurs de vol reproduisent fidèlement la dynamique d'un aéronef en temps réel, sans latence perceptible pour l'utilisateur. Ils servent à la formation des pilotes, à la validation des systèmes de commande et aux tests de scénarios d'urgence impossibles en vol réel.
            </p>
            <p className="text-justify-hyphens">
              Contrairement aux outils de simulation offline (CFD, calcul de trajectoires), un simulateur de vol doit garantir une fréquence de rafraîchissement constante, une cohérence physique absolue et une réactivité immédiate aux entrées de l'utilisateur. Cela exige une architecture temps réel robuste, des moteurs physiques optimisés et une gestion fine de la latence.
            </p>
            <p className="text-justify-hyphens">
              Les technologies mobilisées incluent le C++ pour le noyau temps réel, les moteurs physiques spécialisés (Bullet, PhysX), les frameworks de rendu 3D (OpenGL, Vulkan), et les interfaces cockpit hautement réactives. Syslearn Group conçoit ces systèmes en distinguant clairement les simulateurs de formation (niveau D OACI) des outils de validation système (qui doivent eux-mêmes être certifiés).
            </p>
          </div>

          <div className="aeronautique-content__block">
            <h2 className="aeronautique-content__title">Certification DO-178C : de l'exigence au test</h2>
            <p className="text-justify-hyphens">
              La <Link href="https://www.rtca.org/" target="_blank" rel="nofollow noopener noreferrer" className="aeronautique-content__link-inline"><strong>DO-178C</strong></Link> est la norme de certification logicielle avionique publiée par la 
              <Link href="https://www.faa.gov/" target="_blank" rel="nofollow noopener noreferrer" className="aeronautique-content__link-inline"> FAA</Link>. Elle encadre la planification, le développement, la vérification et la certification des logiciels embarqués destinés à la sécurité des vols.
            </p>
            <p className="text-justify-hyphens">
              La norme classe les logiciels selon <strong>cinq niveaux de criticité</strong> :
            </p>
            <ul className="aeronautique-list">
              <li><strong>Niveau A :</strong> défaillance catastrophique, perte de vies humaines</li>
              <li><strong>Niveau B :</strong> défaillance majeure, dégradation sévère de la sécurité</li>
              <li><strong>Niveau C :</strong> défaillance mineure, dégradation modérée de la sécurité</li>
              <li><strong>Niveau D :</strong> défaillance mineure, impact limité</li>
              <li><strong>Niveau E :</strong> sans impact sur la sécurité</li>
            </ul>
            <p className="text-justify-hyphens">
              Chaque niveau impose des obligations croissantes en matière de documentation, de vérification et de test. Pour les logiciels de niveau A, la couverture de test doit atteindre le <strong>MC/DC (Modified Condition/Decision Coverage)</strong> - c'est-à-dire que chaque condition et chaque décision du code doit être testée de manière à démontrer que chaque modification de la condition change le résultat de la décision. C'est une exigence extrêmement rigoureuse, qui nécessite des outils spécialisés et une discipline de test sans compromis.
            </p>
            <p className="text-justify-hyphens">
              Au-delà de DO-178C, la norme 
              <Link href="https://www.sae.org/standards/content/arp4754a/" target="_blank" rel="nofollow noopener noreferrer" className="aeronautique-content__link-inline"> ARP 4754A</Link> encadre le développement système (architecture, allocation des fonctions de sécurité), et 
              <Link href="https://www.rtca.org/" target="_blank" rel="nofollow noopener noreferrer" className="aeronautique-content__link-inline"> DO-254</Link> s'applique aux composants électroniques programmables (FPGA, ASIC). L'ensemble forme une chaîne de certification que seules les autorités comme la 
              <Link href="https://www.faa.gov/" target="_blank" rel="nofollow noopener noreferrer" className="aeronautique-content__link-inline"> FAA (Federal Aviation Administration)</Link> et l'
              <Link href="https://www.easa.europa.eu/en" target="_blank" rel="nofollow noopener noreferrer" className="aeronautique-content__link-inline"> AESA (Agence européenne de la sécurité aérienne)</Link> peuvent valider.
            </p>
            <p className="text-justify-hyphens">
              Syslearn Group maîtrise cette chaîne complète : planification du développement logiciel (PSAC), gestion de la configuration, traçabilité exigences-code-tests, sélection et qualification des outils, et démonstration de la couverture de test. Nous accompagnons nos clients de la première exigence jusqu'à la soumission aux autorités de certification.
            </p>
          </div>

          <div className="aeronautique-content__block">
            <h2 className="aeronautique-content__title">Interfaces homme-machine cockpit</h2>
            <p className="text-justify-hyphens">
              Les IHM avioniques doivent fonctionner sous des contraintes extrêmes : stress du pilote, conditions de luminosité dégradées, vibrations, latence zéro, zéro ambiguïté d'affichage. Un bouton qui répond avec 200 ms de délai peut être inacceptable en situation d'urgence.
            </p>
            <p className="text-justify-hyphens">
              Les standards incluent 
              <Link href="https://www.aviation-ia.com/" target="_blank" rel="nofollow noopener noreferrer" className="aeronautique-content__link-inline"> ARINC 661</Link> pour les interfaces cockpit, qui définit les protocoles de communication et les exigences de fiabilité. Les technologies mobilisées incluent le C++ (pour la performance), les frameworks certifiables comme Qt, les moteurs de rendu 3D (OpenGL) et les architectures temps réel déterministes.
            </p>
            <p className="text-justify-hyphens">
              Syslearn Group conçoit des IHM avioniques qui combinent ergonomie, performance et certifiabilité. Nous partageons certaines contraintes avec les <Link href="/secteurs/automobile-mobilite" className="aeronautique-content__link-inline">systèmes embarqués automobile</Link> - notamment en matière d'affichage temps réel et de réactivité - mais avec un niveau de criticité et de rigueur documentaire bien supérieur.
            </p>
          </div>

          <div className="aeronautique-content__block">
            <h2 className="aeronautique-content__title">Calcul scientifique et simulation haute performance</h2>
            <p className="text-justify-hyphens">
              Au-delà de la simulation de vol temps réel, l'aéronautique exige des simulations scientifiques offline : CFD (Computational Fluid Dynamics) pour l'aérodynamique, calcul de trajectoires, modèles de fatigue structurelle, simulation de dispersion thermique.
            </p>
            <p className="text-justify-hyphens">
              Ces outils mobilisent le C++ pour les noyaux de calcul critiques, le Python pour le post-traitement et l'analyse, et parfois le Fortran pour les codes hérités. Ils s'exécutent sur des architectures HPC (High Performance Computing) pour traiter des simulations à grande échelle.
            </p>
            <p className="text-justify-hyphens">
              Syslearn Group accompagne ces projets en distinguant clairement la simulation physique offline (qui n'est pas soumise à DO-178C) de la simulation embarquée temps réel (qui l'est). Nous optimisons les performances, validons les algorithmes et assurons la traçabilité des résultats.
            </p>
          </div>

          <div className="aeronautique-content__block">
            <h2 className="aeronautique-content__title">Pourquoi la certification structure tout le développement</h2>
            
            <h3 className="aeronautique-content__subtitle">Une discipline de développement à part entière</h3>
            <p className="text-justify-hyphens">
              Dans l'aéronautique, la certification n'est pas une étape finale - c'est une contrainte qui structure chaque phase du développement. Avant que la première ligne de code soit écrite, il faut produire :
            </p>
            <ul className="aeronautique-list">
              <li>Un <strong>Plan de Développement Logiciel (PSAC)</strong> qui décrit la stratégie globale, l'allocation des fonctions de sécurité, les outils à utiliser et les critères de certification</li>
              <li>Un <strong>Plan de Gestion de la Configuration</strong> qui définit comment le code, la documentation et les tests seront versionnés et contrôlés</li>
              <li>Un <strong>Plan de Vérification</strong> qui spécifie les stratégies de test, les critères de couverture et les méthodes de démonstration</li>
              <li>Un <strong>Plan d'Assurance Qualité</strong> qui encadre les revues, les audits et les contrôles</li>
            </ul>
            <p className="text-justify-hyphens">
              Cette rigueur de documentation implique que chaque décision technique est justifiée, chaque exigence est tracée jusqu'au code, et chaque ligne de code est testée selon des critères précis. Cela contraste radicalement avec le développement civil agile classique, où la documentation suit souvent le code.
            </p>
            <p className="text-justify-hyphens">
              Pour un ingénieur habitué au développement agile, cette transition exige une discipline mentale nouvelle : accepter que la documentation n'est pas un fardeau administratif, mais une preuve de sûreté.
            </p>

            <h3 className="aeronautique-content__subtitle">Outillage et environnement de développement certifiable</h3>
            <p className="text-justify-hyphens">
              Les outils utilisés dans un projet DO-178C doivent eux-mêmes être qualifiés selon leur <strong>Tool Qualification Level (TQL)</strong> :
            </p>
            <ul className="aeronautique-list">
              <li><strong>TQL-1 :</strong> l'outil ne peut pas introduire d'erreur (ex. : compilateurs qualifiés, outils de couverture de test certifiés)</li>
              <li><strong>TQL-2 :</strong> l'outil peut introduire des erreurs, mais elles sont détectées par d'autres processus</li>
              <li><strong>TQL-3 :</strong> l'outil peut introduire des erreurs non détectées (généralement inacceptable pour les niveaux A/B)</li>
            </ul>
            <p className="text-justify-hyphens">
              Cela signifie qu'on ne peut pas utiliser un IDE open source non qualifié, un compilateur non certifié ou un framework de test non documenté. Les outils courants dans l'industrie aéronautique incluent :
            </p>
            <ul className="aeronautique-list">
              <li><Link href="https://ldra.com/" target="_blank" rel="nofollow noopener noreferrer" className="aeronautique-content__link-inline"><strong>LDRA</strong></Link> pour la couverture de test et l'analyse statique</li>
              <li><Link href="https://www.vector.com/int/en/products/products-a-z/software/vectorcast/" target="_blank" rel="nofollow noopener noreferrer" className="aeronautique-content__link-inline"><strong>VectorCAST</strong></Link> pour la gestion des tests unitaires</li>
              <li><Link href="https://www.mathworks.com/products/polyspace.html" target="_blank" rel="nofollow noopener noreferrer" className="aeronautique-content__link-inline"><strong>Polyspace</strong></Link> pour l'analyse statique et la détection d'erreurs</li>
              <li><Link href="https://www.ibm.com/products/rational-doors" target="_blank" rel="nofollow noopener noreferrer" className="aeronautique-content__link-inline"><strong>Rational DOORS</strong></Link> pour la gestion des exigences</li>
              <li><strong>Git</strong> avec des processus de contrôle de configuration stricts (pas de merge automatique)</li>
            </ul>
            <p className="text-justify-hyphens">
              Syslearn Group maîtrise ces outils et les intègre dans des environnements de développement certifiables. Nous aidons nos clients à qualifier leurs outils et à construire des chaînes de build reproductibles et auditables.
            </p>
          </div>

          <div className="aeronautique-content__block">
            <h2 className="aeronautique-content__title">Ce que Syslearn Group apporte concrètement</h2>
            
            <h3 className="aeronautique-content__subtitle">Une maîtrise technique et réglementaire combinée</h3>
            <p className="text-justify-hyphens">
              La valeur ajoutée d'une ESN sur le secteur aéronautique réside dans la combinaison rare de deux compétences :
            </p>
            <ul className="aeronautique-list">
              <li><strong>Maîtrise technique du C++ temps réel :</strong> architecture, optimisation, gestion de la mémoire, synchronisation, déterminisme</li>
              <li><strong>Culture DO-178C :</strong> traçabilité, couverture de test, qualification des outils, discipline de documentation</li>
            </ul>
            <p className="text-justify-hyphens">
              Cette combinaison ne s'acquiert pas en quelques mois - elle suppose des années de pratique sur des projets certifiés. Syslearn Group accompagne ses clients avec une approche rigoureuse dès la phase de planification : cadrage des exigences, allocation des fonctions de sécurité, définition de la stratégie de test, sélection des outils. Nous ne rajoutons pas la traçabilité en fin de projet - nous la construisons dès le début.
            </p>

            <h3 className="aeronautique-content__subtitle">Des profils rares, identifiés et mobilisables</h3>
            <p className="text-justify-hyphens">
              Syslearn Group dispose d'un vivier d'ingénieurs spécialisés dans l'aéronautique :
            </p>
            <ul className="aeronautique-list">
              <li><strong>Ingénieurs C++ avionique :</strong> développement de systèmes embarqués critiques, optimisation temps réel</li>
              <li><strong>Experts DO-178C :</strong> planification de la certification, stratégie de test, couverture MC/DC</li>
              <li><strong>Développeurs simulation de vol :</strong> moteurs physiques, rendu 3D, synchronisation temps réel</li>
              <li><strong>Ingénieurs systèmes (ARP 4754A) :</strong> allocation des fonctions de sécurité, architecture système</li>
              <li><strong>Spécialistes HPC aéronautique :</strong> CFD, calcul scientifique, optimisation haute performance</li>
            </ul>
            <p className="text-justify-hyphens">
              Ces profils connaissent les outils du secteur (DOORS, VectorCAST, LDRA, Polyspace) et les processus de certification. Ils ont travaillé sur des programmes réels, compris les contraintes des donneurs d'ordre (Airbus, Safran, Thales, équipementiers Tier 1/2) et maîtrisent les délais et les enjeux de la certification.
            </p>
          </div>

        </div>
      </section>

      <section className="aeronautique-cta">
        <div className="aeronautique-cta__inner">
          <div className="aeronautique-cta__content">
            <h2 className="aeronautique-cta__title">Discutons de votre projet aéronautique</h2>
            <p className="aeronautique-cta__text text-justify-hyphens">
              Vous développez un système embarqué critique, une simulation de vol ou un logiciel soumis à certification DO-178C ? Vous avez besoin de renforcer une équipe technique sur un programme aéronautique ou spatial ? Syslearn Group accompagne les industriels et les équipementiers de la phase d'exigence jusqu'à la mise en service, en garantissant la rigueur technique et la conformité réglementaire.
            </p>
            <div className="aeronautique-cta__actions">
              <Link href="https://www.pointerlab.fr/secteurs/aeronautique" target="_blank" rel="dofollow noopener noreferrer" className="aeronautique-cta__btn aeronautique-cta__btn--primary">
                Découvrir PointerLab
                <ExternalLink size={18} />
              </Link>
              <Link href="https://www.stackjobs.com/sectors/aeronautique" target="_blank" rel="dofollow noopener noreferrer" className="aeronautique-cta__btn aeronautique-cta__btn--primary">
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