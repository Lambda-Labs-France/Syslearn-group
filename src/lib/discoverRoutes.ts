import fs from "fs";
import path from "path";

const PAGE_FILES = ["page.tsx", "page.ts", "page.jsx", "page.js"];
const SKIP_DIRS = new Set(["api", "data", "(sites)"]);

function hasPageFile(dir: string): boolean {
  return PAGE_FILES.some((file) => fs.existsSync(path.join(dir, file)));
}

function toRoute(url: string): string {
  const clean = url.replace(/\/+/g, "/");
  if (!clean || clean === "/") return "/";
  return clean.startsWith("/") ? clean : `/${clean}`;
}

export function discoverStaticRoutes(
  appDir = path.join(process.cwd(), "src/app")
): string[] {
  const routes = new Set<string>();

  if (hasPageFile(appDir)) {
    routes.add("/");
  }

  function walk(dir: string, url: string) {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (entry.name.startsWith(".") || entry.name.startsWith("_")) continue;
      if (SKIP_DIRS.has(entry.name)) continue;
      if (entry.name.startsWith("[") && entry.name.endsWith("]")) continue;

      const isGroup = entry.name.startsWith("(") && entry.name.endsWith(")");
      const nextUrl = isGroup ? url : toRoute(`${url}/${entry.name}`);
      const fullPath = path.join(dir, entry.name);

      if (!isGroup && hasPageFile(fullPath)) {
        routes.add(nextUrl);
      }

      walk(fullPath, nextUrl);
    }
  }

  walk(appDir, "");
  return [...routes].sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });
}

export function routePriority(route: string): number {
  if (route === "/") return 1;
  if (
    route === "/le-groupe" ||
    route === "/nos-entites" ||
    route === "/secteurs" ||
    route === "/actualites"
  ) {
    return 0.9;
  }
  if (route === "/carrieres" || route === "/contact") return 0.8;
  return route.split("/").filter(Boolean).length === 1 ? 0.8 : 0.7;
}

export function routeChangeFrequency(
  route: string
): "daily" | "weekly" {
  return route === "/" || route === "/actualites" ? "daily" : "weekly";
}
