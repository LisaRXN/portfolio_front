import { useEffect, useState } from "react";
import { Card } from "../Card";

const openModal = () => {
  const blocs = document.querySelector(".progress-blocs");
  const btn = document.querySelector(".progress-btn");
  blocs.classList.toggle("open-bloc");
  btn.classList.toggle("rotate");
};

export function Progress() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch projects data.");
        }
        return response.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div className="competencies">
      <div className="competencies-title">
        <p>
          <span style={{ color: "#646cff" }}>#</span>Réalisations et progrès
        </p>
        <button className="progress-btn" onClick={openModal}>
          <img src="/img/btn.png"></img>
        </button>
      </div>

      <div className="competencies-blocs progress-blocs">
        <div className="competencies-bloc">
          <p>
            Depuis le début de la Coding Academy d{"'"}Epitech en octobre, j{"'"}ai fait
            de grands progrès dans mes compétences en développement web. J{"'"}ai
            acquis une solide compréhension des concepts fondamentaux, comme
            l{"'"}algorithmie, l{"'"}héritage en programmation, et la gestion des APIs,
            qui me permettent d{"'"}écrire un code structuré et optimisé.
            Aujourd{"'"}hui, je suis capable de développer un site web complet,
            incluant le backend (PHP ou Node.js) et le front-end (HTML, SCSS et
            React). Ces compétences m{"'"}offrent l{"'"}autonomie nécessaire pour créer
            des projets fonctionnels et bien conçus. Cependant, j{"'"}ai encore des
            marges de progression, notamment dans la compréhension des
            nombreuses options pour le déploiement des sites web et le
            fonctionnement des serveurs. Bien que j{"'"}aie déjà déployé quelques
            projets, je ressens le besoin de mieux maîtriser les outils et les
            configurations qui permettent de gérer efficacement un site en
            production. Ces limites représentent autant d{"'"}opportunités pour
            continuer à apprendre et me perfectionner dans un domaine qui me
            passionne.
          </p>
        </div>
      </div>
    </div>
  );
}
