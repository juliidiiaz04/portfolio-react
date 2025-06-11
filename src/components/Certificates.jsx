import React from 'react';
import './Certificates.css';

const certificates = [
  {
    title: 'Curso de desarrollo web',
    imgUrl: '/certificados/des-web.jpeg',
  },
  {
    title: 'Curso de programación en CSS',
    imgUrl: '/certificados/csscurso.jpg',
  },
];

const Certificates = () => {
  return (
    <section className="certificates-section">
      <h2>Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <img src={cert.imgUrl} alt={cert.title} />
            <p>{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;