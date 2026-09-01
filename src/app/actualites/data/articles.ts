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
    title: "Conseil informatique dans l'énergie : 5 défis spécifiques au secteur",
    description: 'Renforce la page secteur Énergie',
  },
  {
    title: 'Portage salarial vs régie : quel format choisir en ESN',
    description: 'Cible une recherche récurrente des consultants IT',
  },
];

export const entities = ['Groupe', 'Syslearn', 'PointerLab', 'StackJobs'];

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL ||
  process.env.STRAPI_API_URL ||
  'https://strapi.pointerlab.fr';

const REVALIDATE_SECONDS = 300;

function normalizeEntity(siteName: string): Article['entity'] {
  const clean = (siteName || '').toString().trim().toLowerCase();
  if (clean === 'pointerlab' || clean === 'pointer lab') return 'PointerLab';
  if (clean === 'stackjobs' || clean === 'stack jobs') return 'StackJobs';
  if (clean === 'syslearn' || clean === 'sys learn') return 'Syslearn';
  return 'Groupe';
}

function getDomain(siteName: string): string {
  const entity = normalizeEntity(siteName);
  const domains: Record<string, string> = {
    PointerLab: 'https://pointerlab.fr',
    StackJobs: 'https://stackjobs.com',
    Syslearn: 'https://syslearn.fr',
  };
  return domains[entity] || 'https://pointerlab.fr';
}

function getImageUrl(item: any): string {
  if (item.image?.url) {
    return item.image.url.startsWith('http')
      ? item.image.url
      : `${STRAPI_URL}${item.image.url}`;
  }
  if (item.image?.data?.attributes?.url) {
    const url = item.image.data.attributes.url;
    return url.startsWith('http') ? url : `${STRAPI_URL}${url}`;
  }
  if (typeof item.image === 'string' && item.image.length > 0) {
    return item.image;
  }
  return '/images/default-article.jpg';
}

function getCategory(item: any): string {
  if (item.category?.name) return item.category.name;
  if (item.category?.data?.attributes?.name) return item.category.data.attributes.name;
  if (typeof item.category === 'string') return item.category;
  return 'Article';
}


function buildArticlesUrl(page: number, pageSize: number): string {
  const params = new URLSearchParams();

  ['title', 'summary', 'slug', 'publishDate', 'publishedAt', 'WebSite_Name'].forEach((f) =>
    params.append('fields', f)
  );

  params.append('populate[image][fields][0]', 'url');
  params.append('populate[category][fields][0]', 'name');

  params.append('sort', 'publishDate:desc');
  params.append('pagination[pageSize]', String(pageSize));
  params.append('pagination[page]', String(page));

  return `${STRAPI_URL}/api/articles?${params.toString()}`;
}

async function fetchAllArticles(): Promise<any[]> {
  const PAGE_SIZE = 100;

  const firstRes = await fetch(buildArticlesUrl(1, PAGE_SIZE), {
    headers: { 'Content-Type': 'application/json' },
    
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!firstRes.ok) {
    throw new Error(`Strapi HTTP ${firstRes.status}`);
  }

  const firstJson = await firstRes.json();
  const firstData = firstJson.data || [];
  const pageCount = firstJson.meta?.pagination?.pageCount || 1;

  if (pageCount <= 1) return firstData;

  const remaining = Array.from({ length: pageCount - 1 }, (_, i) => {
    const page = i + 2;
    return fetch(buildArticlesUrl(page, PAGE_SIZE), {
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: REVALIDATE_SECONDS },
    })
      .then((r) => r.json())
      .then((j) => j.data || []);
  });

  const rest = await Promise.all(remaining);
  return [...firstData, ...rest.flat()];
}

export async function fetchArticles(): Promise<Article[]> {
  try {
    const raw = await fetchAllArticles();

    const mapped = raw.map((item: any): Article => {
      const siteName = item.WebSite_Name || item.website_name || '';
      const slug = item.slug || item.id?.toString() || '';
      const domain = getDomain(siteName);

      return {
        id: item.id?.toString() || item.documentId || Math.random().toString(36),
        title: item.title || 'Sans titre',
        excerpt: item.summary || '',
        image: getImageUrl(item),
        date: item.publishDate || item.publishedAt || new Date().toISOString(),
        entity: normalizeEntity(siteName),
        category: getCategory(item),
        originalLink: item.originalLink || `${domain}/blog/${slug}`,
      };
    });

    return mapped.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error('Erreur fetchArticles:', error);
    return [];
  }
}

export async function getArticles(): Promise<Article[]> {
  return fetchArticles();
}

export function getFilteredArticles(
  articles: Article[],
  entity: string,
  category: string
): Article[] {
  let filtered = [...articles];

  if (category !== 'Toutes') {
    filtered = filtered.filter((a) => a.category === category);
  } else {
    if (entity !== 'Groupe') {
      filtered = filtered.filter((a) => a.entity === entity);
    }
  }

  return filtered.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export const getCategories = (articles: Article[]): string[] => {
  if (!articles.length) return ['Toutes'];
  const categories = articles.map((a) => a.category).filter(Boolean);
  return ['Toutes', ...Array.from(new Set(categories))];
};