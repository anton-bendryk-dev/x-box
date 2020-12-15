import React from 'react'
import GamePageTemplate from './gamePageTemplate';
const GameData = [
    {
        title:'Call of Duty: WWII',
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
                    gameDescriptionImg1,
                    gameDescriptionImg2
                        }) => (
                            <GamePageTemplate
                                title = {title}
                                gameDescriptionImg1 = {gameDescriptionImg1}
                                gameDescriptionImg2 = {gameDescriptionImg2}
                            />
                        ))
                    }
        </section>
    )
}
export default CoDpage