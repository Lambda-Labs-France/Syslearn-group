import Link from "next/link";
import "../../styles/accueil/actualites.css";

const actualitesData = [
  {
    id: 1,
    date: "24 juillet 2026",
    category: "emploi",
    title: "Hellowork prolonge son partenariat avec le Stade Rennais F.C.",
    image: "https://picsum.photos/seed/actualite1/600/400",
    link: "/actualites/1",
  },
  {
    id: 2,
    date: "16 juillet 2026",
    category: "group",
    title: "Hellowork au cœur de l'actualité emploi au premier semestre 2026",
    image: "https://picsum.photos/seed/actualite2/600/400",
    link: "/actualites/2",
  },
];

export default function Actualites() {
  return (
    <section className="actualites">
      <div className="actualites__inner">
        <h2 className="actualites__title">Nos actualités</h2>

        <div className="actualites__grid">
          {actualitesData.map((item) => (
            <Link key={item.id} href={item.link} className="actualites__card">
              <div className="actualites__card-image">
                <img
                  src={item.image}
                  alt={item.title}
                  className="actualites__card-img"
                  loading="lazy"
                />
                <span className="actualites__card-category">{item.category}</span>
              </div>
              <div className="actualites__card-body">
                <span className="actualites__card-date">{item.date}</span>
                <h3 className="actualites__card-title">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="actualites__footer">
          <Link href="/actualites" className="actualites__btn">
            Voir tous les articles
          </Link>
        </div>
      </div>
    </section>
  );
}