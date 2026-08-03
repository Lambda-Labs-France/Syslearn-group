import Link from "next/link";
import "../../styles/accueil/temoignage.css";

export default function Temoignage() {
  return (
    <section className="temoignage">
      <div className="temoignage__inner">
        <div className="temoignage__content">
          <p className="temoignage__text">
            Trouver un emploi qui correspond à nos attentes n&apos;a jamais été aussi important, 
            choisir la bonne formation et la bonne entreprise pour y arriver est un défi majeur. 
            Notre position de leader nous donne des responsabilités : rendre accessible l&apos;orientation 
            des jeunes et la formation professionnelle, et permettre un recrutement plus transparent 
            afin de mieux guider les candidats, et faire gagner du temps aux recruteurs, pour que 
            chacun puisse s&apos;épanouir.
          </p>
          
          <div className="temoignage__author">
            <img
              src="https://picsum.photos/seed/ceo/80/80"
              alt="François Leverger"
              className="temoignage__author-image"
            />
            <div className="temoignage__author-info">
              <span className="temoignage__author-name">François Leverger</span>
              <span className="temoignage__author-title">Directeur général</span>
              <span className="temoignage__author-company">Syslearn Groupe</span>
            </div>
          </div>

          <Link href="/groupe" className="temoignage__btn">
            Découvrez le groupe
          </Link>
        </div>
      </div>
    </section>
  );
}