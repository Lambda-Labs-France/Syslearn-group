import Link from "next/link";
import "../../styles/accueil/engagements.css";

export default function Engagements() {
  return (
    <section className="engagements">
      <div className="engagements__inner">
        <div className="engagements__image">
          <img
            src="https://picsum.photos/seed/engagements/600/500"
            alt="Nos engagements"
            className="engagements__img"
          />
        </div>

        <div className="engagements__content">
          <h2 className="engagements__title">Nos engagements</h2>
          <p className="engagements__text">
            Les activités de notre groupe reposent sur un socle commun : permettre à toutes et tous 
            de trouver la meilleure opportunité. Cet engagement nous incite à être exemplaire pour 
            les actifs que nous accompagnons, pour nos clients et nos collaborateurs… mais pas 
            seulement. Nous souhaitons aller plus loin.
          </p>
          <Link href="/engagements" className="engagements__btn">
            Découvrez nos engagements
          </Link>
        </div>
      </div>
    </section>
  );
}