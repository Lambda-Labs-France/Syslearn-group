export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  {
    label: "Groupe",
    href: "/groupe",
    children: [
      { label: "Syslearn", href: "/syslearn" },
      { label: "PointerLab", href: "/pointerlab" },
      { label: "StackJobs", href: "/stackjobs" },
    ],
  },
  {
    label: "Actualités",
    href: "/actualites",
  },
  {
    label: "Services",
    href: "/services",
    
  },
  {
    label: "Réseaux",
    href: "/reseaux",
    children: [
      { label: "LinkedIn", href: "https://linkedin.com/company/syslearn" },
      { label: "Twitter", href: "https://twitter.com/syslearn" },
      { label: "YouTube", href: "https://youtube.com/syslearn" },
    ],
  },
  {
    label: "Rejoignez-nous",
    href: "/recrutement",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const siteConfig = {
  name: "Syslearn Groupe",
  logo: "/logo.svg", // ou "/favicon.ico"
  description: "Syslearn Groupe - Leader de la transformation numérique",
};