import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./App.css";
import { Slide } from "react-awesome-reveal";
import Myh5ai from "./asset/Myh5ai.png";
import Joel from "./asset/Joel.jpg";
import Battlships from "./asset/Battleship.png";
import CV from "./asset/CV.png";

function App() {
  const scrollIntoSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const form = useRef();
  const [expanded, setExpanded] = useState(false);

  const toggleText = () => {
    setExpanded(!expanded);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pvzfdwo",
        "template_s3uyhei",
        form.current,
        "V0r_-UDxqfhXvCLp4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="App">
      <header>
        <div className="TétedePage">
          <button onClick={() => scrollIntoSection("sectionPresentation")}>
            A Propos de Moi
          </button>
          <button onClick={() => scrollIntoSection("sectionProjet")}>
            Mes Projets
          </button>
          <button onClick={() => scrollIntoSection("sectionContact")}>
            Contactez Moi
          </button>
        </div>
      </header>
      <div className="EntreDeux"></div>
      <main>
        <Slide triggerOnce={true} delay={5} duration={2000}>
          <div className="titre-Aceuil">
            <h1>Mon portfolio</h1>
            <br></br>
            <h3>Sabri REHOUNI</h3>
            <br></br>
            <h3>Futur Dev HTML, CSS, JS, PHP</h3>
          </div>
        </Slide>
        <h2 className="Titre-Cate">Ma presentation</h2>
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
        <h2 className="Titre-Cate">Projets</h2>
        <section className="Projet" id="sectionProjet">
          <h3 className="titre">My h5ai</h3>
          <div className="MyH5ai">
            <Slide triggerOnce={true} duration={2000}>
              <p className="Texte-Projet">
              Le projet consiste à créer une arborescence de fichiers qui permet à l'utilisateur d'améliorer l'interface de l'index de son serveur. 
              L'idée est de capturer l'URL demandée par l'utilisateur et d'afficher une représentation visuelle des fichiers et dossiers correspondants. 
              Cela permettra à l'utilisateur de naviguer plus facilement et de visualiser la structure de son serveur de manière conviviale.
              </p>
            </Slide>
            <img className="Image-Projet" src={Myh5ai} alt="Myh5ai" />
          </div>
          <a
            className="lientel1"
            href="https://github.com/SasaRhn/My_h5ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
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
            <img className="Image-Projet" src={Battlships} alt="Battleship" />
          </div>
          <a
            className="lientel1"
            href="https://github.com/SasaRhn/Battleships"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </section>
        <h2 className="Titre-Cate2">Contact</h2>
        <section id="sectionContact">
          <div className="section">
            <div className="container">
              <form ref={form} onSubmit={sendEmail} className="form">
                <label className="mail">Nom ;</label>
                <input type="text" name="name" className="mail" />
                <label className="mail">Email ;</label>
                <input type="email" name="email" className="mail" />
                <label className="mail">Message ;</label>
                <textarea name="message" className="mail" />
                <button type="submit" className="mail">
                  Envoyer
                </button>
                <a className="lientel" href={CV} download>
                  Cliquez ici pour télécharger Mon C.V
                </a>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p className="droit">© 2023 Mon Portfolio. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
