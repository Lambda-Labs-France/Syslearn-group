// actualites/data/articles.ts
import { pointerlabArticles } from './pointerlab-articles';
import { stackjobsArticles } from './stackjobs-articles';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  entity: 'Syslearn' | 'PointerLab' | 'StackJobs' | 'Groupe';
  category: string;  
  originalLink: string;
}

// ✅ Fusionner et trier par date (du plus récent au plus ancien)
export const articles: Article[] = [
  ...pointerlabArticles,
  ...stackjobsArticles,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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

export function getFilteredArticles(entity: string, category: string) {
  let filtered = articles;
  
  if (entity !== 'Groupe') {
    filtered = filtered.filter((a) => a.entity === entity);
  }
  
  if (category !== 'Toutes') {
    filtered = filtered.filter((a) => a.category === category);
  }
  
  return filtered;
}

export const getCategories = (): string[] => {
  const categories = articles.map(a => a.category);
  return ['Toutes', ...new Set(categories)];
};

export const entities = ['Groupe', 'Syslearn', 'PointerLab', 'StackJobs'];