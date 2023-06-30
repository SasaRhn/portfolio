import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import Joel from "../asset/Joel.jpg";

const Presentation = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleText = () => {
    setExpanded(!expanded);
  };
  return (
    <section className="Presentation" id="sectionPresentation">

    <img className="Image-Joel" src={Joel} alt="Joel" />
    <div className={`textpre ${expanded ? 'expanded' : 'collapsed'}`}>
      <Slide triggerOnce={true} direction="right" duration={1000}>
        <p>
        Sabri Rehouni est un étudiant passionné de jeux vidéo qui a fait le choix de se reconvertir dans la programmation informatique et se spécialise dans le développement web et les serveurs.
        </p>

        {expanded && (
          <>

          <p className="Text-Presentation">
          Salut tout le monde ! Je suis Sabri Rehouni, un étudiant de première année à Epitech, actuellement à la recherche d'une alternance. 
          Après avoir obtenu un Bac Pro dans le Génie civil, j'ai décidé de faire un changement radical en me tournant vers la programmation informatique.
          </p>

            <p className="Text-Presentation">
            Depuis que j'ai commencé mon aventure à Epitech, je me suis plongé entièrement dans le développement web. 
            J'apprends actuellement à coder en JavaScript, PHP, HTML et CSS, et je suis vraiment passionné par ces technologies. 
            J'adore créer des sites web interactifs et donner vie à mes idées à travers le code. 
            Dans mon portfolio, vous pourrez découvrir certains de mes projets, tels que Myh5ai.
            </p>

            <p className="Text-Presentation1">
            Ce qui me fascine particulièrement, ce sont les serveurs et les datacenters. 
            J'ai déjà commencé à expérimenter avec de petites structures personnelles pour héberger des bases de données MySQL sur mon propre serveur. 
            D'ailleurs, j'ai également prévu d'héberger ce portfolio sur mon serveur. Je m'amuse également à créer des serveurs de jeux avec mes amis, que ce soit sur Minecraft ou d'autres jeux de survie multijoueurs. 
            L'architecture complexe des serveurs me captive et je souhaite me spécialiser dans ce domaine tout en approfondissant mes connaissances des technologies qui les alimentent.
            </p>

            <p className="Text-Presentation1">
            Ce portfolio marque le début de ma démarche dans cette direction. 
            J'ai hâte de partager avec vous mes projets, mes expériences et mes apprentissages tout au long de mon parcours à Epitech. 
            Je suis convaincu que cette formation va m'ouvrir de nombreuses opportunités et me permettre de concrétiser mes rêves dans le domaine du développement web.
            </p>

            <p className="Text-Presentation1">
            Je suis impatient de rejoindre cette communauté dynamique et de rencontrer des personnes partageant les mêmes passions que moi. 
            N'hésitez pas à me contacter via la section "Contactez-moi" de mon portfolio si vous avez des questions, des conseils ou simplement envie de discuter !
            </p>
          </>
        )}
        <button onClick={toggleText} className="en-savoir-plus">
          {expanded ? 'Réduire' : 'En savoir plus'}
        </button>
      </Slide>
    </div>

  </section>
  );
};

export default Presentation;