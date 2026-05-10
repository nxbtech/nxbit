import React from 'react';
import '../styles/footer.scss'; // Assure-toi que le fichier CSS est bien configuré
import NexaLogo from '../components/Images/logo-nxb.png'; // Assure-toi du bon chemin pour l'image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        {/* Logo */}
        <img src={NexaLogo} alt="Nexabridge Logo" className="footer__logo" />

        {/* Liens */}
        <ul className="footer__links">
          <li><a href="/partnerships">Partenariats</a></li>
          <li><a href="/quote">Demander un devis</a></li>
          <li><a href="/services">Nos services</a></li>
          <li><a href="/contact">Contactez-nous</a></li>
        </ul>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Nexabridge - Tous droits réservés.</p>
        <p>
          <a href="/privacy">Politique de confidentialité</a> | <a href="/legal">Mentions légales</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;