import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Training from "./pages/Training";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

function App() {

  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <h1>Techmindz Digital Consulting...</h1>
      </div>
    );
  }

  return (
    <Router>

      <nav className="nav">

        {/* LEFT — LOGO */}
        <div className="logo">Techmindz Digital Consulting</div>

        {/* CENTER — NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/training" onClick={() => setMenuOpen(false)}>Training</Link></li>
          <li><Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        {/* RIGHT — THEME + HAMBURGER */}
        <div className="right-controls">

          {/* THEME BUTTON */}
          <button
            className="dark-btn"
            onClick={() => document.body.classList.toggle("dark")}
          >
            🌙
          </button>

          {/* HAMBURGER BUTTON */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/training" element={<Training/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>

      {/* WhatsApp */}
      <a
        href="https://wa.me/917845049711"
        className="whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/techmindzindia?igsh=MTZwM3N5ajltZ2I0dg=="
        className="instagram"
        target="_blank"
        rel="noreferrer"
      >
        📸
      </a>

    </Router>
  );
}

export default App;
