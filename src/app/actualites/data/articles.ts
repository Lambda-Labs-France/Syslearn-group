export interface Article {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  entity: 'Syslearn' | 'PointerLab' | 'StackJobs' | 'Groupe';
  category: 'Lancement' | 'Bilan' | 'Portrait' | 'Secteur' | 'Vie du groupe';
  readTime: number;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'syslearn-pointerlab-stackjobs-reunis',
    title: 'Syslearn Groupe : Syslearn, PointerLab et StackJobs réunis sous une même identité',
    seoTitle: 'Syslearn Groupe : Syslearn, PointerLab et StackJobs réunis sous une même identité',
    metaDescription: 'Syslearn Groupe lance son site institutionnel commun pour Syslearn, PointerLab et StackJobs. Découvrez notre écosystème conseil IT, ESN C++/Qt et recrutement tech.',
    excerpt: 'Trouver un consultant informatique, un développeur C++/Qt ou un job tech ne devrait pas obliger à visiter trois sites différents sans lien apparent entre eux.',
    content: `Trouver un consultant informatique, un développeur C++/Qt ou un job tech ne devrait pas obliger à visiter trois sites différents sans lien apparent entre eux. C'est le problème que ce nouveau site résout : Syslearn (conseil et ingénierie informatique), PointerLab (ESN spécialisée C++/Qt) et StackJobs (plateforme de recrutement tech) sont désormais présentées sous une identité commune, tout en gardant chacune son site et sa spécialité.

Ce lancement s'accompagne d'un renforcement des passerelles entre les trois entités : les offres PointerLab et Syslearn sont désormais relayées en priorité sur StackJobs, et un consultant Syslearn peut être orienté vers une mission PointerLab si son profil technique correspond mieux. Une nouvelle page Secteurs permet aussi, pour la première fois, de voir en un coup d'œil comment le groupe intervient sur l'énergie, la défense, le médical ou l'aéronautique.`,
    image: 'https://picsum.photos/seed/lancement/800/500',
    date: '2026-07-24',
    entity: 'Groupe',
    category: 'Lancement',
    readTime: 4,
    tags: ['groupe', 'lancement'],
  },
  {
    id: '2',
    slug: '45-missions-50-consultants-bilan',
    title: '45 missions, 50 consultants : le bilan d\'activité de Syslearn Groupe',
    seoTitle: '45 missions, 50 consultants : le bilan d\'activité de Syslearn Groupe',
    metaDescription: 'Découvrez les chiffres-clés de Syslearn Groupe : 45 missions confiées, 50 consultants, 20 clients accompagnés et plus de 4 000 offres actives sur StackJobs.',
    excerpt: '45 missions confiées, 50 consultants actifs, 20 clients accompagnés, et plus de 4 000 offres actives sur StackJobs : ces chiffres résument une année de croissance pour un écosystème encore jeune mais déjà structuré autour de trois expertises complémentaires.',
    content: `45 missions confiées, 50 consultants actifs, 20 clients accompagnés, et plus de 4 000 offres actives sur StackJobs : ces chiffres résument une année de croissance pour un écosystème encore jeune mais déjà structuré autour de trois expertises complémentaires.

Ce qui frappe surtout, c'est la répartition : PointerLab concentre ses missions sur des secteurs à forte barrière technique (médical, aéronautique), Syslearn couvre des besoins plus larges en énergie et en défense, et StackJobs absorbe une demande de recrutement qui dépasse largement le seul périmètre du groupe - la plateforme sert aussi des entreprises tierces comme EY ou Capgemini.`,
    image: 'https://picsum.photos/seed/bilan/800/500',
    date: '2026-07-16',
    entity: 'Groupe',
    category: 'Bilan',
    readTime: 3,
    tags: ['bilan', 'croissance'],
  },
  {
    id: '3',
    slug: 'pourquoi-rejoindre-temoignages',
    title: 'Pourquoi rejoindre Syslearn, PointerLab ou StackJobs ? Trois collaborateurs témoignent',
    seoTitle: 'Pourquoi rejoindre Syslearn, PointerLab ou StackJobs ? Trois collaborateurs témoignent',
    metaDescription: 'Trois métiers, trois quotidiens : un consultant Syslearn, une ingénieure PointerLab et une recruteuse StackJobs racontent pourquoi ils ont rejoint le groupe.',
    excerpt: 'Trois métiers, trois quotidiens : un consultant Syslearn, une ingénieure PointerLab et une recruteuse StackJobs racontent pourquoi ils ont rejoint le groupe.',
    content: `Trois métiers, trois quotidiens : un consultant Syslearn, une ingénieure PointerLab et une recruteuse StackJobs racontent pourquoi ils ont rejoint le groupe.

[Contenu détaillé à venir - portraits croisés avec 3 questions identiques posées aux 3 profils]

**Rappel :** les citations doivent être validées avec les vraies personnes avant publication.`,
    image: 'https://picsum.photos/seed/portraits/800/500',
    date: '2026-07-10',
    entity: 'Groupe',
    category: 'Portrait',
    readTime: 5,
    tags: ['témoignages', 'carrières'],
  },
];

export const upcomingArticles = [
  {
    title: 'C++ vs Qt : quelles différences et pourquoi les deux comptent',
    description: 'Cible les recherches techniques, positionne PointerLab comme référence',
  },
  {
    title: 'Comment fonctionne le matching IA de StackJobs',
    description: 'Contenu produit à forte valeur SEO sur le recrutement tech',
  },
  {
    title: 'Conseil informatique dans l\'énergie : 5 défis spécifiques au secteur',
    description: 'Renforce la page secteur Énergie',
  },
  {
    title: 'Portage salarial vs régie : quel format choisir en ESN',
    description: 'Cible une recherche récurrente des consultants IT',
  },
];

export function getArticles() {
  return articles;
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getFilteredArticles(entity: string, category: string) {
  let filtered = articles;
  if (entity !== 'Toutes') {
    filtered = filtered.filter((a) => a.entity === entity);
  }
  if (category !== 'Toutes') {
    filtered = filtered.filter((a) => a.category === category);
  }
  return filtered;
}

export const entities = ['Toutes', 'Syslearn', 'PointerLab', 'StackJobs', 'Groupe'];
export const categories = ['Toutes', 'Lancement', 'Bilan', 'Portrait', 'Secteur', 'Vie du groupe'];