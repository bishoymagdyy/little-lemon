import '../style.css';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


function Nav(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return(
        <nav>
            <ul className="nav-links">
                <li><NavLink to="/" end   className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                <li><NavLink to ="/components/about"   className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
                <li><NavLink to="/components/specials"   className={({ isActive }) => isActive ? 'active' : ''}>Menu</NavLink></li>
                <li><NavLink to="/components/bookingPage"   className={({ isActive }) => isActive ? 'active' : ''}>Reservation</NavLink></li>
                <li><NavLink to="#"   className={({ isActive }) => isActive ? 'active' : ''}>Order online</NavLink></li>
                <li><NavLink to="#"   className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink></li>
            </ul>
            {/* Mobile Hamburger Icon */}
            <button
                className="hamburger-btn"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
            >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="mobile-menu-overlay">
                    <ul className="mobile-nav">
                        <li>
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) => isActive ? 'active' : ''}
                                onClick={toggleMobileMenu}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/components/about"
                                className={({ isActive }) => isActive ? 'active' : ''}
                                onClick={toggleMobileMenu}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                    to="/components/specials"
                                    className={({ isActive }) => isActive ? 'active' : ''}
                                    onClick={toggleMobileMenu}
                            >
                                Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/components/booking"
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={toggleMobileMenu}
                        >
                            Reservations
                        </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Nav;