import Link from "next/link";
import "../../styles/accueil/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__title--syslearn">Conseil informatique</span>
            <span className="hero__title--separator">,</span>
            <span className="hero__title--pointerlab"> ingénierie C++/Qt</span>
            <span className="hero__title--separator">,</span>
            <span className="hero__title--stackjobs"> recrutement tech</span>
            <br />
            <span className="hero__title--highlight">trois métiers, un groupe</span>
          </h1>

          <p className="hero__description">
            Vous cherchez un partenaire pour un projet informatique, une expertise C++/Qt pointue, 
            ou votre prochain poste tech ? Syslearn Groupe réunit trois entités qui, ensemble, 
            couvrent tout le parcours : Syslearn pour le conseil et l'ingénierie informatique généraliste, 
            PointerLab pour le développement logiciel C++ et Qt sur les projets les plus exigeants, 
            et StackJobs pour connecter les bons profils aux bonnes entreprises.
          </p>

          <p className="hero__description">
            Ce qui nous relie n'est pas qu'une charte graphique commune : c'est une même façon de travailler. 
            Peu de strates hiérarchiques, des objectifs et des marges transparents, une spécialisation technique 
            assumée plutôt qu'une promesse généraliste vague. Un consultant Syslearn qui intervient en énergie 
            ne fait pas le même métier qu'un ingénieur PointerLab qui développe un logiciel de simulation médicale 
            et c'est précisément cette diversité maîtrisée qui fait la force du groupe.
          </p>
          
          <div className="hero__buttons">
            <Link href="/le-groupe" className="hero__btn">
              Découvrir le groupe
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}