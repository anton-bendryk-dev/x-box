import React from 'react'
import { Slide  } from "react-slideshow-image"

const SlideTop = () => {
    return (
    <section>
        <Slide easing="ease">
        <div className="each-slide">
            <div className="slide-image slide-image1">
                <h2>Star Wars<br/><p>Battlefront II</p></h2>
                <div className="slide-buttons ">
                    <div className="btn"><a href="/" className="watch-trailer-btn">Watch Trailer</a></div>
                    <div className="btn"><a href="/" className="explore-games">Explore Games</a></div>
                </div>
            </div>
        </div>
        <div className="each-slide">
            <div className="slide-image slide-image2">
            <h2>Call of Duty: WWII</h2>
                <div className="slide-buttons">
                    <div className="btn"><a href="/" className="watch-trailer-btn">Watch Trailer</a></div>
                    <div className="btn"><a href="/" className="explore-games">Explore Games</a></div>
                </div>
            </div>
        </div>
        <div className="each-slide">
            <div className="slide-image slide-image3">
            <h2>Forza Motorsport 7</h2>
                <div className="slide-buttons">
                    <div className="btn"><a href="/" className="watch-trailer-btn">Watch Trailer</a></div>
                    <div className="btn"><a href="/" className="explore-games">Explore Games</a></div>
                </div>
            </div>
        </div>
        </Slide>
    </section>
);
};

export default SlideTop;
