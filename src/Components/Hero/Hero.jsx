import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
            <video autoPlay muted loop className="background-video">
                {/* <source src="/home-video.mp4" type="video/mp4" /> */}
                Your browser does not support the video tag.
            </video>
            <div className="overlay" />
            <div className="hero-content">
                <p>Your journey to comfort & style starts here.</p>
                {/* <h1 style={{ color:'black' }}>Welcome to <img src="/logo_new.png" alt="INWENS Logo" className="logo" /></h1> */}
                {/* <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary">Connect With Us</a>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Our Story</a>
                </div> */}
            </div>
        </div>
    );
};

export default Hero