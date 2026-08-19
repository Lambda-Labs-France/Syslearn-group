"use client";

import { useState } from "react";
import { 
  Filter,
  ChevronLeft,
  ChevronRight,
  Users,
  Briefcase,
  Code2,
  UserCheck,
} from "lucide-react";
import {
  articles,
  entities,
  getFilteredArticles,
  getCategories,
  upcomingArticles,
} from "./data/articles";
import ArticleCard from "../../components/common/ArticleCard";
import "../../styles/common/article-card.css";
import "../../styles/actualites/actualites.css";

const ENTITY_ICONS: Record<string, React.ReactNode> = {
  'Syslearn': <Briefcase size={16} />,
  'PointerLab': <Code2 size={16} />,
  'StackJobs': <UserCheck size={16} />,
  'Groupe': <Users size={16} />,
};

export default function ActualitesClient() {
  const [selectedEntity, setSelectedEntity] = useState('Groupe');
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = getCategories(); // ✅ Récupère les catégories dynamiques
  const filteredArticles = getFilteredArticles(selectedEntity, selectedCategory);
  const totalArticles = filteredArticles.length;
  const currentArticle = filteredArticles[currentIndex];

  const handleFilterChange = (entity: string, category: string) => {
    setSelectedEntity(entity);
    setSelectedCategory(category);
    setCurrentIndex(0);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalArticles - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalArticles - 1 ? 0 : prev + 1));
  };

  return (
    <main className="actualites-page">
      <section className="actualites-hero">
        <div className="actualites-hero__inner">
          <h1 className="actualites-hero__title">Actualités</h1>
        </div>
      </section>

      <section className="actualites-filters">
        <div className="actualites-filters__inner">
          <div className="actualites-filters__row">
            <div className="actualites-filters__group">
              <span className="actualites-filters__label">
                <Filter size={16} />
                Entité
              </span>
              <div className="actualites-filters__options">
                {entities.map((entity) => (
                  <button
                    key={entity}
                    className={`actualites-filters__option ${
                      selectedEntity === entity ? 'actualites-filters__option--active' : ''
                    }`}
                    onClick={() => handleFilterChange(entity, selectedCategory)}
                  >
                    {ENTITY_ICONS[entity]}
                    {entity}
                  </button>
                ))}
              </div>
            </div>

            <div className="actualites-filters__divider" />

            <div className="actualites-filters__group">
              <span className="actualites-filters__label">
                <Filter size={16} />
                Thématique
              </span>
              <div className="actualites-filters__options">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`actualites-filters__option ${
                      selectedCategory === category ? 'actualites-filters__option--active' : ''
                    }`}
                    onClick={() => handleFilterChange(selectedEntity, category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="actualites-filters__bottom">
            <span className="actualites-filters__count">
              {totalArticles} article{totalArticles > 1 ? 's' : ''}
            </span>
            {(selectedEntity !== 'Groupe' || selectedCategory !== 'Toutes') && (
              <button
                className="actualites-filters__reset"
                onClick={() => handleFilterChange('Groupe', 'Toutes')}
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="actualites-content">
        <div className="actualites-content__inner">
          {totalArticles === 0 ? (
            <div className="actualites-empty">
              <p>Aucun article ne correspond à vos filtres.</p>
            </div>
          ) : (
            <>
              <div className="actualites-carousel">
                <button 
                  className="actualites-carousel__btn actualites-carousel__btn--prev"
                  onClick={goToPrevious}
                  aria-label="Article précédent"
                >
                  <ChevronLeft size={28} />
                </button>

                <div className="actualites-carousel__slide">
                  <ArticleCard {...currentArticle} />
                </div>

                <button 
                  className="actualites-carousel__btn actualites-carousel__btn--next"
                  onClick={goToNext}
                  aria-label="Article suivant"
                >
                  <ChevronRight size={28} />
                </button>
              </div>

              <div className="actualites-carousel__dots">
                {filteredArticles.map((_, index) => (
                  <button
                    key={index}
                    className={`actualites-carousel__dot ${
                      index === currentIndex ? 'actualites-carousel__dot--active' : ''
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Aller à l'article ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="actualites-upcoming">
        <div className="actualites-upcoming__inner">
          <h2 className="actualites-upcoming__title">À venir</h2>
          <p className="actualites-upcoming__subtitle">
            Idées d'articles à venir (calendrier éditorial SEO)
          </p>
          <div className="actualites-upcoming__grid">
            {upcomingArticles.map((article, index) => (
              <div key={index} className="actualites-upcoming__item">
                <span className="actualites-upcoming__number">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="actualites-upcoming__item-title">{article.title}</h3>
                  <p className="actualites-upcoming__item-desc">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}