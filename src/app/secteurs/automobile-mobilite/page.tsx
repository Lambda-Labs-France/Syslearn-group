import Link from "next/link";
import { 
  Car, 
  Box, 
  Monitor, 
  Wifi,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import "../../../styles/secteurs/automobile-mobilite.css";

export const metadata = {
  title: "Automobile & Mobilité",
  description: "Syslearn Group développe des systèmes embarqués et logiciels de simulation pour l'automobile avec l'écosystème C++. ISO 26262, MISRA C/C++, ADAS et info-divertissement.",
};

export default function AutomobileMobilitePage() {
  const expertises = [
    { icon: Box, text: "Simulation de conduite et environnements 3D" },
    { icon: Monitor, text: "Info-divertissement et interfaces embarquées" },
    { icon: Car, text: "Systèmes ADAS et aide à la conduite" },
    { icon: Wifi, text: "IoT et connectivité véhicule" },
  ];

  return (
    <main className="automobile-page">
      <section className="automobile-hero">
        <div className="automobile-hero__inner">
          <div className="automobile-hero__content">
            <div>
              <span className="automobile-hero__badge">Secteur</span>
              <h1 className="automobile-hero__title">Automobile & Mobilité : conseil et ingénierie sur mesure</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="automobile-content">
        <div className="automobile-content__inner">
          <div className="automobile-content__intro text-justify-hyphens">
            <p>
              De la simulation de conduite à l'info-divertissement embarqué, l'automobile et la mobilité combinent 
              contraintes temps réel et exigences d'expérience utilisateur. <strong>Syslearn Group</strong> y 
              développe des logiciels bâtis sur l'écosystème <strong>C++</strong>, taillés pour répondre à ces 
              deux impératifs à la fois.
            </p>
          </div>

          <div className="automobile-content__block">
            <h2 className="automobile-content__title">Le contexte</h2>
            <p className="text-justify-hyphens">
              Les systèmes embarqués automobiles doivent conjuguer performance temps réel, interfaces fluides 
              pour le conducteur et fiabilité absolue, un équilibre que peu d'écosystèmes techniques permettent 
              d'atteindre au même niveau que le <strong>C++</strong>.
            </p>
            <p className="text-justify-hyphens">
              Cette exigence s'inscrit dans une filière qui pèse lourd dans l'économie française : la filière 
              automobile représente <strong>329 000 salariés</strong> et <strong> 1,1 % du PIB</strong> national, 
              selon les dernières statistiques de l'Insee. Le secteur traverse toutefois une mutation technologique 
              profonde, entre transition vers l'électrique, durcissement des normes européennes d'émissions et 
              généralisation des architectures logicielles complexes.
            </p>
            <p className="text-justify-hyphens">
              Cette complexité se mesure très concrètement : un véhicule haut de gamme peut aujourd'hui embarquer 
              entre <strong> 70 et 100 unités de commande électronique (ECU)</strong> exécutant plus de
              <strong> 100 millions de lignes de code</strong>, soit environ quinze fois plus qu'un avion de ligne. 
              Selon une étude PwC largement reprise dans le secteur, le logiciel devrait représenter jusqu'à
              <strong> 60 % de la valeur d'une voiture d'ici 2030</strong>, marquant un basculement complet du 
              modèle économique automobile vers le logiciel embarqué.
            </p>
          </div>

          <div className="automobile-content__block">
            <h2 className="automobile-content__title">Expertises mobilisées</h2>
            <div className="automobile-expertises">
              {expertises.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="automobile-expertise">
                    <div className="automobile-expertise__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="automobile-expertise__text ">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="automobile-content__image-wrapper">
            <img
              src="/images/secteur-automobile.jpg"
              alt="Secteur de l'automobile - Syslearn Group"
              className="automobile-content__image"
            />
          </div>
          <div className="automobile-content__block">
            <h2 className="automobile-content__title">Pourquoi la fiabilité logicielle est indissociable de la sécurité automobile</h2>
            <p className="text-justify-hyphens">
              Contrairement à un logiciel classique, un défaut dans un système embarqué automobile peut avoir des 
              conséquences directes sur la sécurité des occupants et des usagers de la route. C'est pour cette 
              raison que le secteur s'appuie sur des référentiels normatifs stricts : l'<strong> ISO 26262</strong>, 
              norme internationale de sécurité fonctionnelle pour l'électronique automobile, encadre le 
              développement des systèmes critiques, tandis que les standards de codage <strong> MISRA C/C++</strong> 
              imposent des règles précises pour limiter les erreurs de programmation dans les logiciels embarqués, 
              un enjeu d'autant plus sensible que les systèmes <strong> ADAS</strong> (aide à la conduite, freinage 
              automatique, régulateur adaptatif) reposent directement sur la fiabilité du code.
            </p>
          </div>

          <div className="automobile-content__block">
            <h2 className="automobile-content__title">Pourquoi l'écosystème C++ intervient dans l'automobile</h2>
            <p className="text-justify-hyphens">
              C'est précisément parce que la performance temps réel est non négociable que l'écosystème
              <strong> C++</strong> reste le socle de référence des systèmes embarqués automobiles. Il permet un 
              contrôle fin des ressources matérielles et des délais d'exécution, une exigence critique pour des 
              fonctions comme la gestion moteur, le freinage électronique ou les systèmes ADAS, où un retard de 
              quelques millisecondes peut avoir des conséquences réelles sur la route.
            </p>
            <p className="text-justify-hyphens">
              Cette même rigueur technique s'applique aux logiciels de simulation de conduite, qui doivent reproduire 
              fidèlement la dynamique physique d'un véhicule en temps réel, ainsi qu'aux interfaces d'info-divertissement, 
              où la fluidité perçue par le conducteur dépend directement de la performance du moteur logiciel 
              sous-jacent.
            </p>
          </div>

          <div className="automobile-content__block">
            <h2 className="automobile-content__title">Ce que cela implique concrètement</h2>
            <p className="text-justify-hyphens">
              Développer un logiciel automobile revient donc à concilier deux exigences rarement compatibles ailleurs : 
              la rigueur d'un système temps réel critique pour la sécurité, et la qualité d'expérience attendue 
              d'une interface moderne.
            </p>
            <p className="text-justify-hyphens">
              C'est cette double maîtrise (expertise de l'écosystème <strong>C++</strong> et culture de la 
              fiabilité embarquée) que <strong>Syslearn Group</strong> met au service de ses clients de 
              l'automobile et de la mobilité.
            </p>
          </div>
        </div>
      </section>

      <section className="automobile-cta">
        <div className="automobile-cta__inner">
          <div className="automobile-cta__content">
            <h2 className="automobile-cta__title">Prêt à discuter de votre projet ?</h2>
            <p className="automobile-cta__text text-justify-hyphens">
              Découvrez comment les entités de Syslearn Group peuvent vous accompagner dans vos projets automobile et mobilité.
            </p>
            <div className="automobile-cta__actions">
              <Link href="https://www.syslearn.fr/qui-sommes-nous/secteurs-dactivites" className="automobile-cta__btn automobile-cta__btn--primary">
                Découvrir Syslearn
                <ExternalLink size={18} />
              </Link>
              <Link href="https://www.pointerlab.fr/secteurs/automobile" className="automobile-cta__btn automobile-cta__btn--primary">
                Découvrir PointerLab
                <ExternalLink size={18} />
              </Link>
              <Link href="https://www.stackjobs.com/sectors/automobile" className="automobile-cta__btn automobile-cta__btn--primary">
                Découvrir StackJobs
                <ExternalLink size={18} />
              </Link>
              <Link href="/contact" className="automobile-cta__btn automobile-cta__btn--secondary">
                Discuter de votre projet Automobile & Mobilité
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}