import React from 'react'
import GamePageTemplate from './gamePageTemplate';

const GameData = [
    {
        title:'Forza Motorsport 7',
        video: './videos/FM7.mp4',
        gameDescriptionImg1: './images/Forza7.jpg',
        gameDescriptionImg2: './images/maxresdefault3.jpg'
    }
]
const ForzaPage = () => {
    return(
        <section className="forza-page">
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
export default ForzaPage