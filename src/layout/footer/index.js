import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './footer.scss';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
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
    <footer ref={footerRef} className="main-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <div className="footer-logo">
              <div className="logo-icon">
                <div className="logo-sun"></div>
                <div className="logo-building"></div>
              </div>
              <div className="logo-text">
                <span className="logo-main">ADITYA</span>
                <span className="logo-sub">INFRA AND CONSTRUCTION</span>
              </div>
            </div>
            <p className="footer-description">
              ADITYA INFRA AND CONSTRUCTION was instituted as a major operational enterprise 
              in the construction and infrastructure industry, delivering excellence and 
              innovation in every project we undertake.
            </p>
          </div>

          <div className="footer-section footer-contact">
            <h3 className="footer-title">Contact Information</h3>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Address:</strong>
                <p>
                  ADITYA INFRA AND CONSTRUCTION<br />
                  Level 1, Business Park<br />
                  Dubai South<br />
                  Dubai, United Arab Emirates
                </p>
              </div>
              <div className="contact-item">
                <strong>Email:</strong>
                <p>info@adityainfra.com</p>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong>
                <p>+971 4 XXX XXXX</p>
              </div>
            </div>
          </div>

          <div className="footer-section footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li><a href="/about">About Us</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/career">Career</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/press">Press & Media</a></li>
              <li><a href="/suppliers">Suppliers</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            Copyright © {new Date().getFullYear()} ADITYA INFRA AND CONSTRUCTION | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

