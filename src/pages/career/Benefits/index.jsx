import React, { useEffect } from 'react';
import Layout from '../../../layout';
import './benefits.scss';
import SecondaryHero from '../../../components/secondaryHero';

const Benefits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      id: 1,
      title: 'Health Insurance',
      description: 'Comprehensive health insurance coverage for you and your family.',
      icon: '🏥'
    },
    {
      id: 2,
      title: 'Retirement Plans',
      description: 'Competitive retirement savings plans to secure your future.',
      icon: '💰'
    },
    {
      id: 3,
      title: 'Paid Time Off',
      description: 'Generous vacation and sick leave policies for work-life balance.',
      icon: '🏖️'
    },
    {
      id: 4,
      title: 'Professional Development',
      description: 'Training programs, certifications, and continuous learning opportunities.',
      icon: '📚'
    },
    {
      id: 5,
      title: 'Flexible Work Options',
      description: 'Flexible working hours and remote work options where applicable.',
      icon: '⏰'
    },
    {
      id: 6,
      title: 'Performance Bonuses',
      description: 'Recognition and rewards for outstanding performance and achievements.',
      icon: '🎯'
    },
    {
      id: 7,
      title: 'Employee Wellness',
      description: 'Wellness programs, gym memberships, and health initiatives.',
      icon: '💪'
    },
    {
      id: 8,
      title: 'Team Building',
      description: 'Regular team events, outings, and activities to foster camaraderie.',
      icon: '🎉'
    }
  ];

  return (
    <Layout>
      <SecondaryHero title="Employee Benefits" subtitle="Taking Care of Our Team" />
      <div className="career-benefits-page">
        <div className="content-container">
          <section className="intro-section">
            <div className="section-content">
              <h2 className="section-title">Comprehensive Benefits Package</h2>
              <p className="section-text">
                We believe in taking care of our employees. Our comprehensive benefits package is 
                designed to support your health, financial well-being, and professional growth.
              </p>
            </div>
          </section>

          <section className="benefits-section">
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={benefit.id} className="benefit-card">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="additional-section">
            <div className="additional-content">
              <h2 className="section-title">Additional Perks</h2>
              <div className="perks-list">
                <div className="perk-item">Company-sponsored events and celebrations</div>
                <div className="perk-item">Employee referral bonus program</div>
                <div className="perk-item">Professional memberships and subscriptions</div>
                <div className="perk-item">Parking and transportation allowances</div>
                <div className="perk-item">Employee assistance programs</div>
                <div className="perk-item">Career counseling and mentorship</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Benefits;





