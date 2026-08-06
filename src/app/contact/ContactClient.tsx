"use client";

import { Mail, Phone, MapPin, MessageSquare, Briefcase, Users, Code2, UserCheck } from "lucide-react";
import "../../styles/contact/contact.css";

export default function ContactClient() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      entite: formData.get("entite"),
      secteur: formData.get("secteur"),
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

      <section className="contact-motifs">
        <div className="contact-motifs__inner">
          <h2 className="contact-motifs__title">Motifs de contact</h2>
          <div className="contact-motifs__grid">
            <div className="contact-motif">
              <div className="contact-motif__icon"><Users size={24} strokeWidth={1.5} /></div>
              <h3 className="contact-motif__name">Syslearn Groupe</h3>
              <p className="contact-motif__desc">Presse, partenariat, question générale</p>
            </div>
            <div className="contact-motif">
              <div className="contact-motif__icon"><Briefcase size={24} strokeWidth={1.5} /></div>
              <h3 className="contact-motif__name">Syslearn</h3>
              <p className="contact-motif__desc">Besoin de conseil ou de mission informatique</p>
            </div>
            <div className="contact-motif">
              <div className="contact-motif__icon"><Code2 size={24} strokeWidth={1.5} /></div>
              <h3 className="contact-motif__name">PointerLab</h3>
              <p className="contact-motif__desc">Projet logiciel C++/Qt, recrutement de consultant</p>
            </div>
            <div className="contact-motif">
              <div className="contact-motif__icon"><UserCheck size={24} strokeWidth={1.5} /></div>
              <h3 className="contact-motif__name">StackJobs</h3>
              <p className="contact-motif__desc">Candidature, publication d'offre, partenariat recruteur</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-section__inner">
          <div className="contact-form-wrapper">
            <h2 className="contact-form__title">Envoyez-nous un message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="name">Nom & Prénom <span>*</span></label>
                  <input type="text" id="name" name="name" placeholder="Votre nom complet" required />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="email">Email <span>*</span></label>
                  <input type="email" id="email" name="email" placeholder="vous@exemple.com" required />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="entite">Entité concernée <span>*</span></label>
                  <select id="entite" name="entite" required>
                    <option value="">Sélectionnez une entité</option>
                    <option value="groupe">Syslearn Groupe</option>
                    <option value="syslearn">Syslearn</option>
                    <option value="pointerlab">PointerLab</option>
                    <option value="stackjobs">StackJobs</option>
                  </select>
                </div>
                <div className="contact-form__group">
                  <label htmlFor="secteur">Secteur (optionnel)</label>
                  <select id="secteur" name="secteur">
                    <option value="">Sélectionnez un secteur</option>
                    <option value="energie">Énergie</option>
                    <option value="defense">Défense</option>
                    <option value="industrie">Industrie</option>
                    <option value="medical">Médical</option>
                    <option value="aeronautique">Aéronautique</option>
                    <option value="automobile">Automobile & Mobilité</option>
                    <option value="iot">IoT</option>
                  </select>
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
                  <p>adresse</p>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="contact-info__icon"><Phone size={20} strokeWidth={1.5} /></div>
                <div className="contact-info__content">
                  <h4>Téléphone</h4>
                  <a href="tel:0179629165">01 23 45 67 89</a>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="contact-info__icon"><Mail size={20} strokeWidth={1.5} /></div>
                <div className="contact-info__content">
                  <h4>Email</h4>
                  <a href="mailto:recrutement@syslearn.fr">recrutement@syslearn.fr</a>
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