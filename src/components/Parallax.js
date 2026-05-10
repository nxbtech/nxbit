import React from 'react';
import '../styles/parallax.scss';

const Parallax = () => {
  const imageData = [
    { 
      id: 1, 
      src: require('../components/Images/parallax.png'), 
      number: '1.', 
      title: 'FLEXIBILITÉ ET AGILITÉ', 
      text: <>Nous <span className="highlight">nous adaptons</span> à vos besoins et délais, tout en travaillant à distance pour plus de réactivité.</>
    },
    { 
      id: 2, 
      src: require('../components/Images/parllax.png'), 
      number: '2.', 
      title: 'EXPERTISE TECHNIQUE', 
      text: <>Des solutions en <span className="highlight">développement web</span> et gestion de projet pour optimiser vos projets digitaux.</>
    },
    { 
      id: 3, 
      src: require('../components/Images/3D.jpg'), 
      number: '3.', 
      title: 'PARTENAIRE DE CONFIANCE', 
      text: <>Nous vous <span className="highlight">accompagnons</span> à chaque étape de votre transformation numérique avec des solutions sur mesure.</>
    }
  ];

  return (
    <div className="parallax-container">
      {imageData.map((image) => (
        <div key={image.id} className="parallax">
          <div
            className="parallax-image"
            style={{ backgroundImage: `url(${image.src})` }}
          ></div>
          <div className="parallax-content">
            <h1 className="parallax-number">{image.number}</h1>
            <h2>{image.title}</h2>
            <p>{image.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Parallax;