import React, { useState, useCallback } from 'react'
import Layout from '../../layout'
import './contact.scss'
import { CircularProgress } from '@mui/material'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    })
    const [focused, setFocused] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = useCallback((e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }, [])

    const handleFocus = useCallback((field) => {
        setFocused(prev => ({ ...prev, [field]: true }))
    }, [])

    const handleBlur = useCallback((field, value) => {
        if (!value) {
            setFocused(prev => ({ ...prev, [field]: false }))
        }
    }, [])

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))

        console.log('Form submitted:', formData)
        setIsSubmitting(false)

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: ''
        })
        setFocused({})
    }, [formData])

    return (
        <Layout>
            <div className="contact-us-page">
                <div className="contact-container">
                    {/* Left Section - Form */}
                    <div className="contact-form-section">
                        <h2 className="form-title">Send us a message</h2>
                        <form className="contact-form" onSubmit={handleSubmit} noValidate>
                            <div className="form-group">
                                <label
                                    htmlFor="name"
                                    className={`form-label ${focused.name || formData.name ? 'focused' : ''}`}
                                >
                                    Name<span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('name')}
                                    onBlur={(e) => handleBlur('name', e.target.value)}
                                    placeholder="Your name"
                                    required
                                    className="form-input"
                                />
                                <div className="input-underline"></div>
                            </div>

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
                                    placeholder="Your email"
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
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('phone')}
                                    onBlur={(e) => handleBlur('phone', e.target.value)}
                                    placeholder="Phone #"
                                    className="form-input"
                                />
                                <div className="input-underline"></div>
                            </div>

                            <div className="form-group">
                                <label
                                    htmlFor="company"
                                    className={`form-label ${focused.company || formData.company ? 'focused' : ''}`}
                                >
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('company')}
                                    onBlur={(e) => handleBlur('company', e.target.value)}
                                    placeholder="Company name"
                                    className="form-input"
                                />
                                <div className="input-underline"></div>
                            </div>

                            <div className="form-group">
                                <label
                                    htmlFor="message"
                                    className={`form-label ${focused.message || formData.message ? 'focused' : ''}`}
                                >
                                    Message<span className="required">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('message')}
                                    onBlur={(e) => handleBlur('message', e.target.value)}
                                    placeholder="Write your message"
                                    rows="5"
                                    required
                                    className="form-textarea"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="submit-button"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? <CircularProgress sx={{ color: "#fff" }} size={18} /> : 'SEND MESSAGE'}
                            </button>
                        </form>
                    </div>

                    {/* Right Section - Contact Info */}
                    <div className="contact-info-section">
                        <svg
                            className='contact-bg'
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 2278 683"
                        >
                            <defs>
                                <linearGradient
                                    id="grad-1"
                                    x1="0"
                                    y1="0"
                                    x2="2278"
                                    y2="683"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0.2" stopColor="#1a1a1a"></stop>
                                    <stop offset="0.8" stopColor="#383b47"></stop>
                                </linearGradient>
                            </defs>
                            <path
                                id="bouncy-path"
                                fill="url(#grad-1)"
                                d="M0-0.3C0-0.3,464,156,1139,156S2278-0.3,2278-0.3V683H0V-0.3z"
                            />
                        </svg>
                        <div>
                            <h2 className="info-title">Contact Information</h2>
                            <p className="info-description">
                                We're here to help! Reach out to us for any inquiries, support, or collaboration opportunities. Our team is ready to assist you with your infrastructure and construction needs.
                            </p>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div className="contact-text">
                                        <p>ADITYA INFRA AND CONSTRUCTION</p>
                                        <p>Level 1, Business Park, Dubai South</p>
                                        <p>Dubai, United Arab Emirates</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div className="contact-text">
                                        <p>+971 4 XXX XXXX</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div className="contact-text">
                                        <p>info@adityainfra.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactUs