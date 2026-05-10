import React from 'react';
import logo from '../components/Images/logo-nxb.png'; // Assure-toi que le chemin est correct
import '../styles/underDevelopment.scss'; // Assure-toi d'ajouter le style CSS correspondant

const UnderDevelopment = () => {
  return (
    <div className="under-development">
      {/* Logo et texte en haut à gauche */}
      <div className="under-development__header">
        <img src={logo} alt="Nexabridge Logo" className="under-development__logo" />
      
      </div>

      {/* Contenu principal */}
      <div className="under-development__content">
        <h1>Version mobile en cours de développement</h1>
        <p>Nous travaillons actuellement sur la version mobile du site pour une meilleure expérience utilisateur.</p>
      </div>
    </div>
  );
};

export default UnderDevelopment;