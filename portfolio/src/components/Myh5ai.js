import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import Myh5aiim from "../asset/Myh5ai.png";

const Myh5ai = () => {
  return (
    <div>
    <h3 className="titre">My h5ai</h3>
    <div className="MyH5ai">
      <Slide triggerOnce={true} duration={2000}>
        <p className="Texte-Projet">
        Le projet consiste à créer une arborescence de fichiers qui permet à l'utilisateur d'améliorer l'interface de l'index de son serveur. 
        L'idée est de capturer l'URL demandée par l'utilisateur et d'afficher une représentation visuelle des fichiers et dossiers correspondants. 
        Cela permettra à l'utilisateur de naviguer plus facilement et de visualiser la structure de son serveur de manière conviviale.
        </p>
      </Slide>
      <img className="Image-Projet" src={Myh5aiim} alt="Myh5ai" />
    </div>
    <a
      className="lientel1"
      href="https://github.com/SasaRhn/My_h5ai"
      target="_blank"
      rel="noopener noreferrer"
    >
      Voir le Projet
    </a>
    </div>
  );
};

export default Myh5ai;