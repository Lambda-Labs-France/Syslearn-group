import Link from "next/link";
import Image from "next/image";
import "../../styles/groupe/groupe.css";

export const metadata = {
  title: "Le Groupe | Syslearn Groupe - Notre modèle d'ESN nouvelle génération",
  description: "Découvrez Syslearn Groupe : l'écosystème derrière Syslearn, PointerLab et StackJobs. Notre histoire, nos valeurs et notre modèle horizontal et transparent. ",
};

export default function LeGroupePage() {
  return (
    <main className="groupe-page">
      <section className="groupe-hero">
        <div className="groupe-hero__inner">
          <div className="groupe-hero__content">
            <h1 className="groupe-hero__title">Le Groupe : une même exigence, trois métiers du numérique</h1>
            <p className="groupe-hero__subtitle">
              Syslearn, PointerLab et StackJobs - trois entités, une même colonne vertébrale.
            </p>
          </div>
        </div>
      </section>

      <section className="groupe-section">
        <div className="groupe-section__inner">
          <div className="groupe-section__header">
            <h2 className="groupe-section__title">Presentation</h2>
          </div>
          <div className="groupe-section__grid">
            <div className="groupe-section__text">
              <p className="groupe-section__brief">
                Syslearn Groupe réunit trois entités du numérique - Syslearn, PointerLab et StackJobs - 
                unies par un modèle horizontal et transparent. Chaque entité conserve sa spécialité tout en 
                partageant une infrastructure commune et une porosité assumée.
              </p>
              <div className="groupe-section__links">
                <Link href="/le-groupe/qui-sommes-nous" className="groupe-section__link">
                  En savoir plus 
                </Link>
              </div>
            </div>
            <div className="groupe-section__image">
              <img
                src="https://picsum.photos/seed/groupe-qui/600/400"
                alt="Qui sommes-nous"
                className="groupe-section__img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="groupe-section groupe-section--alt">
        <div className="groupe-section__inner">
          <div className="groupe-section__header">
            <h2 className="groupe-section__title">Notre modèle et notre gouvernance</h2>
          </div>
          <div className="groupe-section__grid groupe-section__grid--reverse">
            <div className="groupe-section__text">
              <p>
                Chaque entité conserve son autonomie opérationnelle - son propre site, sa propre clientèle, sa propre équipe 
                dirigeante - tout en partageant une infrastructure commune : outils, méthodes de recrutement, et surtout, une 
                porosité assumée entre les trois structures.
              </p>
              <p>
                Un consultant Syslearn en fin de mission énergie peut être orienté vers une opportunité PointerLab si son profil 
                technique correspond mieux. Une offre PointerLab est relayée en priorité sur StackJobs avant toute diffusion externe.
              </p>
            </div>
            <div className="groupe-section__image">
              <img
                src="https://picsum.photos/seed/gouvernance/600/400"
                alt="Notre gouvernance"
                className="groupe-section__img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="groupe-stats">
        <div className="groupe-stats__inner">
          <div className="groupe-stats__header">
            <h2 className="groupe-stats__title">Nos chiffres-clés</h2>
          </div>

          <div className="groupe-stats__grid">
            <div className="groupe-stat">
              <span className="groupe-stat__number">45</span>
              <span className="groupe-stat__label">missions confiées</span>
            </div>
            <div className="groupe-stat">
              <span className="groupe-stat__number">50</span>
              <span className="groupe-stat__label">consultants actifs</span>
            </div>
            <div className="groupe-stat">
              <span className="groupe-stat__number">20</span>
              <span className="groupe-stat__label">clients accompagnés</span>
            </div>
            <div className="groupe-stat">
              <span className="groupe-stat__number">4 000+</span>
              <span className="groupe-stat__label">offres StackJobs</span>
            </div>
          </div>

          <div className="groupe-stats__footer">
            <Link href="/le-groupe/chiffres-cles" className="groupe-stats__link">
              Voir tous les chiffres
            </Link>
          </div>
        </div>
      </section>

      <section className="groupe-faq">
        <div className="groupe-faq__inner">
          <div className="groupe-faq__header">
            <h2 className="groupe-faq__title">Questions fréquentes</h2>
          </div>
          <div className="groupe-faq__list">
            <div className="groupe-faq-item">
              <h3 className="groupe-faq-item__question">Qu'est-ce qu'une néo-ESN ?</h3>
              <p className="groupe-faq-item__answer">
                Une néo-ESN reprend le modèle économique classique d'une entreprise de services numériques - facturer des 
                compétences techniques en mission - mais en réduisant les strates hiérarchiques et en partageant plus 
                équitablement la marge avec les consultants qui produisent le travail.
              </p>
            </div>
            <div className="groupe-faq-item">
              <h3 className="groupe-faq-item__question">Syslearn Groupe est-il une seule entreprise ou plusieurs ?</h3>
              <p className="groupe-faq-item__answer">
                Syslearn Groupe réunit trois entités distinctes - Syslearn, PointerLab et StackJobs - chacune avec son propre 
                site et sa propre spécialité, reliées par un modèle et des valeurs communes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}