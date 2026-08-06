import Link from "next/link";
import "../../styles/accueil/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col footer__col--brand">
          <Link href="/" className="footer__logo">
            Syslearn <span>Group</span>
          </Link>
          <p className="footer__description">
            Conseil informatique, ingénierie C++/Qt et recrutement tech. 
            Trois métiers, une exigence commune, unis sous une même bannière.
          </p>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Entités</h3>
          <ul className="footer__list">
            <li><Link href="/nos-entites/syslearn">Syslearn</Link></li>
            <li><Link href="/nos-entites/pointerlab">PointerLab</Link></li>
            <li>
              <Link href="/nos-entites/stackjobs">StackJobs</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Secteurs</h3>
          <ul className="footer__list">
            <li>Énergie & Défense</li>
            <li>Médical & Simulation</li>
            <li>Aéronautique & IoT</li>
            <li>Industrie & Automobile</li>
          </ul>
        </div>

        <div className="footer__col footer__col--join">
          <h3 className="footer__title">Nous rejoindre</h3>
          <p className="footer__join-text">
            Découvrez nos opportunités ou déposez une candidature spontanée pour rejoindre l'une de nos entités.
          </p>
          <Link href="/carrieres" className="footer__join-link">
            Découvrir les offres →
          </Link>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copyright">
            © {currentYear} Syslearn Groupe
          </p>
        </div>
      </div>
    </footer>
  );
}