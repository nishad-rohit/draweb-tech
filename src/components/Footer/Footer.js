import React from 'react';
import './Footer.css';

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

const Footer = () => (
  <footer className="footer">
    <div className="footer__top-line" />
    <div className="footer__inner">
      {/* Brand col */}
      <div className="footer__brand">
        <button className="footer__logo" onClick={() => scrollTo('home')}>
          <svg width="30" height="30" viewBox="0 0 34 34" fill="none">
            <polygon points="17,2 31,9.5 31,24.5 17,32 3,24.5 3,9.5" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" strokeWidth="1.5"/>
            <polygon points="17,7 26,12 26,22 17,27 8,22 8,12" fill="rgba(56,189,248,0.18)" stroke="#38bdf8" strokeWidth="1"/>
            <circle cx="17" cy="17" r="4.5" fill="#38bdf8"/>
          </svg>
          <span>TechNova <span className="footer__brand-accent">Solutions</span></span>
        </button>
        <p className="footer__tagline">
          Building secure, scalable, and intelligent digital solutions for enterprises across the globe.
        </p>
      </div>

      {/* Navigation */}
      <div className="footer__col">
        <h4 className="footer__col-title">Navigation</h4>
        <ul className="footer__links">
          {['home', 'about', 'services', 'industries', 'contact'].map(id => (
            <li key={id}>
              <button onClick={() => scrollTo(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div className="footer__col">
        <h4 className="footer__col-title">Services</h4>
        <ul className="footer__links">
          <li><span>Web App Development</span></li>
          <li><span>Mobile Apps</span></li>
          <li><span>UI/UX Design</span></li>
          <li><span>Cloud Solutions</span></li>
          <li><span>AI & Automation</span></li>
        </ul>
      </div>

      {/* Contact quick */}
      <div className="footer__col">
        <h4 className="footer__col-title">Contact</h4>
        <ul className="footer__links footer__links--contact">
          <li>Business Village, Deira, Dubai</li>
          <li>hello@technovasolutions.com</li>
          <li>+971 4 123 4567</li>
        </ul>
      </div>
    </div>

    <div className="footer__bottom">
      <p className="footer__copy">
        &copy; {new Date().getFullYear()} TechNova Solutions. All rights reserved.
      </p>
      <p className="footer__legal">
        Privacy Policy &nbsp;·&nbsp; Terms of Service
      </p>
    </div>
  </footer>
);

export default Footer;
