"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Briefcase,
  Users,
  Code2,
  UserCheck,
} from "lucide-react";
import "../../styles/contact/contact.css";

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Échec de l'envoi");
      }

      alert("Votre message a été envoyé !");
      form.reset();
    } catch {
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__inner">
          <h1 className="contact-hero__title">Contactez-nous</h1>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-section__inner">
          <div className="contact-form-wrapper">
            <h2 className="contact-form__title">Envoyez-nous un message</h2>
            <form className="contact-form" onSubmit={handleContactForm}>
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="firstName">
                    Prénom <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Votre prénom"
                    required
                  />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="lastName">
                    Nom <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Votre nom"
                    required
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="email">
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="vous@exemple.com"
                    required
                  />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="phone">
                    Téléphone <span>*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="06 12 34 56 78"
                    required
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="linkedinUrl">
                    LinkedIn <span>*</span>
                  </label>
                  <input
                    type="url"
                    id="linkedinUrl"
                    name="linkedinUrl"
                    placeholder="https://linkedin.com/in/..."
                    required
                  />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="resume">
                    CV <span>*</span>
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </div>
              </div>

              <div className="contact-form__group contact-form__group--full">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Décrivez votre demande..."
                />
              </div>

              <button
                type="submit"
                className="contact-form__submit"
                disabled={isSubmitting}
              >
                <MessageSquare size={18} />
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </form>
          </div>

          <div className="contact-info-wrapper">
            <h2 className="contact-info__title">Coordonnées</h2>
            <div className="contact-info__list">
              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div className="contact-info__content">
                  <h4>Adresse</h4>
                  <p>
                    2 esplanade Ferdinand Magellan,
                    <br />
                    93160 Noisy-le-Grand, France
                  </p>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div className="contact-info__content">
                  <h4>Téléphone</h4>
                  <a href="tel:0668670457">06 68 67 04 57</a>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div className="contact-info__content">
                  <h4>Email</h4>
                  <a href="mailto:contact@syslearn-group.com">
                    contact@syslearn-group.com
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-info__entites">
              <h4>Nos entités</h4>
              <div className="contact-info__entites-list">
                <div className="contact-info__entite">
                  <span className="contact-info__entite-dot contact-info__entite-dot--green"></span>
                  <span>Syslearn</span>
                </div>
                <div className="contact-info__entite">
                  <span className="contact-info__entite-dot contact-info__entite-dot--purple"></span>
                  <span>PointerLab</span>
                </div>
                <div className="contact-info__entite">
                  <span className="contact-info__entite-dot contact-info__entite-dot--blue"></span>
                  <span>StackJobs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
