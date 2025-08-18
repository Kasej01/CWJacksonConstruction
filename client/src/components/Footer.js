import React from "react";
import '../styles/components/Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-row footer-brand">
          <span className="footer-title">CW Jackson Construction LLC</span>
        </div>
        <div className="footer-row footer-contact">
          <span>📍 Monteagle, TN, USA</span>
          <span>📞 (931) 841-1325</span>
          <span>✉️ Chadjcksn2@yahoo.com</span>
        </div>
        <div className="footer-row footer-service">
          <span>Serving Grundy, Franklin, Coffee, and parts of Marion counties</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 CW Jackson Construction LLC. All rights reserved.</span>
      </div>
    </footer>
  );
}
