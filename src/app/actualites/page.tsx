import type { Metadata } from "next";
import { redirect } from "next/navigation";
import {
  fetchArticlesPage,
  fetchArticleCategories,
  parseEntity,
  parsePage,
  buildActualitesHref,
  ARTICLES_PAGE_SIZE,
} from "./data/articles";
import ActualitesView from "./ActualitesView";

type SearchParams = Promise<{
  page?: string;
  entity?: string;
  category?: string;
}>;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const params = await searchParams;
  const hasQuery =
    Boolean(params.page) || Boolean(params.entity) || Boolean(params.category);

  if (hasQuery) {
    return {
      title: "Actualités",
      description:
        "Retrouvez toutes les actualités de Syslearn Group : lancements, bilans, portraits et secteurs.",
      robots: {
        index: false,
        follow: true,
      },
      alternates: {
        canonical: "/actualites",
      },
    };
  }

  return {
    title: "Actualités",
    description:
      "Retrouvez toutes les actualités de Syslearn Group : lancements, bilans, portraits et secteurs. Découvrez l'écosystème conseil informatique, ESN C++/Qt et plateforme de recrutement tech.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "/actualites",
    },
  };
}

export const revalidate = 300;

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const page = parsePage(params.page);
  const entity = parseEntity(params.entity);
  const category = params.category?.trim() || "Toutes";

  const [{ articles, pageCount, total }, categories] = await Promise.all([
    fetchArticlesPage({
      page,
      pageSize: ARTICLES_PAGE_SIZE,
      entity,
      category,
    }),
    fetchArticleCategories(),
  ]);

  if (pageCount > 0 && page > pageCount) {
    redirect(
      buildActualitesHref({
        page: pageCount,
        entity,
        category,
      })
    );
  }

  return (
    <ActualitesView
      articles={articles}
      categories={categories}
      selectedEntity={entity}
      selectedCategory={category}
      page={page}
      pageCount={pageCount}
      total={total}
    />
  );
}
