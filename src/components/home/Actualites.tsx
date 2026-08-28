import Link from "next/link";
import { getArticles } from "../../app/actualites/data/articles";
import "../../styles/accueil/actualites.css";

export default function Actualites() {
  const allArticles = getArticles();
  
  // ✅ Filtrer par entité
  const pointerLabArticles = allArticles.filter(a => a.entity === 'PointerLab');
  const stackJobsArticles = allArticles.filter(a => a.entity === 'StackJobs');
  const syslearnArticles = allArticles.filter(a => a.entity === 'Syslearn');
  
  // ✅ Prendre le plus récent de chaque
  const dernierPointerLab = pointerLabArticles.length > 0 ? pointerLabArticles[0] : null;
  const dernierStackJobs = stackJobsArticles.length > 0 ? stackJobsArticles[0] : null;
  const dernierSyslearn = syslearnArticles.length > 0 ? syslearnArticles[0] : null;
  
  // ✅ Construire les données à afficher
  const actualitesData = [];
  
  if (dernierPointerLab) {
    actualitesData.push({
      id: dernierPointerLab.id,
      date: dernierPointerLab.date,
      category: dernierPointerLab.category,
      title: dernierPointerLab.title,
      image: dernierPointerLab.image,
      link: dernierPointerLab.originalLink,
      source: 'PointerLab',
    });
  }
  
  if (dernierStackJobs) {
    actualitesData.push({
      id: dernierStackJobs.id,
      date: dernierStackJobs.date,
      category: dernierStackJobs.category,
      title: dernierStackJobs.title,
      image: dernierStackJobs.image,
      link: dernierStackJobs.originalLink,
      source: 'StackJobs',
    });
  }
  
  if (dernierSyslearn) {
    actualitesData.push({
      id: dernierSyslearn.id,
      date: dernierSyslearn.date,
      category: dernierSyslearn.category,
      title: dernierSyslearn.title,
      image: dernierSyslearn.image,
      link: dernierSyslearn.originalLink,
      source: 'Syslearn',
    });
  }
  
  // ✅ Fallback si pas assez d'articles
  if (actualitesData.length < 3) {
    const groupeArticles = allArticles.filter(a => a.entity === 'Groupe');
    const dernierGroupe = groupeArticles.length > 0 ? groupeArticles[0] : null;
    if (dernierGroupe && actualitesData.length < 3) {
      actualitesData.push({
        id: dernierGroupe.id,
        date: dernierGroupe.date,
        category: dernierGroupe.category,
        title: dernierGroupe.title,
        image: dernierGroupe.image,
        link: dernierGroupe.originalLink || `/actualites/${dernierGroupe.id}`,
        source: 'Groupe',
      });
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  return (
    <section className="actualites">
      <div className="actualites__inner">
        <div className="actualites__header">
          <h2 className="actualites__title">Actualités</h2>
        </div>

        <div className="actualites__grid">
          {actualitesData.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="dofollow noopener noreferrer"
              className="actualites__card"
              data-source={item.source}
            >
              <div className="actualites__card-image">
                <img
                  src={item.image}
                  alt={item.title}
                  className="actualites__card-img"
                  loading="lazy"
                />
                <span className="actualites__card-category">{item.category}</span>
                <span className="actualites__card-source">{item.source}</span>
              </div>
              <div className="actualites__card-body">
                <span className="actualites__card-date">{formatDate(item.date)}</span>
                <h3 className="actualites__card-title">{item.title}</h3>
              </div>
            </a>
          ))}
        </div>

        <div className="actualites__footer">
          <Link href="/actualites" className="actualites__btn">
            Voir toutes les actualités
          </Link>
        </div>
      </div>
    </section>
  );
}