import React from 'react';
import './Projects.css';

const projects = [
  {
    titulo: 'Portfolio Personal',
    descripcion: 'Un sitio web personal desarrollado con React para mostrar mi perfil, estudios y habilidades.',
    link: 'https://github.com/juliidiiaz04/portfolio'
  },
  {
    titulo: 'Calculadora Web',
    descripcion: 'Una calculadora hecha con HTML, CSS y JavaScript.',
    link: 'https://github.com/juliidiiaz04/calculadora-web'
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.titulo}</h3>
            <p>{project.descripcion}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;