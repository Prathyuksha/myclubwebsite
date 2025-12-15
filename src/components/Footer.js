import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Ada's Club. All rights reserved.</p>
      <div className="footer-links">
        {/* Using Link components is generally better for navigation in a React Router app, 
            but using standard <a> tags is fine for external links or if you haven't 
            imported Link here. I'll use your original <a> tags.
        */}
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;