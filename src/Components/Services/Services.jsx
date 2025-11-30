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
            {/* <div className="product-values">
                <h3>Our Product Values</h3>
                <div className="values-grid">
                    {values.map((item, index) => (
                        <div className="value-card" key={index}>
                            <img src={item.icon} alt={item.title} />
                            <h4>{item.title}</h4>
                        </div>
                    ))}
                </div>
            </div> */}
            <div className='services-container'>
                {Product.map((product, index) => (
                    <div key={index} className='product-card'>
                        <div className='product-carousel'>
                            <Slider {...sliderSettings}>
                                {product.images.map((img, i) => (
                                    <div key={i}>
                                        <img src={img} alt={`${product.name}-${i}`} className='carousel-img' />
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
