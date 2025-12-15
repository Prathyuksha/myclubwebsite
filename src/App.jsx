import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";


// Use relative paths instead of absolute paths
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Members from './components/Members.jsx';
import Events from './components/Events.jsx';
import Contact from './components/Contact.jsx';


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
