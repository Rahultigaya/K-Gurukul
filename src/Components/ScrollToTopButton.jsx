import React, { useEffect, useState } from "react";
import './Navbar/ScrollToTopButton.css';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300); // show after scrolling
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        visible && (
            <button className="scroll-to-top fa fa-long-arrow-up" onClick={scrollToTop}>
            </button>
        )
    );
};

export default ScrollToTopButton;
