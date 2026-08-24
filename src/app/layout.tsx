import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/layout/ScrollToTop"; 

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Syslearn Group",
    template: `%s | Syslearn Group`,
  },
  description: "Syslearn Group - Leader de la transformation numérique",
  icons: {
    icon: "/syslearn-groupe.ico?v=2",
  },
  openGraph: {
    title: "Syslearn Group",
    description: "Découvrez le groupe Syslearn et ses entités",
    url: "https://syslearn-group.fr",
    siteName: "Syslearn Group",
    locale: "fr_FR",
    type: "website",
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