"use client";

import { useState, useRef, useEffect } from "react";
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideWidthRef = useRef<number>(0);

  const categories = getCategories();
  const filteredArticles = getFilteredArticles(selectedEntity, selectedCategory);
  const totalArticles = filteredArticles.length;
  const articlesPerView = 3;
  const maxIndex = Math.max(0, totalArticles - articlesPerView);

  const MAX_DOTS = 5;

  const getVisibleDots = () => {
    if (maxIndex <= MAX_DOTS - 1) {
      return Array.from({ length: maxIndex + 1 }, (_, i) => i);
    }
    
    let start = 0;
    if (currentIndex >= 3 && currentIndex <= maxIndex - 3) {
      start = currentIndex - 2;
    } else if (currentIndex > maxIndex - 3) {
      start = maxIndex - (MAX_DOTS - 1);
    }
    return Array.from({ length: MAX_DOTS }, (_, i) => start + i);
  };

  const visibleDots = getVisibleDots();

  useEffect(() => {
    const updateSlideWidth = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.offsetWidth;
        const gap = 24;
        slideWidthRef.current = (trackWidth - (articlesPerView - 1) * gap) / articlesPerView;
      }
    };
    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);
    return () => window.removeEventListener('resize', updateSlideWidth);
  }, [filteredArticles]);

  const handleFilterChange = (entity: string, category: string) => {
    setSelectedEntity(entity);
    setSelectedCategory(category);
    setCurrentIndex(0);
  };

  const scrollToIndex = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrevious = () => {
    if (currentIndex === 0 || isTransitioning) return;
    scrollToIndex(currentIndex - 1);
  };

  const goToNext = () => {
    if (currentIndex >= maxIndex || isTransitioning) return;
    scrollToIndex(currentIndex + 1);
  };

  const getTranslateX = () => {
    if (!trackRef.current) return 0;
    const gap = 24;
    const slideWidth = slideWidthRef.current || 0;
    return -(currentIndex * (slideWidth + gap));
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
              {/* ✅ DOTS limités sans compteur */}
              <div className="actualites-carousel__dots">
                {/* Flèche gauche des dots (si on est loin à droite) */}
                {visibleDots[0] > 0 && (
                  <button
                    className="actualites-carousel__dot-arrow"
                    onClick={() => scrollToIndex(visibleDots[0] - 1)}
                    aria-label="Voir les dots précédents"
                  >
                    <ChevronLeft size={14} />
                  </button>
                )}

                {visibleDots.map((dotIndex) => (
                  <button
                    key={dotIndex}
                    className={`actualites-carousel__dot ${
                      dotIndex === currentIndex ? 'actualites-carousel__dot--active' : ''
                    }`}
                    onClick={() => scrollToIndex(dotIndex)}
                    aria-label={`Aller au groupe d'articles ${dotIndex + 1}`}
                  />
                ))}

                {/* Flèche droite des dots (si on est loin à gauche) */}
                {visibleDots[visibleDots.length - 1] < maxIndex && (
                  <button
                    className="actualites-carousel__dot-arrow"
                    onClick={() => scrollToIndex(visibleDots[visibleDots.length - 1] + 1)}
                    aria-label="Voir les dots suivants"
                  >
                    <ChevronRight size={14} />
                  </button>
                )}
              </div>

              <div className="actualites-carousel-wrapper">
                <button 
                  className={`actualites-carousel__btn actualites-carousel__btn--prev ${
                    currentIndex === 0 ? 'actualites-carousel__btn--disabled' : ''
                  }`}
                  onClick={goToPrevious}
                  disabled={currentIndex === 0}
                >
                  <ChevronLeft size={28} />
                </button>

                <div className="actualites-carousel__track" ref={trackRef}>
                  <div 
                    className="actualites-carousel__slides"
                    style={{
                      transform: `translateX(${getTranslateX()}px)`,
                      transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
                      willChange: 'transform',
                    }}
                  >
                    {filteredArticles.map((article) => (
                      <div key={article.id} className="actualites-carousel__slide">
                        <ArticleCard {...article} />
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  className={`actualites-carousel__btn actualites-carousel__btn--next ${
                    currentIndex >= maxIndex ? 'actualites-carousel__btn--disabled' : ''
                  }`}
                  onClick={goToNext}
                  disabled={currentIndex >= maxIndex}
                >
                  <ChevronRight size={28} />
                </button>
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