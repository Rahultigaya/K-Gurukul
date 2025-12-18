import React from 'react';
import './Services.css';
import Slider from 'react-slick';
import Product from '../../assets/product_data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const values = [
    {
        title: 'COMFORT',
        icon: '/comfort.png',
    },
    {
        title: 'DURABILITY',
        icon: '/durable.png',
    },
    {
        title: 'VERSATILITY',
        icon: '/ver.png',
    },
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = new Date().getDay();

const Services = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };


    return (
        <div className='services'>
            <div className="stats-section">
                <div className="stats-card">
                    <div className="stat-item">
                        <div className="support-time">
                            <span className="big-24">24</span>
                            <span className="x7">X</span>
                        </div>
                        <div className="week-days">
                            {days.map((day, index) => (
                                <span
                                    key={day}
                                    className={`day ${index === today ? "active-day" : ""}`}
                                >
                                    {day}
                                </span>
                            ))}
                        </div>
                        <p className="support-label">Student Support</p>
                    </div>
                    <span className="divider" />

                    <div className="stat-item">
                        <span className="big-24">100 %</span>
                        <p>Results Every Year</p>
                    </div>
                </div>
            </div>
            <div className='services-container'>
                {Product.map((product, index) => (
                    <div key={index} className='product-card'>
                        <div className='product-carousel'>
                            <Slider {...sliderSettings}>
                                {product.images.map((img, i) => (
                                    <div key={i}>
                                        <div className="image-wrapper">
                                            <img
                                                src={img}
                                                alt={`${product.name}-${i}`}
                                                className="carousel-img"
                                            />

                                            <p className="centered">
                                                {/* <i>{product.details}</i> */}
                                                <i>{product.description}</i>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>

                        </div>
                        <div className="product-details">
                            <h4>{product.name}</h4>
                            <p><i>{product.description}</i></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default Services;
