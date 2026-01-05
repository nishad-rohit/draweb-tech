import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import CSS file

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <span className="hero-pill">Managed IT Services & Cloud Solutions</span>
          <h1>Reliable IT partner for growing businesses</h1>
          <p>
            Draweb Tech delivers secure infrastructure, 24/7 monitoring, and custom software
            that keeps your operations fast, compliant, and always online.
          </p>
          <div className="hero-actions">
            <Link className="cta-button" to="/contact">Request a Consultation</Link>
            <Link className="secondary-button" to="/services">View Services</Link>
          </div>
          <div className="hero-stats">
            <div>
              <h3>98%</h3>
              <p>Client retention</p>
            </div>
            <div>
              <h3>24/7</h3>
              <p>Monitoring</p>
            </div>
            <div>
              <h3>150+</h3>
              <p>Deployments</p>
            </div>
          </div>
        </div>
      </header>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="section-heading">
          <h2>Core IT Services</h2>
          <p>We design, build, and manage infrastructure that scales with your business.</p>
        </div>
        <div className="preview-grid">
          <article className="preview-card">
            <h3>Managed IT</h3>
            <p>Proactive monitoring, patching, and help desk support to keep teams productive.</p>
          </article>
          <article className="preview-card">
            <h3>Cloud & DevOps</h3>
            <p>Cloud migrations, automated deployments, and cost optimization for modern stacks.</p>
          </article>
          <article className="preview-card">
            <h3>Cybersecurity</h3>
            <p>Threat detection, backup, and compliance frameworks that protect critical data.</p>
          </article>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="section-heading">
          <h2>Why businesses choose Draweb Tech</h2>
          <p>Strategic guidance, fast execution, and measurable outcomes.</p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <h4>Dedicated vCIO support</h4>
            <p>Align your IT roadmap with business goals, budgets, and compliance requirements.</p>
          </div>
          <div className="why-card">
            <h4>Transparent SLAs</h4>
            <p>Clearly defined response times and monthly reporting keep performance on track.</p>
          </div>
          <div className="why-card">
            <h4>Scalable delivery</h4>
            <p>From startups to enterprise rollouts, we scale tools and talent with your needs.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-section">
        <div className="contact-card">
          <h2>Ready to modernize your IT?</h2>
          <p>Book a strategy call and receive a tailored service proposal within 48 hours.</p>
          <Link className="contact-button" to="/contact">Talk to an Expert</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
