import Link from "next/link";
import "../../styles/nos-entites/nos-entites.css";

export const metadata = {
  title: "Nos entités",
  description: "Découvrez les trois entités de Syslearn Group : Syslearn (conseil IT), PointerLab (ESN C++) et StackJobs (recrutement tech).",
};

export default function NosEntitesPage() {
  const entites = [
    {
      name: "Syslearn",
      tagline: "Conseil Data, Ingénierie Tech, IA, IoT & Cybersécurité.",
      description: "Syslearn accompagne ses clients de l'énergie, la défense et l'industrie en conseil informatique et ingénierie sur mesure. Consultants qualifiés, missions exigeantes.",
      link: "/nos-entites/syslearn",
      image: "/images/entites/entite-syslearn.jpg",
      color: "var(--color-syslearn)",
    },
    {
      name: "PointerLab",
      tagline: "Spécialiste dans l'écosystème C++ pour vos projets logiciels critiques, aussi partenaire official de Qt Group.",
      description: "PointerLab est une néo-ESN spécialisée en développement C++ et Qt pour la simulation 3D, le médical et l'aéronautique. Vivier de plus de 8 000 profils qualifiés.",
      link: "/nos-entites/pointerlab",
      image: "/images/entites/entite-pointerlab.jpg",
      color: "var(--gradient-pointerlab)",
    },
    {
      name: "StackJobs",
      tagline: "La référence du recrutement tech & engineering en France",
      description: "StackJobs réunit plus de 4 000 offres d'emploi tech en France avec un matching IA entre développeurs, data scientists et entreprises qui recrutent.",
      link: "/nos-entites/stackjobs",
      image: "/images/entites/entite-stackjobs.jpg",
      color: "var(--gradient-stackjobs)",
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
           <strong>Syslearn Group</strong> réunit trois entités qui, ensemble, couvrent tout le parcours : <strong>Syslearn</strong> pour le conseil et l'ingénierie informatique généraliste, <strong>PointerLab</strong> pour le développement logiciel sur l'écosystème C++ appliqué aux projets les plus exigeants, et <strong>StackJobs</strong> pour connecter les bons profils aux bonnes entreprises. 

          Cette architecture n'est pas un assemblage opportuniste de trois marques : c'est une réponse structurelle à un problème que rencontrent la plupart des entreprises technologiques françaises devoir jongler entre plusieurs prestataires pour couvrir le conseil généraliste, l'ingénierie critique et le recrutement spécialisé, avec à chaque fois une perte d'information au passage. Chez nous, ces trois briques restent connectées, sous une même exigence de rigueur et de transparence. 
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