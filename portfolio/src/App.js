import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
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
        <Slide delay="5" duration="2000">
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
          <div className="textpre">
            <Slide direction="right" delay="5" duration="2000">
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
              <p className="Text-Presentation">
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
              <p className="Text-Presentation">
                Ce portfolio est un premier pas dans cette direction. J'espère
                pouvoir partager avec vous mes projets, mes expériences et mes
                apprentissages tout au long de mon parcours à Epitech. Je suis
                convaincu que cette formation va m'ouvrir de nombreuses portes
                et me permettre de concrétiser mes rêves dans le monde du
                développement Web.
              </p>
              <p className="Text-Presentation">
                Je suis impatient de faire partie de cette communauté dynamique
                et de rencontrer des personnes partageant les mêmes passions que
                moi. Si vous avez des questions, des conseils ou si vous voulez
                simplement discuter, n'hésitez pas à me contacter via la partie
                "Contactez-moi" de mon portfolio !
              </p>
            </Slide>
          </div>
        </section>
        <h2 className="Titre-Cate">Projets</h2>
        <section className="Projet" id="sectionProjet">
          <h3 className="titre">My h5ai</h3>
          <div className="MyH5ai">
            <Slide delay="5" duration="2000">
              <p className="Texte-Projet">
                Le but de ce projet était de reproduire le comportement de
                Myh5ai. Myh5ai est un logiciel couramment utilisé pour parcourir
                des fichiers dans un serveur, par exemple on l'utilise tous les
                jours dans Windows, c'est l'utilitaire de fichier dans Windows.
              </p>
            </Slide>
            <img className="Image-Projet" src={Myh5ai} alt="Myh5ai" />
          </div>
          <a className="lientel1" href="https://github.com/SasaRhn/My_h5ai" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <h3 className="titre">Battleship</h3>
          <div className="Batllship">
            <div>
              <Slide delay="5" duration="2000">
                <p className="Texte-Projet">
                  J'ai repris le projet de quelqu'un d'autre. J'ai dû le
                  déboguer et le terminer. Le projet non fini était la
                  reproduction du grand jeu de la bataille navale. La
                  difficulté de ce projet était surtout la partie debug, le fait
                  de reprendre un code que l’on ne connaît pas n'est pas facile.
                  Le projet n'a pas été fini.
                </p>
              </Slide>
            </div>
            <img
              className="Image-Projet"
              src={Battlships}
              alt="Battleship"
            />
          </div>
          <a className="lientel1" href="https://github.com/SasaRhn/Battleships" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </section>
        <h2 className="Titre-Cate2">Contact</h2>
        <section id="sectionContact">
            <div className="section">
              <div className="container">
                <form ref={form} onSubmit={sendEmail} className="form">
                  <label className="mail">Nom</label>
                  <input type="text" name="name" className="mail" />
                  <label className="mail">Email</label>
                  <input type="email" name="email" className="mail" />
                  <label className="mail">Message</label>
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
