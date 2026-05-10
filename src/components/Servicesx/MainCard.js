import './styles/mainCard.scss';

function MainCard({ title, content }) {
    return (
        <div className="mainCard">
            <div className="mainCard__title">
                <h4>{title}</h4>
            </div>
            <div className="mainCard__content">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default MainCard;