import React, { useState } from "react";
import '../styles/components/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav-container">
      <a href="/">
        <img id="nav-logo" src="/logo.png" alt="Logo" />
      </a>
      <div className="hamburger" onClick={handleMenuToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`links${menuOpen ? ' open' : ''}`}>
        <a className="link" href="/">Home</a>
        <a className="link" href="/contact">Contact</a>
        <a className="link" href="/services">Services</a>
      </div>
    </div>
  );
}
