import './styles/serviceImg.scss';
import ImgService from '../Images/ServiceImg.png';

function ServiceImg() {
    return (
        <div className="serviceImg">
            <img src={ImgService} alt="Robot Image" />
            <div className="bubble-message">
                Contactez-nous pour toute question !
            </div>
        </div>
    );
}

export default ServiceImg;