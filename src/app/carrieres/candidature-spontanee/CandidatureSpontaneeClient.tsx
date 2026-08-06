"use client";

import { useState, useRef } from "react";
import { Upload, Send, Briefcase, Code2, Users, X } from "lucide-react";
import "../../../styles/carrieres/candidature-spontanee.css";

export default function CandidatureSpontaneeClient() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    entite: "",
    domaine: "",
    message: "",
  });

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Candidature soumise :", formData, cvFile);
    alert("Votre candidature a été envoyée avec succès !");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        alert("Le fichier ne doit pas dépasser 5MB.");
        return;
      }
      setCvFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.size > 5 * 1024 * 1024) {
        alert("Le fichier ne doit pas dépasser 5MB.");
        return;
      }
      setCvFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const removeFile = () => {
    setCvFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <main className="candidature-page">
      <section className="candidature-hero">
        <div className="candidature-hero__inner">
          <h1 className="candidature-hero__title">Candidature spontanée</h1>
        </div>
      </section>

      <section className="candidature-intro">
        <div className="candidature-intro__inner">
          <p className="candidature-intro__text">
            Aucune offre ne correspond exactement à votre profil ? Dites-nous ce que vous cherchez
            nos trois entités recrutent en continu.
          </p>
        </div>
      </section>

      <section className="candidature-content">
        <div className="candidature-content__inner">
          <form className="candidature-form" onSubmit={handleSubmit}>
            <div className="candidature-form__row">
              <div className="candidature-form__group">
                <label htmlFor="nom">Nom <span>*</span></label>
                <input type="text" id="nom" placeholder="Votre nom" required value={formData.nom} onChange={handleChange} />
              </div>
              <div className="candidature-form__group">
                <label htmlFor="email">Email <span>*</span></label>
                <input type="email" id="email" placeholder="vous@exemple.com" required value={formData.email} onChange={handleChange} />
              </div>
            </div>

            <div className="candidature-form__row">
              <div className="candidature-form__group">
                <label htmlFor="entite">Entité visée <span>*</span></label>
                <select id="entite" required value={formData.entite} onChange={handleChange}>
                  <option value="">Sélectionnez une entité</option>
                  <option value="syslearn">Syslearn</option>
                  <option value="pointerlab">PointerLab</option>
                  <option value="stackjobs">StackJobs</option>
                  <option value="indifferent">Indifférent</option>
                </select>
              </div>
              <div className="candidature-form__group">
                <label htmlFor="domaine">Poste ou domaine recherché</label>
                <input type="text" id="domaine" placeholder="Ex: Développeur C++, Consultant IT..." value={formData.domaine} onChange={handleChange} />
              </div>
            </div>

            <div className="candidature-form__group">
              <label htmlFor="message">Message <span>*</span></label>
              <textarea id="message" rows={4} placeholder="Parlez-nous de vous..." required value={formData.message} onChange={handleChange} />
            </div>

            <div className="candidature-form__upload">
              <label htmlFor="cv">CV <span>*</span></label>
              <div
                className={`candidature-form__upload-area ${isDragging ? 'candidature-form__upload-area--dragging' : ''}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={handleUploadClick}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  id="cv"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                />
                {cvFile ? (
                  <div className="candidature-form__file-info">
                    <span className="candidature-form__file-name">{cvFile.name}</span>
                    <span className="candidature-form__file-size">
                      {(cvFile.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                    <button
                      type="button"
                      className="candidature-form__file-remove"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile();
                      }}
                    >
                      <X size={18} />
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload size={24} strokeWidth={1.5} />
                    <span>Déposez votre CV (PDF, DOC) ou cliquez pour parcourir</span>
                  </>
                )}
              </div>
            </div>

            <button type="submit" className="candidature-form__submit">
              <Send size={18} />
              Envoyer ma candidature
            </button>
          </form>

          <div className="candidature-infos">
            <h3 className="candidature-infos__title">Nos entités recrutent</h3>
            <div className="candidature-infos__list">
              <div className="candidature-infos__item">
                <Briefcase size={20} strokeWidth={1.5} />
                <div>
                  <h4>Syslearn</h4>
                  <p>Consultants informatiques</p>
                </div>
              </div>
              <div className="candidature-infos__item">
                <Code2 size={20} strokeWidth={1.5} />
                <div>
                  <h4>PointerLab</h4>
                  <p>Ingénieurs C++/Qt</p>
                </div>
              </div>
              <div className="candidature-infos__item">
                <Users size={20} strokeWidth={1.5} />
                <div>
                  <h4>StackJobs</h4>
                  <p>Équipes produit & tech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}