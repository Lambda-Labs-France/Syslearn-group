import Link from "next/link";
import { 
  Briefcase, 
  Code2, 
  Users, 
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import "../../styles/carrieres/carrieres.css";

export const metadata = {
  title: "Carrières | Syslearn Group",
  description: "Consultant IT, ingénieur C++ ou équipe produit tech : découvrez les métiers de Syslearn Group. Un modèle horizontal, transparence totale et évolution vers l'association.",
};

export default function CarrieresPage() {
  const metiers = [
    {
      icon: Briefcase,
      name: "Consultant informatique",
      entity: "Pôle conseil",
      description: "Missions généralistes en énergie, défense, industrie, avec une vraie diversité de contextes clients. Vous interviendrez sur des projets où les cycles longs et les contraintes réglementaires exigent une compréhension fine du métier, au-delà de la seule compétence technique.",
    },
    {
      icon: Code2,
      name: "Ingénieur logiciel",
      entity: "Écosystème C++",
      description: "Simulation 3D, médical, aéronautique, sur des projets où la technique compte vraiment. Vous rejoignez une équipe qui a fait de l'écosystème C++ sa spécialité, sur des environnements où la performance temps réel et la fiabilité ne sont jamais négociables.",
    },
    {
      icon: Users,
      name: "Équipes produit & tech",
      entity: "Pôle recrutement tech",
      description: "Développement de la plateforme StackJobs, amélioration continue du moteur de matching IA. Vous participez à faire évoluer un produit utilisé par des milliers de profils techniques.",
    },
  ];

  const raisons = [
    {
      title: "Un modèle horizontal : deux strates hiérarchiques, pas dix",
      description: "Une idée ne meurt pas dans un comité de validation : elle arrive directement aux personnes qui décident, parce que ce sont aussi celles qui font le travail."
    },
    {
      title: "Une transparence totale sur les objectifs et les marges de votre mission",
      description: "Chaque consultant connaît le taux journalier facturé sur sa mission, pas une estimation, le chiffre exact. Dans un secteur où le coût d'une période d'intercontrat mal gérée est estimé entre 8 000 et 15 000 euros par consultant et par an, comprendre où va réellement la valeur produite change la nature de la relation entre le consultant, l'entreprise et le client final."
    },
    {
      title: "Une trajectoire d'évolution possible vers l'association",
      description: "Une carrière ne devrait pas s'arrêter à « consultant senior ». Nous proposons un chemin identifié, avec des étapes concrètes, vers l'association pour celles et ceux qui souhaitent s'investir au-delà d'une mission."
    },
    {
      title: "Une spécialisation technique reconnue plutôt qu'une promesse généraliste diluée",
      description: "Sur l'écosystème C++ en particulier, nous nous appuyons sur un vivier de plus de 8 000 profils qualifiés, identifiés et validés en continu, une spécialisation qui vous rend rare sur un marché où le secteur informatique et numérique concentre à lui seul plus de 30 000 postes d'ingénieurs vacants."
    },
  ];

  return (
    <main className="carrieres-page">
      <section className="carrieres-hero">
        <div className="carrieres-hero__inner">
          <h1 className="carrieres-hero__title">
            Carrières : rejoindre un groupe où la spécialisation technique paie vraiment
          </h1>
        </div>
      </section>

      <section className="carrieres-intro">
        <div className="carrieres-intro__inner">
          <p className="carrieres-intro__text">
            On vous a peut-être déjà vendu la « culture d'entreprise » d'une ESN. Chez Syslearn Group, on préfère 
            parler concrètement : peu de strates hiérarchiques, des marges connues de tous, et la possibilité réelle 
            de devenir associé si vous le souhaitez. C'est le modèle que notre pôle ingénierie a rodé sur l'écosystème 
            C++, et que nos autres pôles, conseil informatique et recrutement tech, appliquent chacun à leur façon.
          </p>
          <p className="carrieres-intro__text">
            Ce discours n'est pas qu'une posture : dans un secteur où le turnover moyen des ESN françaises tourne 
            autour de <strong>18 % par an</strong>, et grimpe au-delà de <strong>25 %</strong> dans les structures 
            où les consultants se sentent invisibles entre deux missions, le modèle d'entreprise fait une différence 
            mesurable sur la durée d'une carrière, pas seulement sur son confort.
          </p>
        </div>
      </section>

      <section className="carrieres-marche">
        <div className="carrieres-marche__inner">
          <h2 className="carrieres-marche__title">Un marché du conseil IT en pleine recomposition</h2>
          <p className="carrieres-marche__text">
            Le conseil informatique représente aujourd'hui plus de <strong>280 000 emplois</strong> en France, 
            répartis entre grandes ESN et cabinets spécialisés, avec une croissance annuelle moyenne de 6 à 8 %. 
            Un marché dynamique en apparence, mais qui a profondément changé de visage en quelques années : le 
            rapport de force entre consultants et employeurs s'est largement rééquilibré depuis 2022, et les 
            augmentations lors d'un changement d'ESN, qui pouvaient dépasser 18 % il y a encore quatre ans, se 
            limitent désormais le plus souvent à 10-15 % dans le meilleur des cas.
          </p>
          <p className="carrieres-marche__text">
            Sur le terrain, le taux journalier moyen (TJM) d'un consultant IT confirmé s'établissait autour de 
            <strong>680 €</strong> en 2025 sur les plateformes de mise en relation freelance. Un chiffre qui masque 
            toutefois d'importantes disparités : selon une étude Michael Page sur les salaires IT, 87 % des 
            recruteurs anticipaient malgré tout une hausse de 5 à 10 % des rémunérations dans le numérique, portée 
            par une pénurie de profils qui reste structurelle sur les compétences les plus spécialisées, 
            cybersécurité, cloud, systèmes critiques.
          </p>
          <p className="carrieres-marche__text">
            C'est précisément cette tension entre un marché globalement moins favorable aux consultants et une 
            demande toujours forte sur les profils rares qui rend le choix de l'employeur déterminant : rejoindre 
            une structure qui joue la transparence et la spécialisation plutôt que le volume devient un vrai 
            avantage de carrière, pas un simple argument RH.
          </p>
        </div>
      </section>

      <section className="carrieres-transparence">
        <div className="carrieres-transparence__inner">
          <h2 className="carrieres-transparence__title">La transparence salariale, bientôt une obligation légale</h2>
          <p className="carrieres-transparence__text">
            Ce que nous pratiquons depuis toujours va devenir la norme réglementaire du secteur. La directive 
            européenne sur la transparence salariale, dont la transposition en droit français doit s'achever en 
            2026, obligera les ESN à justifier tout écart de rémunération à poste équivalent et à formaliser 
            clairement leurs critères d'évolution.
          </p>
          <p className="carrieres-transparence__text">
            Un chantier loin d'être anodin : selon une étude PwC France de septembre 2025, plus de 
            <strong>60 % des entreprises du numérique</strong> reconnaissaient ne pas être encore prêtes à 
            appliquer cette directive, faute de données consolidées et de processus RH clairs.
          </p>
          <p className="carrieres-transparence__text">
            Cette mise en conformité tardive en dit long sur l'opacité qui prévaut encore dans une large partie 
            du secteur, et sur la valeur réelle d'un modèle qui a fait de la transparence des marges et des 
            rémunérations un principe fondateur plutôt qu'une contrainte légale à rattraper dans l'urgence.
          </p>
        </div>
      </section>

      <section className="carrieres-metiers">
        <div className="carrieres-metiers__inner">
          <h2 className="carrieres-metiers__title">Nos métiers</h2>
          <div className="carrieres-metiers__grid">
            {metiers.map((metier, index) => {
              const Icon = metier.icon;
              return (
                <div key={index} className="carrieres-metier">
                  <div className="carrieres-metier__icon">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="carrieres-metier__name">{metier.name}</h3>
                    <span className="carrieres-metier__entity">{metier.entity}</span>
                    <p className="carrieres-metier__desc">{metier.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="carrieres-metiers__note">
            <p className="carrieres-metiers__note-text">
              <strong>La France diplôme aujourd'hui environ 46 500 ingénieurs par an</strong>, quand l'économie 
              française devra en recruter près de 100 000 par an d'ici 2035 selon un rapport de l'Institut 
              Montaigne relayé par IESF. Dans ce contexte, la spécialisation technique n'est pas un luxe : c'est 
              une protection de carrière.
            </p>
          </div>
        </div>
      </section>

      <section className="carrieres-raisons">
        <div className="carrieres-raisons__inner">
          <h2 className="carrieres-raisons__title">Pourquoi nous rejoindre</h2>
          <div className="carrieres-raisons__grid">
            {raisons.map((raison, index) => (
              <div key={index} className="carrieres-raison">
                <div className="carrieres-raison__header">
                  <CheckCircle2 size={20} strokeWidth={1.5} className="carrieres-raison__icon" />
                  <h4 className="carrieres-raison__title">{raison.title}</h4>
                </div>
                <p className="carrieres-raison__desc">{raison.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="carrieres-change">
        <div className="carrieres-change__inner">
          <div className="carrieres-change__content">
            <h3 className="carrieres-change__title">Ce que ça change concrètement pour vous</h3>
            <p className="carrieres-change__text">
              Un modèle horizontal, une transparence totale sur les chiffres, une trajectoire claire vers 
              l'association et une spécialisation technique assumée : ce ne sont pas quatre avantages isolés, 
              c'est une seule et même conviction. Un consultant qui comprend l'entreprise dans laquelle il 
              travaille, qui voit où va son évolution et qui peut se spécialiser sans se disperser, reste et 
              progresse plus vite qu'ailleurs.
            </p>
          </div>
        </div>
      </section>

      <section className="carrieres-protection">
        <div className="carrieres-protection__inner">
          <h3 className="carrieres-protection__title">Une spécialisation qui protège votre carrière, pas seulement votre salaire</h3>
          <p className="carrieres-protection__text">
            Dans un marché où les augmentations moyennes lors d'un changement d'employeur sont retombées à 
            <strong>2-4 % en 2026</strong>, contre 5-8 % encore en 2022, la vraie protection d'un consultant ne 
            réside plus dans sa capacité à négocier, mais dans la rareté réelle de ses compétences. C'est tout 
            l'enjeu de la spécialisation technique que nous cultivons sur l'écosystème C++ : elle ne se négocie 
            pas au coup par coup à chaque renouvellement de mission, elle se construit dans la durée, mission 
            après mission, jusqu'à devenir un avantage difficile à copier.
          </p>
          <p className="carrieres-protection__text">
            Cette approche vaut aussi pour la diversité des profils que nous accompagnons. L'ingénierie française 
            reste marquée par un déséquilibre persistant, les femmes ne représentent qu'environ 
            <strong>24 % des ingénieurs en activité en France</strong>, selon la dernière enquête nationale de 
            l'IESF. Un modèle horizontal, où l'évolution se construit sur des critères transparents plutôt que 
            sur des dynamiques informelles de réseau, est aussi une manière concrète de rendre les trajectoires 
            de carrière plus équitables, pour tous les profils qui nous rejoignent.
          </p>
        </div>
      </section>

      <section className="carrieres-cta">
        <div className="carrieres-cta__inner">
          <h3 className="carrieres-cta__title">Prêt à changer de trajectoire ?</h3>
          <p className="carrieres-cta__text">
            Vous en avez assez des ESN où votre carrière dépend d'un manager que vous voyez deux fois par an ? 
            Discutons de ce à quoi ressemblerait votre prochaine mission, et surtout, de ce qui vient après.
          </p>
          <div className="carrieres-cta__actions">
            <Link href="/carrieres/recrutement" className="carrieres-cta__btn carrieres-cta__btn--primary">
              Découvrir nos offres et postuler
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}