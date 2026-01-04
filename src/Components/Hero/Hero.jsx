import React, { useEffect, useState } from "react";
import "./Hero.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { students } from '../../Constant';

const Hero = () => {
    // const images = ["/owner.png", "/java.jpg", "/ver.png"];
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % students.length);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="hero">
            <div className="hero-bg"></div>
            {/* <div className="students-track">
                <div className="student-card">This Year's Top 3 Featured Below</div>
                <div className="student-card">This Year's Top 3 Featured Below</div>
                <div className="student-card">This Year's Top 3 Featured Below</div>
                <div className="student-card">This Year's Top 3 Featured Below</div>
                <div className="student-card">This Year's Top 3 Featured Below</div>
                <div className="student-card">This Year's Top 3 Featured Below</div>
            </div> */}
            <div className="hero-content-wrapper">
                <div className="hero-left">
                    <img
                        src={students[index].image}
                        alt={students[index].name}
                        className="student-img"
                    />

                    <div className={`student-badge ${students[index].badge}`}>
                        <span className="rank">{students[index].rank}</span>
                        <span className="name">{students[index].name}</span>
                    </div>
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