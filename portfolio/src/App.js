import React from 'react';
import './App.css';
import { ContactUs } from './components/contact';
import { Slide } from "react-awesome-reveal";

function App() {
  return (
    <div className="App">
      <header>
        <Slide delay="5">
        <h1 className='titre-Aceuil'>Mon Portfolio</h1>
        </Slide>
      </header>
      <main>
        <section>
          <h2>Ma presentation</h2>
        </section>
        <section>
          <h2>Projets</h2>
          <ul>
            <li>
              <h3>My h5ai</h3>
              <img src= "./asset/myh5ai.png"></img>
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
