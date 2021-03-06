import React from 'react'
import {Link} from 'react-router-dom';
import logo from './images/Group.png'
const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Link to='/' className="logo"><img src={logo} alt='X-box'/></Link>
            </div>
            <div className="menu-container">
                    <div className="menu-button">
                        <Link to='/Games' className="navigation">Games<span className="arrow"></span></Link>
                        <div className="drop-menu">
                            <Link to='/CoDpage'>Call of Duty: WWII</Link>
                            <Link to='/DestinyPage'>Destiny 2</Link>
                            <Link to='/SteepPage'>STEEP</Link>
                            <Link to='/ForzaPage'>Forza Motorsport 7</Link>
                            <Link to='/StarWarsPage'>Star Wars Battlefront II</Link>
                        </div>
                    </div>
                    <div className="menu-button">
                        <Link to='/Consoles' className="navigation">Consoles<span className="arrow"></span></Link>
                        <div className="drop-menu">
                            <Link to='/Games'>Design Yours</Link>
                            <Link to='/Consoles'>Explore Consoles & Accessories</Link>
                        </div>
                    </div>
                    <div className="menu-button">
                        <Link to='/' className="navigation">Community</Link>
                    </div>
            </div>
            <div className="search-container">
                <div className="search">
                    <input type="text" placeholder="Search"></input>
                </div>
            </div>
            <div className="user-container">
                <span className="user-icon"></span>
                <Link to="/">My XBOX<span className="arrow"></span></Link>
            </div>
        </header>
    )
}

export default Header