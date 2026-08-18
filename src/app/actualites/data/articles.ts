// actualites/data/articles.ts
import { pointerlabArticles } from './pointerlab-articles';

export interface Article {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  entity: 'Syslearn' | 'PointerLab' | 'StackJobs' | 'Groupe';
  category: 'Lancement' | 'Bilan' | 'Portrait' | 'Secteur' | 'Vie du groupe' | 'IA' | 'C++' | 'Qt';
  readTime: number;
  tags: string[];
  source: 'Syslearn' | 'PointerLab' | 'StackJobs' | 'Groupe';
  originalLink: string;
}

// ✅ Fusion de tous les articles
export const articles: Article[] = [
  ...pointerlabArticles,
];

export const upcomingArticles = [
  {
    title: 'C++ vs Qt : quelles différences et pourquoi les deux comptent',
    description: 'Cible les recherches techniques, positionne PointerLab comme référence',
  },
  {
    title: 'Comment fonctionne le matching IA de StackJobs',
    description: 'Contenu produit à forte valeur SEO sur le recrutement tech',
  },
  {
    title: 'Conseil informatique dans l\'énergie : 5 défis spécifiques au secteur',
    description: 'Renforce la page secteur Énergie',
  },
  {
    title: 'Portage salarial vs régie : quel format choisir en ESN',
    description: 'Cible une recherche récurrente des consultants IT',
  },
];

export function getArticles() {
  return articles;
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getFilteredArticles(entity: string, category: string) {
  let filtered = articles;
  if (entity !== 'Groupe') {
    filtered = filtered.filter((a) => a.entity === entity);
  }
  if (category !== 'Vue du groupe') {
    filtered = filtered.filter((a) => a.category === category);
  }
  return filtered;
}

export const entities = ['Groupe', 'Syslearn', 'PointerLab', 'StackJobs'];
export const categories = ['Vue du groupe', 'Lancement', 'Bilan', 'Portrait', 'Secteur', 'IA', 'C++', 'Qt'];