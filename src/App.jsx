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

  // ❗ ALWAYS call hooks at top level (not inside if)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5 sec
    return () => clearTimeout(timer);
  }, []);

  // show loader first
  if (loading) {
    return (
      <div className="loader">
        <h1>Techmindz Digital Consulting...</h1>
      </div>
    );
  }

  // after loading → show app
  return (
    <Router>

      <nav className="nav">
        <div className="logo">Techmindz Digital Consulting</div>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/training">Training</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <button
  className="dark-btn"
  onClick={() => document.body.classList.toggle("dark")}
>
  🌙
</button>


      </nav>

     <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/services" element={<Services/>}/>
  <Route path="/training" element={<Training/>}/>
  <Route path="/careers" element={<Careers/>}/>
  <Route path="/contact" element={<Contact/>}/>

  {/* ⭐ NEW ADMIN ROUTE */}
  <Route path="/admin" element={<Admin/>}/>
</Routes>


      {/* WhatsApp */}
      <a
        href="https://wa.me/917845049711"
        className="whatsapp"
        target="_blank"
      >
        WhatsApp
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/techmindzindia?igsh=MTZwM3N5ajltZ2I0dg=="
        className="instagram"
        target="_blank"
      >
        📸
      </a>

    </Router>
  );
}

export default App;
