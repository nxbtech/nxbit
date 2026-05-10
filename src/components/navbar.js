import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Ajout de useLocation pour obtenir la page actuelle
import '../styles/navbar.scss';
import logo from '../components/Images/logo-nxb.png'; 

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Obtenez la page actuelle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fonction pour faire défiler vers les sections de la page d'accueil
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fonction pour gérer la navigation et le défilement
  const handleNavigation = (sectionId) => {
    // Si on est sur la page d'accueil
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      // Rediriger vers la page d'accueil, puis faire défiler vers la section
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100); // Petit délai pour que la page d'accueil se charge avant de faire défiler
    }
  };

  return (
    <div className="navbar minimalist">
      {/* Logo */}
      <Link to="/" className="navbar__logo">
        <img src={logo} alt="Nexabridge Logo" />
      </Link>

      {/* Menu burger pour mobile */}
      <div className={`navbar__hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Liste des liens */}
      <div className={`navbar__list ${isOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={() => handleNavigation('home')}>Accueil</li> {/* Fait défiler vers la section Home */}
          <li onClick={() => navigate('/nexabridge')}>À Propos</li> {/* Redirige vers la page Nexabridge */}
          <li onClick={() => navigate('/portfolio')}>Portfolio</li> {/* Redirige vers la nouvelle page Portfolio */}
        </ul>
      </div>

      {/* CTA minimaliste */}
      <div className="navbar__cta">
        <button onClick={() => handleNavigation('contact')} className="navbar__cta-button">Proposez un projet</button>
      </div>
    </div>
  );
}

export default NavBar;