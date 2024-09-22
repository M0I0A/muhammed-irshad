import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero ">
        <div className='headline'>
            We create award <br /> winning websites
        </div>
        <div className='desc'>
        Based in San Francisco, we’re a digital products design & development studio that’s passionate about the creation and high applicability of digital experiences.
        </div>
      
      <button className="arrow-button">Explore 
      </button>
    </div>
  );
};

export default Hero;
