import React from 'react';
import ReactDOM from 'react-dom/client'; // Assure-toi que tu importes de 'react-dom/client'
import App from './App'; // Import de ton composant principal
import './index.css'; // ou le chemin vers ton fichier CSS

const rootElement = document.getElementById('root'); // Récupère l'élément DOM
const root = ReactDOM.createRoot(rootElement); // Crée le root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
