"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../../styles/accueil/activites.css";

const activitesData = [
  {
    id: "syslearn",
    title: "Syslearn",
    description:
      "Conseil et ingénierie informatique pour l'énergie, la défense et l'industrie. Une connaissance sectorielle qui fait la différence là où une ESN généraliste classique bute.",
    images: [
      "/images/sys-vignette1.jpg",
      "/images/sys-vignette2.jpg",
    ],
    imageMain: "/images/syslearn.jpg",
    buttonText: "Découvrir Syslearn",
    buttonLink: "/nos-entites/syslearn",
  },
  {
    id: "pointerlab",
    title: "PointerLab",
    description:
      "Spécialiste de l'écosystème C++ pour les projets logiciels critiques. Simulation 3D, imagerie médicale, systèmes embarqués aéronautiques : quand le logiciel doit tenir sous contrainte réelle, sans droit à l'erreur.",
    images: [
      "/images/pointerlab-vignette1.jpg",
      "/images/pointerlab-vignette2.jpg",
    ],
    imageMain: "/images/pointerlab.png",
    buttonText: "Découvrir PointerLab",
    buttonLink: "/nos-entites/pointerlab",
  },
  {
    id: "stackjobs",
    title: "StackJobs",
    description:
      "La plateforme de recrutement tech & engineering qui matche vraiment. Plus de 4 000 offres actives, un moteur de matching par IA qui trie le bruit plutôt que de l'amplifier.",
    images: [
      "/images/stackjobs-vignette1.jpg",
      "/images/stackjobs-vignette2.jpg",
    ],
    imageMain: "/images/stackjobs.jpg",
    buttonText: "Découvrir StackJobs",
    buttonLink: "/nos-entites/stackjobs",
  },
];

function AccordionThumbs({
  images,
  title,
  variant,
}: {
  images: string[];
  title: string;
  variant: "desktop" | "mobile";
}) {
  const isDesktop = variant === "desktop";
  const size = isDesktop ? 80 : 60;

  return (
    <div className={isDesktop ? "activites__accordion-images" : "activites__mobile-images"}>
      {images.map((img, index) => (
        <Image
          key={img}
          src={img}
          alt={`${title} illustration ${index + 1}`}
          width={size}
          height={size}
          className={isDesktop ? "activites__accordion-image" : "activites__mobile-image"}
          sizes={isDesktop ? "(max-width: 768px) 1px, 80px" : "(max-width: 768px) 60px, 1px"}
        />
      ))}
    </div>
  );
}

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

                    {isOpen && item.images.length > 0 && (
                      <AccordionThumbs
                        images={item.images}
                        title={item.title}
                        variant="desktop"
                      />
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
            <Image
              src={activeItem?.imageMain || activitesData[0].imageMain}
              alt="Nos activités"
              width={1024}
              height={1024}
              className="activites__image"
              sizes="(max-width: 768px) 1px, 50vw"
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

                  {isOpen && item.images.length > 0 && (
                    <AccordionThumbs
                      images={item.images}
                      title={item.title}
                      variant="mobile"
                    />
                  )}

                  {isOpen && (
                    <Image
                      src={item.imageMain}
                      alt={item.title}
                      width={1024}
                      height={1024}
                      className="activites__mobile-main-image"
                      sizes="(max-width: 768px) 100vw, 1px"
                    />
                  )}

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
