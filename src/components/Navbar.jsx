import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2 className="logo">Techmindz</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/training">Training</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
