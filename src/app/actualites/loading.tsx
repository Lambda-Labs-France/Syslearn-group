import "../../styles/actualites/actualites.css";

export default function Loading() {
  return (
    <div className="actualites-page">
      <section className="actualites-hero">
        <div className="actualites-hero__inner">
          <h1 className="actualites-hero__title">Actualités</h1>
        </div>
      </section>
      <section className="actualites-content">
        <div className="actualites-content__inner">
          <div className="actualites-empty">
            <p>Chargement des articles...</p>
          </div>
        </div>
      </section>
    </div>
  );
}
