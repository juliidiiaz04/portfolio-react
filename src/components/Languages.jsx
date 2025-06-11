import React from 'react';
import './Languages.css';

const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Intermediate' },
];

const Languages = () => {
  return (
    <section className="languages-section">
      <h2>Languages</h2>
      <ul className="languages-list">
        {languages.map((lang, index) => (
          <li key={index} className="language-item">
            <strong>{lang.name}</strong>: {lang.level}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Languages;
