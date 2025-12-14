import React, { useState } from 'react';
// Import all necessary icons
import { FaCalendarAlt, FaCode, FaRobot, FaLaptopCode, FaChevronRight } from 'react-icons/fa'; 
import './events.css';

// Map event types to a specific icon and primary accent color for a vibrant look
const eventStyles = {
    'Webinar': { icon: FaLaptopCode, color: 'var(--color-accent-blue)' },
    'Workshop': { icon: FaRobot, color: 'var(--color-accent-green)' },
    'Competition': { icon: FaCode, color: 'var(--color-accent-pink)' },
    'Coding': { icon: FaCode, color: 'var(--color-accent-pink)' },
    'Hackathon': { icon: FaLaptopCode, color: 'var(--color-accent-green)' },
    'Quiz': { icon: FaCode, color: 'var(--color-accent-blue)' },
    'Tutorial': { icon: FaLaptopCode, color: 'var(--color-accent-blue)' }, // Added Tutorial category
    'Community': { icon: FaCalendarAlt, color: 'var(--color-text-light)' },
};

function Events() {
    // 1. Event Data
    const events = [
        // 2024-2025
        { year: "2025", title: "Robot Cup Junior", desc: "Robotics competition inspiring young engineers to build and program autonomous bots.", category: "Competition", details: "A challenging two-day competition testing hardware build quality and autonomous navigation logic." },
        { year: "2024", title: "Thinkathon 2024", desc: "A 24-hour innovation challenge focusing on smart city solutions and sustainable technology.", category: "Hackathon", details: "Teams developed full prototypes addressing urban issues like traffic flow and waste management." },
        { year: "2024", title: "Bid the Bug", desc: "A white-hat hacking and cybersecurity challenge focused on identifying and mitigating vulnerabilities.", category: "Competition", details: "Participants competed to find and report security flaws in a simulated environment." },
        { year: "2024", title: "LinkedIn Workshop", desc: "Professional development session on optimizing profiles and leveraging the platform for career growth.", category: "Workshop", details: "Practical tips on networking, building a personal brand, and profile optimization for job searches." },
        { year: "2024", title: "The Interview Vault", desc: "Comprehensive mock interview series to prepare members for technical and HR rounds.", category: "Workshop", details: "Structured sessions simulating real-world interviews with personalized feedback." },
        
        // 2023
        { year: "2023", title: "AI Tools Series", desc: "Exploration and hands-on application of the latest Generative AI and ML development tools.", category: "Workshop", details: "Focused on tools like ChatGPT, Midjourney, and specific ML frameworks." },
        { year: "2023", title: "DSA Series", desc: "Intensive training sessions focused on core Data Structures and Algorithms for coding interviews.", category: "Coding", details: "Weekly deep dives into trees, graphs, dynamic programming, and competitive programming practices." },
        
        // 2022
        { year: "2022", title: "Fullstack Development", desc: "Workshop covering modern stacks, including React/Node.js, for end-to-end application building.", category: "Workshop", details: "Built a fully functional web application from the database to the user interface." },
        { year: "2022", title: "Connections", desc: "A technical and fun quiz competition testing general knowledge of tech history and current events.", category: "Quiz", details: "A fast-paced quiz with rounds on innovation, tech leaders, and viral tech news." },
        { year: "2022", title: "Tech Pongal", desc: "Annual cultural and technical event celebrating innovation and community spirit.", category: "Community", details: "A blend of traditional celebration and technology-themed games." },

        // 2021
        { year: "2021", title: "Coding Competition", desc: "An intra-club coding challenge testing problem-solving skills across various programming languages.", category: "Coding", details: "A challenging set of algorithmic problems solved over a 4-hour period." },
        { year: "2021", title: "Cloud Computing Webinar", desc: "Introduction to AWS and Azure, covering cloud architecture, services, and deployment models.", category: "Webinar", details: "Covered the basics of IaaS, PaaS, and serverless computing." },
        { year: "2021", title: "Blockchain Webinar", desc: "Deep dive into decentralized ledger technology, cryptocurrencies, and smart contracts.", category: "Webinar", details: "Explored the fundamentals of the Ethereum network and DApps." },
        { year: "2021", title: "Python Tutorial", desc: "Beginner-to-advanced tutorial series covering Python fundamentals and popular libraries like Pandas.", category: "Tutorial", details: "A comprehensive series spanning four weeks, focusing on practical data science applications." },
        { year: "2021", title: "Valentine with Computer", desc: "A creative, light-hearted event exploring the intersection of technology and human connection.", category: "Community", details: "A social event with tech-themed games and networking activities." },

        // 2020
        { year: "2020", title: "Web Dev Webinar", desc: "Foundational training on HTML, CSS, and JavaScript for aspiring frontend developers.", category: "Webinar", details: "Taught members how to create their first responsive website." },
        { year: "2020", title: "Pygame Webinar", desc: "Introduction to game development principles using the Python Pygame library.", category: "Webinar", details: "Learners created a simple 2D game from scratch." },
    ].sort((a, b) => b.year.localeCompare(a.year)); // Sort descending by year

    // 2. State to manage which event card is currently flipped
    const [flippedCard, setFlippedCard] = useState(null);

    const handleCardFlip = (index) => {
        // Toggle the flip state: if the same card is clicked, flip it back
        setFlippedCard(flippedCard === index ? null : index);
    };

    const renderEventCard = (e, i) => {
        // CORRECTION: Map style based on the 'category' key, not the 'title'
        const style = eventStyles[e.category] || eventStyles['Webinar']; 
        const IconComponent = style.icon;
        const isFlipped = flippedCard === i;
        
        // Use details if present, otherwise use the main description
        const detailContent = e.details || e.desc; 

        return (
            <div 
                key={i} 
                // Alternate positions for left/right timeline view
                className={`timeline-node ${i % 2 === 0 ? 'left' : 'right'}`}
                // Set the accent color dynamically via CSS variable
                style={{ '--accent-color': style.color }}
                onClick={() => handleCardFlip(i)}
            >
                <div className="timeline-node-dot">
                    {/* Icon uses the dynamic color */}
                    <IconComponent className="dot-icon" style={{ color: style.color }} />
                </div>
                
                {/* 3D Flip Container */}
                <div className={`event-card-3d ${isFlipped ? 'is-flipped' : ''}`}>
                    
                    {/* Front Face: Summary */}
                    <div className="card-face card-front">
                        <span className="event-category" style={{ color: style.color }}>
                            {e.category}
                        </span>
                        <h2 className="event-title">{e.title}</h2>
                        <p className="event-desc">{e.desc}</p>
                        <div className="card-footer">
                            <h4 className="event-year">{e.year}</h4>
                            <p>Click for Details <FaChevronRight /></p>
                        </div>
                    </div>
                    
                    {/* Back Face: Details */}
                    <div className="card-face card-back">
                        <h3 className="event-details-title">DETAILS</h3>
                        <p className="event-details-text">{detailContent}</p>
                        <h4 className="event-details-year">{e.year}</h4>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="events-page-container">
            
            <header className="events-header">
                <h1 className="page-title">
                    <span className="holographic-text">Adas Club Event Horizon</span>
                </h1>
                <p className="page-subtitle">A journey through our past, present, and future tech milestones.</p>
            </header>
            
            <div className="events-timeline">
                {events.map(renderEventCard)}
            </div>
            
        </div>
    );
}

export default Events;