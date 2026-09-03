import "../../../styles/groupe/values.css";

export const metadata = {
  title: "Nos valeurs",
  description: "Découvrez les valeurs de Syslearn Group : modernité, transparence, horizontalité, spécialisation et partage de la valeur.",
  alternates: { canonical: "/le-groupe/valeurs" },
};

export default function ValeursPage() {
  const valeurs = [
    {
      title: "Modernité",
      description: "Vos consultants restent parce qu'ils sont bien traités, pas parce qu'ils n'ont pas le choix. Un environnement de travail pensé pour durer, pas pour consommer les talents.",
    },
    {
      title: "Transparence",
      description: "Un consultant PointerLab connaît le taux journalier moyen facturé sur sa mission. Ce n'est pas un détail de communication, c'est la base du contrat de confiance.",
    },
    {
      title: "Horizontalité",
      description: "Deux strates, pas dix. Les décisions se prennent vite, par les personnes qui font réellement le travail, pas par un comité éloigné du terrain.",
    },
    {
      title: "Spécialisation",
      description: "Un consultant Syslearn énergie n'est pas un consultant Syslearn défense. Nous assumons la niche plutôt que de vendre un CV généraliste.",
    },
    {
      title: "Partage de la valeur",
      description: "La marge dégagée sur une mission n'est pas qu'une ligne comptable : c'est un signal envoyé à celles et ceux qui l'ont produite, avec une trajectoire possible vers l'association.",
    },
  ];

  return (
    <main className="valeurs-page">
      <section className="valeurs-hero">
        <div className="valeurs-hero__inner">
          <h1 className="valeurs-hero__title">Nos valeurs</h1>
          <p className="valeurs-hero__subtitle">Ce qui nous guide au quotidien</p>
        </div>
      </section>

      <section className="valeurs-content">
        <div className="valeurs-content__inner">
          <p className="valeurs-intro ">
            Nos valeurs sont le reflet de notre identité. Elles guident chacune de nos décisions 
            et nous aident à grandir ensemble.
          </p>
          <div className="valeurs-grid">
            {valeurs.map((valeur, index) => (
              <div key={index} className="valeurs-card">
                <div className="valeurs-card__number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="valeurs-card__title">{valeur.title}</h3>
                <p className="valeurs-card__description text-justify-hyphens">{valeur.description}</p>
                <div className="valeurs-card__line" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}