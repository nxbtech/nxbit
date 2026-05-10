import './styles/content.scss';

function ServiceContent({ title, content }) {
    return (
        <div className="serviceContent">
            <div className="serviceContent__title">
                <h2>{title}</h2>
            </div>
            <div className="serviceContent__content">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default ServiceContent;