import React from 'react';
import './SoftSkills.css';

const softSkills = [
  'Trabajo en equipo',
  'Comunicación efectiva',
  'Adaptabilidad',
  'Resolución de problemas',
  'Responsabilidad',
  'Empatía',
];

const SoftSkills = () => {
  return (
    <section id="softskills" className="softskills-section">
      <h2>Soft Skills</h2>
      <ul className="softskills-list">
        {softSkills.map((skill, index) => (
          <li key={index} className="softskill-item">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default SoftSkills;