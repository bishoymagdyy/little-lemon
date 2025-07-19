import React from 'react';
import '../style.css'; // Create this file for styling
import footer from '../photo/footer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={footer} alt="logo" className="footer-logo-img"  />
            </div>
            <div className="footer-nav">
                <h4>Doormat Navigation</h4>
                <ul>
                    <li><Link to="/" end>Home</Link></li>
                    <li><Link to="/components/about">About</Link></li>
                    <li><Link to="/components/specials">Menu</Link></li>
                    <li><Link to="/components/bookingPage">Reservations</Link></li>
                    <li><Link to="#">Order Online</Link></li>
                    <li><Link to="#">Login</Link></li>
                </ul>
            </div>
            <div className="footer-contact">
                <h4>Contact</h4>
                <ul>
                    <li>123 Lemon Street, Chicago</li>
                    <li>(312) 555-1234</li>
                    <li>contact@littlelemon.com</li>
                </ul>
            </div>
            <div className="footer-social">
                <h4>Social Media</h4>
                <div className="footer-icon">
                    <a href="https://facebook.com" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://twitter.com" aria-label="Twitter">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;