import type { MetadataRoute } from 'next';
import { siteConfig } from '../lib/siteConfig';
import fs from 'fs';
import path from 'path';

export const revalidate = 3600;

function findPages(dir: string, baseRoute: string = ''): string[] {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  let pages: string[] = [];

  for (const item of items) {
    if (item.name.startsWith('_') || item.name.startsWith('.')) continue;
    if (item.name === 'api' || item.name === 'favicon.ico') continue;
    if (item.name === 'globals.css' || item.name === 'layout.tsx') continue;
    if (item.name === 'ContactClient.tsx' || item.name === 'CandidatureSpontaneeClient.tsx') continue;
    if (item.name === 'data' || item.name === '[slug]') continue;

    const fullPath = path.join(dir, item.name);
    const routePath = path.join(baseRoute, item.name).replace(/\\/g, '/');

    if (item.isDirectory()) {
      if (fs.existsSync(path.join(fullPath, 'page.tsx'))) {
        pages.push('/' + routePath);
      }
      pages = pages.concat(findPages(fullPath, routePath));
    }
  }

  return pages;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ✅ Ajout de www dans l'URL de base
  const baseUrl = siteConfig.url.replace('https://', 'https://www.');

  const appDir = path.join(process.cwd(), 'src/app');
  let allPages = findPages(appDir);

  allPages = allPages
    .filter(route => !route.includes('(')) 
    .filter(route => !route.includes('[')) 
    .filter(route => !route.includes('api'))
    .filter(route => route !== '/'); 

  const routes = ['/', ...allPages];

  return routes.map((route) => {
    let priority = 0.7;
    let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly';

    if (route === '/') {
      priority = 1.0;
      changeFrequency = 'daily';
    } else if (route === '/le-groupe' || route === '/nos-entites' || route === '/secteurs' || route === '/actualites') {
      priority = 0.9;
      changeFrequency = 'weekly'; 
    } else if (route === '/carrieres' || route === '/contact') {
      priority = 0.8;
      changeFrequency = 'weekly'; 
    } else if (route.includes('/le-groupe/') || route.includes('/nos-entites/')) {
      priority = 0.8;
      changeFrequency = 'weekly'; 
    } else if (route.includes('/secteurs/')) {
      priority = 0.7;
      changeFrequency = 'weekly';
    } else if (route.includes('/carrieres/')) {
      priority = 0.7;
      changeFrequency = 'weekly'; 
    }

    const url = `${baseUrl}${route}`;

    return {
      url: url,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
}