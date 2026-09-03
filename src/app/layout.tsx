import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/layout/ScrollToTop";
import { siteConfig } from "../lib/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Syslearn Group | Ingénierie tech, Conseil informatique et Recrutement tech",
    template: `%s | Syslearn Group`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/syslearn-groupe.ico?v=2",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Syslearn Group",
    description: "Découvrez le groupe Syslearn et ses entités",
    url: siteConfig.url,
    siteName: "Syslearn Group",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/hero.png",
        width: 1280,
        height: 1280,
        alt: "Syslearn Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syslearn Group",
    description: "Découvrez le groupe Syslearn et ses entités",
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.className} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/syslearn-groupe.ico?v=2" sizes="48x48" />
        <link rel="preconnect" href="https://strapi.pointerlab.fr" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://strapi.pointerlab.fr" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
