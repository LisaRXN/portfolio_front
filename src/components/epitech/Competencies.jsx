import { Title } from "../Title";

const openModal = () => {
  const blocs = document.querySelector(".competencies-blocs");
  const btn = document.querySelector(".competencies-btn");
  blocs.classList.toggle("open-bloc");
  btn.classList.toggle("rotate");
};

export function Competencies() {
  return (
    <div className="competencies">
      <div className="competencies-title">
        <p>
          <span style={{ color: "#646cff" }}>#</span>Bloc de compétences RNCP 5
        </p>
        <button className="competencies-btn" onClick={openModal}>
          <img src="/img/btn.png"></img>
        </button>
      </div>

      <div className="competencies-blocs">
        {/* Bloc 1 */}

        <div className="competencies-bloc">
          <h4>
            RNCP38436BC01 - Cadrer un projet et conceptualiser une solution web
          </h4>
          <p>
            Rédiger un Cahier Des Charges (CDC) en partant d'apo une expression
            de besoins, afin de cadrer fonctionnellement un projet de solution
            web dans le respect des réglementations en vigueur et notamment le
            RGPD.
          </p>

          <p>
            Rédiger des spécifications techniques en analysant un CDC, afin de
            cadrer techniquement un projet de développement de solution web.
          </p>

          <p>
            Déployer un environnement de travail en mettant en place les outils
            de versionnage, de partage et de collaboration/communication
            nécessaires, afin de cadrer opérationnellement un projet de
            développement de solution web.
          </p>

          <p>
            Réaliser une maquette afin de permettre au client de valider la
            structure de la solution web en respectant les bonnes pratiques en
            termes d'apo ergonomie et d'apo accessibilité.
          </p>

          <p>
            Identifier les fonctionnalités à développer, en modélisant les
            divers éléments et leurs interconnexions, afin de structurer l'apo
            architecture de la solution web et de Base DeDonnées (BDD)
          </p>

          <p>
            Rédiger une présentation pour présenter les choix techniques, les
            maquettes, et le schéma de la solution web en argumentant les choix
            faits afin de permettre au client ou au décideur de valider la
            proposition de solution.
          </p>
        </div>

        {/* Bloc 2 */}
        <div className="competencies-bloc">
          <h4>RNCP38436BC02 - Développer une solution web</h4>
          <p>
            Développer le prototype de la solution web afin de présenter
            l’architecture technique au client Rédiger le code de la solution en
            transcrivant les fonctionnalités du CDC, en respectant les normes
            d’accessibilité, d’ergonomie, de référencement, et la réglementation
            en vigueur afin de développer la solution web.
          </p>

          <p>
            Intégrer les différents éléments de la solution web en fonction des
            maquettes, en respectant les dernières normes des langages utilisés
            (HTML, CSS, JS, …)
          </p>

          <p>
            Implémenter la partie "front-end" d'une solution web Implémenter la
            logique et la base de données assurant la persistance des données
            côté serveur (le "back-end").{" "}
          </p>

          <p>
            Implémenter des règles d'authentification, en respectant les bonnes
            pratiques en matière de sécurité, afin de sécuriser l'accès à une
            solution web.
          </p>

          <p>
            Implémenter un plan de tests en concevant les différents tests
            unitaires et d’intégration afin de vérifier que l’ensemble des
            fonctionnalités développées fonctionne bien séparément et à
            l’unisson.
          </p>
          <p>
            Déployer une application web en utilisant un serveur afin de rendre
            l’application accessible aux utilisateurs.
          </p>
        </div>

        {/* Bloc 3 */}
        <div className="competencies-bloc">
          <h4>
            RNCP38436BC03 - Déployer un système d’assurance qualité tout au long
            du cycle de vie d’une solution web.
          </h4>
          <p>
            Monitorer le lancement d'une solution web, en recueillant les
            retours utilisateurs, afin d'évaluer la qualité de la solution web
            déployée.
          </p>

          <p>
            Identifier des améliorations qualitatives et de performance d'une
            solution web, en analysant les retours utilisateurs et les données
            d'analyse du trafic, afin d'améliorer la qualité et la disponibilité
            d'une solution web déployée.
          </p>

          <p>
            Implémenter la partie "front-end" d'une solution web Implémenter la
            logique et la base de données assurant la persistance des données
            côté serveur (le "back-end").
          </p>

          <p>
            Implémenter des règles d'authentification, en respectant les bonnes
            pratiques en matière de sécurité, afin de sécuriser l'accès à une
            solution web.
          </p>

          <p>
            Analyser la qualité de l’ergonomie et la qualité de l’accessibilité
            de la solution (normes, design, ergonomie, navigation,
            référencement, bonnes pratiques, etc.) pour identifier les axes
            d’amélioration.
          </p>
          <p>
            Rédiger un document argumentatif en listant des propositions
            d'améliorations afin de faire valider des préconisations de
            développements correctifs d'une solution web.
          </p>
        </div>
      </div>
    </div>
  );
}
