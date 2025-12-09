import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './VideoSection.scss';

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animate video and text on scroll
    if (videoRef.current && textRef.current) {
      gsap.fromTo(
        videoRef.current,
        {
          opacity: 0,
          x: -50
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: videoRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          x: 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="video-section">
      <div className="video-container">
        <div className="video-wrapper" ref={videoRef}>
          <div className="video-embed">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="ADITYA INFRA Construction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="company-description" ref={textRef}>
          <h2 className="description-title">
            ADITYA INFRA is Known for Undertaking Super High-rise and Innovative Projects
          </h2>
          <div className="description-content">
            <p>
              ADITYA INFRA AND CONSTRUCTION Infrastructure Division has been operating in the region since 2006. 
              In these years, the division has added significant strength to the company's operation and value of return. 
              This is the result of the strong financial and technical support received from our headquarters – among 
              the most trusted brands in the construction industry.
            </p>
            <p>
              It has acquired over the years a profound corporate culture and an exceptional multi-disciplinary 
              construction practice. Our commitment to excellence, innovation, and sustainable development has made 
              us a leader in infrastructure and construction projects across the region.
            </p>
            <p>
              We specialize in delivering complex, large-scale projects with precision, quality, and on-time completion. 
              Our team of experienced engineers, architects, and construction professionals work together to transform 
              ambitious visions into remarkable realities.
            </p>
          </div>
          <div className="description-stats">
            <div className="stat-item">
              <div className="stat-number">18+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

