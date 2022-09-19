import designer from './photo2.png';
import './NameTag.css';

const NameTag  = () => {
    return (
        <div className="name-tag">
            <div className="name-tag-header-line">
                <img src={designer} alt="designer" />
                <div className="designer">
                    <p className="designer-name">Aliza Webber</p>
                    <p className="designer-title">Interior designer</p>
                </div>
            </div>
            <h2 className="name-tag-content-line">
                Designed in 2020 by Aliza Webber
            </h2>
        </div>
    )
}

export default NameTag;