import React from 'react'
import GamePageTemplate from './gamePageTemplate';

const GameData = [
    {
        title:'Destiny 2',
        video: './videos/Destiny2.mp4',
        gameDescriptionImg1: './images/Destiny2.jpg',
        gameDescriptionImg2: './images/maxresdefault.jpg'
    }
]
const DestinyPage = () => {
    return(
        <section className="destiny-page">
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
export default DestinyPage