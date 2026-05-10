import React from 'react';
import logo from '../components/Images/logo-nxb.png'; // Assure-toi que le chemin est correct
import '../styles/loader.scss'; // Assure-toi d'ajouter le style CSS correspondant

const Loader = () => {
  return (
    <div className="loader">
      <img src={logo} alt="Nexabridge Logo" className="loader__logo" />
      <div className="loader__text">
        {Array.from("NEXABRIDGE").map((letter, index) => (
          <span key={index} className="loader__letter">{letter}</span>
        ))}
      </div>
    </div>
  );
};

export default Loader;