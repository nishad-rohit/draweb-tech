import React from 'react';
import './Home.css';

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

const Home = () => (
  <section id="home" className="hero">
    {/* Background grid + ambient orbs */}
    <div className="hero__bg" aria-hidden="true">
      <div className="hero__bg-grid" />
      <div className="hero__bg-orb hero__bg-orb--a" />
      <div className="hero__bg-orb hero__bg-orb--b" />
    </div>

    <div className="hero__inner">
      {/* Left: copy */}
      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Enterprise IT Solutions
        </div>

        <h1 className="hero__heading">
          Building Smart Digital Solutions{' '}
          <span className="hero__heading-accent">for the Future</span>
        </h1>

        <p className="hero__sub">
          We design and develop secure, scalable, and intelligent software solutions
          for modern businesses across the globe.
        </p>

        <div className="hero__actions">
          <button className="hero-btn hero-btn--primary" onClick={() => scrollTo('services')}>
            Explore Services
          </button>
          <button className="hero-btn hero-btn--ghost" onClick={() => scrollTo('contact')}>
            Contact Us
          </button>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value">200+</span>
            <span className="hero__stat-label">Projects Delivered</span>
          </div>
          <div className="hero__stat-sep" />
          <div className="hero__stat">
            <span className="hero__stat-value">98%</span>
            <span className="hero__stat-label">Client Retention</span>
          </div>
          <div className="hero__stat-sep" />
          <div className="hero__stat">
            <span className="hero__stat-value">15+</span>
            <span className="hero__stat-label">Countries Served</span>
          </div>
        </div>
      </div>

      {/* Right: CSS 3D tech visual */}
      <div className="hero__visual" aria-hidden="true">
        <div className="tech-visual">
          {/* Orbit rings */}
          <div className="tv__ring tv__ring--1" />
          <div className="tv__ring tv__ring--2" />
          <div className="tv__ring tv__ring--3" />

          {/* Globe core */}
          <div className="tv__globe">
            <div className="tv__globe-grid" />
            <div className="tv__globe-shine" />
          </div>
          <div className="tv__globe-glow" />

          {/* Floating cubes (wrapper animates Y, inner cube holds 3D tilt) */}
          <div className="tv__cube-wrap tv__cube-wrap--a">
            <div className="tv__cube tv__cube--a" />
          </div>
          <div className="tv__cube-wrap tv__cube-wrap--b">
            <div className="tv__cube tv__cube--b" />
          </div>
          <div className="tv__cube-wrap tv__cube-wrap--c">
            <div className="tv__cube tv__cube--c" />
          </div>

          {/* Floating particles */}
          <div className="tv__dot tv__dot--1" />
          <div className="tv__dot tv__dot--2" />
          <div className="tv__dot tv__dot--3" />
          <div className="tv__dot tv__dot--4" />
          <div className="tv__dot tv__dot--5" />

          {/* Network nodes with pulse */}
          <div className="tv__node tv__node--1">
            <div className="tv__node-core" />
            <div className="tv__node-ring" />
          </div>
          <div className="tv__node tv__node--2">
            <div className="tv__node-core" />
            <div className="tv__node-ring" />
          </div>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="hero__scroll-hint" onClick={() => scrollTo('about')}>
      <div className="hero__scroll-arrow" />
    </div>
  </section>
);

export default Home;
