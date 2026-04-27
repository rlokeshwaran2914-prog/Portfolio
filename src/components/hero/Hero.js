import React from 'react'
import './Hero.css'
import profile from "../../assets/profile.png";

const Hero = () => {
  return (
    <div id='about' className='hero'>
      <div className='hero-left'>
        <img src={profile} alt='profile' />
        </div>

      <div className='hero-right'>
        <h1>Hey! I’m Lokeshwaran</h1>
        <p>
          I am a full-stack developer passionate about turning ideas into functional
          digital experiences and creating immersive, animation-rich interfaces with
          React, Flask, and MongoDB. I thrive on blending technical precision with
          aesthetic impact.
        </p>

        <div className='hero-action'>
          <div className='hero-resume'>My resume</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
