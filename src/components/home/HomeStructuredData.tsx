import { siteConfig } from "../../lib/siteConfig";
import { faqs } from "./FAQ";

export default function HomeStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/hero.png`,
        description:
          "Syslearn Group réunit Syslearn (conseil IT), PointerLab (ingénierie C++) et StackJobs (recrutement tech).",
        sameAs: [
          siteConfig.socials.linkedin,
          siteConfig.socials.twitter,
          siteConfig.socials.youtube,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "fr-FR",
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: "Syslearn Group | Ingénierie tech, Conseil informatique et Recrutement tech",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "fr-FR",
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        isPartOf: { "@id": `${siteConfig.url}/#webpage` },
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
