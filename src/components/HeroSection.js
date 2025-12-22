import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/images/background.jpg';

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        {
            title: "MOKASH CRYSTALS",
            subtitle: "Help the Needy, Support the Elderly and Guide the Youth"
        },
        {
            title: "MOKASH CRYSTALS",
            subtitle: "Values beyond Imaginations"
        }
    ];

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slides.length - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : 0));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Optional: Auto-slide functionality
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         goToNextSlide();
    //     }, 5000);
    //     return () => clearInterval(interval);
    // }, [currentIndex]);

    return (
        <section
            className="hero-section"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
            }}
        >
            <div className="container">
                <div className="hero-slides" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div className="hero-slide" key={index}>
                            <h2 style={{ color: 'white' }}>{slide.title}</h2>
                            <h3 style={{ color: 'white' }}>{slide.subtitle}</h3>
                        </div>
                    ))}
                </div>
                <div className="slider-nav">
                    <button className="prev-slide" onClick={goToPrevSlide}>&#10094;</button>
                    <div className="pagination-dots">
                        {slides.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            ></span>
                        ))}
                    </div>
                    <button className="next-slide" onClick={goToNextSlide}>&#10095;</button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
