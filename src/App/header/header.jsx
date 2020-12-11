import React from 'react'
import {Link} from 'react-router-dom';
import logo from './images/Group.png'
const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Link to='/' className="logo"><img src={logo} alt='logo'/></Link>
            </div>
            <div className="menu-container">
                <div className="menu-button">
                    <Link to='/Games'>Games<span className="arrow"></span></Link>
                </div>
                <div className="menu-button">
                    <Link to='/Consoles'>Consoles<span className="arrow"></span></Link>
                </div>
                <div className="menu-button">
                    <Link to='/'>Community</Link>
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