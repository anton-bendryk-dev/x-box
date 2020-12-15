import React from 'react'
import { Slide  } from "react-slideshow-image"

const SlideTop = () => {
    return (
    <section>
        <Slide easing="ease">
        <div className="each-slide">
            <div className="banner slide-image1">
                <h2>Star Wars Battlefront II</h2>
                <div className="btn-container">
                    <div className="btn green-btn"><a href="/">Watch Trailer</a></div>
                    <div className="btn explore-games"><a href="/">Explore Games</a></div>
                </div>
            </div>
        </div>
        <div className="each-slide">
            <div className="banner slide-image2">
            <h2>Call of Duty: WWII</h2>
                <div className="btn-container">
                    <div className="btn green-btn"><a href="/" >Watch Trailer</a></div>
                    <div className="btn explore-games"><a href="/">Explore Games</a></div>
                </div>
            </div>
        </div>
        <div className="each-slide">
            <div className="banner slide-image3">
            <h2>Forza Motorsport 7</h2>
                <div className="btn-container">
                    <div className="btn green-btn"><a href="/">Watch Trailer</a></div>
                    <div className="btn explore-games"><a href="/">Explore Games</a></div>
                </div>
            </div>
        </div>
        </Slide>
    </section>
);
};

export default SlideTop;
