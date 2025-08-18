import React from "react";
import '../styles/components/Footer.css';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-large">
        <span>CW Jackson Construction LLC</span>
        <span>Contact: info@cwjackson.com | (555) 123-4567</span>
        <span>123 Main St, Anytown, USA</span>
      </div>
      <div className="footer-small">
        <span>© 2025 CW Jackson Construction LLC</span>
      </div>
    </div>
  );
}
