import React from 'react'
import facebook from './images/Facebook.png'
import twitter from './images/Twitter.png'
import instagram from './images/Instagram.png'
const Footer = () => {
    return (
        <footer>
            <div className="inline-footer">
                <div className="col-w30">
                    <h3>XBOX</h3>
                    <p>Support</p>
                    <p>Contact us</p>
                    <p>Privacy & cookies </p>
                    <p>Terms of use </p>
                </div>
                <div className="col-w30">
                    <h3>Developers</h3>
                    <p>Games</p>
                    <p>Windows 10</p>
                    <p>Creators Program</p>
                    <p>Designed for XBOX</p>
                </div>
                <div className="col-w30">
                    <h3>Follow Us</h3>
                    <div className="links">
                        <a href="/" className="facebook"><img src={facebook} alt='facebook'/></a>
                        <a href="/" className="twitter"><img src={twitter} alt='twitter'/></a>
                        <a href="/" className="instagram"><img src={instagram} alt='instagram'/></a>
                    </div>
                </div>
            </div>
            <div className="inline-footer-bottom"></div>
            <div className="footer-bottom">
                <p>English (United States)</p>
                <p>© Microsoft 2017</p>
            </div>
        </footer>
    )
}

export default Footer