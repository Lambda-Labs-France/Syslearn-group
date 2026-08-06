import Link from "next/link";
import "../../styles/accueil/actualites.css";

const actualitesData = [
  {
    id: 1,
    date: "24 juillet 2026",
    category: "Lancement",
    title: "Syslearn Group : Syslearn, PointerLab et StackJobs réunis sous une même identité",
    image: "https://picsum.photos/seed/lancement/600/400",
    link: "/actualites/1",
  },
  {
    id: 2,
    date: "16 juillet 2026",
    category: "Bilan",
    title: "45 missions, 50 consultants : le bilan d'activité de Syslearn Group",
    image: "https://picsum.photos/seed/bilan/600/400",
    link: "/actualites/2",
  },
  
];

export default function Actualites() {
  return (
    <section className="actualites">
      <div className="actualites__inner">
        <div className="actualites__header">
          <h2 className="actualites__title">Actualités</h2>
          
        </div>

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