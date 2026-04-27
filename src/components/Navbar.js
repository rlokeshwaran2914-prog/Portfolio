import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (sectionId) => {
    setActive(sectionId);
    setMenuOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <>
      <div className="navbar">
        <img src={logo} alt="Logo" className="nav-logo" />

        <div
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li><a onClick={() => handleClick('about')}>About</a></li>
          <li><a onClick={() => handleClick('skills')}>Skills</a></li>
          <li><a onClick={() => handleClick('projects')}>Projects</a></li>
          <li><a onClick={() => handleClick('contact')}>Connect with me</a></li>
        </ul>
      </div>

      {/* BACKDROP (click to close menu) */}
      {menuOpen && (
        <div
          className="backdrop"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;