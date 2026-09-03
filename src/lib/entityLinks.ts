const ENTITY_HOSTS = new Set([
  "pointerlab.fr",
  "www.pointerlab.fr",
  "stackjobs.com",
  "www.stackjobs.com",
  "syslearn.fr",
  "www.syslearn.fr",
]);

export function isEntitySite(url: string): boolean {
  try {
    return ENTITY_HOSTS.has(new URL(url).hostname.toLowerCase());
  } catch {
    return false;
  }
}

export function entityLinkRel(url: string): string {
  if (isEntitySite(url)) {
    return "dofollow noopener noreferrer";
  }
  return "noopener noreferrer";
}
