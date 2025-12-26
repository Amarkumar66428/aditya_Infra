import React, { useEffect } from 'react';
import Layout from '../../../layout';
import './upcoming.scss';

const Upcoming = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Smart City Development',
      location: 'Dubai, UAE',
      expectedStart: 'Q2 2024',
      description: 'Revolutionary smart city project integrating IoT, AI, and sustainable technologies for modern urban living.',
      features: ['Smart Infrastructure', 'IoT Integration', 'Sustainable Design']
    },
    {
      id: 2,
      title: 'Coastal Resort Complex',
      location: 'Abu Dhabi, UAE',
      expectedStart: 'Q3 2024',
      description: 'Luxury coastal resort featuring premium accommodations, entertainment facilities, and world-class amenities.',
      features: ['Luxury Resort', 'Coastal Location', 'Entertainment']
    },
    {
      id: 3,
      title: 'Technology Park',
      location: 'Dubai, UAE',
      expectedStart: 'Q4 2024',
      description: 'State-of-the-art technology park designed for innovation, collaboration, and cutting-edge business solutions.',
      features: ['Tech Hub', 'Innovation Center', 'Modern Design']
    },
    {
      id: 4,
      title: 'Transportation Hub',
      location: 'Sharjah, UAE',
      expectedStart: 'Q1 2025',
      description: 'Integrated transportation hub connecting multiple modes of transport with modern facilities and services.',
      features: ['Multi-Modal', 'Modern Facilities', 'Connectivity']
    }
  ];

  return (
    <Layout>
      <div className="projects-upcoming-page">
        <div className="page-hero">
          <div className="hero-content">
            <h1 className="hero-title">Upcoming Projects</h1>
            <p className="hero-subtitle">Shaping Tomorrow's Infrastructure</p>
          </div>
        </div>

        <div className="content-container">
          <section className="projects-section">
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={project.id} className="project-card">
                  <div className="project-header">
                    <div className="upcoming-badge">Upcoming</div>
                    <div className="project-start">{project.expectedStart}</div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-location">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {project.location}
                    </p>
                    <p className="project-description">{project.description}</p>
                    <div className="project-features">
                      {project.features.map((feature, idx) => (
                        <span key={idx} className="feature-tag">{feature}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Upcoming;

