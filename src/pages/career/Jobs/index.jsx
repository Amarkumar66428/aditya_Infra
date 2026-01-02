import React, { useEffect } from 'react';
import Layout from '../../../layout';
import './jobs.scss';
import SecondaryHero from '../../../components/secondaryHero';

const Jobs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Project Manager',
      department: 'Project Management',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '8+ years',
      description: 'Lead and manage large-scale construction projects from inception to completion.'
    },
    {
      id: 2,
      title: 'Site Engineer',
      department: 'Engineering',
      location: 'Abu Dhabi, UAE',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Oversee on-site construction activities and ensure quality standards are met.'
    },
    {
      id: 3,
      title: 'Quantity Surveyor',
      department: 'Cost Management',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Manage project costs, prepare estimates, and handle procurement processes.'
    },
    {
      id: 4,
      title: 'Safety Officer',
      department: 'Health & Safety',
      location: 'Sharjah, UAE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Ensure compliance with safety regulations and maintain safe working environments.'
    },
    {
      id: 5,
      title: 'Architect',
      department: 'Design',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Design innovative and sustainable building solutions for various projects.'
    },
    {
      id: 6,
      title: 'Construction Supervisor',
      department: 'Operations',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Supervise construction teams and coordinate daily site operations.'
    }
  ];

  return (
    <Layout>
      <SecondaryHero title="Job Openings" subtitle="Join Our Growing Team" />
      <div className="career-jobs-page">
        <div className="content-container">
          <section className="intro-section">
            <div className="section-content">
              <h2 className="section-title">Current Opportunities</h2>
              <p className="section-text">
                We're always looking for talented individuals to join our team. Explore our current 
                job openings and find the perfect opportunity to grow your career with us.
              </p>
            </div>
          </section>

          <section className="jobs-section">
            <div className="jobs-grid">
              {jobOpenings.map((job, index) => (
                <div key={job.id} className="job-card">
                  <div className="job-header">
                    <h3 className="job-title">{job.title}</h3>
                    <span className="job-type">{job.type}</span>
                  </div>
                  <div className="job-details">
                    <div className="job-detail-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{job.location}</span>
                    </div>
                    <div className="job-detail-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{job.department}</span>
                    </div>
                    <div className="job-detail-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  <p className="job-description">{job.description}</p>
                  <a href="/career/apply" className="apply-button">Apply Now</a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Jobs;





