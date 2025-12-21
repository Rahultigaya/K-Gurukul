import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TypingText from './TypingText';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="about-page">

            <div className="about-section">
                <div className="about-text" data-aos="fade-right">
                    <h2 className="about-heading">
                        <TypingText />
                    </h2>
                    {/* <p className="story-text">
                        KGurukuls was born from a dream rooted in dedication and love for the nation.
                        Our founder, <b >Santoush Pan Chipdey</b>, once inspired
                        to join the Indian Army, chose another way to serve when life redirected his path.
                    </p> */}
                    <p>
                        KGurukuls was born from a dream rooted in dedication and love for the nation. Our founder, <b className="highlight-name">Santoush P Chipdey</b>, once inspired to join the Indian Army, chose another way to serve when life redirected his path. He began his journey with the Red Cross Society, and as technology emerged in India, he saw its promise long before it became a trend. With that vision, he started building strong computer foundations for young learners. Many of these students later stepped confidently into fields like IT, Computer Science, and Engineering—proving that when the base is strong, the future can rise as high as imagination allows.
                    </p>
                    <p>
                        Today, KGurukuls continues that mission, shaping curious minds into capable contributors to India’s growing technological strength.
                        {/* K-Gurukul Institute is built on a simple belief — every student has the potential to achieve excellence when given the right guidance, environment, and support. Since its founding, our institute has grown into a trusted learning center known for strong academic results, individual attention, and a commitment to student success. */}
                    </p>
                    {/* <p>

                        Our purpose is to provide a learning experience that goes beyond textbooks. We focus on developing strong fundamentals, exam confidence, discipline, and a love for learning. At KGurukul, our mission is to empower students with knowledge, skills, and values that help them excel in board exams and future studies.
                    </p>
                    <p>
                        Over the years, we have received tremendous support from parents and heartfelt testimonials from students whose success stories continue to inspire us. Many of our toppers credit KGurukul for shaping their confidence, discipline, and academic foundation.

                        We also believe in maintaining a positive and comfortable environment for learning. Our classrooms are designed for small batches, better interaction, and practical-based understanding.</p> */}
                </div>
                <div className="about-image" data-aos="fade-left">
                    <img src="/Morning Routine.png" alt="Banner" />
                </div>
            </div>
        </div >
    );
};

export default About;