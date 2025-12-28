import React, { useState, useCallback, useEffect } from 'react';
import Layout from '../../../layout';
import { CircularProgress } from '@mui/material';
import './apply.scss';

const Apply = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    coverLetter: ''
  });
  const [focused, setFocused] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  }, []);

  const handleFocus = useCallback((field) => {
    setFocused(prev => ({ ...prev, [field]: true }));
  }, []);

  const handleBlur = useCallback((field, value) => {
    if (!value) {
      setFocused(prev => ({ ...prev, [field]: false }));
    }
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Application submitted:', formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      resume: null,
      coverLetter: ''
    });
    setFocused({});
  }, [formData]);

  return (
    <Layout>
      <div className="career-apply-page">
        <div className="page-hero">
          <div className="hero-content">
            <h1 className="hero-title">Apply Now</h1>
            <p className="hero-subtitle">Start Your Career Journey with Us</p>
          </div>
        </div>

        <div className="content-container">
          <section className="apply-section">
            <div className="apply-form-container">
              <h2 className="form-title">Application Form</h2>
              <p className="form-subtitle">
                Fill out the form below to apply for a position. We'll review your application and get back to you soon.
              </p>

              <form className="apply-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label
                      htmlFor="firstName"
                      className={`form-label ${focused.firstName || formData.firstName ? 'focused' : ''}`}
                    >
                      First Name<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onFocus={() => handleFocus('firstName')}
                      onBlur={(e) => handleBlur('firstName', e.target.value)}
                      placeholder="Your first name"
                      required
                      className="form-input"
                    />
                    <div className="input-underline"></div>
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="lastName"
                      className={`form-label ${focused.lastName || formData.lastName ? 'focused' : ''}`}
                    >
                      Last Name<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onFocus={() => handleFocus('lastName')}
                      onBlur={(e) => handleBlur('lastName', e.target.value)}
                      placeholder="Your last name"
                      required
                      className="form-input"
                    />
                    <div className="input-underline"></div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label
                      htmlFor="email"
                      className={`form-label ${focused.email || formData.email ? 'focused' : ''}`}
                    >
                      Email<span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={(e) => handleBlur('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="form-input"
                    />
                    <div className="input-underline"></div>
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="phone"
                      className={`form-label ${focused.phone || formData.phone ? 'focused' : ''}`}
                    >
                      Phone<span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => handleFocus('phone')}
                      onBlur={(e) => handleBlur('phone', e.target.value)}
                      placeholder="+971 XX XXX XXXX"
                      required
                      className="form-input"
                    />
                    <div className="input-underline"></div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label
                      htmlFor="position"
                      className={`form-label ${focused.position || formData.position ? 'focused' : ''}`}
                    >
                      Position Applied For<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      onFocus={() => handleFocus('position')}
                      onBlur={(e) => handleBlur('position', e.target.value)}
                      placeholder="e.g., Senior Project Manager"
                      required
                      className="form-input"
                    />
                    <div className="input-underline"></div>
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="experience"
                      className={`form-label ${focused.experience || formData.experience ? 'focused' : ''}`}
                    >
                      Years of Experience<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      onFocus={() => handleFocus('experience')}
                      onBlur={(e) => handleBlur('experience', e.target.value)}
                      placeholder="e.g., 5 years"
                      required
                      className="form-input"
                    />
                    <div className="input-underline"></div>
                  </div>
                </div>

                <div className="form-group">
                  <label
                    htmlFor="resume"
                    className={`form-label ${focused.resume || formData.resume ? 'focused' : ''}`}
                  >
                    Resume/CV<span className="required">*</span>
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleChange}
                    onFocus={() => handleFocus('resume')}
                    onBlur={(e) => handleBlur('resume', e.target.files?.[0]?.name)}
                    accept=".pdf,.doc,.docx"
                    required
                    className="form-file-input"
                  />
                  {formData.resume && (
                    <div className="file-name">{formData.resume.name}</div>
                  )}
                </div>

                <div className="form-group">
                  <label
                    htmlFor="coverLetter"
                    className={`form-label ${focused.coverLetter || formData.coverLetter ? 'focused' : ''}`}
                  >
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    onFocus={() => handleFocus('coverLetter')}
                    onBlur={(e) => handleBlur('coverLetter', e.target.value)}
                    placeholder="Tell us why you're interested in this position..."
                    rows="6"
                    className="form-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <CircularProgress sx={{ color: "#fff" }} size={18} /> : 'SUBMIT APPLICATION'}
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Apply;





