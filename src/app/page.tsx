import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "../components/home/Hero";
import Secteurs from "../components/home/Secteurs";
import Carrer from "../components/home/Carrer";
import Actualites from "../components/home/Actualites";
import Question from "../components/home/Question";
import ChiffresCles from "../components/home/ChiffresCles";
import FAQ from "../components/home/FAQ";
import HomeStructuredData from "../components/home/HomeStructuredData";

const Activites = dynamic(() => import("../components/home/Activites"));

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Syslearn Group | Ingénierie tech, Conseil informatique et Recrutement tech",
  description:
    "Syslearn Group réunit Syslearn (conseil IT), PointerLab (ESN C++/Qt) et StackJobs (recrutement tech). Missions, secteurs, offres : découvrez notre écosystème.",
  keywords: [
    "groupe ESN France",
    "conseil informatique",
    "ingénierie logicielle C++ Qt",
    "recrutement tech",
    "néo-ESN",
    "groupe informatique",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Syslearn Group | Ingénierie tech, Conseil informatique et Recrutement tech",
    description:
      "Syslearn Group réunit Syslearn (conseil IT), PointerLab (ESN C++/Qt) et StackJobs (recrutement tech). Missions, secteurs, offres : découvrez notre écosystème.",
    url: "/",
    type: "website",
    locale: "fr_FR",
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
    title: "Syslearn Group | Ingénierie tech, Conseil informatique et Recrutement tech",
    description:
      "Syslearn Group réunit Syslearn (conseil IT), PointerLab (ESN C++/Qt) et StackJobs (recrutement tech).",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HomePage() {
  return (
    <>
      <HomeStructuredData />
      <Hero />
      <ChiffresCles />
      <Activites />
      <Secteurs />
      <FAQ />
      <Carrer />
      <Actualites />
      <Question />
    </>
  );
}
