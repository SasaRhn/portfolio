import React, { useState } from 'react';
import { Slide } from "react-awesome-reveal";

const TextComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleText = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <button onClick={toggleText}>
        {expanded ? 'Réduire' : 'En savoir plus'}
      </button>
      <div className={`textpre ${expanded ? 'expanded' : 'collapsed'}`}>
      <Slide triggerOnce="true" direction="right"  duration="1000">
              <p className="Text-Presentation">
                Salut tout le monde ! Sabri Rehouni, un étudiant de première
                année à Epitech dans la formation de la Web Académie. Je suis
                passionné de jeux vidéo je vais aussi régulièrement à la salle
                dans mes moments libres, mais j'ai décidé de faire un virage à
                180 degrés en passant d'un Bac Pro dans le Génie civil à la
                programmation informatique.
              </p>
              <p className="Text-Presentation">
                Depuis que j'ai commencé mon aventure à Epitech, j'ai plongé
                tête la première dans l'univers du développement web. Je suis
                en train d'apprendre à coder en JavaScript, PHP, HTML et CSS, et
                c'est tellement cool ! J'aime créer mes petits sites web
                interactifs et donner vie à mes idées à travers le code. J'ai
                déjà réalisé plusieurs projets tels que Myh5ai que vous pouvez
                voir dans la partie "Mes projets" de mon portfolio.
              </p>
              <p className="Text-Presentation1">
                Mais ce qui me passionne le plus, ce sont les serveurs et les
                datacenters. J’ai déjà commencé à faire de petites structures
                personnelles afin d’héberger des bases de données en MySQL sur
                mon propre serveur. Je compte aussi héberger ce portfolio que
                vous voyez actuellement sur mon serveur. Il me permet aussi de
                me faire des petits serveurs de jeux avec mes potes sur des jeux
                tels que Minecraft ou tout type de jeux de survie multi. Je suis
                fasciné par l'architecture complexe des serveurs. J'ai vraiment
                envie de me spécialiser dans ce domaine et d'en apprendre
                davantage sur les technologies qui les alimentent.
              </p>
              <p className="Text-Presentation1">
                Ce portfolio est un premier pas dans cette direction. J'espère
                pouvoir partager avec vous mes projets, mes expériences et mes
                apprentissages tout au long de mon parcours à Epitech. Je suis
                convaincu que cette formation va m'ouvrir de nombreuses portes
                et me permettre de concrétiser mes rêves dans le monde du
                développement Web.
              </p>
              <p className="Text-Presentation1">
                Je suis impatient de faire partie de cette communauté dynamique
                et de rencontrer des personnes partageant les mêmes passions que
                moi. Si vous avez des questions, des conseils ou si vous voulez
                simplement discuter, n'hésitez pas à me contacter via la partie
                "Contactez-moi" de mon portfolio !
              </p>
            </Slide>
      </div>
    </div>
  );
};

export default TextComponent;
