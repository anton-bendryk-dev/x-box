import React from 'react';
import Card from '.././card/card';

const cardDate = [
    {
        img: './images/xbox-one-x.png',
        title:'XBOX ONE X',
        text1:'Faster Processing',
        text2:'Smoother Gameplay',
        btnText: 'Explore Consoles & Accessories'
    },
    {
        img: './images/mixer-logo.png',
        title:'mixer Streaming',
        text1:'The Next Generation',
        text2:'Of Life Game Streaming',
        btnText: 'Start Watching mixer'
    },
    {
        img: './images/gwg-img.png',
        title:'Free Games Every Month',
        text1:'Get up to $700 in',
        text2:'free games',
        btnText: 'Get Free Games'
    }
]

const Highlights = () => {
    return (
        <section className="highlights-container">
            <div className="highlights-description">
                <div className="highlights-icon"></div>
                <h2>The best value<br/><span>in games and entertainment</span></h2>
            </div>
            <div className="highlights-cards">
                {
                    cardDate.map(({
                        img,
                        title,
                        text1,
                        text2,
                        btnText
                    }) => (
                        <Card
                            img = {img}
                            title = {title}
                            text1 = {text1}
                            text2 = {text2}
                            btnText = {btnText}
                        />
                    ))
                }
            </div>
        </section>
    )
}
export default Highlights