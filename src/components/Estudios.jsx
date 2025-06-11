import React from 'react';

const estudios = [
  {
    titulo: 'Tecnicatura Universitaria en Programación',
    institucion: 'Facultad Regional Tucumán - UTN',
    año: '2024 - Actualidad',
  },
  {
    titulo: 'Curso de Desarrollo Web',
    institucion: 'Argentina Programa',
    año: '2017',
  },
  {
    titulo: 'Curso de Programacion en CSS',
    institucion: 'Argentina Programa',
    año: '2023',
  },
  
];

const Estudios = () => {
  return (
    <section id="estudios" style={styles.section}>
      <h2 style={styles.titulo}>🎓 Estudios</h2>
      <ul style={styles.lista}>
        {estudios.map((item, index) => (
          <li key={index} style={styles.item}>
            <strong>{item.titulo}</strong><br />
            <em>{item.institucion}</em><br />
            <span>{item.año}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const styles = {
  section: {
    padding: '30px 20px',
    backgroundColor: '#f9f9f9',
  },
  titulo: {
    fontSize: '1.8rem',
    marginBottom: '15px',
    color: '#333',
    textAlign: 'center',
  },
  lista: {
    listStyle: 'none',
    padding: 0,
    maxWidth: '600px',
    margin: '0 auto',
  },
  item: {
    marginBottom: '20px',
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
};

export default Estudios;