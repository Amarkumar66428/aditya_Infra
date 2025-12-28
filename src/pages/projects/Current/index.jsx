import React, { useEffect } from 'react';
import Layout from '../../../layout';
import './current.scss';

const Current = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Downtown Commercial Complex',
      location: 'Dubai, UAE',
      status: 'In Progress',
      progress: 65,
      description: 'A state-of-the-art commercial complex featuring modern office spaces, retail outlets, and parking facilities.',
      image: '/images/project1.jpg'
    },
    {
      id: 2,
      title: 'Residential Tower Project',
      location: 'Abu Dhabi, UAE',
      status: 'In Progress',
      progress: 45,
      description: 'Luxury residential tower with premium amenities, offering stunning views and modern living spaces.',
      image: '/images/project2.jpg'
    },
    {
      id: 3,
      title: 'Infrastructure Development',
      location: 'Sharjah, UAE',
      status: 'In Progress',
      progress: 80,
      description: 'Comprehensive infrastructure project including roads, utilities, and public facilities.',
      image: '/images/project3.jpg'
    },
    {
      id: 4,
      title: 'Mixed-Use Development',
      location: 'Dubai, UAE',
      status: 'In Progress',
      progress: 30,
      description: 'Innovative mixed-use development combining residential, commercial, and recreational spaces.',
      image: '/images/project4.jpg'
    }
  ];

  return (
    <Layout>
      <div className="projects-current-page">
        <div className="page-hero">
          <div className="hero-content">
            <h1 className="hero-title">Current Projects</h1>
            <p className="hero-subtitle">Building the Future, One Project at a Time</p>
          </div>
        </div>

        <div className="content-container">
          <section className="projects-section">
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <div className="image-placeholder">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="project-status-badge">{project.status}</div>
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
                    <div className="project-progress">
                      <div className="progress-header">
                        <span className="progress-label">Progress</span>
                        <span className="progress-percentage">{project.progress}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
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

export default Current;





