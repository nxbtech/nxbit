import React from 'react';
import '../About/styles/aboutImg.scss'; // Assure-toi de créer les styles correspondants
import ExampleImage from '../Images/toulouse2.jpg'; // Remplace par ton image

const NexabridgeRight = () => {
  return (
    <div className="nexabridge-page__right">
      {/* Conteneur strict pour l'image */}
      <div className="nexabridge-page__image-container">
        <img src={ExampleImage} alt="Illustration Toulouse" className="nexabridge-page__image" />
      </div>

     
    </div>
  );
};

export default NexabridgeRight;