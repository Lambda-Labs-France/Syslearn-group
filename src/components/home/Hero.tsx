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
                  <span className="hero__title--company">Syslearn</span>
                  <span className="hero__title--tagline">Conseil tech : Data, Cybersécurité, Cloud & IA</span>
                </span>
                <span className="hero__title--word hero__title--pointerlab">
                  <span className="hero__title--company">PointerLab</span>
                  <span className="hero__title--tagline">Ingénierie écosystème C++</span>
                </span>
                <span className="hero__title--word hero__title--stackjobs">
                  <span className="hero__title--company">StackJobs</span>
                  <span className="hero__title--tagline">Recrutement tech & engineering</span>
                </span>
              </span>
              <span className="hero__title--highlight">trois métiers, un groupe</span>
            </h1>

            <p className="hero__description">
            Vous cherchez un partenaire pour un projet informatique, une maîtrise pointue de l'écosystème C++, ou votre prochain poste tech ? <strong> Syslearn Group</strong> réunit trois entités complémentaires qui, ensemble, couvrent tout le parcours : <strong> Syslearn</strong> pour le conseil tech, l'ingénierie data, l'IA, l'IoT et la cybersécurité, <strong> PointerLab</strong>  pour le développement logiciel sur l'écosystème C++ appliqué aux projets les plus exigeants, et <strong> StackJobs</strong>  pour connecter les bons profils aux bonnes entreprises grâce à un moteur de matching par intelligence artificielle.            </p>

            <p className="hero__description">
Ce qui relie ces trois entités n'est pas qu'une charte graphique commune : c'est une même façon de travailler. Peu de strates hiérarchiques, des objectifs et des marges transparents, une spécialisation technique assumée plutôt qu'une promesse généraliste diluée. Un consultant Syslearn qui déploie une solution IoT industrielle ne fait pas le même métier qu'un ingénieur PointerLab qui développe un logiciel de simulation médicale sur l'écosystème C++ et c'est précisément cette diversité maîtrisée, réunie sous une même exigence, qui fait la force de <strong> Syslearn Group</strong> .            </p>
            
            <div className="hero__buttons">
              <Link href="/le-groupe" className="hero__btn">
                Découvrir le groupe
              </Link>
            </div>
          </div>

          <div className="hero__right">
            <div className="hero__image-wrapper">
              <img
                src="/images/hero.png"
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