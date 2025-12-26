import React, { useEffect } from 'react';
import Layout from '../../../layout';
import './overview.scss';

const Overview = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="about-overview-page">
        <div className="page-hero">
          <div className="hero-content">
            <h1 className="hero-title">Company Overview</h1>
            <p className="hero-subtitle">Building Excellence, Creating Tomorrow</p>
          </div>
        </div>

        <div className="content-container">
          <section className="intro-section">
            <div className="section-content">
              <h2 className="section-title">Who We Are</h2>
              <p className="section-text">
                Aditya Infra and Construction is a leading infrastructure and construction company 
                dedicated to delivering exceptional projects that shape the future. With a commitment 
                to excellence, innovation, and sustainability, we have established ourselves as a 
                trusted partner in the construction industry.
              </p>
            </div>
          </section>

          <section className="values-section">
            <h2 className="section-title">Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="value-title">Excellence</h3>
                <p className="value-text">We strive for excellence in every project, ensuring the highest quality standards and client satisfaction.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="value-title">Innovation</h3>
                <p className="value-text">We embrace cutting-edge technology and innovative solutions to deliver superior results.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="value-title">Integrity</h3>
                <p className="value-text">We conduct business with honesty, transparency, and ethical practices in all our operations.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="value-title">Sustainability</h3>
                <p className="value-text">We are committed to sustainable practices that protect the environment and benefit future generations.</p>
              </div>
            </div>
          </section>

          <section className="mission-section">
            <div className="mission-content">
              <h2 className="section-title">Our Mission</h2>
              <p className="section-text">
                To be the most trusted and innovative infrastructure and construction company, 
                delivering exceptional value to our clients while contributing to sustainable 
                development and community growth.
              </p>
            </div>
          </section>

          <section className="vision-section">
            <div className="vision-content">
              <h2 className="section-title">Our Vision</h2>
              <p className="section-text">
                To lead the industry in creating world-class infrastructure solutions that 
                transform communities and set new benchmarks for quality, innovation, and 
                sustainability in construction.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Overview;

