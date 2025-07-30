import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">Mi Portafolio!</Link>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link></li>
        <li><Link to="/aboutme" onClick={() => setIsOpen(false)}>Sobre mí</Link></li>
        <li><Link to="/projects" onClick={() => setIsOpen(false)}>Proyectos</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contacto</Link></li>
      </ul>
    </nav>
  );
}
