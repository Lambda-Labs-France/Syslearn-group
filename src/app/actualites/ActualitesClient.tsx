// actualites/ActualitesClient.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  Filter,
  ChevronLeft,
  ChevronRight,
  Users,
  Briefcase,
  Code2,
  UserCheck
} from "lucide-react";
import {
  articles,
  entities,
  categories,
  getFilteredArticles,
  upcomingArticles,
} from "./data/articles";
import "../../styles/actualites/actualites.css";

const ENTITY_ICONS: Record<string, React.ReactNode> = {
  'Syslearn': <Briefcase size={16} />,
  'PointerLab': <Code2 size={16} />,
  'StackJobs': <UserCheck size={16} />,
  'Groupe': <Users size={16} />,
};

const ENTITY_COLORS: Record<string, string> = {
  'Syslearn': '#059669',
  'PointerLab': '#7c3aed',
  'StackJobs': '#2563eb',
  'Groupe': '#0f172a',
};

const ITEMS_PER_PAGE = 9; 

export default function ActualitesClient() {
  const [selectedEntity, setSelectedEntity] = useState('Groupe');
  const [selectedCategory, setSelectedCategory] = useState('Vue du groupe');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArticles = getFilteredArticles(selectedEntity, selectedCategory);
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleFilterChange = (entity: string, category: string) => {
    setSelectedEntity(entity);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
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
              {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''}
            </span>
            {(selectedEntity !== 'Groupe' || selectedCategory !== 'Vue du groupe') && (
              <button
                className="actualites-filters__reset"
                onClick={() => handleFilterChange('Groupe', 'Vue du groupe')}
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="actualites-content">
        <div className="actualites-content__inner">
          {paginatedArticles.length === 0 ? (
            <div className="actualites-empty">
              <p>Aucun article ne correspond à vos filtres.</p>
            </div>
          ) : (
            <>
              <div className="actualites-grid">
                {paginatedArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/actualites/${article.slug}`}
                    className="actualites-card"
                  >
                    <div className="actualites-card__image">
                      <img src={article.image} alt={article.title} />
                      <span 
                        className="actualites-card__entity"
                        style={{ background: ENTITY_COLORS[article.entity] || '#0f172a' }}
                      >
                        {ENTITY_ICONS[article.entity]}
                        {article.entity}
                      </span>
                    </div>
                    <div className="actualites-card__body">
                      <div className="actualites-card__meta">
                        <span className="actualites-card__category">
                          {article.category}
                        </span>
                        <span className="actualites-card__date">
                          <Calendar size={14} />
                          {formatDate(article.date)}
                        </span>
                        <span className="actualites-card__readtime">
                          <Clock size={14} />
                          {article.readTime} min
                        </span>
                      </div>
                      <h3 className="actualites-card__title">{article.title}</h3>
                      <p className="actualites-card__excerpt">{article.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="actualites-pagination">
                  <button
                    className="actualites-pagination__btn"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft size={18} />
                    <span>Précédent</span>
                  </button>
                  <div className="actualites-pagination__numbers">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        className={`actualites-pagination__number ${
                          page === currentPage ? 'actualites-pagination__number--active' : ''
                        }`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                  <button
                    className="actualites-pagination__btn"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <span>Suivant</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
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