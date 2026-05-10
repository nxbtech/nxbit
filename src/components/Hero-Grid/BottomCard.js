import './styles/bottomCard.scss';
import WhiteArrow from '../Images/icons/white-arrow.png';

function BottomCard({ title, content, color, onClick }) { // Ajout de la prop onClick
    return (
        <div className="bottomCard" style={{ backgroundColor: color }} onClick={onClick}> {/* Ajout de onClick */}
            <div className="bottomCard__title">{title}</div>
            <div className="bottomCard__content">{content}</div>
            <div className="bottomCard__icon">
                <img src={WhiteArrow} alt="Flèche blanche" />
            </div>
        </div>
    );
}

export default BottomCard;