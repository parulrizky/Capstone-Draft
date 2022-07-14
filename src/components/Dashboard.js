import React from 'react';
import '../App.css';
import './Dashboard.css';


function HeroSection() {
  return (
    <div className='hero-container'>
    <video src='/videos/video-1.webm' autoPlay loop muted />
    {/*<p>What is going on today??</p>*/}
    <p>What is going on today??</p>
    </div>
  );
}

export default HeroSection;
