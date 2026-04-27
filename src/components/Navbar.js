import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {

  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Portfolio Logo" className="nav-logo" />

      <ul className="nav-menu">
        <li>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleClick('about'); }}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" onClick={(e) => { e.preventDefault(); handleClick('skills'); }}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" onClick={(e) => { e.preventDefault(); handleClick('projects'); }}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleClick('contact'); }}>
            Connect with me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;