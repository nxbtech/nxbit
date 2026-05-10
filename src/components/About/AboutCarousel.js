import React, { useState } from 'react';
import './styles/aboutCarousel.scss';

const NexabridgeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const pages = [
    {
      title: 'NEXABRIDGE',
      content: `Nexabridge est spécialisé dans le développement d'applications web avec React. Nous accompagnons nos clients dans leur transformation digitale en offrant des solutions modernes et évolutives.`
    },
    {
      title: 'SERVICES',
      content: `Nos services incluent le développement front-end avec React, l'intégration d'API, et la gestion de projets IT. Nous aidons les entreprises à créer des expériences web performantes et sur mesure.`
    },
    {
      title: 'VALEURS',
      content: `Notre approche est centrée sur l'écoute et l'adaptation aux besoins spécifiques de chaque projet. Avec une expertise React et une grande flexibilité, nous garantissons des solutions digitales innovantes et efficaces.`
    }
  ];

  const handleClickOnProgress = (event) => {
    const progressBar = event.target;
    const boundingRect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - boundingRect.left;
    const width = boundingRect.width;
    const newIndex = Math.floor((clickX / width) * pages.length); // Calcule l'index à partir de la position du clic
    setActiveIndex(newIndex);
  };

  return (
    <div className="nexabridge-carousel">
      {/* Barre de progression cliquable au-dessus */}
      <div 
        className="nexabridge-carousel__progress" 
        onClick={handleClickOnProgress}
      >
        <div 
          className="nexabridge-carousel__progress-line"
          style={{
            width: `${(activeIndex + 1) * (100 / pages.length)}%`,
            backgroundColor: 'white' // Couleur Nexabridge
          }}
        ></div>
      </div>

      {/* Contenu du carousel en dessous de la barre de progression */}
      <div className="nexabridge-carousel__content">
        <h2>{pages[activeIndex].title}</h2>
        <p>{pages[activeIndex].content}</p>
      </div>
    </div>
  );
};

export default NexabridgeCarousel;