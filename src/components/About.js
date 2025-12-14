import React from "react";
import { FaRocket, FaLightbulb, FaHandsHelping, FaCodeBranch } from 'react-icons/fa';
import "./about.css";
// import teamMember1 from '../assets/team1.jpg'; // Placeholder images

function About() {
  const coreValues = [
    { icon: <FaLightbulb />, title: "Innovation", description: "Fostering creative thinking and exploring new technologies." },
    { icon: <FaHandsHelping />, title: "Collaboration", description: "Believing that great ideas are built together, across disciplines." },
    { icon: <FaCodeBranch />, title: "Skill Development", description: "Providing resources for continuous learning and practical application." },
  ];

  const teamMembers = [
    { name: "S. Ava", role: "President / Lead Developer", bio: "Passionate about AI & scalable systems." /* image: teamMember1 */ },
    { name: "J. Ben", role: "Vice President / Events Lead", bio: "Drives community engagement and hackathon organization." /* image: teamMember2 */ },
    { name: "L. Chloe", role: "Design & Outreach", bio: "Focuses on user experience and visual branding." /* image: teamMember3 */ },
  ];

  return (
    <div className="about-container">
      
      {/* 🚀 Hero Section - Mission Statement */}
      <section className="about-hero-section">
        <div className="mission-content">
          <FaRocket className="mission-icon" />
          <h1 className="about-title">
            Unlocking Potential in the **Digital Frontier**
          </h1>
          <p className="about-subtitle">
            Adas Club is a vibrant community dedicated to empowering students
            with the skills, knowledge, and network to drive technological change.
            Established in 2023, we're building the future, one project at a time.
          </p>
        </div>
      </section>

      {/* 💡 Core Values Section */}
      <section className="core-values-section">
        <h2 className="section-heading">Our Core Values</h2>
        <div className="values-grid">
          {coreValues.map((value, index) => (
            <div key={index} className="value-card">
              <div className="card-icon-wrapper">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 👥 Team Section */}
      <section className="team-section">
        <h2 className="section-heading">Meet the **Catalysts**</h2>
        <p className="team-intro">
          The leadership team behind Adas Club, dedicated to fostering growth and collaboration.
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card">
              {/* <img src={member.image} alt={member.name} className="team-photo" /> */}
              <div className="team-photo-placeholder"></div> {/* Placeholder for photo */}
              <h4 className="member-name">{member.name}</h4>
              <p className="member-role">{member.role}</p>
              <p className="member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🤝 Final CTA (Consistent with Home Page) */}
      <section className="final-cta-section">
        <div className="cta-content">
          <h2>Ready to **Connect**?</h2>
          <p>Join our platform and start contributing to cutting-edge projects.</p>
          <a href="/join" className="cta-button final-cta">
            Join the Adas Network
          </a>
        </div>
      </section>

    </div>
  );
}

export default About;