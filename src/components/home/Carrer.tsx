import Link from "next/link";
import "../../styles/accueil/carrer.css";

export default function Rejoindre() {
  return (
    <section className="rejoindre">
      <div className="rejoindre__inner">
        <div className="rejoindre__content">
          <h2 className="rejoindre__title">Carrières</h2>
          <p className="rejoindre__text text-justify-hyphens">
            Rejoindre un groupe où la spécialisation technique paie vraiment. Peu de strates hiérarchiques, 
            des marges connues de tous, et la possibilité réelle de devenir associé si vous le souhaitez. 
            C'est le modèle que PointerLab a rodé sur le C++, et que Syslearn comme StackJobs appliquent à leur façon.
          </p>
          <div className="rejoindre__buttons">
            <Link href="/carrieres" className="rejoindre__btn">
              Découvrir nos carrières
            </Link>
            <Link 
              href="/carrieres/recrutement" 
              className="rejoindre__btn rejoindre__btn--secondary"
            >
              Voir les offres
            </Link>
          </div>
        </div>
        <div className="rejoindre__image">
          <img
            src="/images/carrieres.jpg"
            alt="Carrières"
            className="rejoindre__img"
          />
        </div>
      </div>
    </section>
  );
}