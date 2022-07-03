import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
    <video src='/videos/video-1.webm' autoPlay loop muted />
    <h1>BREAKING NEWS</h1>
    <p>What is going on today??</p>
    <div className='hero-btns'>
        {/*<Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>*/}
      </div>
    </div>
  );
}

export default HeroSection;
