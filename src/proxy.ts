import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { siteConfig } from "./lib/siteConfig";

function canonicalUrl(pathname: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const clean = pathname.replace(/\/$/, "") || "/";
  return clean === "/" ? base : `${base}${clean}`;
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const response = NextResponse.next();

  response.headers.append("Link", `<${canonicalUrl(pathname)}>; rel="canonical"`);

  if (search) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg|woff2?)$).*)",
  ],
};
