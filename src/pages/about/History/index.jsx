import React, { useEffect } from 'react';
import Layout from '../../../layout';
import './history.scss';

const History = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    {
      year: '2010',
      title: 'Foundation',
      description: 'Aditya Infra and Construction was established with a vision to transform the construction industry through innovation and excellence.',
      icon: '🏗️'
    },
    {
      year: '2013',
      title: 'First Major Project',
      description: 'Successfully completed our first major infrastructure project, establishing our reputation for quality and reliability.',
      icon: '🏆'
    },
    {
      year: '2016',
      title: 'Regional Expansion',
      description: 'Expanded operations across the region, taking on larger and more complex projects while maintaining our commitment to excellence.',
      icon: '🌍'
    },
    {
      year: '2019',
      title: 'Sustainability Initiative',
      description: 'Launched our comprehensive sustainability program, integrating green building practices into all our projects.',
      icon: '🌱'
    },
    {
      year: '2022',
      title: 'Technology Integration',
      description: 'Embraced cutting-edge construction technology, including BIM, AI, and IoT solutions to enhance project efficiency.',
      icon: '💻'
    },
    {
      year: '2024',
      title: 'Industry Leadership',
      description: 'Recognized as a leading infrastructure company, with multiple award-winning projects and a growing portfolio of satisfied clients.',
      icon: '⭐'
    }
  ];

  return (
    <Layout>
      <div className="about-history-page">
        <div className="page-hero">
          <div className="hero-content">
            <h1 className="hero-title">Our History</h1>
            <p className="hero-subtitle">A Journey of Growth and Excellence</p>
          </div>
        </div>

        <div className="content-container">
          <section className="intro-section">
            <div className="section-content">
              <h2 className="section-title">Our Journey</h2>
              <p className="section-text">
                Since our inception, Aditya Infra and Construction has been on a remarkable journey 
                of growth, innovation, and achievement. From humble beginnings to becoming a trusted 
                name in the construction industry, our history is marked by dedication, hard work, and 
                an unwavering commitment to excellence.
              </p>
            </div>
          </section>

          <section className="timeline-section">
            <h2 className="section-title">Milestones</h2>
            <div className="timeline">
              {milestones.map((milestone, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="marker-icon">{milestone.icon}</div>
                    <div className="marker-line"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-year">{milestone.year}</div>
                    <h3 className="timeline-title">{milestone.title}</h3>
                    <p className="timeline-description">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="achievements-section">
            <h2 className="section-title">Key Achievements</h2>
            <div className="achievements-grid">
              <div className="achievement-card">
                <div className="achievement-number">500+</div>
                <div className="achievement-label">Projects Completed</div>
              </div>
              <div className="achievement-card">
                <div className="achievement-number">15+</div>
                <div className="achievement-label">Years of Experience</div>
              </div>
              <div className="achievement-card">
                <div className="achievement-number">200+</div>
                <div className="achievement-label">Team Members</div>
              </div>
              <div className="achievement-card">
                <div className="achievement-number">50+</div>
                <div className="achievement-label">Awards Won</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default History;

