import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { getArticleBySlug, getArticles } from "../data/articles";
import "../../../styles/actualites/slug.css";

export async function generateStaticParams() {
  const articles = getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: "Article non trouvé",
    };
  }
  return {
    title: article.seoTitle,
    description: article.metaDescription,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  return (
    <main className="article-page">
      <article className="article">
        <div className="article__header">
          <div className="article__header-inner">
            <Link href="/actualites" className="article__back">
              <ArrowLeft size={18} />
              Retour aux actualités
            </Link>
            <div className="article__meta">
              <span className="article__category">{article.category}</span>
              <span className="article__entity">{article.entity}</span>
            </div>
            <h1 className="article__title">{article.title}</h1>
            <div className="article__info">
              <span className="article__date">
                <Calendar size={16} />
                {formatDate(article.date)}
              </span>
              <span className="article__readtime">
                <Clock size={16} />
                {article.readTime} min de lecture
              </span>
            </div>
          </div>
        </div>

        <div className="article__image">
          <img src={article.image} alt={article.title} />
        </div>

        <div className="article__body">
          <div className="article__content">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}