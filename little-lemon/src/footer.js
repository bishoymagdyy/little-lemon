import React from 'react';
import './footer.css'; // Create this file for styling
import logo from './photo/logo.jpg'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={logo} alt="logo" className="logo-img" />
            </div>
            <div className="footer-content">
                {/* Doormat Navigation */}
                <div className="footer-section">
                    <h3>Doormat Navigation</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
                {/* Contact Information */}
                <div className="footer-section">
                    <h3>Contact</h3>
                    <ul>
                        <li>123 Lemon Street, Chicago</li>
                        <li>(312) 555-1234</li>
                        <li>contact@littlelemon.com</li>
                    </ul>
                </div>
                {/* Social Media Links */}
                <div className="footer-section">
                    <h3>Social Media</h3>
                    <div>
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
            </div>
        </footer>
    )
}

export default Footer;