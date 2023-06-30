import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import puissance4img from "../asset/puissance4.png";

const Puissance4 = () => {
  return (
    <div>
    <h3 className="titre">puissance4</h3>
    <div className="MyH5ai">
      <Slide triggerOnce={true} duration={2000}>
        <p className="Texte-Projet">
        Le projet est un jeu de Puissance 4 qui se joue à deux joueurs. 
        La grille du jeu a des dimensions variables. 
        Les joueurs placent tour à tour un pion dans la colonne de leur choix, qui coulisse jusqu'à la position la plus basse possible. 
        Un joueur remporte la partie lorsqu'il aligne au moins 4 de ses pièces horizontalement, verticalement ou en diagonale. 
        La partie se termine lorsqu'un joueur gagne, lorsque la grille est pleine sans possibilité de victoire, ou lorsqu'il n'y a plus de cases disponibles. 
        Le projet est réalisé sous forme d'un plugin JavaScript modulable, avec la possibilité de spécifier le nombre de cases de la grille et les couleurs des joueurs.
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