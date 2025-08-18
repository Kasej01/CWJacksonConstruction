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
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/contact">Services</a>
      </div>
    </div>
  );
}
