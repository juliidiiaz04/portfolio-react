import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img
        src="/mi-foto.jpg"
        alt="Foto de Julieta Díaz"
        className="header-foto"
      />
      <h1 className="header-nombre">Julieta Díaz</h1>
      <p className="header-legajo">Legajo: 61472</p>
    </header>
  );
};

export default Header;