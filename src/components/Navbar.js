import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {

  const [active, setActive] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (sectionId) => {
    setActive(sectionId);
    setMenuOpen(false); // close menu on click

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll shrink
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="nav-logo" />

      {/* Hamburger */}
      <div 
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li>
          <a href="#about"
            className={active === 'about' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleClick('about'); }}>
            About
          </a>
        </li>

        <li>
          <a href="#skills"
            className={active === 'skills' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleClick('skills'); }}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects"
            className={active === 'projects' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleClick('projects'); }}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact"
            className={active === 'contact' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleClick('contact'); }}>
            Connect with me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;