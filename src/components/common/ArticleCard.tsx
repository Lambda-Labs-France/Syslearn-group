import Image from "next/image";
import { Calendar, ExternalLink } from "lucide-react";
import { entityLinkRel } from "../../lib/entityLinks";
import "../../styles/common/article-card.css";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  entity: string;
  category: string;
  originalLink: string;
  priority?: boolean;
}

const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function formatDate(dateString: string) {
  const parsed = new Date(dateString);
  if (Number.isNaN(parsed.getTime())) return dateString;
  return dateFormatter.format(parsed);
}

export default function ArticleCard({
  title,
  excerpt,
  image,
  date,
  entity,
  category,
  originalLink,
  priority = false,
}: ArticleCardProps) {
  return (
    <a
      href={originalLink}
      target="_blank"
      rel={entityLinkRel(originalLink)}
      className="article-card"
      data-entity={entity}
    >
      <div className="article-card__image">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          unoptimized={image.endsWith(".svg")}
          style={{ objectFit: "cover" }}
        />
        <span className="article-card__entity">{entity}</span>
        <span className="article-card__external-badge">
          <ExternalLink size={12} />
        </span>
      </div>
      <div className="article-card__body">
        <div className="article-card__meta">
          <span className="article-card__category">{category}</span>
          <span className="article-card__date">
            <Calendar size={14} />
            {formatDate(date)}
          </span>
        </div>
        <h3 className="article-card__title">{title}</h3>
        <p className="article-card__excerpt">{excerpt}</p>
        <span className="article-card__read-link">Lire l'article →</span>
      </div>
    </a>
  );
}
