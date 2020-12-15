import React from 'react'
import GamePageTemplate from './gamePageTemplate';

const GameData = [
    {
        title:'Star Wars Battlefront II',
        video: './videos/StarWars.mp4',
        gameDescriptionImg1: './images/sw1.jpg',
        gameDescriptionImg2: './images/sw2.jpg'
    }
]
const StarWarsPage = () => {
    return(
        <section className="star-wars-page">
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
export default StarWarsPage