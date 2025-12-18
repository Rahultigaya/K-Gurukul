import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { LOGO } from '../../Constant';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // 👇 new helper function
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <header className="navbar">
      <div className="nav-left">
        <img src={LOGO} alt="K-Gurukul Logo" className="logo" style={{ width: "50px", height: "50px" }} />

        <h1 className="logo-text">KGurukul’s</h1>
      </div>
      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <a href="#home" onClick={handleNavClick} style={{ color: "#e8ecc0ff" }} >
            <i className="fa fa-home" title="Home"></i>
            {isMenuOpen && <span className="nav-label"> Home</span>}
          </a>
        </li>

        <li>
          <a href="#about-us" onClick={handleNavClick} style={{ color: "#e8ecc0ff" }} >
            <i className="fa fa-user" title="About Us" ></i>
            {isMenuOpen && <span className="nav-label"> About Us</span>}
          </a>
        </li>

        <li>
          <a href="#product" onClick={handleNavClick} style={{ color: "#e8ecc0ff" }} >
            <i className="fa fa-book" title="Courses" ></i>
            {isMenuOpen && <span className="nav-label"> Courses</span>}
          </a>
        </li>

        <li>
          <a href="#contact-us" onClick={handleNavClick} style={{ color: "#e8ecc0ff" }} >
            <i className="fa fa-phone" title="Contact" ></i>
            {isMenuOpen && <span className="nav-label"> Contact</span>}
          </a>
        </li>
        <li>
          <a href="#blog" onClick={handleNavClick} style={{ color: "#e8ecc0ff" }} >
            <i className="fa fa-th-large" title="Blog" ></i>
            {isMenuOpen && <span className="nav-label"> Blog</span>}
          </a>
        </li>
        {/* <li>
          <a href="https://api.whatsapp.com/send/?phone=919082187414&text=*Thank%20You%20for%20Ordering%20With%20Us*%0ASize+-+%0AColour+-+%0AAddress+-+%0ALandmark+-+%0APincode+-+%0A%0ATeam+*INWENS*&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" onClick={handleNavClick}>
            <i className="fa fa-shopping-cart" style={{ color: "red" }} title="Order Now"></i>
            {isMenuOpen && <span className="nav-label"> Order Now</span>}
          </a>
        </li> */}
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'rotate1' : ''}`} style={{ backgroundColor: "orange" }}></div>
        <div className={`bar ${isMenuOpen ? 'fade' : ''}`} style={{ backgroundColor: "yellow" }}></div>
        <div className={`bar ${isMenuOpen ? 'rotate2' : ''}`} style={{ backgroundColor: "green" }}></div>
      </div>
    </header >
  );
};

export default Navbar; 