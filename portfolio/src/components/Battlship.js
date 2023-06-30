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
            J'ai repris un projet inachevé qui consistait à développer un jeu de bataille navale. 
            J'ai dû déboguer le code existant et le terminer. Le projet était en cours de réalisation, mais n'avait pas été complété. 
            La principale difficulté résidait dans le débogage du code, étant donné que je devais reprendre un code que je ne connaissais pas au départ. 
            Malgré ces obstacles, j'ai réussi à finaliser le projet avec succès. 
            J'ai également profité des bonnes pratiques d'architecture et des astuces de code mises en place par le développeur précédent, ce qui m'a beaucoup inspiré. 
            Pour faciliter la gestion des modifications, j'ai effectué des "commits atomiques", ce qui m'a permis de revenir en arrière si nécessaire.
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