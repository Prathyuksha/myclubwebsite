import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";


// Use relative paths instead of absolute paths
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

import Home from './components/Home.js';
import About from './components/About.js';
import Members from './components/Members.js';
import Events from './components/Events.js';
import Contact from './components/Contact.js';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
