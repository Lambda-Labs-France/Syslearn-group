"use client";

import { Mail, Phone, MapPin, MessageSquare, Briefcase, Users, Code2, UserCheck } from "lucide-react";
import "../../styles/contact/contact.css";

export default function ContactClient() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const data = {
      nom: formData.get("nom"),
      prenom: formData.get("prenom"),
      email: formData.get("email"),
      telephone: formData.get("telephone"),
      objet: formData.get("objet"),
      message: formData.get("message"),
    };
    
    console.log("Formulaire soumis :", data);
    alert("Votre message a été envoyé !");
    form.reset(); 
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
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="nom">Nom <span>*</span></label>
                  <input type="text" id="nom" name="nom" placeholder="Votre nom" required />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="prenom">Prénom <span>*</span></label>
                  <input type="text" id="prenom" name="prenom" placeholder="Votre prénom" required />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="email">Email <span>*</span></label>
                  <input type="email" id="email" name="email" placeholder="vous@exemple.com" required />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="telephone">Téléphone (optionnel)</label>
                  <input type="tel" id="telephone" name="telephone" placeholder="06 12 34 56 78" />
                </div>
              </div>

              <div className="contact-form__row">
                
                <div className="contact-form__group">
                  <label htmlFor="objet">Objet <span>*</span></label>
                  <input type="text" id="objet" name="objet" placeholder="Objet de votre message" required />
                </div>
              </div>

              <div className="contact-form__group contact-form__group--full">
                <label htmlFor="message">Message <span>*</span></label>
                <textarea id="message" name="message" rows={6} placeholder="Décrivez votre demande..." required />
              </div>

              <button type="submit" className="contact-form__submit">
                <MessageSquare size={18} />
                Envoyer le message
              </button>
            </form>
          </div>

          <div className="contact-info-wrapper">
            <h2 className="contact-info__title">Coordonnées</h2>
            <div className="contact-info__list">
              <div className="contact-info__item">
                <div className="contact-info__icon"><MapPin size={20} strokeWidth={1.5} /></div>
                <div className="contact-info__content">
                  <h4>Adresse</h4>
                  <p>2 esplanade Ferdinand Magellan,<br />93160 Noisy-le-Grand, France</p>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="contact-info__icon"><Phone size={20} strokeWidth={1.5} /></div>
                <div className="contact-info__content">
                  <h4>Téléphone</h4>
                  <a href="tel:0179629165">06 68 67 04 57</a>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="contact-info__icon"><Mail size={20} strokeWidth={1.5} /></div>
                <div className="contact-info__content">
                  <h4>Email</h4>
                  <a href="mailto:contact@syslearn-group.com">contact@syslearn-group.com</a>
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