import Link from "next/link";
import "../../styles/accueil/secteurs.css";

const secteursData = [
  {
    id: "energie",
    title: "Énergie",
    image: "/images/secteur-energie.png",
    link: "/secteurs/energie",
  },
  {
    id: "defense",
    title: "Défense",
    image: "/images/secteur-defense.png",
    link: "/secteurs/defense",
  },
  {
    id: "industrie",
    title: "Industrie",
    image: "/images/secteur-industrie.png",
    link: "/secteurs/industrie",
  },
  {
    id: "medical",
    title: "Médical",
    image: "/images/secteur-medical.png",
    link: "/secteurs/medical",
  },
  
];

export default function Secteurs() {
  return (
    <section className="secteurs">
      <div className="secteurs__inner">
        <h2 className="secteurs__title">Nos secteurs</h2>
        <p className="secteurs__description">
          Énergie, défense, industrie, médical, aéronautique, automobile, IoT : 
          nos trois entités interviennent sur des secteurs à forte exigence technique 
          et réglementaire. Découvrez comment nous adaptons notre approche à chacun d'eux.
        </p>

        <div className="secteurs__grid">
          {secteursData.map((item) => (
            <Link key={item.id} href={item.link} className="secteurs__card">
              <div className="secteurs__card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="secteurs__card-overlay">
                <h3 className="secteurs__card-title">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="secteurs__footer">
          <Link href="/secteurs" className="secteurs__btn">
            Découvrir tous nos secteurs
          </Link>
        </div>
      </div>
    </section>
  );
}