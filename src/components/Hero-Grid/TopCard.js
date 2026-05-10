import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la navigation
import './styles/topCard.scss';
import imageTopCard from '../Images/img-nxb2.jpg';
import Arrow from '../Images/icons/icone-arrow.png';

function TopCard() {
    const navigate = useNavigate(); // Utilisation de useNavigate pour rediriger

    // Fonction pour rediriger vers la page Blog
    const goToBlog = () => {
        navigate('/blog');
    };

    return (
        <div className="topCard" onClick={goToBlog} style={{ cursor: 'pointer' }}> {/* Ajout du onClick */}
            <div className="topCard__image">
                <img src={imageTopCard} alt="Nexabridge" />
            </div>
            <div className="topCard__h3">DÉCOUVREZ NOS DERNIERS ARTICLES</div>
            <div className="topCard__title">Blog</div>
            <div className="topCard__icon">
                <img src={Arrow} alt="Icone Flèche" />
            </div>
        </div>
    );
}

export default TopCard;