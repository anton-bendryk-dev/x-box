import React from 'react'
import GamePageTemplate from './gamePageTemplate';

const GameData = [
    {
        title:'STEEP',
        video: './videos/Steep.mp4',
        gameDescriptionImg1: './images/prevyu.jpg',
        gameDescriptionImg2: './images/maxresdefault4.jpg'
    }
]
const SteepPage = () => {
    return(
        <section className="steep-page">
            {
                GameData.map(({
                    title,
                    video,
                    gameDescriptionImg1,
                    gameDescriptionImg2
                        }) => (
                            <GamePageTemplate
                                title = {title}
                                video = {video}
                                gameDescriptionImg1 = {gameDescriptionImg1}
                                gameDescriptionImg2 = {gameDescriptionImg2}
                            />
                        ))
                    }
        </section>
    )
}
export default SteepPage