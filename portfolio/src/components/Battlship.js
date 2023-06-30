import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import Battleships from "../asset/Battleship.png";

const Battleship = () => {
  return (
    <div>
        <h3 className="titre">Battleship</h3>
        <div className="Batllship">
        <div>
            <Slide triggerOnce={true} duration={2000}>
            <p className="Texte-Projet">
            J'ai repris un projet inachevé de jeu de bataille navale, débogué et finalisé avec succès. Malgré les difficultés initiales, j'ai utilisé les bonnes pratiques et astuces de code du développeur précédent. J'ai effectué des "commits atomiques" pour faciliter la gestion des modifications.
            </p>
            </Slide>
        </div>
        <img className="Image-Projet" src={Battleships} alt="Battleship" />
        </div>
        <a
        className="lientel1"
        href="https://github.com/SasaRhn/Battleships"
        target="_blank"
        rel="noopener noreferrer"
        >
        Voir le Projet
        </a>
    </div>
  );
};

export default Battleship;