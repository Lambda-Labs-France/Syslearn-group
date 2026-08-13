import Link from "next/link";
import "../../../styles/carrieres/nous-rejoindre.css";

export const metadata = {
  title: "Pourquoi nous rejoindre",
  description: "Découvrez pourquoi rejoindre Syslearn Group : modèle horizontal, transparence totale, évolution vers l'association et spécialisation technique. Rejoignez une ESN différente.",
};

export default function PourquoiNousRejoindrePage() {
  const raisons = [
    {
      number: "01",
      title: "Modèle horizontal",
      description: "Deux strates hiérarchiques, pas dix. Chez nous, une idée ne meurt pas dans un comité de validation : elle arrive directement aux personnes qui décident, parce que ce sont aussi celles qui font le travail. Moins de reporting, plus d'impact réel sur les projets que vous menez.",
    },
    {
      number: "02",
      title: "Transparence totale",
      description: "Des objectifs et des marges connus de tous. Chaque consultant connaît le taux journalier facturé sur sa mission, pas une estimation, le chiffre exact. Dans un secteur où le coût d'une période d'intercontrat mal gérée est estimé entre 8 000 et 15 000 euros par consultant et par an, comprendre où va réellement la valeur produite change fondamentalement la relation entre le consultant, l'entreprise et le client final.",
    },
    {
      number: "03",
      title: "Évolution vers l'association",
      description: "Une carrière ne devrait pas s'arrêter à 'consultant senior'. Nous proposons une trajectoire d'évolution réelle vers l'association pour celles et ceux qui souhaitent s'investir au-delà d'une mission, participer à la stratégie, au développement commercial, à la construction de l'entreprise elle-même. Ce n'est pas une promesse vague : c'est un chemin identifié, avec des étapes concrètes.",
    },
    {
      number: "04",
      title: "Spécialisation technique",
      description: "Nous ne vendons pas des généralistes capables de 'toucher à tout'. Nous construisons une expertise technique reconnue sur des écosystèmes exigeants comme C++, Java, l'intelligence artificielle ou l'IoT industriel plutôt qu'une promesse diluée. Dans un secteur où la pénurie d'ingénieurs qualifiés reste structurelle, cette spécialisation est ce qui vous permet de rester rare sur le marché.",
    },
  ];

  return (
    <main className="pourquoi-page">
      <section className="pourquoi-hero">
        <div className="pourquoi-hero__inner">
          <h1 className="pourquoi-hero__title">Pourquoi nous rejoindre</h1>
        </div>
      </section>

      <section className="pourquoi-content">
        <div className="pourquoi-content__inner">
          <div className="pourquoi-intro">
            <p>
              Dans les ESN françaises, le taux de turnover moyen tourne autour de <strong>18 % par an</strong>, 
              et grimpe au-delà de <strong>25 %</strong> dans les structures où les consultants se sentent 
              invisibles entre deux missions, un niveau considéré par les professionnels du secteur comme un 
              signal de mal-être au travail. Ce chiffre n'est pas une fatalité du métier de consultant : c'est 
              le symptôme d'un modèle d'entreprise, pas d'un problème de personnes.
            </p>
            <p className="pourquoi-intro__conclusion">
              Nous avons construit le nôtre pour qu'il ne produise pas ce résultat.
            </p>
          </div>

          <div className="pourquoi-grid">
            {raisons.map((raison, index) => (
              <div key={index} className="pourquoi-card">
                <div className="pourquoi-card__number">{raison.number}</div>
                <h3 className="pourquoi-card__title">{raison.title}</h3>
                <p className="pourquoi-card__description">{raison.description}</p>
              </div>
            ))}
          </div>

          <div className="pourquoi-conclusion">
            <h3 className="pourquoi-conclusion__title">Ce que ça change concrètement pour vous</h3>
            <p className="pourquoi-conclusion__text">
              Un modèle horizontal, une transparence totale sur les chiffres, une trajectoire claire vers 
              l'association et une spécialisation technique assumée : ce ne sont pas quatre avantages isolés, 
              c'est une seule et même conviction. Un consultant qui comprend l'entreprise dans laquelle il 
              travaille, qui voit où va son évolution et qui peut se spécialiser sans se disperser, reste et 
              progresse plus vite qu'ailleurs.
            </p>
          </div>

          <div className="pourquoi-cta">
            <h3 className="pourquoi-cta__title">Prêt à changer de trajectoire ?</h3>
            <p className="pourquoi-cta__text">
              Vous en avez assez des ESN où votre carrière dépend d'un manager que vous voyez deux fois par an ? 
              Discutons de ce à quoi ressemblerait votre prochaine mission et surtout, de ce qui vient après.
            </p>
            <div className="pourquoi-cta__actions">
              <Link
                href="/carrieres/recrutement"
                className="pourquoi-cta__btn pourquoi-cta__btn--primary"
              >
                Rejoindre Syslearn Group →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}