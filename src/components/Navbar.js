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
        <li><a onClick={() => handleClick('about')}>About</a></li>
        <li><a onClick={() => handleClick('skills')}>Skills</a></li>
        <li><a onClick={() => handleClick('projects')}>Projects</a></li>
        <li className='nav-connect' onClick={() => handleClick('contact')}>
          Connect with me
        </li>
      </ul>
    </div>
  );
};

export default Navbar;