import Link from "next/link";
import "../../styles/accueil/chiffres-cles.css";

export default function ChiffresCles() {
  const stats = [
    { number: "45", label: "missions confiées" },
    { number: "50", label: "consultants actifs" },
    { number: "20", label: "clients accompagnés" },
    { number: "4 000+", label: "offres actives sur StackJobs" },
  ];

  return (
    <section className="chiffres-cles">
      <div className="chiffres-cles__inner">
        <div className="chiffres-cles__carousel">
          {stats.map((stat, index) => (
            <div key={index} className="chiffres-cles__item">
              <span className="chiffres-cles__number">{stat.number}</span>
              <span className="chiffres-cles__label">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="chiffres-cles__footer">
          <Link href="/le-groupe/chiffres-cles" className="chiffres-cles__btn">
            Voir tous les chiffres-clés
          </Link>
        </div>
      </div>
    </section>
  );
}