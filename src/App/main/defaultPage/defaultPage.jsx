import React from 'react'
import SlideTop from './sliderTop/sliderTop';
import Highlights from './highlights/highlights';
import Games from './games/games';

const DefaultPage = () => {
    return (
        <div>
            <SlideTop/>
            <Highlights/>
            <Games/>
            <section>main</section>
        </div>
        
    )
}
export default DefaultPage