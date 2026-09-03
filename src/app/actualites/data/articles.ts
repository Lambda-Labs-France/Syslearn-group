import qs from "qs";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  entity: "Syslearn" | "PointerLab" | "StackJobs" | "Groupe";
  category: string;
  originalLink: string;
}

export interface ArticlesPage {
  articles: Article[];
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export const ARTICLES_PAGE_SIZE = 3;

export const upcomingArticles = [
  {
    title: "C++ vs Qt : quelles différences et pourquoi les deux comptent",
    description:
      "Cible les recherches techniques, positionne PointerLab comme référence",
  },
  {
    title: "Comment fonctionne le matching IA de StackJobs",
    description: "Contenu produit à forte valeur SEO sur le recrutement tech",
  },
  {
    title:
      "Conseil informatique dans l'énergie : 5 défis spécifiques au secteur",
    description: "Renforce la page secteur Énergie",
  },
  {
    title: "Portage salarial vs régie : quel format choisir en ESN",
    description: "Cible une recherche récurrente des consultants IT",
  },
];

export const entities = [
  "Groupe",
  "Syslearn",
  "PointerLab",
  "StackJobs",
] as const;
export type EntityFilter = (typeof entities)[number];

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL ||
  process.env.STRAPI_API_URL ||
  "https://strapi.pointerlab.fr";

const REVALIDATE_SECONDS = 300;

const FETCH_OPTIONS: RequestInit & { next: { revalidate: number } } = {
  headers: { "Content-Type": "application/json" },
  next: { revalidate: REVALIDATE_SECONDS },
};

type StrapiMedia = {
  url?: string;
  data?: { attributes?: { url?: string } };
};

type StrapiCategory = {
  name?: string;
  data?: { attributes?: { name?: string } };
};

type StrapiArticle = {
  id?: number | string;
  documentId?: string;
  title?: string;
  summary?: string;
  slug?: string;
  publishDate?: string;
  publishedAt?: string;
  WebSite_Name?: string;
  website_name?: string;
  originalLink?: string;
  image?: string | StrapiMedia | null;
  category?: string | StrapiCategory | null;
};

function normalizeEntity(siteName: string): Article["entity"] {
  const clean = (siteName || "").toString().trim().toLowerCase();
  if (clean === "pointerlab" || clean === "pointer lab") return "PointerLab";
  if (clean === "stackjobs" || clean === "stack jobs") return "StackJobs";
  if (clean === "syslearn" || clean === "sys learn") return "Syslearn";
  return "Groupe";
}

function getDomain(entity: Article["entity"]): string {
  const domains: Record<Article["entity"], string> = {
    PointerLab: "https://www.pointerlab.fr",
    StackJobs: "https://www.stackjobs.com",
    Syslearn: "https://www.syslearn.fr",
    Groupe: "https://www.syslearn-group.com",
  };
  return domains[entity];
}

function getImageUrl(item: StrapiArticle): string {
  const image = item.image;
  if (!image) return "/images/default-article.jpg";

  if (typeof image === "string") {
    return image.length > 0 ? image : "/images/default-article.jpg";
  }

  const url = image.url || image.data?.attributes?.url;
  if (!url) return "/images/default-article.jpg";
  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
}

function getCategory(item: StrapiArticle): string {
  const category = item.category;
  if (!category) return "Article";
  if (typeof category === "string") return category;
  return category.name || category.data?.attributes?.name || "Article";
}

function mapArticle(item: StrapiArticle): Article {
  const siteName = item.WebSite_Name || item.website_name || "";
  const entity = normalizeEntity(siteName);
  const slug = item.slug || item.id?.toString() || "";

  return {
    id: item.id?.toString() || item.documentId || slug,
    title: item.title || "Sans titre",
    excerpt: item.summary || "",
    image: getImageUrl(item),
    date: item.publishDate || item.publishedAt || new Date().toISOString(),
    entity,
    category: getCategory(item),
    originalLink: item.originalLink || `${getDomain(entity)}/blog/${slug}`,
  };
}

function buildStrapiFilters(entity?: string, category?: string) {
  const filters: Record<string, unknown> = {};

  if (category && category !== "Toutes") {
    filters.category = { name: { $eq: category } };
    return filters;
  }

  if (entity && entity !== "Groupe") {
    filters.WebSite_Name = { $eqi: entity };
  }

  return filters;
}

function buildArticlesUrl(
  page: number,
  pageSize: number,
  entity?: string,
  category?: string,
) {
  const query = qs.stringify(
    {
      fields: [
        "title",
        "summary",
        "slug",
        "publishDate",
        "publishedAt",
        "WebSite_Name",
      ],
      populate: {
        image: { fields: ["url"] },
        category: { fields: ["name"] },
      },
      sort: ["publishDate:desc"],
      pagination: { page, pageSize },
      filters: buildStrapiFilters(entity, category),
    },
    { encodeValuesOnly: true },
  );

  return `${STRAPI_URL}/api/articles?${query}`;
}

const EMPTY_PAGE: ArticlesPage = {
  articles: [],
  page: 1,
  pageSize: ARTICLES_PAGE_SIZE,
  pageCount: 0,
  total: 0,
};

export async function fetchArticlesPage({
  page = 1,
  pageSize = ARTICLES_PAGE_SIZE,
  entity,
  category,
}: {
  page?: number;
  pageSize?: number;
  entity?: string;
  category?: string;
} = {}): Promise<ArticlesPage> {
  const safePage = Math.max(1, page);
  const safeSize = Math.max(1, pageSize);

  try {
    const res = await fetch(
      buildArticlesUrl(safePage, safeSize, entity, category),
      FETCH_OPTIONS,
    );

    if (!res.ok) {
      throw new Error(`Strapi HTTP ${res.status}`);
    }

    const json = await res.json();
    const articles: Article[] = (json.data || []).map(mapArticle);
    const pagination = json.meta?.pagination;

    return {
      articles,
      page: pagination?.page || safePage,
      pageSize: pagination?.pageSize || safeSize,
      pageCount: pagination?.pageCount || 0,
      total: pagination?.total || articles.length,
    };
  } catch (error) {
    console.error("Erreur fetchArticlesPage:", error);
    return { ...EMPTY_PAGE, page: safePage, pageSize: safeSize };
  }
}

export async function fetchArticleCategories(): Promise<string[]> {
  try {
    const query = qs.stringify(
      {
        fields: ["name"],
        pagination: { pageSize: 100 },
        sort: ["name:asc"],
      },
      { encodeValuesOnly: true },
    );

    const res = await fetch(
      `${STRAPI_URL}/api/categories?${query}`,
      FETCH_OPTIONS,
    );
    if (!res.ok) throw new Error(`Strapi HTTP ${res.status}`);

    const json = await res.json();
    const names = (json.data || [])
      .map((item: { name?: string }) => item.name)
      .filter(
        (name: unknown): name is string =>
          typeof name === "string" && name.trim().length > 0,
      );

    return ["Toutes", ...Array.from(new Set<string>(names))];
  } catch (error) {
    console.error("Erreur fetchArticleCategories:", error);
    return ["Toutes"];
  }
}

export async function getArticles(): Promise<Article[]> {
  const latest = await Promise.all([
    fetchArticlesPage({ page: 1, pageSize: 1, entity: "PointerLab" }),
    fetchArticlesPage({ page: 1, pageSize: 1, entity: "StackJobs" }),
    fetchArticlesPage({ page: 1, pageSize: 1, entity: "Syslearn" }),
  ]);

  return latest.flatMap((result) => result.articles);
}

export function parseEntity(value?: string): EntityFilter {
  return entities.includes(value as EntityFilter)
    ? (value as EntityFilter)
    : "Groupe";
}

export function parsePage(value?: string): number {
  const page = Number.parseInt(value || "1", 10);
  return Number.isFinite(page) && page > 0 ? page : 1;
}

export function buildActualitesHref({
  page = 1,
  entity = "Groupe",
  category = "Toutes",
}: {
  page?: number;
  entity?: string;
  category?: string;
} = {}): string {
  const params = new URLSearchParams();
  if (entity && entity !== "Groupe") params.set("entity", entity);
  if (category && category !== "Toutes") params.set("category", category);
  if (page > 1) params.set("page", String(page));
  const query = params.toString();
  return query ? `/actualites?${query}` : "/actualites";
}
