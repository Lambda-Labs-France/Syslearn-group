"use client";

import { useState } from "react";
import Link from "next/link";
import "../../styles/accueil/activites.css";

const activitesData = [
  {
    id: "recrutement",
    title: "Hellowork recrutement",
    description:
      "Nos solutions permettent une mise en relation transparente, fluide et efficace entre les candidats et les recruteurs.",
    images: [
      "https://picsum.photos/seed/recrutement1/80/80",
      "https://picsum.photos/seed/recrutement2/80/80",
    ],
    imageMain: "https://picsum.photos/seed/recrutement-main/600/500",
    buttonText: "Contactez-nous",
    buttonLink: "/contact",
  },
  {
    id: "education",
    title: "Hellowork education",
    description:
      "Nos plateformes donnent les bons outils pour bien choisir sa formation initiale, professionnelle ou sa reconversion. Les écoles et organismes de formation peuvent valoriser leurs offres sur les plateformes afin de développer leurs activités et leur attractivité.",
    images: [
      "https://picsum.photos/seed/education1/80/80",
      "https://picsum.photos/seed/education2/80/80",
    ],
    imageMain: "https://picsum.photos/seed/education-main/600/500",
    buttonText: "Contactez-nous",
    buttonLink: "/contact",
  },
  {
    id: "media",
    title: "Hellowork media",
    description:
      "Helloworkplace est destiné aux recruteurs et aux professionnels des ressources humaines, tandis que BDM cible les experts du digital. À travers des articles, des analyses et des interviews, ces médias fournissent les informations clés pour les professionnels qui souhaitent être en veille sur leur secteur.",
    images: [
      "https://picsum.photos/seed/media1/80/80",
      "https://picsum.photos/seed/media2/80/80",
    ],
    imageMain: "https://picsum.photos/seed/media-main/600/500",
    buttonText: "Contactez-nous",
    buttonLink: "/contact",
  },
];

export default function Activites() {
  const [openId, setOpenId] = useState<string>("recrutement");

  const toggle = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  const activeItem = activitesData.find((item) => item.id === openId);

  return (
    <section className="activites">
      <div className="activites__inner">
        <h2 className="activites__title">Nos activités</h2>

        {/* Desktop : grille 2 colonnes */}
        <div className="activites__grid">
          {/* Colonne gauche : Accordéon */}
          <div className="activites__accordion-col">
            {activitesData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className={`activites__accordion-item ${
                    isOpen ? "activites__accordion-item--open" : ""
                  }`}
                >
                  <button
                    className="activites__accordion-header"
                    onClick={() => toggle(item.id)}
                  >
                    <span className="activites__accordion-title">{item.title}</span>
                    <span className="activites__accordion-icon">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div className="activites__accordion-body">
                    <p className="activites__accordion-description">
                      {item.description}
                    </p>

                    {item.images && item.images.length > 0 && (
                      <div className="activites__accordion-images">
                        {item.images.map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            alt={`${item.title} illustration ${index + 1}`}
                            className="activites__accordion-image"
                            loading="lazy"
                          />
                        ))}
                      </div>
                    )}

                    <Link
                      href={item.buttonLink}
                      className="activites__accordion-button"
                    >
                      {item.buttonText} →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Colonne droite : Image principale (Desktop uniquement) */}
          <div className="activites__image-col">
            <img
              src={activeItem?.imageMain || activitesData[0].imageMain}
              alt="Nos activités"
              className="activites__image"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mobile : chaque élément avec son image */}
        <div className="activites__mobile">
          {activitesData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`activites__mobile-item ${
                  isOpen ? "activites__mobile-item--open" : ""
                }`}
              >
                <button
                  className="activites__mobile-header"
                  onClick={() => toggle(item.id)}
                >
                  <span className="activites__mobile-title">{item.title}</span>
                  <span className="activites__mobile-icon">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div className="activites__mobile-body">
                  <p className="activites__mobile-description">
                    {item.description}
                  </p>

                  {item.images && item.images.length > 0 && (
                    <div className="activites__mobile-images">
                      {item.images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`${item.title} illustration ${index + 1}`}
                          className="activites__mobile-image"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  )}

                  <img
                    src={item.imageMain}
                    alt={item.title}
                    className="activites__mobile-main-image"
                    loading="lazy"
                  />

                  <Link
                    href={item.buttonLink}
                    className="activites__mobile-button"
                  >
                    {item.buttonText} →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}