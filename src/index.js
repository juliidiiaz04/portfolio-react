import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Main';  // Ajustá esta ruta si es necesario

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);