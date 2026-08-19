import { Calendar, ExternalLink } from "lucide-react";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  entity: string;
  category: string;  
  originalLink: string;
}

const ENTITY_COLORS: Record<string, string> = {
  'Syslearn': '#059669',
  'PointerLab': '#7c3aed',
  'StackJobs': '#2563eb',
  'Groupe': '#0f172a',
};



export default function ArticleCard({
  title,
  excerpt,
  image,
  date,
  entity,
  category,  
  originalLink,
}: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  return (
    <a
      href={originalLink}
      target="_blank"
      rel="dofollow noopener noreferrer"
      className="article-card"
    >
      <div className="article-card__image">
        <img src={image} alt={title} />
        <span 
          className="article-card__entity"
          style={{ background: ENTITY_COLORS[entity] || '#0f172a' }}
        >
          {entity}
        </span>
        <span className="article-card__external-badge">
          <ExternalLink size={12} />
        </span>
      </div>
      <div className="article-card__body">
        <div className="article-card__meta">
          <span 
            className="article-card__category"
           
          >
            {category}
          </span>
          <span className="article-card__date">
            <Calendar size={14} />
            {formatDate(date)}
          </span>
        </div>
        <h3 className="article-card__title">{title}</h3>
        <p className="article-card__excerpt">{excerpt}</p>
        <span className="article-card__read-link">
          Lire l'article →
        </span>
      </div>
    </a>
  );
}