import Link from "next/link";
import "../../styles/accueil/question.css";

export default function Question() {
  return (
    <section className="question">
      <div className="question__inner">
        <h2 className="question__title">Une question ?</h2>
        <p className="question__text">
          Vous avez besoin d&apos;informations sur nos solutions professionnelles, 
          nos plateformes, nos médias, ou envie de nous rejoindre ?
        </p>
        <Link href="/contact" className="question__btn">
          Contactez-nous
        </Link>
      </div>
    </section>
  );
}