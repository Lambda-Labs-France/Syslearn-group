import { Suspense } from "react";
import type { Metadata } from "next";
import ActualitesClient from "./ActualitesClient";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const page = params?.page;

  if (page && page !== "1") {
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
    alternates: {
      canonical: "/actualites",
    },
  };
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="actualites-empty">
          <p>Chargement des articles...</p>
        </div>
      }
    >
      <ActualitesClient />
    </Suspense>
  );
}