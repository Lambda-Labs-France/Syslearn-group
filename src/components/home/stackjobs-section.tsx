import Link from "next/link";
import { getStackJobs } from "../../lib/stackjobs";
import StackJobsSectionClient from "./stackjobs-section-client";
import "../../styles/accueil/stackjobs.css";

export default async function StackJobsSection() {
  const pageSize = 6;
  const { jobs, pagination } = await getStackJobs(pageSize, 1);

  return (
    <section className="stackjobs" aria-labelledby="stackjobs-title">
      <div className="stackjobs__inner">
        <div className="stackjobs__heading">
          <span className="stackjobs__eyebrow">Opportunités</span>
          <h2 id="stackjobs-title" className="stackjobs__title">
            Les dernières offres StackJobs
          </h2>
          <p className="stackjobs__description">
            Retrouvez les opportunités tech de notre écosystème sur{" "}
            <Link
              href="https://www.stackjobs.com/?utm_source=syslearn-group&utm_medium=referral&utm_campaign=stackjobs-section"
              target="_blank"
              rel="noopener noreferrer dofollow"
            >
              StackJobs
            </Link>
            .
          </p>
        </div>

        <StackJobsSectionClient
          initialJobs={jobs}
          initialPagination={pagination}
          pageSize={pageSize}
        />
      </div>
    </section>
  );
}
