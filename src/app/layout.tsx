import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: {
    default: "Syslearn Groupe",
    template: `%s | Syslearn Groupe`,
  },
  description: "Syslearn Groupe - Leader de la transformation numérique",
  openGraph: {
    title: "Syslearn Groupe",
    description: "Découvrez le groupe Syslearn et ses entités",
    url: "https://syslearn-group.fr",
    siteName: "Syslearn Groupe",
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
    <html lang="fr">
      <body className={`${inter.className} ${barlow.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}