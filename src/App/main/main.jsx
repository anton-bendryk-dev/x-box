import React from 'react'
import DefaultPage from './defaultPage/defaultPage'
import { Route } from 'react-router-dom';
import Games from './defaultPage/games/games';
import DesignLab from './defaultPage/designLab/designLab';
const Main = () => {
    return (
        <main>
            <Route exact path="/" component={DefaultPage}/>
            <Route exact path="/Games" component={Games}/>
            <Route exact path="/Consoles" component={DesignLab}/>
        </main>
    )
}

export default Main