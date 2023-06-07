import React from 'react';
import './App.css';
import { ContactUs } from './components/contact';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Mon Portfolio</h1>
      </header>
      <main>
        <section>
          <h2>À propos de moi</h2>
          <p>Je suis passionné par les langages de programmation tels que PHP, HTML et CSS, ainsi que
par les serveurs et la gestion de bases de données. J'ai également acquis des compétences
solides en langage SQL au cours de ma première année à Epitech. J'ai notamment travaillé sur
des projets individuels et en équipe, ce qui m'a permis de développer mes compétences en
résolution de problèmes et en collaboration.</p>
        </section>
        <section>
          <h2>Projets</h2>
          <ul>
            <li>
              <h3>Puissance 4</h3>
              <img src= "./asset/myh5ai.png"></img>
              <p></p>
            </li>
            <li>
              <h3>My cinema</h3>
              <p></p>
            </li>
            <li>
              <h3>My</h3>
              <p></p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Contact</h2>
          <ContactUs />
        </section>
      </main>
      <footer>
        <p>© 2023 Mon Portfolio. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
