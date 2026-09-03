import type { MetadataRoute } from "next";
import { siteConfig } from "../lib/siteConfig";
import {
  discoverStaticRoutes,
  routeChangeFrequency,
  routePriority,
} from "../lib/discoverRoutes";

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  return discoverStaticRoutes().map((route) => ({
    url: route === "/" ? baseUrl : `${baseUrl}${route}`,
    changeFrequency: routeChangeFrequency(route),
    priority: routePriority(route),
  }));
}
