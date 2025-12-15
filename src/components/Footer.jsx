import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Ada's Club. All rights reserved.</p>
      <div className="footer-links">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;