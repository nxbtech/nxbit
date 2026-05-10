import React from 'react';
import './styles/portfolioCard.scss';

const PortfolioCard = ({ title, content, img, altText, date }) => {
  // Gestion de la date et conversion en chaîne lisible par l'utilisateur
  const formattedDate = date && !isNaN(new Date(date).getTime()) 
    ? new Date(date).toLocaleDateString() 
    : 'Date non disponible';

  return (
    <div className="portfolioCard">
      <div 
        className="portfolioCard__img" 
        style={{ backgroundImage: `url(${img})` }}
        alt={altText}
      />
      <div className="portfolioCard__title">{title}</div>
      <div className="portfolioCard__content">{content}</div>
      <div className="portfolioCard__date">{formattedDate}</div>
    </div>
  );
};

export default PortfolioCard;