/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import type { StackJob, StackJobsPagination } from "../../lib/stackjobs";

type Props = {
  initialJobs: StackJob[];
  initialPagination: StackJobsPagination;
  pageSize: number;
};

function getJobUrl(job: StackJob) {
  const tracking =
    "utm_source=syslearn-group&utm_medium=referral&utm_campaign=stackjobs-section";

  if (job.slug) {
    return `https://www.stackjobs.com/jobs/${job.slug}?${tracking}`;
  }

  if (job.jobLink?.includes("stackjobs.com")) {
    return `${job.jobLink}${job.jobLink.includes("?") ? "&" : "?"}${tracking}`;
  }

  return `https://www.stackjobs.com/?${tracking}`;
}

function getContractLabels(job: StackJob) {
  const values = [
    ...(Array.isArray(job.contractType)
      ? job.contractType
      : [job.contractType]),
    ...(job.contractOption ?? []),
    job.employmentType,
  ];

  return Array.from(
    new Set(
      values
        .filter((value): value is string => typeof value === "string")
        .flatMap(
          (value) =>
            value.match(
              /alternance|freelance|stage|interim|cdi|cdd|portage/gi,
            ) ?? [value],
        )
        .map((value) => value.trim())
        .filter(Boolean),
    ),
  ).map((value) => {
    const lowerValue = value.toLowerCase();
    return lowerValue === "cdi" || lowerValue === "cdd"
      ? lowerValue.toUpperCase()
      : `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`;
  });
}

export default function StackJobsSectionClient({
  initialJobs,
  initialPagination,
  pageSize,
}: Props) {
  const [jobs, setJobs] = useState(initialJobs);
  const [pagination, setPagination] = useState(initialPagination);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function changePage(page: number) {
    if (
      isLoading ||
      page < 1 ||
      page > pagination.totalPages ||
      page === pagination.currentPage
    ) {
      return;
    }

    setIsLoading(true);
    setHasError(false);

    try {
      const response = await fetch(
        `/api/stackjobs?page=${page}&limit=${pageSize}`,
      );
      if (!response.ok) throw new Error("Unable to load StackJobs offers");

      const payload = (await response.json()) as {
        jobs: StackJob[];
        pagination: StackJobsPagination;
      };
      setJobs(Array.isArray(payload.jobs) ? payload.jobs : []);
      setPagination(payload.pagination);
      document
        .getElementById("stackjobs-title")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="stackjobs__results" aria-busy={isLoading}>
      {jobs.length ? (
        <div className="stackjobs__grid">
          {jobs.map((job) => {
            const labels = getContractLabels(job);

            return (
              <a
                key={job._id}
                href={getJobUrl(job)}
                target="_blank"
                rel="noopener noreferrer dofollow"
                className="stackjobs-card"
              >
                <div className="stackjobs-card__banner">
                  {job.company?.banner ? (
                    <img
                      src={job.company.banner}
                      alt=""
                      loading="lazy"
                      className="stackjobs-card__banner-image"
                    />
                  ) : null}
                </div>
                <div className="stackjobs-card__body">
                  <div className="stackjobs-card__company">
                    <span className="stackjobs-card__logo">
                      {job.company?.logo ? (
                        <img src={job.company.logo} alt="" loading="lazy" />
                      ) : null}
                    </span>
                    <span>{job.company?.name || "Entreprise partenaire"}</span>
                  </div>
                  <h3>{job.title}</h3>
                  <p className="stackjobs-card__location">
                    {[job.city, job.location].filter(Boolean).join(" · ") ||
                      "Lieu non précisé"}
                  </p>
                  <div className="stackjobs-card__tags">
                    {(labels.length ? labels : ["Contrat non précisé"]).map(
                      (label) => (
                        <span key={`${job._id}-${label}`}>{label}</span>
                      ),
                    )}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      ) : (
        <p className="stackjobs__empty">
          Aucune offre StackJobs disponible pour le moment.
        </p>
      )}

      {hasError ? (
        <p className="stackjobs__error" role="alert">
          Les offres n’ont pas pu être chargées. Veuillez réessayer.
        </p>
      ) : null}

      {pagination.totalPages > 1 ? (
        <nav
          className="stackjobs__pagination"
          aria-label="Pagination des offres"
        >
          <button
            type="button"
            onClick={() => changePage(pagination.currentPage - 1)}
            disabled={isLoading || !pagination.hasPrevPage}
          >
            Précédent
          </button>
          <span>
            Page {pagination.currentPage} sur {pagination.totalPages}
          </span>
          <button
            type="button"
            onClick={() => changePage(pagination.currentPage + 1)}
            disabled={isLoading || !pagination.hasNextPage}
          >
            Suivant
          </button>
        </nav>
      ) : null}
    </div>
  );
}
