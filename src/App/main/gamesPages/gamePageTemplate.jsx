import React from 'react'
import {Link} from 'react-router-dom';
import { Player } from 'video-react';

const GamePageTemplate = (
    {title,
    gameDescriptionImg1,
    gameDescriptionImg2,
    video,
}
) => {
    return(
        <section className="gamePageTemplate-container">
            <div className="banner game-banner-container">
                <h2>{title}</h2>
                <div className="btn-container">
                    <div className="btn green-btn"><a href="/">Order Now</a></div>
                    <div className="btn green-btn"><Link to='/Games'>More  Games</Link></div>
                </div>
            </div>
            <div className="game-trailer-container">
                <h2>{title}</h2>
                <div className="video-container">
                <Player>
                    <source src={video}/>
                </Player>
                </div>
                <div className="btn-container">
                    <div className="btn on-btn"><a href="/">Order Now</a></div>
                    <div className="btn ts-btn"><Link to='/Consoles'>Technical Specifications</Link></div>
                </div>
            </div>
            <div className="game-description">
                <div className="game-description-text">Life Advice Looking Through A Window</div>
                <div className="game-description-img">{gameDescriptionImg1}</div>
                <div className="game-description-img">{gameDescriptionImg2}</div>
                <div className="game-description-text">The Best Answers</div>
            </div>
            <div className="technical-specifications">
                <h4>Technical Specifications</h4>
                <div className="technical-specifications-text">
                    <p>Computer Hardware Desktops And Notebooks And Handhelds Oh My</p>
                    <p>For Women Only Your Computer Usage Could Cost You Your Job</p>
                    <p>Party Jokes Startling But Unnecessary</p>
                    <p>Microsoft Patch Management For Home Users</p>
                    <p>Going Wireless With Your Headphones</p>
                    <p>Get The Boot A Birds Eye Look Into Mcse Boot Camps</p>
                </div>
                <div className="ts-btn-container">
                    <div className="ts-btn"><Link to='/Consoles'>XBOX Consoles</Link></div>
                    <div className="btn-ssom"><Link to='/Consoles'>Start streaming on mixer</Link></div>
                </div>
            </div>
        </section>
    )
}
export default GamePageTemplate