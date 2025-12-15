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
    </div>
  );
}

export default About;