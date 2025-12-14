import React, { useState } from 'react';
import { FaUserCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa'; 
import './members.css';
import president from '../assets/President.jpg';
import photo1 from '../assets/Senior_member1.jpg';
import photo2 from '../assets/Senior_member2.jpg';
import photo3 from '../assets/Senior_member3.jpg';
import photo4 from '../assets/Senior_member4.jpg';
import photo5 from '../assets/Club_member1.jpg';
import photo6 from '../assets/Club_member2.jpg';

import president2 from '../assets/President2.jpg';
import photo7 from '../assets/Senior_member3.jpg';
import photo8 from '../assets/Club_member1.jpg';
import photo9 from '../assets/Club_member2.jpg';

// Add a fallback image import if you have one, or use FaUserCircle 
// const defaultUserPhoto = '/path/to/default/user.jpg'; 

// ------------------ DATA (Kept same for functionality) ------------------
const pastPresident = {
  name: "Jaya Harini T",
  year: "2024",
  photo: president, 
  members: [
    {name: "Dharanidharan", role: "Super Senior", photo: photo1 },
    { name: "Vidula", role: "Super Senior", photo: photo2 },
    { name: "Kavin", role: "Senior Member", photo: photo3 },
    { name: "Eswara Prathyuksha", role: "Senior Member", photo: photo4 },
    { name: "Kali Raja", role: "Club Member", photo: photo5 },
    { name: "Harini", role: "Club Member", photo: photo6 }
  ]
};

const newPresident = {
  name: "Eswara Prathyuksha K S",
  year: "2025",
  photo: president2,
  members: [
    { name: "Kavin", role: "Senior Member", photo: photo7 },
    { name: "Kali Raja", role: "Club Member", photo: photo8 },
    { name: "Harini", role: "Club Member", photo: photo9 }
  ]
};

// ------------------ COMPONENT ------------------

export default function Members() {
  const [openBox, setOpenBox] = useState(null);

  const toggleBox = (boxName) => {
    setOpenBox(openBox === boxName ? null : boxName);
  };
  
  // Function to handle image error by swapping the source to a fallback icon
  const handleImageError = (e) => {
    e.target.onerror = null; // prevents infinite loop
    e.target.style.display = 'none'; // hide the broken <img> tag
    // You could replace it with a styled div containing FaUserCircle here if preferred
  };

  const renderPresidentCard = (presidentData, boxKey) => {
    const isOpen = openBox === boxKey;
    const Icon = isOpen ? FaChevronUp : FaChevronDown;
    
    return (
      <div className={`president-card-box ${isOpen ? 'is-open' : ''}`} onClick={() => toggleBox(boxKey)}>
        
        {/* Clickable Header Area */}
        <div className="president-header">
            <div className="photo-wrapper">
                <img
                  src={presidentData.photo}
                  className="president-photo"
                  alt={presidentData.name}
                  onError={handleImageError} // Add error handler
                />
            </div>

            <div className="president-info">
                <h3 className="president-name">{presidentData.name}</h3>
                <p className="president-year">({presidentData.year})</p>
                <div className="expand-indicator">
                    <Icon className="toggle-icon" />
                    <span className="toggle-text">{isOpen ? 'Hide Team' : 'View Team'}</span>
                </div>
            </div>
        </div>

        {/* Expandable Member List */}
        {isOpen && (
          <div className="expandable-member-grid">
            {presidentData.members.map((m, i) => (
              <div key={i} className="member-item">
                <div className="member-photo-circle">
                    <img 
                        src={m.photo} 
                        alt={m.name} 
                        onError={handleImageError} // Add error handler
                    />
                </div>
                <p className="member-name-small"><strong>{m.name}</strong></p>
                <p className="member-role-small">{m.role}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="members-container">

      <h1 className="page-title">
        <span className="gradient-text">Adas Club Leadership Archives</span>
      </h1>
      <p className="page-subtitle">
        Click on a president to view the team that built the club's legacy during their tenure.
      </p>

      <div className="leadership-archive">
        {renderPresidentCard(newPresident, "new")}
        {renderPresidentCard(pastPresident, "past")}
      </div>
    </div>
  );
}