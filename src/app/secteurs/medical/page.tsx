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
  description: "Syslearn Group développe des logiciels d'imagerie médicale et des interfaces de dispositifs cliniques avec l'écosystème C++, choisi pour sa robustesse face aux contraintes réglementaires MDR, AI Act et NIS2.",
};

export default function MedicalPage() {
  const expertises = [
    { icon: Scan, text: "Imagerie médicale 3D en temps réel (ITK, VTK)" },
    { icon: Eye, text: "Vision par ordinateur appliquée au diagnostic" },
    { icon: Cpu, text: "Logiciels embarqués pour équipements médicaux (C, RTOS)" },
    { icon: Monitor, text: "Interfaces homme-machine pour dispositifs cliniques (C++/Qt)" },
    { icon: Heart, text: "Conformité réglementaire MDR, AI Act et NIS2" },
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
          
          <div className="medical-content__block">
            <h2 className="medical-content__title">Un secteur où la fiabilité logicielle a un impact direct sur les patients</h2>
            
            <h3 className="medical-content__subtitle">Des exigences qui n'ont pas d'équivalent dans le logiciel grand public</h3>
            <p className="text-justify-hyphens">
              Dans le médical, un bug n'est jamais qu'un bug, c'est potentiellement un risque pour un patient. Cette réalité impose une culture de développement radicalement différente de celle des logiciels grand public.
            </p>
            <p className="text-justify-hyphens">
              Un dispositif médical n'a pas droit à l'approximation, car ses défauts ne se mesurent pas seulement en coût ou en délai, mais potentiellement en conséquences cliniques directes. Un écart d'affichage sur une image de guidage chirurgical, une latence excessive sur un signal vital, ou une imprécision dans une mesure de dosage peuvent avoir un impact immédiat sur le patient.
            </p>
            <p className="text-justify-hyphens">
              Cette spécificité radicale impose que chaque fonctionnalité soit spécifiée, tracée et validée avant d'atteindre un environnement clinique. C'est un contraste absolu avec le développement agile classique, où l'itération rapide et la correction en production sont acceptées. En médical, cette approche est inacceptable : la traçabilité, la documentation et la validation formelle ne sont pas des tâches administratives ajoutées en fin de projet - ce sont des contraintes qui structurent chaque phase du développement.
            </p>
          </div>

          <div className="medical-content__block">
            <h2 className="medical-content__title">Un marché de 1 500 entreprises sous pression réglementaire croissante</h2>
            <p className="text-justify-hyphens">
              La France compte aujourd'hui environ <strong>1 500 entreprises</strong> actives sur le marché des dispositifs médicaux, en très large majorité des TPE et PME. Ce tissu industriel évolue dans un cadre réglementaire de plus en plus dense.
            </p>
            <p className="text-justify-hyphens">
              Ces structures doivent absorber simultanément trois cadres réglementaires majeurs qui se superposent : 
              <Link href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32017R0745" target="_blank" rel="nofollow noopener noreferrer" className="medical-content__link-inline"> MDR (EU 2017/745)</Link> (conformité du dispositif), 
              <Link href="https://artificialintelligenceact.eu/" target="_blank" rel="nofollow noopener noreferrer" className="medical-content__link-inline"> AI Act</Link> (intelligence artificielle), et 
              <Link href="https://cyber.gouv.fr/entreprise/reglementation/directive-nis/" target="_blank" rel="nofollow noopener noreferrer" className="medical-content__link-inline"> NIS2</Link> (Directive sur la sécurité des réseaux et de l'information). Cette pression réglementaire croissante pousse les fabricants à externaliser des compétences réglementaires et techniques qu'ils ne peuvent pas constituer en interne - c'est là qu'intervient une ESN spécialisée.
            </p>
            <p className="text-justify-hyphens">
              Les échéances de mise en conformité se resserrent : obligation de conformité pour les dispositifs de classe C dès mai 2026. En parallèle, le durcissement des exigences de cybersécurité s'accélère. Les entités de santé classées « essentielles » devront répondre à des audits de cybersécurité dès début 2026, sous peine d'amendes pouvant atteindre <strong>10 millions d'euros</strong>.
            </p>
          </div>

          <div className="medical-content__block">
            <h2 className="medical-content__title">Un cadre réglementaire parmi les plus denses du numérique</h2>
            
            <h3 className="medical-content__subtitle">MDR et ISO 13485 : la conformité du dispositif et du système qualité</h3>
            <p className="text-justify-hyphens">
              <Link href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32017R0745" target="_blank" rel="nofollow noopener noreferrer" className="medical-content__link-inline"> <strong>MDR (EU 2017/745)</strong></Link> est le règlement européen sur les dispositifs médicaux. La conformité pour les dispositifs de classe C devient obligatoire dès mai 2026. Cela impose des implications concrètes pour le développement logiciel :
            </p>
            <ul className="medical-list">
              <li>Documentation technique complète et traçable</li>
              <li>Évaluation clinique rigoureuse</li>
              <li>Gestion des risques formalisée (<Link href="https://www.iso.org/standard/72704.html" target="_blank" rel="nofollow noopener noreferrer" className="medical-content__link-inline">ISO 14971</Link>)</li>
              <li>Surveillance post-commercialisation obligatoire</li>
            </ul>
            <p className="text-justify-hyphens">
              <Link href="https://www.iso.org/standard/59752.html" target="_blank" rel="nofollow noopener noreferrer" className="medical-content__link-inline"> <strong>ISO 13485</strong></Link> est le système de management de la qualité spécifique aux dispositifs médicaux. Il structure les processus de développement, de validation et de maintenance. Ce n'est pas une certification optionnelle - c'est une exigence fondamentale pour opérer sur ce marché.
            </p>
            <p className="text-justify-hyphens">
              <Link href="https://www.iec.ch/homepage" target="_blank" rel="nofollow noopener noreferrer" className="medical-content__link-inline"> <strong>NF EN 62366-1</strong></Link> impose l'aptitude à l'utilisation : tests utilisateurs obligatoires pour valider que l'interface médicale est compréhensible et utilisable en contexte clinique réel (bloc opératoire, urgences, soins intensifs). Cette norme s'applique à toute interface homme-machine d'un dispositif médical.
            </p>

            <h3 className="medical-content__subtitle">AI Act et dispositifs médicaux intelligents</h3>
            <p className="text-justify-hyphens">
              La quasi-totalité des dispositifs médicaux intégrant de l'IA (logiciels d'aide au diagnostic, imagerie autonome, systèmes de triage) sont classés « à haut risque » par le règlement européen sur l'intelligence artificielle.
            </p>
            <p className="text-justify-hyphens">
              Ce classement impose :
            </p>
            <ul className="medical-list">
              <li>Documentation complète de l'algorithme et de ses données d'entraînement</li>
              <li>Gestion des risques IA formalisée</li>
              <li>Supervision humaine obligatoire (pas d'automatisation complète)</li>
              <li>Transparence sur les limites et les cas d'usage</li>
              <li>Traçabilité des décisions</li>
            </ul>
            <p className="text-justify-hyphens">
              L'application complète du cadre 
              <Link href="https://artificialintelligenceact.eu/" target="_blank" rel="nofollow noopener noreferrer" className="medical-content__link-inline"> AI Act</Link> pour les systèmes incorporés dans des produits réglementés est attendue pour 2027-2028. Contrairement à certaines dérogations temporaires, il n'y a pas d'exemption pour les dispositifs médicaux : les deux cadres (MDR et AI Act) s'appliquent simultanément, sans dérogation mutuelle.
            </p>
            <p className="text-justify-hyphens">
              La <Link href="https://www.has-sante.fr/" target="_blank" rel="nofollow noopener noreferrer" className="medical-content__link-inline">Haute Autorité de Santé (HAS)</Link> encadre l'évaluation clinique des dispositifs intégrant de l'IA, en complément de l'<Link href="https://ansm.sante.fr/" target="_blank" rel="nofollow noopener noreferrer" className="medical-content__link-inline">ANSM</Link> (Agence Nationale de Sécurité du Médicament et des produits de santé), qui reste l'autorité compétente pour la surveillance des dispositifs médicaux en France.
            </p>

            <h3 className="medical-content__subtitle">Cybersécurité, RGPD et hébergement des données de santé</h3>
            <p className="text-justify-hyphens">
              <Link href="https://cyber.gouv.fr/entreprise/reglementation/directive-nis/" target="_blank" rel="nofollow noopener noreferrer" className="medical-content__link-inline"> <strong>NIS2</strong></Link> (Directive sur la sécurité des réseaux et de l'information) s'applique aux entités de santé classées « essentielles ». Les audits de cybersécurité sont obligatoires dès début 2026, avec des amendes pouvant atteindre 10 millions d'euros en cas de non-conformité.
            </p>
            <p className="text-justify-hyphens">
              <strong>RGPD</strong> s'applique aux données de santé avec une rigueur particulière : catégorie sensible, consentement explicite obligatoire, droit à l'effacement garanti. Les données patients ne peuvent pas être traitées comme des données commerciales ordinaires.
            </p>
            <p className="text-justify-hyphens">
              <strong>HDS</strong> (Hébergeur de Données de Santé) : certification obligatoire pour tout hébergement de données patients. Cela signifie que l'infrastructure informatique d'un dispositif médical connecté doit être certifiée HDS - ce n'est pas optionnel.
            </p>
            <p className="text-justify-hyphens">
              La cybersécurité d'un dispositif médical connecté n'est plus optionnelle : surface d'attaque, données patients sensibles, continuité des soins - un incident de sécurité sur un DM n'est pas un problème informatique, c'est un risque clinique.
            </p>
          </div>

          <div className="medical-content__block">
            <h2 className="medical-content__title">Nos expertises techniques pour le secteur médical</h2>
            <div className="medical-expertises">
              {expertises.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="medical-expertise">
                    <div className="medical-expertise__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="medical-expertise__text text-justify-hyphens">
                      {item.text.includes("Imagerie médicale") ? (
                        <>
                          <Link href="/secteurs/simulation" className="medical-content__link-inline">Imagerie médicale 3D en temps réel</Link> (ITK, VTK)
                        </>
                      ) : item.text.includes("Logiciels embarqués") ? (
                        <>
                          <Link href="/secteurs/iot" className="medical-content__link-inline">Logiciels embarqués</Link> pour équipements médicaux (C, RTOS)
                        </>
                      ) : item.text.includes("Conformité réglementaire") ? (
                        <>
                          <Link href="/secteurs/defense" className="medical-content__link-inline">Conformité réglementaire</Link> MDR, AI Act et NIS2
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

          <div className="medical-content__image-wrapper">
            <img
              src="/images/secteur-medical.png"
              alt="Secteur médical - Syslearn Group"
              className="medical-content__image"
            />
          </div>

          <div className="medical-content__block">
            <h2 className="medical-content__title">Imagerie médicale 3D temps réel</h2>
            <p className="text-justify-hyphens">
              C++ est le socle technique de référence pour l'imagerie médicale : maîtrise fine de la latence du flux d'images, traitement de volumes de données importants en temps réel, synchronisation avec les équipements d'acquisition (IRM, scanner, échographie).
            </p>
            <p className="text-justify-hyphens">
              <strong>Pourquoi la latence est critique</strong> en imagerie de guidage chirurgical ou en imagerie interventionnelle : un délai d'affichage de quelques centaines de millisecondes peut compromettre la précision d'un geste chirurgical. C'est une exigence de sécurité, pas de performance.
            </p>
            <p className="text-justify-hyphens">
              Les bibliothèques C++ spécialisées incluent :
            </p>
            <ul className="medical-list">
              <li><Link href="https://itk.org/" target="_blank" rel="nofollow noopener noreferrer" className="medical-content__link-inline"><strong>ITK (Insight Toolkit)</strong></Link> : traitement d'images médicales, segmentation, recalage</li>
              <li><Link href="https://vtk.org/" target="_blank" rel="nofollow noopener noreferrer" className="medical-content__link-inline"><strong>VTK (Visualization Toolkit)</strong></Link> : rendu 3D médical, visualisation temps réel</li>
            </ul>
            <p className="text-justify-hyphens">
              Ces outils s'intègrent dans une chaîne C++ qui garantit le déterminisme temporel et la fiabilité d'exécution - des garanties que peu d'environnements de développement offrent au même niveau.
            </p>
          </div>

          <div className="medical-content__block">
            <h2 className="medical-content__title">Vision par ordinateur appliquée au diagnostic</h2>
            <p className="text-justify-hyphens">
              Les algorithmes de vision par ordinateur occupent une place croissante dans le diagnostic assisté :
            </p>
            <ul className="medical-list">
              <li>Détection d'anomalies pulmonaires, mammaires, neurologiques, rétiniennes</li>
              <li>Aide au centrage lors d'un examen</li>
              <li>Analyse prédictive de signaux cliniques</li>
            </ul>
            <p className="text-justify-hyphens">
              La chaîne technique complète : acquisition → prétraitement → inférence → affichage → validation clinique.
            </p>
            <p className="text-justify-hyphens">
              C'est un point de jonction naturel entre l'écosystème C++ et les couches d'intelligence artificielle appliquées au diagnostic. Les modèles d'inférence (PyTorch, TensorFlow) s'intègrent dans une chaîne C++ qui garantit le temps de réponse et la fiabilité d'exécution.
            </p>
            <p className="text-justify-hyphens">
              <strong>Contrainte réglementaire critique :</strong> tout algorithme d'aide au diagnostic est un dispositif médical logiciel (SaMD) soumis à MDR. Il n'y a pas de zone grise : si l'algorithme influence une décision clinique, il est réglementé comme un DM.
            </p>
          </div>

          <div className="medical-content__block">
            <h2 className="medical-content__title">Logiciels embarqués pour équipements médicaux</h2>
            <p className="text-justify-hyphens">
              Firmware et logiciels embarqués sur équipements médicaux : C, C++, RTOS (FreeRTOS, VxWorks), gestion des capteurs, protocoles de communication 
              <Link href="https://www.hl7.org/" target="_blank" rel="nofollow noopener noreferrer" className="medical-content__link-inline"> (HL7</Link>, 
              <Link href="https://www.dicomstandard.org/" target="_blank" rel="nofollow noopener noreferrer" className="medical-content__link-inline"> DICOM</Link>, Bluetooth médical).
            </p>
            <p className="text-justify-hyphens">
              Les contraintes spécifiques :
            </p>
            <ul className="medical-list">
              <li>Fiabilité sur cycles longs (années de fonctionnement continu)</li>
              <li>Mises à jour sans interruption de service</li>
              <li>Traçabilité complète des versions</li>
              <li>Déterminisme temporel garanti</li>
            </ul>
            <p className="text-justify-hyphens">
              Ces exigences sont comparables à celles des <Link href="/secteurs/defense" className="medical-content__link-inline">systèmes embarqués critiques en défense</Link>, ou aux <Link href="/secteurs/aeronautique" className="medical-content__link-inline">logiciels certifiés DO-178C en aéronautique</Link> - même culture de certification et de traçabilité.
            </p>
          </div>

          <div className="medical-content__block">
            <h2 className="medical-content__title">Interfaces homme-machine pour dispositifs cliniques</h2>
            <p className="text-justify-hyphens">
              Les IHM médicales opèrent sous contrainte : bloc opératoire, urgences, soins intensifs. Les exigences sont radicales :
            </p>
            <ul className="medical-list">
              <li>Lisibilité immédiate, zéro ambiguïté d'affichage</li>
              <li>Temps de réponse garanti (pas de latence imprévisible)</li>
              <li>Ergonomie validée par des tests utilisateurs réels</li>
            </ul>
            <p className="text-justify-hyphens">
              <Link href="https://www.iec.ch/" target="_blank" rel="nofollow noopener noreferrer" className="medical-content__link-inline"> <strong>NF EN 62366-1</strong></Link> impose des tests d'aptitude à l'utilisation : validation que l'interface est compréhensible et utilisable par les professionnels de santé en contexte réel. Ce n'est pas une validation UX classique - c'est une validation clinique.
            </p>
            <p className="text-justify-hyphens">
              Technologies : C++/Qt, frameworks certifiables, rendu temps réel. Une IHM médicale ne peut pas être conçue comme une interface applicative classique - chaque élément doit être justifié cliniquement.
            </p>
          </div>

          <div className="medical-content__block">
            <h2 className="medical-content__title">Pourquoi le choix technologique est structurant dans le médical</h2>
            
            <h3 className="medical-content__subtitle">C++ : maîtrise de la latence et déterminisme comme exigences absolues</h3>
            <p className="text-justify-hyphens">
              Dans le médical, le contrôle des ressources matérielles et des délais d'exécution n'est pas un critère de performance - c'est une exigence de sécurité.
            </p>
            <p className="text-justify-hyphens">
              <strong>Pourquoi C++ :</strong>
            </p>
            <ul className="medical-list">
              <li>Absence de garbage collector (pas de pause GC imprévisible)</li>
              <li>Contrôle fin de la mémoire et des ressources</li>
              <li>Déterminisme temporel garanti</li>
              <li>Synchronisation précise avec les capteurs et équipements</li>
            </ul>
            <p className="text-justify-hyphens">
              <strong>Cas concrets :</strong>
            </p>
            <ul className="medical-list">
              <li>Synchronisation d'un capteur de pression : latence imprévisible = mesure invalide</li>
              <li>Flux d'imagerie peropératoire : délai d'affichage = risque chirurgical</li>
              <li>Pilotage temps réel d'un équipement : absence de déterminisme = perte de contrôle</li>
            </ul>
            <p className="text-justify-hyphens">
              <strong>Pourquoi Python ou Java ne suffisent pas seuls</strong> sur ces cas d'usage : ces langages offrent une abstraction qui masque les délais d'exécution. En médical, cette abstraction est inacceptable - il faut une maîtrise fine et prévisible.
            </p>

            <h3 className="medical-content__subtitle">Traçabilité et documentation : une contrainte d'architecture dès le début</h3>
            <p className="text-justify-hyphens">
              Dans le médical, la traçabilité n'est pas une tâche de fin de projet - c'est une contrainte qui structure chaque phase du développement.
            </p>
            <p className="text-justify-hyphens">
              Chaque exigence doit être tracée jusqu'au code, chaque test jusqu'à une exigence. Cela impose :
            </p>
            <ul className="medical-list">
              <li>Outils de gestion des exigences (DOORS, Polarion, Jama)</li>
              <li>Processus de revue formelle à chaque étape</li>
              <li>Gestion de configuration rigoureuse</li>
              <li>Documentation technique complète et à jour</li>
            </ul>
            <p className="text-justify-hyphens">
              Intégrer ces contraintes dès le début coûte moins cher que de les ajouter en fin de projet pour la certification. C'est une différence fondamentale de culture de développement.
            </p>
          </div>

          <div className="medical-content__block">
            <h2 className="medical-content__title">Ce que Syslearn Group apporte concrètement</h2>
            
            <h3 className="medical-content__subtitle">Une double maîtrise : technique C++ et culture réglementaire médicale</h3>
            <p className="text-justify-hyphens">
              La valeur ajoutée d'une ESN sur ce secteur : des ingénieurs qui maîtrisent à la fois l'écosystème C++ temps réel et les normes du secteur médical (MDR, ISO 13485, AI Act).
            </p>
            <p className="text-justify-hyphens">
              Cette combinaison est rare. La plupart des développeurs C++ n'ont pas de culture réglementaire médicale, et la plupart des consultants réglementaires ne codent pas. Syslearn Group apporte les deux.
            </p>
            <p className="text-justify-hyphens">
              L'approche : cadrage rigoureux dès la phase de conception, traçabilité intégrée dès le début, pas ajoutée pour la certification. C'est une différence de culture qui se mesure en coûts et en délais de mise sur le marché.
            </p>

            <h3 className="medical-content__subtitle">Des profils techniques adaptés à vos projets médicaux</h3>
            <ul className="medical-list">
              <li>Ingénieurs C++ imagerie médicale (ITK, VTK)</li>
              <li>Développeurs vision par ordinateur appliquée au diagnostic</li>
              <li>Ingénieurs embarqués médicaux (RTOS, DICOM, HL7)</li>
              <li>Architectes systèmes dispositifs médicaux</li>
            </ul>
            <p className="text-justify-hyphens">
              Ces profils connaissent les contraintes réglementaires et les outils du secteur.
            </p>
          </div>

        </div>
      </section>

      <section className="medical-cta">
        <div className="medical-cta__inner">
          <div className="medical-cta__content">
            <h2 className="medical-cta__title">Discutons de votre projet médical</h2>
            <p className="medical-cta__text text-justify-hyphens">
              Vous développez un dispositif médical logiciel, une interface de guidage chirurgical, un système d'aide au diagnostic, ou vous devez renforcer votre conformité MDR et AI Act ? Syslearn Group accompagne vos projets de la conception à la mise sur le marché, avec une maîtrise technique et réglementaire qui accélère votre time-to-market et sécurise votre certification.
            </p>
            <div className="medical-cta__actions">
              <Link href="https://www.syslearn.fr/qui-sommes-nous/secteurs-dactivites" target="_blank" rel="dofollow noopener noreferrer" className="medical-cta__btn medical-cta__btn--primary">
                Découvrir Syslearn
                <ExternalLink size={18} />
              </Link>
              <Link href="https://www.pointerlab.fr/secteurs/medical" target="_blank" rel="dofollow noopener noreferrer" className="medical-cta__btn medical-cta__btn--primary">
                Découvrir PointerLab
                <ExternalLink size={18} />
              </Link>
              <Link href="https://www.stackjobs.com/sectors/medical" target="_blank" rel="dofollow noopener noreferrer" className="medical-cta__btn medical-cta__btn--primary">
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