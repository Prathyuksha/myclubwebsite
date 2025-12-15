import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaCalendarAlt, FaUsers, FaArrowRight } from 'react-icons/fa';
import './home.css';
import logo from '../assets/logo.jpg';

const Home = () => {
  return (
    <div className="home-container">

      {/* 🚀 Hero Section - Dark & Futuristic */}
      <section className="hero-section">
        <div className="hero-content">
          <img src={logo} alt="Adas Club Logo" className="club-logo" />
          <h1 className="club-title">
            <span className="gradient-text">Adas Club</span>
          </h1>
          <p className="club-tagline">
            Empowering the Next Generation of <br />
            **Innovation & Technology**
          </p>
          <div className="hero-actions">
            {/* PRIMARY CTA: Link to /contact page */}
            <Link to="/contact" className="cta-button primary-cta">
              Join the Club <FaArrowRight className="icon-right" />
            </Link>
            {/* Secondary CTA: Link to /events page */}
            <Link to="/events" className="cta-button secondary-cta">
              Upcoming Events
            </Link>
          </div>
        </div>
        {/* Futuristic background elements for visual interest */}
        <div className="hero-vfx-ring"></div>
        <div className="hero-vfx-dot"></div>
      </section>

      {/* 🌟 Features Section - Grid Layout */}
      <section className="features-section">
        <h2 className="section-heading">What We Offer</h2>
        <div className="features-grid">

          <div className="feature-card">
            <FaCode className="feature-icon" />
            <h3>Cutting-Edge Workshops</h3>
            <p>Hands-on sessions covering React, AI, Blockchain, and more.</p>
            <Link to="/workshops" className="card-link">Explore →</Link>
          </div>

          <div className="feature-card">
            <FaCalendarAlt className="feature-icon" />
            <h3>Exclusive Tech Events</h3>
            <p>Hackathons, Speaker Series, and networking opportunities.</p>
            <Link to="/events" className="card-link">See Calendar →</Link>
          </div>

          <div className="feature-card">
            <FaUsers className="feature-icon" />
            <h3>Vibrant Community</h3>
            <p>Connect with passionate developers, designers, and innovators.</p>
            <Link to="/community" className="card-link">Meet Members →</Link>
          </div>
        </div>
      </section>

      {/* 🤝 Call to Action - Final Hook */}
      <section className="join-cta-section">
        <div className="join-cta-content">
          <h2>Ready to **Innovate**?</h2>
          <p>Become a part of Adas Club and shape the future of tech.</p>
          <Link to="/contact" className="cta-button final-cta">
            Join Adas Club Today!
          </Link>
        </div>
      </section>

      {/* Footer (Simple for Home Page) */}
      <footer className="home-footer">
        <p>© {new Date().getFullYear()} Adas Club. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;