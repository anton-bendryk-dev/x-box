import React from 'react'

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
                        <a href="/" className="facebook"></a>
                        <a href="/" className="twitter"></a>
                        <a href="/" className="instagram"></a>
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