import React from 'react';
import MainCard from '../components/Servicesx/MainCard';
import SecondCard from '../components/Servicesx/SecondCards';
import ServiceImg from '../components/Servicesx/ServiceImg';
import ServiceContent from '../components/Servicesx/Content';
import '../styles/servicesx.scss';

function CombinedComponent() {
  return (
    <div id="servicesx" className="combinedComponent">

      {/* Contenu de service */}
      <div className="combinedComponent__content">
        <ServiceContent 
          title="NOS PRESTATIONS"
          content="Développement web spécialisé en React et services IT sur mesure pour accélérer votre transformation digitale."
        />
      </div>

      {/* Carte principale */}
      <div className="combinedComponent__mainCard">
        <MainCard 
          title="DÉVELOPPEMENT REACT"
          content="Création d'applications web modernes, performantes et évolutives."
        />
      </div>

      {/* Première SecondCard avec fond orange */}
      <div className="combinedComponent__secondCard combinedComponent__secondCard--orange">
        <SecondCard 
          title="GESTION DE PROJETS IT"
          color="#FF8200" // Orange
        />
      </div>

      {/* Deuxième SecondCard avec fond violet */}
      <div className="combinedComponent__secondCard combinedComponent__secondCard--violet">
        <SecondCard 
          title="OPTIMISATION SEO"
          color="#9372FF" // Violet
        />
      </div>

      {/* Image de service */}
      <div className="combinedComponent__serviceImg">
        <ServiceImg />
      </div>

    </div>
  );
}

export default CombinedComponent;