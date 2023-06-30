import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import puissance4img from "../asset/puissance4.png";

const Puissance4 = () => {
  return (
    <div>
    <h3 className="titre">Puissance4</h3>
    <div className="MyH5ai">
      <Slide triggerOnce={true} duration={2000}>
        <p className="Texte-Projet">
        Le projet est un jeu de Puissance 4 avec une grille modulable. Les joueurs placent tour à tour un pion dans une colonne, gagnant s'ils alignent 4 pièces. Le jeu se termine en cas de victoire, de grille pleine ou de cases épuisées. Réalisé en tant que plugin JavaScript, personnalisable avec taille de grille et couleurs des joueurs.
        </p>
      </Slide>
      <img className="Image-Projet" src={puissance4img} alt="puissance4" />
    </div>
    <a
      className="lientel1"
      href="https://github.com/SasaRhn/Puissance-4.git"
      target="_blank"
      rel="noopener noreferrer"
    >
      Voir le Projet
    </a>
    </div>
  );
};

export default Puissance4;