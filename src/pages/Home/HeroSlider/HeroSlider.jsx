import React, { useRef, useState, useEffect } from 'react';
import './HeroSlider.scss';
import WeatherCard from '../../../components/weatherCard';
import work1 from '../../../assets/hero/work1.webp';
import work2 from '../../../assets/hero/work2.webp';
import work3 from '../../../assets/hero/work3.webp';
import work4 from '../../../assets/hero/work4.webp';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const slidesContainerRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
      title: 'Building Tomorrow\'s Infrastructure Today',
      subtitle: 'Excellence in Construction & Engineering'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80',
      title: 'Innovative Solutions for Modern Challenges',
      subtitle: 'Transforming Visions into Reality'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80',
      title: 'Quality Construction, Lasting Legacy',
      subtitle: 'Your Trusted Infrastructure Partner'
    },
    {
      id: 4,
      image: work3,
      title: 'Engineering Excellence Across the Globe',
      subtitle: 'Delivering Projects with Precision'
    }
  ];

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev);
  };

  // Update transform on slide change
  useEffect(() => {
    if (slidesContainerRef.current) {
      const translateX = -currentSlide * 100;
      slidesContainerRef.current.style.transform = `translateX(${translateX}%)`;
    }
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section ref={sliderRef} className="hero-slider">
      <div className="slider-container">
        <div className="slider-wrapper">
          <ul ref={slidesContainerRef} className="slider-slides">
            {slides.map((slide, index) => (
              <li
                key={slide.id}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="slide-overlay"></div>
                <div className="slide-content">
                  <h1 className="slide-title">{slide.title}</h1>
                  <p className="slide-subtitle">{slide.subtitle}</p>
                  <button className="cta-button">Explore Our Projects</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Buttons */}
        <button className="slider-nav prev" onClick={prevSlide} aria-label="Previous slide">
          <span>‹</span>
        </button>
        <button className="slider-nav next" onClick={nextSlide} aria-label="Next slide">
          <span>›</span>
        </button>

        <div className='weather-container'>
          <WeatherCard />
        </div>

        {/* Dots Indicator */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;

