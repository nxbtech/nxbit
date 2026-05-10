import React from 'react';
import './styles/principalCard.scss';
import CtaButton from '../ctaButton';
import imageFirstCard from '../Images/img-nxb3.jpg';

function PrincipalCard() {
  // Fonction qui fait défiler vers la section "servicesx"
  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicesx');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="first-card">
      <div className="first-card__image">
        <img src={imageFirstCard} alt="Nexabridge" />
      </div>
      <div className="first-card__h3">EXPERT REACT</div>
      <div className="first-card__text">
        Création d'applications web et mobile sur mesure avec React.
      </div>
      <div className="first-card__button">
        <CtaButton text="NOS SERVICES" onClick={scrollToServices} />
      </div>
    </div>
  );
}

export default PrincipalCard;