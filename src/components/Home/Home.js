import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import CSS file

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <span className="hero-pill">IT Solutions Partner</span>
          <h1>Design, build, and secure digital products that scale</h1>
          <p>
            We deliver mobile apps, web applications, modern websites, digital marketing, and
            network security with one expert team.
          </p>
          <div className="hero-actions">
            <Link className="cta-button" to="/contact">Start a Project</Link>
            <Link className="secondary-button" to="/services">Explore Services</Link>
          </div>
          <div className="hero-stats">
            <div>
              <h3>150+</h3>
              <p>Projects delivered</p>
            </div>
            <div>
              <h3>12+</h3>
              <p>Years in IT</p>
            </div>
            <div>
              <h3>24/7</h3>
              <p>Support coverage</p>
            </div>
          </div>
        </div>
      </header>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="section-heading">
          <h2>Solutions built for modern teams</h2>
          <p>From strategy to delivery, we cover the full digital lifecycle.</p>
        </div>
        <div className="preview-grid">
          <article className="preview-card">
            <h3>Mobile App Development</h3>
            <p>iOS and Android apps engineered for performance, usability, and growth.</p>
          </article>
          <article className="preview-card">
            <h3>Web Application Development</h3>
            <p>Scalable platforms with clean architecture, APIs, and fast load times.</p>
          </article>
          <article className="preview-card">
            <h3>Web Design & Websites</h3>
            <p>Modern brand experiences that convert visitors into loyal customers.</p>
          </article>
          <article className="preview-card">
            <h3>Digital Marketing</h3>
            <p>SEO, paid campaigns, and content that drives measurable traffic.</p>
          </article>
          <article className="preview-card">
            <h3>Network Security</h3>
            <p>Threat prevention, monitoring, and compliance for business-critical systems.</p>
          </article>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="section-heading">
          <h2>Why teams partner with Draweb Tech</h2>
          <p>We combine creativity, engineering, and security into one trusted partner.</p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <h4>Product-first delivery</h4>
            <p>We align every build with business goals, KPIs, and user outcomes.</p>
          </div>
          <div className="why-card">
            <h4>Transparent timelines</h4>
            <p>Weekly check-ins and clear milestones keep delivery predictable.</p>
          </div>
          <div className="why-card">
            <h4>Security by design</h4>
            <p>We build secure foundations with proactive monitoring and testing.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-section">
        <div className="contact-card">
          <h2>Let’s build your next digital solution</h2>
          <p>Tell us about your goals and get a customized proposal within 48 hours.</p>
          <Link className="contact-button" to="/contact">Request a Proposal</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
