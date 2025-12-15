// Contact.jsx
import React, { useState } from 'react';
import { FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import './Contact.css';

const Contact = () => {
    // 1. State for form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    // State to manage the feedback status (Sending, Success, Error)
    const [status, setStatus] = useState('');

    // 2. Handle input changes dynamically
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // 3. Handle form submission (The core real-time function)
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prevent multiple submissions while one is pending
        if (status === 'Sending...') return;

        setStatus('Sending...');

        // 🛑 CRITICAL: PASTE YOUR VERIFIED FORMSPREE URL HERE
        // Example: https://formspree.io/f/abcdefg
        const formspreeEndpoint = 'YOUR_VERIFIED_FORMSPREE_ENDPOINT_HERE';

        // --- Network Request ---
        try {
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // 4. Handle Response Status
            if (response.ok) {
                setStatus('Message Sent! We will be in touch soon.');
                setFormData({ name: '', email: '', message: '' }); // Clear form inputs
            } else {
                // If Formspree rejects the submission (status code 4xx or 5xx)
                setStatus('Failed to send message. Please double-check the Formspree setup and URL.');
            }
        } catch (error) {
            // If the browser cannot connect to Formspree at all
            setStatus('Network error. Check your connection or try again later.');
            console.error('Submission error:', error);
        }
    };


    return (
        <section id="contact" className="contact-page-container">

            <header className="contact-header">
                <h1 className="page-title">
                    <span className="holographic-text">Connect with Adas Club</span>
                </h1>
                <p className="page-subtitle">We are always ready to collaborate, answer questions, and welcome new members.</p>
            </header>

            <div className="contact-content-grid">

                {/* 1. Primary Contact Info Box */}
                <div className="contact-info-box neon-border">
                    <h3 className="box-heading">Get in Touch</h3>

                    <div className="info-item">
                        <FaMapMarkerAlt className="info-icon" />
                        <p>A.U. R.C.M., Chennai, Tamil Nadu, India</p>
                    </div>

                    <div className="info-item">
                        <FaEnvelope className="info-icon" />
                        <a href="mailto:adasclubaurcm@gmail.com" className="contact-link">
                            adasclubaurcm@gmail.com
                        </a>
                    </div>

                    <h3 className="follow-heading">Follow Us</h3>

                    <div className="social-links">
                        <a
                            href="https://www.instagram.com/adasclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon-link instagram-glow"
                        >
                            <FaInstagram className="social-icon" />
                            <span>@adasclub</span>
                        </a>
                    </div>

                </div>

                {/* 2. Real-Time Working Message Form */}
                <div className="contact-form-box neon-border">
                    <h3 className="box-heading">Send a Quick Message</h3>

                    <form className="futuristic-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="form-input"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            required
                            className="form-input"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>

                        <button
                            type="submit"
                            className="submit-button"
                            // Disable button while sending to prevent duplicates
                            disabled={status === 'Sending...'}
                        >
                            {status === 'Sending...' ? 'Transmitting...' : 'Send Transmission'}
                        </button>
                    </form>

                    {/* Status Message Display */}
                    {status && status !== 'Sending...' && (
                        <p className={`submission-status ${status.startsWith('Message Sent') ? 'success' : 'error'}`}>
                            {status}
                        </p>
                    )}
                </div>

            </div>

        </section>
    );
};

export default Contact;