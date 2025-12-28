import React, { useEffect } from 'react';
import Layout from '../../../layout';
import './completed.scss';

const Completed = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Luxury Residential Complex',
      location: 'Dubai, UAE',
      year: '2023',
      description: 'Award-winning residential complex with 500+ units, featuring world-class amenities and sustainable design.',
      highlights: ['LEED Certified', '500+ Units', 'Award Winner']
    },
    {
      id: 2,
      title: 'Business District Tower',
      location: 'Abu Dhabi, UAE',
      year: '2023',
      description: '50-story commercial tower with state-of-the-art facilities and smart building technology.',
      highlights: ['50 Stories', 'Smart Building', 'Commercial']
    },
    {
      id: 3,
      title: 'Shopping Mall Development',
      location: 'Sharjah, UAE',
      year: '2022',
      description: 'Modern shopping mall with 200+ retail outlets, entertainment zones, and parking for 2000+ vehicles.',
      highlights: ['200+ Outlets', '2000+ Parking', 'Entertainment']
    },
    {
      id: 4,
      title: 'Hospital Infrastructure',
      location: 'Dubai, UAE',
      year: '2022',
      description: 'Comprehensive hospital infrastructure project with advanced medical facilities and patient care areas.',
      highlights: ['500 Beds', 'Advanced Facilities', 'Medical']
    },
    {
      id: 5,
      title: 'Educational Campus',
      location: 'Dubai, UAE',
      year: '2021',
      description: 'Modern educational campus with multiple buildings, sports facilities, and sustainable features.',
      highlights: ['Multi-Building', 'Sports Facilities', 'Sustainable']
    },
    {
      id: 6,
      title: 'Industrial Complex',
      location: 'Dubai, UAE',
      year: '2021',
      description: 'Large-scale industrial complex with manufacturing facilities and logistics infrastructure.',
      highlights: ['Large Scale', 'Manufacturing', 'Logistics']
    }
  ];

  return (
    <Layout>
      <div className="projects-completed-page">
        <div className="page-hero">
          <div className="hero-content">
            <h1 className="hero-title">Completed Projects</h1>
            <p className="hero-subtitle">Our Legacy of Excellence</p>
          </div>
        </div>

        <div className="content-container">
          <section className="projects-section">
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={project.id} className="project-card">
                  <div className="project-header">
                    <div className="project-year">{project.year}</div>
                    <div className="completed-badge">Completed</div>
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
                    <div className="project-highlights">
                      {project.highlights.map((highlight, idx) => (
                        <span key={idx} className="highlight-tag">{highlight}</span>
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

export default Completed;





