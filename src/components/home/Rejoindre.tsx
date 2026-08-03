import Link from "next/link";
import "../../styles/accueil/rejoindre.css";

export default function Rejoindre() {
  return (
    <section className="rejoindre">
      <div className="rejoindre__inner">
        <div className="rejoindre__content">
          <h2 className="rejoindre__title">Rejoignez-nous</h2>
          <p className="rejoindre__text">
            Nous rejoindre, c'est avant tout intégrer une équipe soudée et engagée. 
            Une mission commune nous anime : permettre à chacun de trouver la meilleure 
            opportunité d'emploi ou de formation.
          </p>
          <Link href="/recrutement" className="rejoindre__btn">
            Parcourez nos offres d'emploi
          </Link>
        </div>
        <div className="rejoindre__image">
          <img
            src="https://picsum.photos/seed/rejoindre/600/400"
            alt="Rejoignez-nous"
            className="rejoindre__img"
          />
        </div>
      </div>
    </section>
  );
}