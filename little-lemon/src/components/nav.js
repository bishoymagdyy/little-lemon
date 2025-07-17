import '../style.css';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Nav(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return(
        <nav>
            <ul className="nav-links">
                <li><Link to="../home">Home</Link></li>
                <li><Link to ="/about">About</Link></li>
                <li><Link to="/specials">Menu</Link></li>
                <li><Link to="/Reservation">Reservation</Link></li>
                <li><Link to="/Order online">Order online</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </ul>
            <button
                className='hamburger'
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label='toggle menu'
            >
                <FaBars />
            </button>
            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;