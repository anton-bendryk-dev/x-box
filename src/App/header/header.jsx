import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <a href='/' className="logo"></a>
            </div>
            <div className="menu-container">
                <div className="menu-button">
                    <a href='/'>Games<span className="arrow"></span></a>
                </div>
                <div className="menu-button">
                    <a href='/'>Consoles<span className="arrow"></span></a>
                </div>
                <div className="menu-button">
                    <a href='/'>Community</a>
                </div>
            </div>
            <div className="search-container">
                <div className="search">
                    <input type="text" placeholder="Search"></input>
                </div>
            </div>
            <div className="user-container">
                <span className="user-icon"></span>
                <a href="/">My XBOX<span className="arrow"></span></a>
            </div>
        </header>
    )
}

export default Header