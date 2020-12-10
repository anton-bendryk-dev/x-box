import React from "react";

const Card = ({
    img,
    title,
    text1,
    text2,
    btnText
}) => {
    return (
    <div className="card-container">
        <div className="card">
            <div className="card-img">{img}</div>
            <div className="card-description">
            <p className="card-title">{title}</p>
            <p className="card-text">{text1}</p>
            <p className="card-text">{text2}</p>
            <div className="card-btn">
                <a href="/">{btnText}</a>
            </div>
            </div>
        </div>
    </div>
    );
};

export default Card;
