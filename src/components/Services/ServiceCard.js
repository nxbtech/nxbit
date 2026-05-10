import React from 'react';
import './styles/serviceCard.scss';

function AboutCard({ title, content, image }) {
  return (
    <div className="aboutcard">
      <div className="aboutcard__image">
        <img src={image} alt={title} className="aboutcard__image-img" />
      </div>
      <div className="aboutcard__overlay"></div>
      <div className="aboutcard__text">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <div className="aboutcard__icon">+</div> {/* Icône "+" */}
    </div>
  );
}

export default AboutCard;