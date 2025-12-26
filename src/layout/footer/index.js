import React, { useEffect } from 'react';
import './footer.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MorphSVGPlugin from 'gsap/MorphSVGPlugin';

// Register ScrollTrigger for this module (safe to call multiple times)
gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

const Footer = () => {

  useEffect(() => {
    const down = 'M0-0.3C0-0.3,464,156,1139,156S2278-0.3,2278-0.3V683H0V-0.3z';
    const center = 'M0-0.3C0-0.3,464,0,1139,0s1139-0.3,1139-0.3V683H0V-0.3z';

    const trigger = ScrollTrigger.create({
      trigger: '.footer',
      start: 'top bottom',
      toggleActions: 'play pause resume reverse',
      onEnter: (self) => {
        const velocity = self.getVelocity();
        const variation = velocity / 10000;

        // Animate the SVG path without requiring MorphSVGPlugin
        gsap.fromTo(
          '#bouncy-path',
          {
            morphSVG: { d: down },
          },
          {
            duration: 2,
            morphSVG: { d: center },
            ease: `elastic.out(${1 + variation}, ${1 - variation})`,
            overwrite: true,
          }
        );
      },
    });

    // Cleanup on unmount
    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <footer className="main-footer">
      <div className="footer">
        <svg
          preserveAspectRatio="none"
          id="footer-img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2278 683"
        >
          <defs>
            <linearGradient
              id="grad-1"
              x1="0"
              y1="0"
              x2="2278"
              y2="683"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.2" stopColor="#1a1a1a"></stop>
              <stop offset="0.8" stopColor="#383b47"></stop>
            </linearGradient>
          </defs>
          <path
            className="footer-svg"
            id="bouncy-path"
            fill="url(#grad-1)"
            d="M0-0.3C0-0.3,464,156,1139,156S2278-0.3,2278-0.3V683H0V-0.3z"
          />
        </svg>
      </div>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <div className="footer-logo">
              <figure className="logo-icon">
                <img src={"/logo192.png"} alt="logo" />
              </figure>
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

