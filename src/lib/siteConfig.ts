export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  logo: string;
  socials: {
    linkedin: string;
    twitter: string;
    youtube: string;
  };
  sites: {
    name: string;
    url: string;
    description: string;
  }[];
};

export const siteConfig: SiteConfig = {
  name: "Syslearn Group",
  description: "Syslearn Group - Leader de la transformation numérique",
  url: "https://syslearn-group.com",
  logo: "/logo.png",
  socials: {
    linkedin: "https://linkedin.com/company/syslearn",
    twitter: "https://twitter.com/syslearn",
    youtube: "https://youtube.com/syslearn",
  },
  sites: [
    {
      name: "Syslearn",
      url: "https://syslearn.fr",
      description: "Solutions de transformation numérique",
    },
    {
      name: "PointerLab",
      url: "https://pointerlab.fr",
      description: "Innovation et recherche en IA",
    },
    {
      name: "StackJobs",
      url: "https://stackjobs.fr",
      description: "Plateforme de recrutement tech",
    },
  ],
};
