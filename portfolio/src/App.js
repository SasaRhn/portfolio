import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./App.css";
import { Slide } from "react-awesome-reveal";
import CV from "./asset/CV.png";
import Presentation from "./components/Presentation";
import Myh5ai from "./components/Myh5ai";
import Battleship from "./components/Battlship";
import Puissance4 from "./components/puissance4";
import Spotify from "./components/spotify";

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
          {/* portfolio */}
        <Slide triggerOnce={true} delay={5} duration={2000}>
          <div className="titre-Aceuil">
            <h1>Mon portfolio</h1>
            <br></br>
            <h3>Sabri REHOUNI</h3>
            <br></br>
            <h3>Futur Dev HTML, CSS, JS, PHP</h3>
          </div>
        </Slide>
            {/* presentatoion */}
        <h2 className="Titre-Cate">Ma presentation</h2>
        <Presentation />
                {/* section des projet */}
        <h2 className="Titre-Cate">Projets</h2>
        <section className="Projet" id="sectionProjet">
          {/* projet myh5ai */}
          <Myh5ai />
          {/* projet Battleship */}
          <Battleship />
          {/* projet puissance4 */}
          <Puissance4 />
          {/* projet Spotify */}
          <Spotify />
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
