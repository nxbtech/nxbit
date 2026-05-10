import React from 'react';
import NexabridgeCarousel from '../components/About/AboutCarousel'; // Import du carousel
import NexabridgeRight from '../components/About/AboutImg'; // Import de la partie droite (image avec cartes)
import '../styles/nexabridge.scss'; // Styles de la page

const Nexabridge = () => {
  return (
    <div className="nexabridge-page">
      {/* Partie gauche - carousel */}
      <div className="nexabridge-page__left">
        <NexabridgeCarousel />
      </div>

      {/* Partie droite - image avec cartes superposées */}
      <div className="nexabridge-page__right">
        <NexabridgeRight />
      </div>
    </div>
  );
};

export default Nexabridge;