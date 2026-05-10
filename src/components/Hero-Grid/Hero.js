import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrincipalCard from './PrincipalCard.js';
import TopCard from './TopCard.js';
import BottomCard from './BottomCard.js';
import '../Hero-Grid/styles/hero.scss';

function Home() {
  const navigate = useNavigate();

  // Fonction pour faire défiler vers la section "Contact"
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      setTimeout(() => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }, 100); 
    }
  };

  // Fonction pour naviguer vers la page "Nexabridge"
  const goToNexabridge = () => {
    navigate('/nexabridge');
  };

  return (
    <div className="home-grid">
      {/* Carte principale */}
      <div className="principal-card">
        <PrincipalCard 
          title="Nexabridge" 
          subtitle="Votre consultant indépendant pour des solutions en développement web, mobile, gestion de projet et SEO."
          backgroundImage="../images/principal-bg.jpg"
        />
      </div>

      {/* Section des services */}
      <div className="top-card">
        <TopCard 
          title="Nos Services"
          subtitle="Développement web et mobile, gestion de projet, SEO et plus encore."
          content="Nous fournissons des solutions sur mesure pour accompagner vos projets numériques de bout en bout."
          backgroundImage="../images/services-bg.jpg"
        />
      </div>

      {/* Carte À Propos */}
      <div className="bottom-card1">
        <BottomCard 
          title="À Propos" 
          content="Découvrez notre parcours et nos valeurs." 
          color="#9372FF" 
          onClick={goToNexabridge} // Navigation vers la page Nexabridge
        />
      </div>

      {/* Carte Contact */}
      <div className="bottom-card2">
        <BottomCard 
          title="Contact" 
          content="Besoin d'aide ? Parlons de vos projets." 
          color="#FF8200" 
          onClick={scrollToContact} // Scrolling vers la section Contact
        />
      </div>
    </div>
  );
}

export default Home;