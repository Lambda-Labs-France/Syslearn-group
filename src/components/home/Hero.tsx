import Link from "next/link";
import "../../styles/accueil/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__left">
            <h1 className="hero__title">
              <span className="hero__title--words">
                <span className="hero__title--word hero__title--syslearn">
                  <span className="hero__title--company">.Syslearn</span>
                  <span className="hero__title--tagline">Conseil informatique</span>
                </span>
                <span className="hero__title--word hero__title--pointerlab">
                  <span className="hero__title--company">.PointerLab</span>
                  <span className="hero__title--tagline">ingénierie C++/Qt</span>
                </span>
                <span className="hero__title--word hero__title--stackjobs">
                  <span className="hero__title--company">.StackJobs</span>
                  <span className="hero__title--tagline">recrutement tech</span>
                </span>
              </span>
              <span className="hero__title--highlight">trois métiers, un groupe</span>
            </h1>

            <p className="hero__description">
              Vous cherchez un partenaire pour un projet informatique, une expertise C++/Qt pointue, 
              ou votre prochain poste tech ? Syslearn Group réunit trois entités qui, ensemble, 
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

          <div className="hero__right">
            <div className="hero__image-wrapper">
              <img
                src="/images/hero-group.png"
                alt="Syslearn Group - Illustration"
                className="hero__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}