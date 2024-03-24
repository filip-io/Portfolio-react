import { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import fnLogo from '../assets/fnlogo.jpg'

export const Layout = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleMenuItemClick = () => {
        setIsChecked(false);
    };

    return (
        <div className="page-container">
            <header className="navigation">
                <NavLink to="/">
                    <img src={fnLogo} alt="Filip Nilsson logo" className="fn-logo" />
                </NavLink>
                <nav>
                    <input type="checkbox" id="nav-toggle" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                    <ul className="menu">
                        <li><NavLink to="/" onClick={handleMenuItemClick}>Home</NavLink></li>
                        <li><NavLink to="/aboutme" onClick={handleMenuItemClick}>About me</NavLink></li>
                        <li><NavLink to="/projects" onClick={handleMenuItemClick}>Projects</NavLink></li>
                        <li><NavLink to="/experience" onClick={handleMenuItemClick}>Experience</NavLink></li>
                        <li><NavLink to="/education" onClick={handleMenuItemClick}>Education</NavLink></li>
                        <li><NavLink to="/contact" onClick={handleMenuItemClick}>Contact</NavLink></li>
                    </ul>
                </nav>
                <div className="ham-menu">
                    <label htmlFor="nav-toggle">
                        <i className="fa-solid fa-bars"></i>
                    </label>
                </div>
            </header>
            <Outlet />
            <footer className="footer-container">
                <div>
                    <p>&copy; {new Date().getFullYear()} Filip Nilsson</p>
                </div>
                <div className="footer-list">
                    <ul>
                        <li><a href="https://github.com/filip-io" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://linkedin.com/in/filip-nilsson-37a61a51" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};