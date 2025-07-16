import React from 'react';
import './style.css'; // Create this file for styling
import footer from './photo/footer.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={footer} alt="logo" className="footer-logo-img"  />
            </div>
            <div className="footer-nav">
                <h4>Doormat Navigation</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
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
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;