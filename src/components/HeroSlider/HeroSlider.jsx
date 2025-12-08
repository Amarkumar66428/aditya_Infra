import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './HeroSlider.scss';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const slidesRef = useRef([]);
  const autoSlideIntervalRef = useRef(null);

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
      image: 'https://images.unsplash.com/photo-1541976590-ef5298c55b13?w=1920&q=80',
      title: 'Engineering Excellence Across the Globe',
      subtitle: 'Delivering Projects with Precision'
    }
  ];

  useEffect(() => {
    // Initialize slider animation
    if (slidesRef.current.length > 0) {
      gsap.set(slidesRef.current, { opacity: 0, scale: 1.1 });
      gsap.to(slidesRef.current[currentSlide], {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power2.out'
      });
    }
  }, []);

  useEffect(() => {
    // Auto-slide functionality
    const startAutoSlide = () => {
      autoSlideIntervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    };

    const stopAutoSlide = () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };

    startAutoSlide();

    // Pause on hover
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('mouseenter', stopAutoSlide);
      slider.addEventListener('mouseleave', startAutoSlide);
    }

    return () => {
      stopAutoSlide();
      if (slider) {
        slider.removeEventListener('mouseenter', stopAutoSlide);
        slider.removeEventListener('mouseleave', startAutoSlide);
      }
    };
  }, [currentSlide]);

  const goToSlide = (index) => {
    if (index === currentSlide) return;

    const prevSlide = slidesRef.current[currentSlide];
    const nextSlide = slidesRef.current[index];

    // Animate out current slide
    gsap.to(prevSlide, {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: 'power2.in',
      onComplete: () => {
        // Animate in next slide
        gsap.fromTo(
          nextSlide,
          { opacity: 0, scale: 1.05 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out'
          }
        );
      }
    });

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

  return (
    <section ref={sliderRef} className="hero-slider">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            ref={(el) => (slidesRef.current[index] = el)}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-subtitle">{slide.subtitle}</p>
              <button className="cta-button">Explore Our Projects</button>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button className="slider-nav prev" onClick={prevSlide} aria-label="Previous slide">
          <span>‹</span>
        </button>
        <button className="slider-nav next" onClick={nextSlide} aria-label="Next slide">
          <span>›</span>
        </button>

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

