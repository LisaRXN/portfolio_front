const openModal = () => {
  const blocs = document.querySelector(".career-blocs");
  const btn = document.querySelector(".career-btn");
  blocs.classList.toggle("open-bloc");
  btn.classList.toggle("rotate");
};

export function Career() {
  return (
    <div className="competencies">
      <div className="competencies-title">
        <p>
          <span style={{ color: "#646cff" }}>#</span>Life and career reflections
        </p>
        <button className="career-btn" onClick={openModal}>
          <img src="/img/btn.png"></img>
        </button>
      </div>

      <div className="competencies-blocs career-blocs">
        {/* Bloc 1 */}
        <div className="competencies-bloc">
          <h4>📝  Autobiographie</h4>
          <p>
            Je suis originaire de la région parisienne. Après un master en
            physique-chimie à l{"'"}université Paris-Saclay (2005-2010) et
            l{"'"}obtention du CAPES de physique-chimie, j{"'"}ai préparé l{"'"}agrégation
            interne en 2014 à l{"'"}université de Paris Diderot.
          </p>
          <p>
            Ma carrière de professeur a débuté à Paris en 2011, où {"'"}ai exercé
            pendant trois ans avant de partir à l{"'"}étranger. En 2015, j{"'"}ai eu la
            chance de transmettre ma passion pour les sciences au lycée français
            de Caracas, au Venezuela, puis au lycée français de Lima, au Pérou.
            À partir de 2016, j{"'"}ai pris la responsabilité du laboratoire de
            physique du lycée Saint-Louis à Paris, tout en encadrant les élèves
            d{"'"}école préparatoire. En 2020, ma quête d{"'"}impact m{"'"}a poussée à
            fonder l{"'"}ONG La Escuelita au Pérou, dédiée à {"'"}éducation et à {"'"}aide
            sociale et psychologique.
          </p>
          <p>
            Mon parcours professionnel m{"'"}a donné l{"'"}immense chance de vivre et de travailler dans
            différents pays, enrichissant ma vision du monde et ma capacité
            d{"'"}adaptation. J{"'"}ai toujours été animée par la recherche de nouvelles
            aventures, la découverte d{"'"}autres cultures, et la possibilité
            d{"'"}apprendre et d{"'"}évoluer constamment.
          </p>
          <p>
            Cette quête de découverte m{"'"}amène maintenant à réaliser une reconversion
            professionnelle. J{"'"}ai découvert dans le développement web une
            nouvelle manière de résoudre des problèmes complexes, comme dans les
            équations physiques qui m{"'"}ont tant passionné. Ajourd{"'"}hui, je
            poursuis ma formation à la Coding Académie d{"'"}Epitech, avec pour
            objectif de travailler un jour pour un secteur scienfique, en
            alliant ma passion pour les sciences et le code.
          </p>
        </div>

        {/* Bloc 2 */}
        <div className="competencies-bloc">
          <h4>🌱 Philosophie profesionnelle</h4>
          <p>
            Ma philosophie professionnelle repose sur un apprentissage constant
            et une évolution continue. Je suis passionnée par l{"'"}algorithmie et
            la logique du code, une passion nourrie par ma formation en
            physique. L{"'"}efficacité du code et l{"'"}organisation sont au cœur de mon
            approche, c{"'"}est pourquoi {"'"}apprécie des technologies innovantes et
            modernes comme React. Forte de 15 ans d{"'"}expérience en tant que
            professeure, j{"'"}aime travailler en équipe et partager mes
            connaissances. Actuellement en reconversion professionnelle, je suis
            motivée par la recherche de nouveaux défis, notamment dans des
            projets scientifiques alliant physique et développement. Cette quête
            constante de nouveauté est ce qui m{"'"}anime, tant dans ma carrière que
            dans ma vie personnelle ayant vécu et travaillé dans de nombreux
            pays, toujours attirée par de nouvelles aventures.
          </p>
        </div>

        {/* Bloc 3 */}
        <div className="competencies-bloc">
          <h4>💡 Inspirations</h4>
          <p>
            Pour la création du design de ce site je me suis inspirée du
            portfolio d{"'"}
            <a href="https://eliasdevis.github.io/ ">Elias Devis.</a>
          </p>
          <p>
            Pour l{"'"}organisation du code j{"'"}ai mis en pratique les notions
            et concepts appris par les tutoriaux en React et Javascript de{" "}
            <a href="https://grafikart.fr/ ">Grafikart.</a>
          </p>
        </div>

        {/* Bloc 4 */}
        <div className="competencies-bloc">
          <h4>💻 Défis rencontrés </h4>
          <p></p>
        </div>

        {/* Bloc 5 */}
        <div className="competencies-bloc">
          <h4>🏄‍♀️ Loisirs et centres d{"'"}intérêt </h4>
          <p>Photographie, nature, surf et yoga.</p>
        </div>

        <div className="competencies-bloc">
          <h4>🌍 Implication dans des associations</h4>
          <p>
            En 2020, j{"'"}ai fondé une Organisation Non Gouvernementale (ONG)
            appelée *La Escuelita*. Créée au lendemain de la pandémie, cette
            initiative vise à réduire les inégalités touchant les habitants, et
            particulièrement les enfants, des quartiers défavorisés de la
            banlieue de Lima.
          </p>
          <p>
            Grâce à un financement partiel de l{"'"}Ambassade de France au Pérou,
            l{"'"}association a permis la construction de deux écoles dans les
            bidonvilles de Lima.
          </p>
          <p>
            Actuellement présidente de l{"'"}ONG, je supervise la gestion des
            financements et pilote les actions stratégiques de l{"'"}organisation.
          </p>
        </div>
      </div>
    </div>
  );
}
