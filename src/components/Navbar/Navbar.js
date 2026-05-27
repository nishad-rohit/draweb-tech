import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Industries', id: 'industries' },
  { label: 'Contact', id: 'contact' },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <button className="navbar__brand" onClick={() => handleNav('home')}>
          <div className="navbar__logo">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="17,2 31,9.5 31,24.5 17,32 3,24.5 3,9.5" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" strokeWidth="1.5"/>
              <polygon points="17,7 26,12 26,22 17,27 8,22 8,12" fill="rgba(56,189,248,0.18)" stroke="#38bdf8" strokeWidth="1"/>
              <circle cx="17" cy="17" r="4.5" fill="#38bdf8"/>
            </svg>
          </div>
          <span className="navbar__brand-name">
            TechNova <span className="navbar__brand-accent">Solutions</span>
          </span>
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id}>
              <button className="navbar__link" onClick={() => handleNav(id)}>{label}</button>
            </li>
          ))}
          <li className="navbar__links-cta">
            <button className="navbar__cta" onClick={() => handleNav('contact')}>Get Started</button>
          </li>
        </ul>

        <button className="navbar__cta navbar__cta--desktop" onClick={() => handleNav('contact')}>
          Get Started
        </button>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
