import React from "react";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            {/* FIXED BACKGROUND */}
            <div className="hero-bg"></div>

            {/* CONTENT */}
            <div className="hero-content-wrapper">
                <div className="hero-left">
                    <img
                        src="/owner.png"
                        alt="Owner Photo"
                    />
                </div>

                <div className="hero-right">
                    <img
                        src="/dashboard.png"
                        alt="Computer Photo"
                    />
                    <h1>A New Way to Learn</h1>
                    <p>
                        KGurukul helps you enhance your skills, expand your knowledge
                        and prepare for real-world challenges.
                    </p>

                    {/* <button className="hero-btn">
                        Create Account <i className="fa fa-arrow-right"></i>
                    </button> */}
                </div>
            </div>

            {/* DIAGONAL CUT */}
            <div className="hero-diagonal"></div>
        </section>
    );
};

export default Hero;