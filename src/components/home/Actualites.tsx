import Image from "next/image";
import Link from "next/link";
import { getArticles } from "../../app/actualites/data/articles";
import { entityLinkRel } from "../../lib/entityLinks";
import "../../styles/accueil/actualites.css";

export default async function Actualites() {
  const articlesToShow = await getArticles();

  return (
    <section className="actualites">
      <div className="actualites__inner">
        <h2 className="actualites__title">Actualités</h2>

        {articlesToShow.length === 0 ? (
          <p style={{ textAlign: "center", color: "#6b7280" }}>
            Aucun article disponible.
          </p>
        ) : (
          <div className="actualites__grid">
            {articlesToShow.map((article) => (
              <Link
                key={article.id}
                href={article.originalLink}
                target="_blank"
                rel={entityLinkRel(article.originalLink)}
                className="actualites__card"
                data-source={article.entity}
              >
                <div className="actualites__card-image">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="actualites__card-img"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="actualites__card-category">
                    {article.category}
                  </span>
                  <span className="actualites__card-source">
                    {article.entity}
                  </span>
                </div>
                <div className="actualites__card-body">
                  <span className="actualites__card-date">
                    {new Date(article.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <h3 className="actualites__card-title">{article.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="actualites__footer">
          <Link href="/actualites" className="actualites__btn">
            Voir toutes les actualités →
          </Link>
        </div>
      </div>
    </section>
  );
}
