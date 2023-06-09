import React from 'react';
import './App.css';
import { ContactUs } from './components/contact';
import { Slide } from "react-awesome-reveal";
// import Myh5ai  from "./";
// import Joel from "./asset/Joel.jpg"

function App() {
  return (
    <div className="App">
      <header>
        <div className='TétedePage'>
          <button>A Propos de Moi</button>
          <button>Mes Projets</button>
          <button>Contactez Moi</button>
        </div>
      </header>
      <div className='EntreDeux'></div>
      <main>
          <Slide delay="5">
            <div className='titre-Aceuil'>
            <h1>Mon Portfolio</h1>
            <br></br>
            <h3>Sabri REHOUNI</h3>
            <br></br>
            <h3>Futur Dev HTML, CSS, JS, PHP</h3>
            </div>
          </Slide>
          <h2 className='Titre-Cate'>Ma presentation</h2>
        <section className='Presentation'>
          {/* <img className='Image-Joel' src={Joel}/> */}
          <div>
          <p className='Text-Presentation'>
              Salut tout le monde !
              Sabri Rehouni, un étudiant de première année à Epitech dans la formation de la Web Académie. Je suis passionné de jeux vidéo je vais aussi régulièrement à la salle dans mes moment libre, mais j'ai décidé de faire un virage à 180 degrés en passant d'un Bac Pro dans le Génie civil à la programmation informatique.
              </p>
              <p className='Text-Presentation'>
              Depuis que j'ai commencé mon aventure à Epitech, j'ai plongé tête la première dans l'univers du développement web. Je suis en train d'apprendre à coder en JavaScript, PHP, HTML et CSS, et c'est tellement cool ! J'aime créer mes petit sites web interactifs et donner vie à mes idées à travers le code. J’ai déjà réalisé plusieurs projets tel que Myh5ai que vous pouvais voir dans la partie mes projet de mon portfolio.
              </p>
              <p className='Text-Presentation'>
              Mais ce qui me passionne le plus, ce sont les serveurs et les datacenters. J’ai déjà commencé à faire de petite structure personnelle afin d’héberger des bases de données en MySQL sur mon propre serveur je compte aussi héberger ce portfolio que vous voyez actuellement sur mon serveur il me permet aussi de me faire des petits serveurs de jeux avec mes pote sur tel que Minecraft ou tout type de jeux de survie multi. Je suis fasciné par l'architecture complexe des serveurs. J'ai vraiment envie de me spécialiser dans ce domaine et d'en apprendre davantage sur les technologies qui les alimentent.
              </p>
              <p className='Text-Presentation'>
              Ce portfolio est un premier pas dans cette direction. J'espère pouvoir partager avec vous mes projets, mes expériences et mes apprentissages tout au long de mon parcours à Epitech. Je suis convaincu que cette formation va m'ouvrir de nombreuses portes et me permettre de concrétiser mes rêves dans le monde du développement Web.
              </p>
              <p className='Text-Presentation'>
              Je suis impatient de faire partie de cette communauté dynamique et de rencontrer des personnes partageant les mêmes passions que moi. Si vous avez des questions, des conseils ou si vous voulez simplement discuter, n'hésitez pas à me contacter via la partie contactez-moi de mon portfolio !
            </p>
          </div>
        </section>
        <h2 className='Titre-Cate'>Projets</h2>
        <section className='Projet'>
          <div>
            <h3>My h5ai</h3>
            {/* <img className='Image-Projet' src={Myh5ai}/> */}
          </div>
          <div>
            <h3>My Cinema</h3>
            <p></p>
            {/* <img className='Image-Projet' src={Myh5ai}/> */}
          </div>
        </section>
        <h2 className='Titre-Cate'>Contact</h2>
        <section>
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
