import React from 'react'
import DefaultPage from './defaultPage/defaultPage'
import { Route } from 'react-router-dom';
import Games from './defaultPage/games/games';
import DesignLab from './defaultPage/designLab/designLab';
import CoDpage from './gamesPages/codPage';

const Main = () => {
    return (
        <main>
            <Route exact path="/" component={DefaultPage}/>
            <Route exact path="/Games" component={Games}/>
            <Route exact path="/Consoles" component={DesignLab}/>
            <Route exact path="/CoDpage" component={CoDpage}/>
        </main>
    )
}

export default Main