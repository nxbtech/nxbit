import './styles/secondCards.scss';

function SecondCard({ title, content, color }) {
    return (
        <div className="secondCard" style={{ backgroundColor: color }}>
            <div className="secondCard__title">
                <h4>{title}</h4>
            </div>
            <div className="secondCard__content">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default SecondCard;