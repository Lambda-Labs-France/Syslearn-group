import Link from "next/link";
import type { ReactNode } from "react";
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
  upcomingArticles,
  buildActualitesHref,
  type Article,
  type EntityFilter,
} from "./data/articles";
import ArticleCard from "../../components/common/ArticleCard";
import "../../styles/actualites/actualites.css";

const ENTITY_ICONS: Record<string, ReactNode> = {
  Syslearn: <Briefcase size={16} />,
  PointerLab: <Code2 size={16} />,
  StackJobs: <UserCheck size={16} />,
  Groupe: <Users size={16} />,
};

const MAX_PAGES = 5;

function listingLink(options?: Parameters<typeof buildActualitesHref>[0]) {
  const href = buildActualitesHref(options);
  return {
    href,
    rel: href === "/actualites" ? undefined : ("nofollow" as const),
  };
}

function getVisiblePages(current: number, total: number): number[] {
  if (total <= MAX_PAGES) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  let start = Math.max(1, current - Math.floor(MAX_PAGES / 2));
  const end = Math.min(total, start + MAX_PAGES - 1);
  start = Math.max(1, end - MAX_PAGES + 1);

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

interface ActualitesViewProps {
  articles: Article[];
  categories: string[];
  selectedEntity: EntityFilter;
  selectedCategory: string;
  page: number;
  pageCount: number;
  total: number;
}

export default function ActualitesView({
  articles,
  categories,
  selectedEntity,
  selectedCategory,
  page,
  pageCount,
  total,
}: ActualitesViewProps) {
  const hasFilters = selectedEntity !== "Groupe" || selectedCategory !== "Toutes";
  const visiblePages = getVisiblePages(page, pageCount);
  const prevHref = buildActualitesHref({
    page: page - 1,
    entity: selectedEntity,
    category: selectedCategory,
  });
  const nextHref = buildActualitesHref({
    page: page + 1,
    entity: selectedEntity,
    category: selectedCategory,
  });

  return (
    <div className="actualites-page">
      <section className="actualites-hero">
        <div className="actualites-hero__inner">
          <h1 className="actualites-hero__title">Actualités</h1>
        </div>
      </section>

      <section className="actualites-filters">
        <div className="actualites-filters__inner">
          <div className="actualites-filters__row">
            <div className="actualites-filters__group actualites-filters__group--entity">
              <span className="actualites-filters__label">
                <Filter size={16} />
                Entité
              </span>
              <div className="actualites-filters__options">
                {entities.map((entity) => (
                  <Link
                    key={entity}
                    {...listingLink({
                      entity,
                      category: selectedCategory,
                    })}
                    className={`actualites-filters__option ${
                      selectedEntity === entity
                        ? "actualites-filters__option--active"
                        : ""
                    }`}
                    aria-current={selectedEntity === entity ? "page" : undefined}
                    scroll={false}
                    prefetch={false}
                  >
                    {ENTITY_ICONS[entity]}
                    {entity}
                  </Link>
                ))}
              </div>
            </div>

            <div className="actualites-filters__group">
              <span className="actualites-filters__label">
                <Filter size={16} />
                Thématique
              </span>
              <div className="actualites-filters__options">
                {categories.map((category) => (
                  <Link
                    key={category}
                    {...listingLink({
                      entity: selectedEntity,
                      category,
                    })}
                    className={`actualites-filters__option ${
                      selectedCategory === category
                        ? "actualites-filters__option--active"
                        : ""
                    }`}
                    aria-current={
                      selectedCategory === category ? "page" : undefined
                    }
                    scroll={false}
                    prefetch={false}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="actualites-filters__bottom">
            <span className="actualites-filters__count">
              {total} article{total > 1 ? "s" : ""}
            </span>
            {hasFilters && (
              <Link
                href="/actualites"
                className="actualites-filters__reset"
                scroll={false}
              >
                Réinitialiser les filtres
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="actualites-content" id="articles">
        <div className="actualites-content__inner">
          {articles.length === 0 ? (
            <div className="actualites-empty">
              <p>Aucun article ne correspond à vos filtres.</p>
            </div>
          ) : (
            <>
              {pageCount > 1 && (
                <div className="actualites-carousel__dots">
                  {visiblePages[0] > 1 && (
                    <Link
                      {...listingLink({
                        page: visiblePages[0] - 1,
                        entity: selectedEntity,
                        category: selectedCategory,
                      })}
                      className="actualites-carousel__dot-arrow"
                      aria-label="Pages précédentes"
                      scroll={false}
                      prefetch={false}
                    >
                      <ChevronLeft size={14} />
                    </Link>
                  )}

                  {visiblePages.map((pageNumber) => (
                    <Link
                      key={pageNumber}
                      {...listingLink({
                        page: pageNumber,
                        entity: selectedEntity,
                        category: selectedCategory,
                      })}
                      className={`actualites-carousel__dot ${
                        pageNumber === page
                          ? "actualites-carousel__dot--active"
                          : ""
                      }`}
                      aria-label={`Aller à la page ${pageNumber}`}
                      aria-current={pageNumber === page ? "page" : undefined}
                      scroll={false}
                      prefetch={false}
                    />
                  ))}

                  {visiblePages[visiblePages.length - 1] < pageCount && (
                    <Link
                      {...listingLink({
                        page: visiblePages[visiblePages.length - 1] + 1,
                        entity: selectedEntity,
                        category: selectedCategory,
                      })}
                      className="actualites-carousel__dot-arrow"
                      aria-label="Pages suivantes"
                      scroll={false}
                      prefetch={false}
                    >
                      <ChevronRight size={14} />
                    </Link>
                  )}
                </div>
              )}

              <div className="actualites-carousel-wrapper">
                {page > 1 ? (
                  <Link
                    href={prevHref}
                    rel={listingLink({
                      page: page - 1,
                      entity: selectedEntity,
                      category: selectedCategory,
                    }).rel}
                    className="actualites-carousel__btn actualites-carousel__btn--prev"
                    aria-label="Articles précédents"
                    scroll={false}
                    prefetch={false}
                  >
                    <ChevronLeft size={28} />
                  </Link>
                ) : (
                  <span
                    className="actualites-carousel__btn actualites-carousel__btn--prev actualites-carousel__btn--disabled"
                    aria-hidden="true"
                  >
                    <ChevronLeft size={28} />
                  </span>
                )}

                <div className="actualites-grid">
                  {articles.map((article, index) => (
                    <ArticleCard
                      key={article.id}
                      {...article}
                      priority={index === 0}
                    />
                  ))}
                </div>

                {page < pageCount ? (
                  <Link
                    href={nextHref}
                    rel={listingLink({
                      page: page + 1,
                      entity: selectedEntity,
                      category: selectedCategory,
                    }).rel}
                    className="actualites-carousel__btn actualites-carousel__btn--next"
                    aria-label="Articles suivants"
                    scroll={false}
                    prefetch={false}
                  >
                    <ChevronRight size={28} />
                  </Link>
                ) : (
                  <span
                    className="actualites-carousel__btn actualites-carousel__btn--next actualites-carousel__btn--disabled"
                    aria-hidden="true"
                  >
                    <ChevronRight size={28} />
                  </span>
                )}
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
              <div key={article.title} className="actualites-upcoming__item">
                <span className="actualites-upcoming__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="actualites-upcoming__item-title">
                    {article.title}
                  </h3>
                  <p className="actualites-upcoming__item-desc">
                    {article.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
