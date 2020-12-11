import React from 'react'
import SlideTop from './sliderTop/sliderTop';
import Highlights from './highlights/highlights';
import Games from './games/games';
import DesignLab from './designLab/designLab';

const DefaultPage = () => {
    return (
        <div>
            <SlideTop/>
            <Highlights/>
            <Games/>
            <DesignLab/>
        </div>
        
    )
}
export default DefaultPage