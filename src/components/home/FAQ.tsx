import "../../styles/accueil/faq.css";

export const faqs = [
  {
    question: "Qu'est-ce que Syslearn Group ?",
    answer:
      "Syslearn Group est l'écosystème qui réunit trois entités du numérique : Syslearn (conseil informatique), PointerLab (Spécialiste dans l'écosystème C++) et StackJobs (plateforme de recrutement tech & engineering).",
  },
  {
    question: "Sur quels secteurs le groupe intervient-il ?",
    answer:
      "Le groupe intervient principalement sur l'énergie, la défense, l'industrie, le médical, l'aéronautique, l'automobile et l'IoT. Voir le détail sur la page Secteurs.",
  },
  {
    question: "Comment rejoindre une entité du groupe ?",
    answer:
      "Les offres sont centralisées sur StackJobs. Une candidature spontanée reste possible via la page Carrières du site groupe.",
  },
];

export default function FAQ() {
  return (
    <section className="faq">
      <div className="faq__inner">
        <div className="faq__header">
          <h2 className="faq__title">Questions fréquentes</h2>
          <p className="faq__subtitle">
            Tout ce que vous devez savoir sur Syslearn Group
          </p>
        </div>

        <div className="faq__list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq__item">
              <div className="faq__item-header">
                <span className="faq__item-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="faq__question">{faq.question}</h3>
              </div>
              <p className="faq__answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
