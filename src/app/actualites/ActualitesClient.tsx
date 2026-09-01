"use client";

import { useState, useRef, useEffect, useCallback, useMemo, memo } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";
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
  getCategories,
  getFilteredArticles,
  upcomingArticles,
  type Article,
} from "./data/articles";
import ArticleCard from "../../components/common/ArticleCard";
import "../../styles/common/article-card.css";
import "../../styles/actualites/actualites.css";

const ENTITY_ICONS: Record<string, React.ReactNode> = {
  Syslearn: <Briefcase size={16} />,
  PointerLab: <Code2 size={16} />,
  StackJobs: <UserCheck size={16} />,
  Groupe: <Users size={16} />,
};

const getArticlesPerView = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

const MAX_DOTS = 5;
const MemoizedArticleCard = memo(ArticleCard);

interface ActualitesClientProps {
  initialArticles: Article[];
}

export default function ActualitesClient({ initialArticles }: ActualitesClientProps) {
  const [selectedEntity, setSelectedEntity] = useState("Groupe");
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [articlesPerView, setArticlesPerView] = useState(3);

  const allArticles = initialArticles;

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const trackRef = useRef<HTMLDivElement>(null);
  const slideWidthRef = useRef<number>(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isProgrammaticScrollRef = useRef(false);
  const resizeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const skipUrlWriteRef = useRef(false);
  const currentIndexRef = useRef(currentIndex);
  const maxIndexRef = useRef(0);

  // Sync ref avec state
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  // ─────────────────────────────────────────────
  // MÉMOÏSATION
  // ─────────────────────────────────────────────
  const categories = useMemo(() => getCategories(allArticles), [allArticles]);

  const filteredArticles = useMemo(
    () => getFilteredArticles(allArticles, selectedEntity, selectedCategory),
    [allArticles, selectedEntity, selectedCategory]
  );

  const totalArticles = filteredArticles.length;
  const maxIndex = useMemo(
    () => Math.max(0, totalArticles - articlesPerView),
    [totalArticles, articlesPerView]
  );
  maxIndexRef.current = maxIndex;

  // ─────────────────────────────────────────────
  // SÉCURITÉ : bloquer currentIndex si maxIndex diminue
  // ─────────────────────────────────────────────
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  // ─────────────────────────────────────────────
  // RESET : filtres ou resize changent
  // ─────────────────────────────────────────────
  useEffect(() => {
    setCurrentIndex(0);
    setIsAnimating(false);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: "auto" });
    }
  }, [selectedEntity, selectedCategory, articlesPerView, allArticles.length]);

  // ─────────────────────────────────────────────
  // RESPONSIVE (debounced)
  // ─────────────────────────────────────────────
  useEffect(() => {
    const updateSize = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.offsetWidth;
        const gap = 24;
        const apv = getArticlesPerView();
        slideWidthRef.current = (trackWidth - (apv - 1) * gap) / apv;
      }
    };

    const handleResize = () => {
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(() => {
        const newValue = getArticlesPerView();
        setArticlesPerView((prev) => (newValue !== prev ? newValue : prev));
        updateSize();
      }, 150);
    };

    updateSize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
    };
  }, []);

  // ─────────────────────────────────────────────
  // SCROLL → INDEX (user scroll uniquement)
  // ─────────────────────────────────────────────
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      if (isProgrammaticScrollRef.current) return;

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        const scrollLeft = track.scrollLeft;
        const gap = 24;
        const slideTotalWidth = slideWidthRef.current + gap;
        if (slideTotalWidth <= 0) return;

        const newIndex = Math.round(scrollLeft / slideTotalWidth);
        if (
          newIndex >= 0 &&
          newIndex <= maxIndex &&
          newIndex !== currentIndexRef.current
        ) {
          setCurrentIndex(newIndex);
        }
      }, 150);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, [maxIndex]);

  // ─────────────────────────────────────────────
  // NAVIGATION (scroll programmatique animé)
  // ─────────────────────────────────────────────
  const scrollToIndex = useCallback(
    (index: number) => {
      if (isAnimating || index < 0 || index > maxIndex) return;
      if (index === currentIndexRef.current) return;

      const track = trackRef.current;
      if (!track) return;

      const gap = 24;
      const slideTotalWidth = slideWidthRef.current + gap;
      const targetScroll = index * slideTotalWidth;
      const startScroll = track.scrollLeft;
      const distance = targetScroll - startScroll;
      const duration = 200;
      let startTime: number | null = null;

      setIsAnimating(true);
      setCurrentIndex(index);
      isProgrammaticScrollRef.current = true;

      const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutQuart(progress);
        track.scrollLeft = startScroll + distance * eased;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          setTimeout(() => {
            isProgrammaticScrollRef.current = false;
            setIsAnimating(false);
          }, 50);
        }
      };

      requestAnimationFrame(animateScroll);
    },
    [maxIndex, isAnimating]
  );

  const handleFilterChange = useCallback(
    (entity: string, category: string) => {
      setSelectedEntity(entity);
      setSelectedCategory(category);
    },
    []
  );

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0 && !isAnimating) {
      scrollToIndex(currentIndex - 1);
    }
  }, [currentIndex, isAnimating, scrollToIndex]);

  const goToNext = useCallback(() => {
    if (currentIndex < maxIndex && !isAnimating) {
      scrollToIndex(currentIndex + 1);
    }
  }, [currentIndex, maxIndex, isAnimating, scrollToIndex]);

  // ─────────────────────────────────────────────
  // CLAVIER
  // ─────────────────────────────────────────────
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  // ─────────────────────────────────────────────
  // TOUCH
  // ─────────────────────────────────────────────
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let startX = 0;
    let startY = 0;
    let isSwiping = false;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isSwiping = false;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!startX || !startY) return;
      const deltaX = e.touches[0].clientX - startX;
      const deltaY = e.touches[0].clientY - startY;
      if (Math.abs(deltaX) > 20 && Math.abs(deltaX) > Math.abs(deltaY)) {
        isSwiping = true;
        e.preventDefault();
      }
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (!isSwiping) return;
      const deltaX = e.changedTouches[0].clientX - startX;
      if (deltaX < -50) goToNext();
      else if (deltaX > 50) goToPrevious();
      startX = 0;
      startY = 0;
      isSwiping = false;
    };

    track.addEventListener("touchstart", handleTouchStart, { passive: true });
    track.addEventListener("touchmove", handleTouchMove, { passive: false });
    track.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      track.removeEventListener("touchstart", handleTouchStart);
      track.removeEventListener("touchmove", handleTouchMove);
      track.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goToNext, goToPrevious]);

  // ─────────────────────────────────────────────
  // LECTURE URL : navigation externe (lien, back/forward)
  // ─────────────────────────────────────────────
  useEffect(() => {
    if (allArticles.length === 0) return;

    const pageParam = searchParams.get("page");

    // 🆕 Clic sur "Actualités" ou back vers /actualites (sans ?page) → reset
    if (!pageParam) {
      if (currentIndexRef.current !== 0) {
        skipUrlWriteRef.current = true;
        setCurrentIndex(0);
        setIsAnimating(false);
        if (trackRef.current) {
          trackRef.current.scrollTo({ left: 0, behavior: "auto" });
        }
      }
      return;
    }

    // URL avec ?page=X → synchroniser l'index
    const pageNum = parseInt(pageParam, 10);
    if (isNaN(pageNum) || pageNum < 1) return;

    const targetIndex = Math.min(pageNum - 1, maxIndexRef.current);
    if (targetIndex !== currentIndexRef.current) {
      skipUrlWriteRef.current = true;
      setCurrentIndex(targetIndex);
      setIsAnimating(false);
      if (trackRef.current) {
        const gap = 24;
        const slideTotalWidth = slideWidthRef.current + gap;
        if (slideTotalWidth > 0) {
          trackRef.current.scrollTo({
            left: targetIndex * slideTotalWidth,
            behavior: "auto",
          });
        }
      }
    }
  }, [searchParams, allArticles.length]);

  // ─────────────────────────────────────────────
  // ÉCRITURE URL : interaction utilisateur
  // ─────────────────────────────────────────────
  useEffect(() => {
    if (allArticles.length === 0) return;

    // Si on vient de lire l'URL, ne pas réécrire
    if (skipUrlWriteRef.current) {
      skipUrlWriteRef.current = false;
      return;
    }

    const page = currentIndex + 1;
    const currentPageStr = searchParams.get("page");
    const currentPage = currentPageStr ? parseInt(currentPageStr, 10) : 1;

    if (page === currentPage) return;

    const newUrl = page === 1 ? pathname : `${pathname}?page=${page}`;
    router.replace(newUrl, { scroll: false });
  }, [currentIndex, allArticles.length, pathname, router, searchParams]);

  // ─────────────────────────────────────────────
  // DOTS
  // ─────────────────────────────────────────────
  const visibleDots = useMemo(() => {
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
  }, [currentIndex, maxIndex]);

  // ─────────────────────────────────────────────
  // RENDU (virtualisé)
  // ─────────────────────────────────────────────
  const renderArticles = useMemo(() => {
    const buffer = 1;
    const start = Math.max(0, currentIndex - buffer);
    const end = Math.min(
      filteredArticles.length,
      currentIndex + articlesPerView + buffer
    );

    const minWidthStyle =
      slideWidthRef.current > 0
        ? slideWidthRef.current
        : `calc((100% - ${(articlesPerView - 1) * 24}px) / ${articlesPerView})`;

    return filteredArticles.map((article, idx) => {
      const isVisible = idx >= start && idx < end;
      return (
        <div
          key={article.id}
          className="actualites-carousel__slide"
          style={{
            visibility: isVisible ? "visible" : "hidden",
            minWidth: minWidthStyle,
          }}
        >
          {isVisible ? (
            <MemoizedArticleCard {...article} />
          ) : (
            <div style={{ height: "100%" }} />
          )}
        </div>
      );
    });
  }, [filteredArticles, currentIndex, articlesPerView]);

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
            <div className="actualites-filters__group actualites-filters__group--entity">
              <span className="actualites-filters__label">
                <Filter size={16} />
                Entité
              </span>
              <div className="actualites-filters__options">
                {entities.map((entity) => (
                  <button
                    key={entity}
                    className={`actualites-filters__option ${
                      selectedEntity === entity
                        ? "actualites-filters__option--active"
                        : ""
                    }`}
                    onClick={() => handleFilterChange(entity, selectedCategory)}
                    aria-label={`Filtrer par entité ${entity}`}
                  >
                    {ENTITY_ICONS[entity]}
                    {entity}
                  </button>
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
                  <button
                    key={category}
                    className={`actualites-filters__option ${
                      selectedCategory === category
                        ? "actualites-filters__option--active"
                        : ""
                    }`}
                    onClick={() => handleFilterChange(selectedEntity, category)}
                    aria-label={`Filtrer par thématique ${category}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="actualites-filters__bottom">
            <span className="actualites-filters__count">
              {totalArticles} article{totalArticles > 1 ? "s" : ""}
            </span>
            {(selectedEntity !== "Groupe" || selectedCategory !== "Toutes") && (
              <button
                className="actualites-filters__reset"
                onClick={() => handleFilterChange("Groupe", "Toutes")}
                aria-label="Réinitialiser les filtres"
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
              <div className="actualites-carousel__dots">
                {visibleDots[0] > 0 && (
                  <button
                    className="actualites-carousel__dot-arrow"
                    onClick={() => scrollToIndex(visibleDots[0] - 1)}
                    aria-label="Voir les dots précédents"
                    disabled={isAnimating}
                  >
                    <ChevronLeft size={14} />
                  </button>
                )}

                {visibleDots.map((dotIndex) => (
                  <button
                    key={dotIndex}
                    className={`actualites-carousel__dot ${
                      dotIndex === currentIndex
                        ? "actualites-carousel__dot--active"
                        : ""
                    }`}
                    onClick={() => scrollToIndex(dotIndex)}
                    aria-label={`Aller au groupe d'articles ${dotIndex + 1}`}
                    disabled={isAnimating}
                  />
                ))}

                {visibleDots[visibleDots.length - 1] < maxIndex && (
                  <button
                    className="actualites-carousel__dot-arrow"
                    onClick={() =>
                      scrollToIndex(visibleDots[visibleDots.length - 1] + 1)
                    }
                    aria-label="Voir les dots suivants"
                    disabled={isAnimating}
                  >
                    <ChevronRight size={14} />
                  </button>
                )}
              </div>

              <div className="actualites-carousel-wrapper">
                <Link
                  href="#actualites-carousel"
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    goToPrevious();
                  }}
                  className={`actualites-carousel__btn actualites-carousel__btn--prev ${
                    currentIndex === 0 || isAnimating
                      ? "actualites-carousel__btn--disabled"
                      : ""
                  }`}
                  aria-label="Articles précédents"
                  aria-disabled={currentIndex === 0 || isAnimating}
                >
                  <ChevronLeft size={28} />
                </Link>

                <div className="actualites-carousel__track" ref={trackRef}>
                  <div className="actualites-carousel__slides">
                    {renderArticles}
                  </div>
                </div>

                <Link
                  href="#actualites-carousel"
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    goToNext();
                  }}
                  className={`actualites-carousel__btn actualites-carousel__btn--next ${
                    currentIndex >= maxIndex || isAnimating
                      ? "actualites-carousel__btn--disabled"
                      : ""
                  }`}
                  aria-label="Articles suivants"
                  aria-disabled={currentIndex >= maxIndex || isAnimating}
                >
                  <ChevronRight size={28} />
                </Link>
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
    </main>
  );
}