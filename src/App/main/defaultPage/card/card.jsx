import React from "react";
import {Link} from 'react-router-dom';

const Card = ({
    img,
    title,
    text1,
    text2,
    link,
    btnText
}) => {
    return (
    <div className="card-container">
        <div className="card">
            <div className="card-img"><img src={img} alt={title}/></div>
            <div className="card-description">
            <p className="card-title">{title}</p>
            <p className="card-text">{text1}</p>
            <p className="card-text">{text2}</p>
            <div className="card-btn">
            <Link to={link}>{btnText}</Link>
            </div>
            </div>
        </div>
    </div>
    );
};

export default Card;
