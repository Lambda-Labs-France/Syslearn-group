export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
  isExternal?: boolean;
};

export const mainNav: NavItem[] = [
  {
    label: "Le Groupe",
    href: "/le-groupe",
    children: [
      { label: "Nos valeurs", href: "/le-groupe/valeurs" },
      { label: "Nos chiffres-clés", href: "/le-groupe/chiffres-cles" },
      { label: "Qui sommes-nous", href: "/le-groupe/qui-sommes-nous" },

    ],
  },
  {
    label: "Nos entités",
    href: "/nos-entites",
    children: [
      { label: "Syslearn", href: "/nos-entites/syslearn" },
      { label: "PointerLab", href: "/nos-entites/pointerlab" },
      { label: "StackJobs", href: "/nos-entites/stackjobs"},
    ],
  },
  {
    label: "Secteurs",
    href: "/secteurs",
    children: [
      { label: "Énergie", href: "/secteurs/energie" },
      { label: "Défense", href: "/secteurs/defense" },
      { label: "Industrie", href: "/secteurs/industrie" },
      { label: "Médical", href: "/secteurs/medical" },
      { label: "Aéronautique", href: "/secteurs/aeronautique" },
      { label: "Automobile & Mobilité", href: "/secteurs/automobile-mobilite" },
      { label: "IoT", href: "/secteurs/iot" },
    ],
  },
  {
    label: "Actualités",
    href: "/actualites",
  },
  {
    label: "Carrières",
    href: "/carrieres",
    children: [
      { label: "Nos métiers", href: "/carrieres/metiers" },
      { label: "Pourquoi nous rejoindre", href: "/carrieres/pourquoi-nous-rejoindre" },
      { label: "Recrutement", href: "/carrieres/recrutement" },
      { label: "Candidature spontanée", href: "/carrieres/candidature-spontanee" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const siteConfig = {
  name: "Syslearn Group",
  logo: "/logo.svg",
  description: "Syslearn Group - Leader de la transformation numérique",
};