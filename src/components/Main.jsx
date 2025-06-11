import React from 'react';
import './Main.css';
import Header from './Header';
import Estudios from './Estudios';
import SoftSkills from './SoftSkills';
import Footer from './Footer';
import Projects from './Projects';
import Languages from './Languages';
import Certificates from './Certificates';

const Main = () => {
  return (
    <div>
      <Header />

      <main className="main-content">
        <section id="presentacion" className="section">
          <h2>Presentación</h2>
          <p>
            Hola, soy Julieta Díaz, estudiante de la Tecnicatura Universitaria en Programación en la UTN FRT.
            Me gusta aprender nuevas tecnologías y desarrollar proyectos en React.
          </p>
        </section>

        <section id="estudios" className="section">
          <Estudios />
        </section>

        <section id="softskills" className="section">
          <SoftSkills />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="languages" className="section">
          <Languages />
        </section>
        <Certificates />
      </main>

      <Footer />
    </div>
  );
};

export default Main;