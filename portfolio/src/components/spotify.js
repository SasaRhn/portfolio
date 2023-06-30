import React from "react";
import { Slide } from "react-awesome-reveal";
import spotifyimg from "../asset/spotify.png";

const Spotify = ({ scrollIntoSection }) => {
  const handleButtonClick = () => {
    scrollIntoSection("sectionContact");
  };

  return (
    <div>
      <h3 className="titre">Spotify</h3>
      <div className="MyH5ai">
        <Slide triggerOnce={true} duration={2000}>
          <p className="Texte-Projet">
            Le projet consiste à créer un site web qui exploite une API (Interface de Programmation Applicative). L'API permettra d'échanger des données avec une application externe. Le site utilisera cette API pour afficher et manipuler des informations provenant de l'application. De plus, le projet sera accompagné d'un environnement Docker, ce qui facilitera le déploiement et la gestion de la complexité technique.
          </p>
        </Slide>
        <img className="Image-Projet" src={spotifyimg} alt="spotify" />
      </div>
      <a
        className="lientel1"
        href="https://github.com/SasaRhn/spotify.git"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleButtonClick}
      >
        Voir le Projet
      </a>
    </div>
  );
};

export default Spotify;
