import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import spotifyimg from "../asset/spotify.png";

const Spotify = () => {
  return (
    <div>
    <h3 className="titre">spotify</h3>
    <div className="MyH5ai">
      <Slide triggerOnce={true} duration={2000}>
        <p className="Texte-Projet">
        Le projet est un jeu de Puissance 4 qui se joue à deux joueurs. 
        La grille du jeu a des dimensions variables. 
        Les joueurs placent tour à tour un pion dans la colonne de leur choix, qui coulisse jusqu'à la position la plus basse possible. 
        Un joueur remporte la partie lorsqu'il aligne au moins 4 de ses pièces horizontalement, verticalement ou en diagonale. La partie se termine lorsqu'un joueur gagne, lorsque la grille est pleine sans possibilité de victoire, ou lorsqu'il n'y a plus de cases disponibles. 
        Le projet est réalisé sous forme d'un plugin JavaScript modulable. 
        De plus, il est accompagné d'un environnement Docker pour faciliter le déploiement et la gestion de la complexité technique.
        </p>
      </Slide>
      <img className="Image-Projet" src={spotifyimg} alt="spotify" />
    </div>
    <a
      className="lientel1"
      href="https://github.com/SasaRhn/spotify.git"
      target="_blank"
      rel="noopener noreferrer"
    >
      Voir le Projet
    </a>
    </div>
  );
};

export default Spotify;