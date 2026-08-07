import "../../../styles/groupe/chiffres-cle.css";

export const metadata = {
  title: "Nos chiffres-clés",
  description: "Découvrez les chiffres qui font la force de Syslearn Group.",
};

export default function ChiffresClesPage() {
  const stats = [
    { number: "45", label: "missions confiées", value: 85 },
    { number: "50", label: "consultants actifs", value: 70 },
    { number: "20", label: "clients accompagnés", value: 60 },
    { number: "4 000+", label: "offres actives sur StackJobs", value: 95 },
  ];

  return (
    <main className="chiffres-page">
      <section className="chiffres-hero">
        <div className="chiffres-hero__inner">
          <h1 className="chiffres-hero__title">Nos chiffres-clés</h1>
          <p className="chiffres-hero__subtitle">La performance mesurée</p>
        </div>
      </section>

      <section className="chiffres-content">
        <div className="chiffres-content__inner">
          <p className="chiffres-intro">
            45 missions confiées, 50 consultants actifs, 20 clients accompagnés, et plus de 4 000 offres 
            actives sur StackJobs. Des chiffres qui traduisent un écosystème encore jeune, mais déjà structuré 
            autour de trois expertises complémentaires.
          </p>

          <div className="chiffres-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="chiffres-stat">
                <div className="chiffres-stat__number">{stat.number}</div>
                <div className="chiffres-stat__label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="chiffres-chart">
            <h3 className="chiffres-chart__title">Notre croissance</h3>
            <div className="chiffres-chart__bars">
              {stats.map((stat) => (
                <div key={stat.label} className="chiffres-chart__bar-wrapper">
                  <div className="chiffres-chart__bar-header">
                    <span className="chiffres-chart__label">{stat.label}</span>
                    <span className="chiffres-chart__percentage">{stat.value}%</span>
                  </div>
                  <div className="chiffres-chart__bar-track">
                    <div 
                      className="chiffres-chart__bar" 
                      style={{ width: `${stat.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="chiffres-image">
            <img
              src="https://picsum.photos/seed/croissance/1200/300"
              alt="Notre croissance"
              className="chiffres-image__img"
            />
          </div>
        </div>
      </section>
    </main>
  );
}