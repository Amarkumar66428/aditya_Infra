import React, { useEffect } from 'react';
import Layout from '../../../layout';
import './whyJoin.scss';

const WhyJoin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const reasons = [
    {
      id: 1,
      title: 'Career Growth',
      description: 'We invest in our employees\' professional development with training programs, certifications, and clear career progression paths.',
      icon: '📈'
    },
    {
      id: 2,
      title: 'Innovative Projects',
      description: 'Work on cutting-edge projects that shape the future of infrastructure and construction.',
      icon: '🚀'
    },
    {
      id: 3,
      title: 'Collaborative Culture',
      description: 'Join a team that values collaboration, creativity, and open communication.',
      icon: '🤝'
    },
    {
      id: 4,
      title: 'Competitive Compensation',
      description: 'We offer competitive salaries and comprehensive benefits packages.',
      icon: '💰'
    },
    {
      id: 5,
      title: 'Work-Life Balance',
      description: 'We understand the importance of balancing work and personal life.',
      icon: '⚖️'
    },
    {
      id: 6,
      title: 'Diverse Opportunities',
      description: 'Explore diverse roles across various departments and project types.',
      icon: '🌍'
    }
  ];

  return (
    <Layout>
      <div className="career-why-join-page">
        <div className="page-hero">
          <div className="hero-content">
            <h1 className="hero-title">Why Join Us</h1>
            <p className="hero-subtitle">Build Your Career with Industry Leaders</p>
          </div>
        </div>

        <div className="content-container">
          <section className="intro-section">
            <div className="section-content">
              <h2 className="section-title">A Place to Grow</h2>
              <p className="section-text">
                At Aditya Infra and Construction, we believe that our people are our greatest asset. 
                We're committed to creating an environment where talented individuals can thrive, grow, 
                and make a meaningful impact. Join us and be part of building the future.
              </p>
            </div>
          </section>

          <section className="reasons-section">
            <h2 className="section-title">Why Choose Us</h2>
            <div className="reasons-grid">
              {reasons.map((reason, index) => (
                <div key={reason.id} className="reason-card">
                  <div className="reason-icon">{reason.icon}</div>
                  <h3 className="reason-title">{reason.title}</h3>
                  <p className="reason-description">{reason.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Start Your Journey?</h2>
              <p className="cta-text">
                Explore our current job openings and find the perfect opportunity to grow with us.
              </p>
              <a href="/career/jobs" className="cta-button">View Job Openings</a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default WhyJoin;

