import Link from "next/link";
import { 
  Shield, 
  Code2, 
  Cpu, 
  Monitor, 
  Brain,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import "../../../styles/secteurs/defense.css";

export const metadata = {
  title: "Défense : conseil et ingénierie IT pour systèmes critiques",
  description: "La défense bénéficie d'un effort budgétaire inédit de 6,7 milliards d'€ en 2026. Syslearn Group accompagne vos projets embarqués, cyberdéfense et IA avec une rigueur méthodologique adaptée.",
};

export default function DefensePage() {
  const expertises = [
    { icon: Cpu, text: "Systèmes embarqués pour environnements critiques (C, C++, RTOS)" },
    { icon: Shield, text: "Cyberdéfense et sécurité des systèmes d'information sensibles" },
    { icon: Brain, text: "Intelligence artificielle et data science appliquées à la défense" },
    { icon: Monitor, text: "Interfaces homme-machine à haute fiabilité (C++/Qt)" },
    { icon: Code2, text: "Applications métier sécurisées pour réseaux fermés" },
  ];

  return (
    <main className="defense-page">
      {/* HERO */}
      <section className="defense-hero">
        <div className="defense-hero__inner">
          <div className="defense-hero__content">
            <div>
              <span className="defense-hero__badge">Secteur</span>
              <h1 className="defense-hero__title">Défense : conseil et ingénierie sur mesure</h1>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="defense-content">
        <div className="defense-content__inner">
          
          {/* UN SECTEUR EN TRANSFORMATION TECHNOLOGIQUE ACCÉLÉRÉE */}
          <div className="defense-content__block">
            <h2 className="defense-content__title">Un secteur en transformation technologique accélérée</h2>
            
            <h3 className="defense-content__subtitle">Un effort budgétaire sans précédent sur le numérique</h3>
            <p className="text-justify-hyphens">
              La défense est aujourd'hui l'un des secteurs où l'effort budgétaire et technologique est le plus soutenu en France. Le budget de la mission Défense pour 2026 augmente de <strong>6,7 milliards d'euros</strong> par rapport à 2025, soit 3,5 milliards au-delà de la trajectoire initialement prévue par la loi de programmation militaire - un effort qualifié d'inédit par le ministère des Armées.
            </p>
            <p className="text-justify-hyphens">
              Cette hausse s'accompagne d'un investissement ciblé sur le numérique : plus de <strong>500 millions d'euros</strong> sont fléchés vers la cyberdéfense et plus de <strong>400 millions d'euros</strong> vers l'intelligence artificielle, afin de doter la France de capacités souveraines. Sur le plan humain, cet effort se traduit par des recrutements massifs : près de <strong>40 000 recrutements</strong> sont prévus en 2026, dont 800 postes supplémentaires ciblés en priorité sur le réarmement capacitaire, la cyberdéfense, la transformation numérique et l'intelligence artificielle.
            </p>
            <p className="text-justify-hyphens">
              Pour les prestataires IT, cette dynamique signifie une augmentation des commandes, une demande accrue de compétences rares et une externalisation croissante de projets techniques complexes. Les entreprises du secteur défense cherchent des partenaires capables de maîtriser des cycles de développement longs et des exigences de fiabilité sans équivalent dans le secteur civil.
            </p>
          </div>

          {/* DES CYCLES DE DÉVELOPPEMENT QUI N'ONT PAS D'ÉQUIVALENT CIVIL */}
          <div className="defense-content__block">
            <h2 className="defense-content__title">Des cycles de développement qui n'ont pas d'équivalent civil</h2>
            <p className="text-justify-hyphens">
              Les projets défense obéissent à une logique radicalement différente de celle du secteur civil. Là où une startup peut itérer rapidement et déployer des mises à jour en continu, la défense impose des cycles de validation longs, souvent de plusieurs années, avec des jalons de certification à chaque étape.
            </p>
            <p className="text-justify-hyphens">
              Un système embarqué défense doit rester opérationnel 15 à 30 ans. Cela signifie : traçabilité complète du code source, documentation certifiable, absence de dépendances externes non maîtrisées, et capacité à maintenir le système bien après la fin du contrat initial. Chaque ligne de code doit pouvoir être auditée, chaque décision d'architecture justifiée, chaque modification enregistrée et approuvée. C'est une discipline de développement à part entière, incompatible avec les frameworks « à la mode » ou les dépendances externes non contrôlées.
            </p>
          </div>

          {/* NOS EXPERTISES TECHNIQUES POUR LA DÉFENSE */}
          <div className="defense-content__block">
            <h2 className="defense-content__title">Nos expertises techniques pour la défense</h2>
            <div className="defense-expertises">
              {expertises.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="defense-expertise">
                    <div className="defense-expertise__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="defense-expertise__text text-justify-hyphens">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* IMAGE */}
          <div className="defense-content__image-wrapper">
            <img
              src="/images/secteur-defense.png"
              alt="Secteur de la défense - Syslearn Group"
              className="defense-content__image"
            />
          </div>

          {/* SYSTÈMES EMBARQUÉS POUR ENVIRONNEMENTS CRITIQUES */}
          <div className="defense-content__block">
            <h2 className="defense-content__title">Systèmes embarqués pour environnements critiques</h2>
            <p className="text-justify-hyphens">
              Nous développons des systèmes embarqués en C et C++ pour des environnements où la fiabilité est non négociable. Cela inclut les calculateurs de bord, les systèmes de navigation, les équipements de communication tactique et les contrôleurs temps réel pour systèmes d'armes.
            </p>
            <p className="text-justify-hyphens">
              Les contraintes sont strictes : empreinte mémoire minimale, déterminisme garanti, zéro allocation dynamique en phase opérationnelle, RTOS certifiés (VxWorks, LynxOS). Chaque ligne de code doit être justifiée, testée exhaustivement et documentée pour la certification. Nous maîtrisons les standards de développement embarqué défense (DO-178C, IEC 61508) et les méthodologies de validation associées.
            </p>
          </div>

          {/* CYBERDÉFENSE ET SÉCURITÉ DES SYSTÈMES D'INFORMATION SENSIBLES */}
          <div className="defense-content__block">
            <h2 className="defense-content__title">Cyberdéfense et sécurité des systèmes d'information sensibles</h2>
            <p className="text-justify-hyphens">
              La sécurisation des systèmes d'information sensibles et des réseaux classifiés est au cœur de nos interventions. Cela couvre la segmentation réseau, le chiffrement, l'audit de code, la traçabilité des accès et la conformité aux standards LPM et NIS2.
            </p>
            <p className="text-justify-hyphens">
              La loi de programmation militaire 2024-2030 flèche <strong>4 milliards d'euros</strong> pour la cyberdéfense sur la période. Parallèlement, la directive NIS2 européenne rapproche progressivement le cadre français de ces exigences, ce qui pousse les entreprises accompagnant des opérateurs d'importance vitale ou des donneurs d'ordre sensibles à anticiper ces standards bien avant un audit. Nous aidons nos clients à naviguer cette convergence LPM-NIS2 et à mettre en place une posture de sécurité adaptée aux contraintes réglementaires françaises et européennes.
            </p>
            <p className="text-justify-hyphens">
              Nous intervenons sur <Link href="/secteurs/energie" className="defense-content__link-inline">systèmes d'information critiques</Link> pour l'énergie et la défense, avec une expertise éprouvée en sécurisation des réseaux fermés et en gestion des habilitations.
            </p>
          </div>

          {/* INTELLIGENCE ARTIFICIELLE ET DATA SCIENCE APPLIQUÉES À LA DÉFENSE */}
          <div className="defense-content__block">
            <h2 className="defense-content__title">Intelligence artificielle et data science appliquées à la défense</h2>
            <p className="text-justify-hyphens">
              L'IA souveraine est un enjeu stratégique majeur. Plus de <strong>400 millions d'euros</strong> sont fléchés vers l'IA dans le budget 2026, destinés à développer des capacités de traitement du signal, d'analyse d'images, d'aide à la décision et d'IA embarquée.
            </p>
            <p className="text-justify-hyphens">
              Contrairement à l'IA grand public, l'IA défense impose une contrainte de souveraineté absolue : les données ne sortent pas du territoire, les modèles s'exécutent on-premise, la certification est obligatoire. Nous développons des solutions d'IA embarquée pour systèmes critiques, avec maîtrise complète de la chaîne logicielle et capacité à justifier chaque décision du modèle. Cela exclut les dépendances externes non auditées et impose une architecture déterministe et certifiable.
            </p>
          </div>

          {/* INTERFACES HOMME-MACHINE À HAUTE FIABILITÉ */}
          <div className="defense-content__block">
            <h2 className="defense-content__title">Interfaces homme-machine à haute fiabilité</h2>
            <p className="text-justify-hyphens">
              Les postes opérateurs, les systèmes de commandement et les interfaces de supervision tactique exigent une fiabilité et une ergonomie sans faille. Une ambiguïté d'affichage peut avoir des conséquences opérationnelles graves. Les temps de réponse doivent être garantis, même sous charge.
            </p>
            <p className="text-justify-hyphens">
              Nous développons des IHM en <strong>C++/Qt</strong> avec certification pour environnements critiques. Ces interfaces partagent les mêmes exigences que les <Link href="/secteurs/aeronautique" className="defense-content__link-inline">projets aéronautiques embarqués</Link> : traçabilité complète, tests exhaustifs, documentation certifiable. Chaque élément d'interface doit être justifié, chaque interaction testée dans des conditions réalistes.
            </p>
          </div>

          {/* APPLICATIONS MÉTIER SÉCURISÉES */}
          <div className="defense-content__block">
            <h2 className="defense-content__title">Applications métier sécurisées</h2>
            <p className="text-justify-hyphens">
              Les ERP défense, les systèmes de gestion de flotte, la logistique opérationnelle et les outils de planification doivent fonctionner sur des réseaux fermés avec cloisonnement des données, accès par habilitation et audit trail complet.
            </p>
            <p className="text-justify-hyphens">
              Nous développons ces applications avec une discipline de sécurité renforcée : chiffrement des données au repos et en transit, gestion granulaire des droits d'accès, traçabilité de chaque opération, déploiement sur réseaux isolés. Aucune donnée sensible ne transite par des canaux non sécurisés.
            </p>
          </div>

          {/* POURQUOI LES CHOIX TECHNOLOGIQUES SONT STRUCTURANTS DANS LA DÉFENSE */}
          <div className="defense-content__block">
            <h2 className="defense-content__title">Pourquoi les choix technologiques sont structurants dans la défense</h2>
            
            <h3 className="defense-content__subtitle">La fiabilité comme contrainte d'architecture, pas comme option</h3>
            <p className="text-justify-hyphens">
              Dans la défense, une défaillance logicielle n'est pas un incident de production - c'est un risque opérationnel. Cela impose des choix technologiques radicalement différents du secteur civil.
            </p>
            <p className="text-justify-hyphens">
              Nous privilégions les langages déterministes (C, C++, Ada) plutôt que les langages avec garbage collector ou runtime imprévisible. Nous choisissons des architectures validées plutôt que des frameworks expérimentaux. Nous imposons des tests exhaustifs plutôt que des tests probabilistes. Nous documentons pour la certification plutôt que pour la compréhension rapide.
            </p>
            <p className="text-justify-hyphens">
              Ces choix ont un coût : le développement est plus lent, la courbe d'apprentissage plus raide, les outils moins « sexy ». Mais ils garantissent une robustesse et une maintenabilité incomparables sur des cycles de vie de 15 à 30 ans.
            </p>

            <h3 className="defense-content__subtitle">Souveraineté numérique et maîtrise de la chaîne logicielle</h3>
            <p className="text-justify-hyphens">
              L'enjeu de souveraineté est central. Dépendre d'un composant étranger, d'une bibliothèque open source non auditée ou d'une chaîne logicielle non maîtrisée crée un risque stratégique inacceptable.
            </p>
            <p className="text-justify-hyphens">
              La LPM et la réglementation ANSSI imposent une maîtrise complète de la chaîne logicielle : choix des compilateurs, audit des dépendances, contrôle des sources, certification des outils. Cela signifie : privilégier les logiciels libres auditables plutôt que les boîtes noires propriétaires, construire des chaînes de compilation maîtrisées, documenter chaque choix technologique pour justifier la souveraineté.
            </p>
            <p className="text-justify-hyphens">
              Nous aidons nos clients à naviguer ces contraintes et à construire une posture de souveraineté numérique durable.
            </p>
          </div>

          {/* CE QUE SYsLEARN GROUP APPORTE CONCRÈTEMENT */}
          <div className="defense-content__block">
            <h2 className="defense-content__title">Ce que Syslearn Group apporte concrètement</h2>
            
            <h3 className="defense-content__subtitle">Une rigueur méthodologique adaptée aux exigences régaliennes</h3>
            <p className="text-justify-hyphens">
              Nous ne promettons pas des miracles technologiques. Nous apportons une rigueur méthodologique éprouvée : validation à chaque étape, traçabilité complète du code, gestion des habilitations, capacité à intervenir sur des réseaux fermés et classifiés.
            </p>
            <p className="text-justify-hyphens">
              Notre approche : cadrage rigoureux du projet, déploiement progressif avec jalons de validation, documentation certifiable, formation des équipes client. Nous travaillons en étroite collaboration avec les responsables IT et les auditeurs de sécurité pour anticiper les exigences de conformité et les intégrer dès le départ.
            </p>

            <h3 className="defense-content__subtitle">Des profils techniques rares, formés aux contraintes du secteur</h3>
            <p className="text-justify-hyphens">
              Les ingénieurs C/C++ embarqué, les experts cybersécurité avec habilitations ANSSI, les développeurs IA on-premise et les architectes systèmes défense sont rares sur le marché. Nous savons les identifier, les former et les mobiliser sur des projets exigeants.
            </p>
            <p className="text-justify-hyphens">
              Nos équipes ont une expérience éprouvée des contraintes défense : cycles longs, documentation exhaustive, validation rigoureuse, travail en environnement classifié. Nous formons nos collaborateurs aux standards de développement défense et nous les accompagnons dans l'acquisition des habilitations nécessaires.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="defense-cta">
        <div className="defense-cta__inner">
          <div className="defense-cta__content">
            <h2 className="defense-cta__title">Discutons de votre projet défense</h2>
            <p className="defense-cta__text text-justify-hyphens">
              Vous pilotez un projet de développement embarqué pour un système critique, vous sécurisez un système d'information sensible, vous intégrez l'IA dans une chaîne opérationnelle, ou vous renforcez vos équipes techniques ? Parlons de votre contexte, de vos contraintes et de la manière dont nous pouvons vous accompagner avec une rigueur adaptée aux exigences régaliennes.
            </p>
            <div className="defense-cta__actions">
              <Link href="https://www.syslearn.fr/qui-sommes-nous/secteurs-dactivites" target="_blank" rel="dofollow noopener noreferrer" className="defense-cta__btn defense-cta__btn--primary">
                Découvrir Syslearn
                <ExternalLink size={18} />
              </Link>
              <Link href="/contact" className="defense-cta__btn defense-cta__btn--secondary">
                Discuter de votre projet Défense
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}