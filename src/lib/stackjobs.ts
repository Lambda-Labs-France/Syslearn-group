const STACKJOBS_API_URL = "https://www.stackjobs.com/api/jobs";

export type StackJob = {
  _id: string;
  title: string;
  slug?: string | null;
  location?: string | null;
  city?: string | null;
  contractType?: string | string[] | null;
  contractOption?: string[] | null;
  employmentType?: string | null;
  jobLink?: string | null;
  company?: {
    name?: string;
    logo?: string | null;
    banner?: string | null;
  };
};

export type StackJobsPagination = {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

type StackJobsApiResponse = {
  data?: StackJob[];
  pagination?: StackJobsPagination;
};

export type StackJobsResult = {
  jobs: StackJob[];
  pagination: StackJobsPagination;
};

function fallbackPagination(limit: number, page: number): StackJobsPagination {
  return {
    currentPage: page,
    totalPages: 1,
    totalCount: 0,
    limit,
    hasNextPage: false,
    hasPrevPage: page > 1,
  };
}

function normalizeAssetUrl(value?: string | null): string | null {
  if (!value) return null;

  if (value.startsWith("http://") || value.startsWith("https://")) {
    try {
      const url = new URL(value);
      if (
        url.hostname === "adminsj.stackjobs.fr" &&
        url.pathname.startsWith("/uploads/")
      ) {
        url.pathname = `/api${url.pathname}`;
      }
      return url.toString();
    } catch {
      return value;
    }
  }

  const path = value.replace(/\\/g, "/");
  const absolutePath = path.startsWith("/") ? path : `/${path}`;
  const apiPath = absolutePath.startsWith("/uploads/")
    ? `/api${absolutePath}`
    : absolutePath;

  return `https://www.stackjobs.com${apiPath}`;
}

function normalizeJob(job: StackJob): StackJob {
  return {
    ...job,
    company: job.company
      ? {
          ...job.company,
          logo: normalizeAssetUrl(job.company.logo),
          banner: normalizeAssetUrl(job.company.banner),
        }
      : undefined,
  };
}

export async function getStackJobs(
  limit = 6,
  page = 1,
): Promise<StackJobsResult> {
  const safeLimit = Number.isFinite(limit)
    ? Math.min(24, Math.max(1, Math.trunc(limit)))
    : 6;
  const safePage = Number.isFinite(page) ? Math.max(1, Math.trunc(page)) : 1;
  const fallback = fallbackPagination(safeLimit, safePage);

  try {
    const params = new URLSearchParams({
      limit: String(safeLimit),
      page: String(safePage),
    });
    const response = await fetch(`${STACKJOBS_API_URL}?${params}`, {
      next: { revalidate: 300 },
    });
    if (!response.ok) return { jobs: [], pagination: fallback };

    const payload = (await response.json()) as StackJobsApiResponse;
    return {
      jobs: Array.isArray(payload.data) ? payload.data.map(normalizeJob) : [],
      pagination: payload.pagination ?? fallback,
    };
  } catch {
    return { jobs: [], pagination: fallback };
  }
}
