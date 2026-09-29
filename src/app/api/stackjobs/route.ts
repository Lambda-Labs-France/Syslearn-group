import { NextRequest, NextResponse } from "next/server";
import { getStackJobs } from "../../../lib/stackjobs";

export async function GET(request: NextRequest) {
  const page = Number(request.nextUrl.searchParams.get("page") ?? 1);
  const limit = Number(request.nextUrl.searchParams.get("limit") ?? 6);
  const result = await getStackJobs(limit, page);

  return NextResponse.json(result);
}
