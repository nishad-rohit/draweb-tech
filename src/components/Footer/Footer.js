import React from "react";
import "./Footer.css"; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Draweb Tech</h3>
          <p>Managed IT, cloud engineering, and cybersecurity services built for growth.</p>
        </div>
        <ul className="footer-links">
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Draweb Tech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
