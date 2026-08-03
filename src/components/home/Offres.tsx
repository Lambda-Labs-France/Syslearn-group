import Link from "next/link";
import "../../styles/accueil/offres.css";

const offresData = [
  {
    id: "rh",
    title: "Vous êtes un professionnel des ressources humaines ou du recrutement",
    image: "https://picsum.photos/seed/rh/600/400",
    link: "/contact",
  },
  {
    id: "education",
    title: "Vous êtes un professionnel de l'éducation ou de la formation",
    image: "https://picsum.photos/seed/education/600/400",
    link: "/contact",
  },
  {
    id: "digital",
    title: "Vous êtes un professionnel du digital",
    image: "https://picsum.photos/seed/digital/600/400",
    link: "/contact",
  },
  {
    id: "emploi",
    title: "Vous êtes à la recherche d'un emploi",
    image: "https://picsum.photos/seed/emploi/600/400",
    link: "/contact",
  },
  {
    id: "formation",
    title: "Vous êtes à la recherche d'une formation",
    image: "https://picsum.photos/seed/formation/600/400",
    link: "/contact",
  },
];

export default function Offres() {
  return (
    <section className="offres">
      <div className="offres__inner">
        <h2 className="offres__title">
          Vous souhaitez en savoir plus sur nos offres ?
        </h2>

        <div className="offres__grid">
          {offresData.map((item) => (
            <Link key={item.id} href={item.link} className="offres__card">
              <div className="offres__card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="offres__card-overlay">
                <h3 className="offres__card-title">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}