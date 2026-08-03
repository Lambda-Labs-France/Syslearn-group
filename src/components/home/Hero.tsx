import Link from "next/link";
import "../../styles/accueil/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__left">
          <h1 className="hero__title">
            Rencontrez <br />
            votre avenir
          </h1>
        </div>

        <div className="hero__right">
          <p className="hero__description">
            Pour avancer, il faut aller à la rencontre de son avenir. En tant qu&apos;acteur du changement, 
            nous aidons entreprises, écoles, salariés, chercheurs d&apos;emploi et étudiants à tisser des 
            liens privilégiés au quotidien.
          </p>
          <Link href="/groupe" className="hero__btn">
            Découvrir le groupe
          </Link>
        </div>
      </div>
    </section>
  );
}