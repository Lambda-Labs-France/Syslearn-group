import Link from "next/link";
import "../../styles/nos-entites/nos-entites.css";

export const metadata = {
  title: "Nos entités | Syslearn Groupe",
  description: "Découvrez les trois entités de Syslearn Groupe : Syslearn (conseil IT), PointerLab (ESN C++/Qt) et StackJobs (recrutement tech).",
};

export default function NosEntitesPage() {
  const entites = [
    {
      name: "Syslearn",
      tagline: "Conseil et ingénierie informatique pour l'énergie, la défense et l'industrie",
      description: "Syslearn accompagne ses clients de l'énergie, la défense et l'industrie en conseil informatique et ingénierie sur mesure. Consultants qualifiés, missions exigeantes.",
      link: "/nos-entites/syslearn",
      image: "https://picsum.photos/seed/syslearn-entite/600/400",
      color: "#059669",
    },
    {
      name: "PointerLab",
      tagline: "L'ESN spécialisée C++ et Qt, partenaire officiel de Qt Group",
      description: "PointerLab est une néo-ESN spécialisée en développement C++ et Qt pour la simulation 3D, le médical et l'aéronautique. Vivier de plus de 8 000 profils qualifiés.",
      link: "/nos-entites/pointerlab",
      image: "https://picsum.photos/seed/pointerlab-entite/600/400",
      color: "#7c3aed",
    },
    {
      name: "StackJobs",
      tagline: "La plateforme de recrutement tech qui matche vraiment",
      description: "StackJobs réunit plus de 4 000 offres d'emploi tech en France avec un matching IA entre développeurs, data scientists et entreprises qui recrutent.",
      link: "/nos-entites/stackjobs",
      image: "https://picsum.photos/seed/stackjobs-entite/600/400",
      color: "#2563eb",
    },
  ];

  return (
    <main className="entites-page">
      <section className="entites-hero">
        <div className="entites-hero__inner">
          <h1 className="entites-hero__title">Nos entités</h1>
          <p className="entites-hero__subtitle">
            Trois entités, trois métiers distincts, une même colonne vertébrale
          </p>
        </div>
      </section>

      <section className="entites-content">
        <div className="entites-content__inner">
          <p className="entites-intro">
            Syslearn Groupe réunit trois entités qui, ensemble, couvrent tout le parcours : 
            Syslearn pour le conseil et l'ingénierie informatique généraliste, 
            PointerLab pour le développement logiciel C++ et Qt sur les projets les plus exigeants, 
            et StackJobs pour connecter les bons profils aux bonnes entreprises.
          </p>

          <div className="entites-grid">
            {entites.map((entite) => (
              <Link key={entite.name} href={entite.link} className="entite-card">
                <div className="entite-card__image">
                  <img src={entite.image} alt={entite.name} />
                  <span className="entite-card__badge" style={{ background: entite.color }}>
                    {entite.name}
                  </span>
                </div>
                <div className="entite-card__content">
                  <h3 className="entite-card__title">{entite.name}</h3>
                  <p className="entite-card__tagline">{entite.tagline}</p>
                  <p className="entite-card__description">{entite.description}</p>
                  <span className="entite-card__btn" style={{ background: entite.color }}>
                    Découvrir {entite.name}
                   
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}