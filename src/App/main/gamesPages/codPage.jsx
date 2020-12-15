import React from 'react'
import GamePageTemplate from './gamePageTemplate';

const GameData = [
    {
        title:'Call of Duty: WWII',
        video: './videos/CoD.mp4',
        gameDescriptionImg1: './images/img.png',
        gameDescriptionImg2: './images/img.png'
    }
]
const CoDpage = () => {
    return(
        <section className="cod-page">
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
export default CoDpage