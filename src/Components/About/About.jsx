import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Typewriter from "typewriter-effect";

function TypingText() {
    return (
        <h2 className="typing-heading">
            <Typewriter
                options={{
                    strings: ["Our Story", "About K-Gurukul", "Your Success Journey"],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                }}
            />
        </h2>
    );
}

// export default TypingText;

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="about-page">

            <div
                className="about-hero"
            // style={{ backgroundImage: `url('/CONFIDENCE_1.png')` }}
            >
                {/* <div className="overlay">
                    <img src="/logo_new.png" alt="INWENS Logo" className="logo" />
                    <p>Step into comfort. Walk with confidence.</p>
                </div> */}
            </div>


            <div className="about-section">
                <div className="about-text" data-aos="fade-right">
                    <h2><TypingText /></h2>
                    <p>
                        K-Gurukul Institute is built on a simple belief — every student has the potential to achieve excellence when given the right guidance, environment, and support. Since its founding, our institute has grown into a trusted learning center known for strong academic results, individual attention, and a commitment to student success.
                    </p>
                    <p>

                        Our purpose is to provide a learning experience that goes beyond textbooks. We focus on developing strong fundamentals, exam confidence, discipline, and a love for learning. At KGurukul, our mission is to empower students with knowledge, skills, and values that help them excel in board exams and future studies.
                    </p>
                    <p>
                        Over the years, we have received tremendous support from parents and heartfelt testimonials from students whose success stories continue to inspire us. Many of our toppers credit KGurukul for shaping their confidence, discipline, and academic foundation.

                        We also believe in maintaining a positive and comfortable environment for learning. Our classrooms are designed for small batches, better interaction, and practical-based understanding.</p>
                </div>
                <div className="about-image" data-aos="fade-left">
                    <img src="/NEW_BANNER.png" alt="Banner" />
                </div>
            </div>
        </div >
    );
};

export default About;