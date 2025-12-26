import React, { useEffect } from 'react';
import Layout from '../../layout';
import './suppliers.scss';

const Suppliers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supplierCategories = [
    {
      id: 1,
      title: 'Construction Materials',
      description: 'High-quality building materials including cement, steel, concrete, and aggregates.',
      icon: '🏗️'
    },
    {
      id: 2,
      title: 'Electrical & Plumbing',
      description: 'Comprehensive electrical and plumbing supplies for all construction needs.',
      icon: '⚡'
    },
    {
      id: 3,
      title: 'HVAC Systems',
      description: 'Heating, ventilation, and air conditioning systems and components.',
      icon: '❄️'
    },
    {
      id: 4,
      title: 'Finishing Materials',
      description: 'Premium finishing materials including tiles, paints, fixtures, and fittings.',
      icon: '✨'
    },
    {
      id: 5,
      title: 'Safety Equipment',
      description: 'Complete range of safety equipment and personal protective gear.',
      icon: '🛡️'
    },
    {
      id: 6,
      title: 'Heavy Machinery',
      description: 'Construction machinery, equipment rental, and maintenance services.',
      icon: '🚜'
    }
  ];

  const benefits = [
    'Competitive pricing and flexible payment terms',
    'Quality assurance and certification compliance',
    'Reliable delivery and logistics support',
    'Technical support and consultation services',
    'Long-term partnership opportunities',
    'Sustainable and eco-friendly product options'
  ];

  return (
    <Layout>
      <div className="suppliers-page">
        <div className="page-hero">
          <div className="hero-content">
            <h1 className="hero-title">Suppliers</h1>
            <p className="hero-subtitle">Partnering with Excellence</p>
          </div>
        </div>

        <div className="content-container">
          <section className="intro-section">
            <div className="section-content">
              <h2 className="section-title">Become Our Partner</h2>
              <p className="section-text">
                At Aditya Infra and Construction, we value strong partnerships with suppliers who share 
                our commitment to quality, innovation, and sustainability. We work with trusted suppliers 
                to ensure the highest standards in all our projects.
              </p>
            </div>
          </section>

          <section className="categories-section">
            <h2 className="section-title">Supplier Categories</h2>
            <div className="categories-grid">
              {supplierCategories.map((category, index) => (
                <div key={category.id} className="category-card">
                  <div className="category-icon">{category.icon}</div>
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-description">{category.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="benefits-section">
            <div className="benefits-content">
              <h2 className="section-title">Why Partner With Us</h2>
              <div className="benefits-list">
                {benefits.map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    <div className="benefit-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="benefit-text">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="contact-section">
            <div className="contact-content">
              <h2 className="section-title">Interested in Partnering?</h2>
              <p className="section-text">
                If you're a supplier looking to partner with us, we'd love to hear from you. 
                Please contact our procurement team to discuss opportunities.
              </p>
              <a href="/contact" className="contact-button">
                Contact Procurement Team
              </a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Suppliers;

