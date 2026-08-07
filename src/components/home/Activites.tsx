"use client";

import { useState } from "react";
import Link from "next/link";
import "../../styles/accueil/activites.css";

const activitesData = [
  {
    id: "syslearn",
    title: "Syslearn",
    description:
      "Conseil et ingénierie informatique pour l'énergie, la défense et l'industrie. Une connaissance sectorielle qui fait la différence là où une ESN généraliste classique bute.",
    images: [
      "https://picsum.photos/seed/syslearn1/80/80",
      "https://picsum.photos/seed/syslearn2/80/80",
    ],
    imageMain: "https://picsum.photos/seed/syslearn-main/600/500",
    buttonText: "Découvrir Syslearn",
    buttonLink: "/nos-entites/syslearn",
  },
  {
    id: "pointerlab",
    title: "PointerLab",
    description:
      "L'ESN spécialisée dans l'écosystème C++, partenaire officiel de Qt Group. Simulation 3D, imagerie médicale, systèmes embarqués aéronautiques : quand le logiciel doit tenir sous contrainte réelle, sans droit à l'erreur.",
    images: [
      "https://picsum.photos/seed/pointerlab1/80/80",
      "https://picsum.photos/seed/pointerlab2/80/80",
    ],
    imageMain: "https://picsum.photos/seed/pointerlab-main/600/500",
    buttonText: "Découvrir PointerLab",
    buttonLink: "/nos-entites/pointerlab",
  },
  {
    id: "stackjobs",
    title: "StackJobs",
    description:
      "La plateforme de recrutement tech & engineering qui matche vraiment. Plus de 4 000 offres actives, un moteur de matching par IA qui trie le bruit plutôt que de l'amplifier.",
    images: [
      "https://picsum.photos/seed/stackjobs1/80/80",
      "https://picsum.photos/seed/stackjobs2/80/80",
    ],
    imageMain: "https://picsum.photos/seed/stackjobs-main/600/500",
    buttonText: "Découvrir StackJobs",
    buttonLink: "/nos-entites/stackjobs",
  },
];

export default function Activites() {
  const [openId, setOpenId] = useState<string>("syslearn");

  const toggle = (id: string) => {
    if (openId === id) {
      if (id === "syslearn") return;
      setOpenId("");
      return;
    }
    setOpenId(id);
  };

  const activeItem = activitesData.find((item) => item.id === openId);

  return (
    <section className="activites">
      <div className="activites__inner">
        <h2 className="activites__title">Nos activités</h2>

        <div className="activites__grid">
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

          <div className="activites__image-col">
            <img
              src={activeItem?.imageMain || activitesData[0].imageMain}
              alt="Nos activités"
              className="activites__image"
              loading="lazy"
            />
          </div>
        </div>

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
                    {item.buttonText}
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