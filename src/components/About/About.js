import React from 'react';
import './About.css';

const PILLARS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2Z" stroke="#38bdf8" strokeWidth="1.5" fill="rgba(56,189,248,0.1)"/>
        <path d="M12 12l10-5M12 12v10M12 12L2 7" stroke="#38bdf8" strokeWidth="1.2"/>
      </svg>
    ),
    title: 'Digital Transformation',
    desc: 'End-to-end modernisation of legacy systems, processes, and infrastructure for the digital era.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#38bdf8" strokeWidth="1.5" fill="rgba(56,189,248,0.1)"/>
        <path d="M8 21h8M12 17v4" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Enterprise Software',
    desc: 'Custom enterprise-grade applications built for scale, compliance, and mission-critical workloads.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6.5 8C6.5 5.5 8.7 3.5 12 3.5s5.5 2 5.5 4.5c0 3-2 4.5-5.5 5.5-3.5-1-5.5-2.5-5.5-5.5Z" stroke="#38bdf8" strokeWidth="1.5" fill="rgba(56,189,248,0.1)"/>
        <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Dedicated Teams',
    desc: 'Skilled, cross-functional engineers embedded in your workflow — from sprint one to production.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9Z" stroke="#38bdf8" strokeWidth="1.5" fill="rgba(56,189,248,0.1)"/>
        <path d="M12 8v4l3 3" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: '24/7 Support',
    desc: 'Around-the-clock monitoring and rapid incident response to keep your systems always on.',
  },
];

const About = () => (
  <section id="about" className="about">
    <div className="about__bg-accent" aria-hidden="true" />

    <div className="about__inner">
      {/* Header */}
      <div className="about__header">
        <span className="section-tag">Who We Are</span>
        <h2 className="section-heading">
          Your Trusted Partner in{' '}
          <span className="text-accent">Digital Innovation</span>
        </h2>
        <p className="section-sub">
          TechNova Solutions is a premium enterprise IT company headquartered in Dubai, UAE.
          We help governments, enterprises, and fast-growing businesses build the technology
          infrastructure of tomorrow — secure, intelligent, and built to scale.
        </p>
      </div>

      {/* Stats row */}
      <div className="about__stats">
        <div className="about__stat">
          <span className="about__stat-value">10+</span>
          <span className="about__stat-label">Years of Experience</span>
        </div>
        <div className="about__stat">
          <span className="about__stat-value">200+</span>
          <span className="about__stat-label">Projects Delivered</span>
        </div>
        <div className="about__stat">
          <span className="about__stat-value">50+</span>
          <span className="about__stat-label">Expert Engineers</span>
        </div>
        <div className="about__stat">
          <span className="about__stat-value">15+</span>
          <span className="about__stat-label">Countries Served</span>
        </div>
      </div>

      {/* Pillars grid */}
      <div className="about__pillars">
        {PILLARS.map(({ icon, title, desc }) => (
          <div className="about__pillar" key={title}>
            <div className="about__pillar-icon">{icon}</div>
            <h3 className="about__pillar-title">{title}</h3>
            <p className="about__pillar-desc">{desc}</p>
          </div>
        ))}
      </div>

      {/* Mission block */}
      <div className="about__mission">
        <div className="about__mission-text">
          <h3>Our Mission</h3>
          <p>
            We exist to bridge the gap between complex technology and real business outcomes.
            Our mission is to deliver reliable, future-ready solutions that drive growth,
            enhance security, and create measurable value for every client we serve.
          </p>
          <p>
            From cloud architecture and AI automation to enterprise software and GovTech
            platforms — we bring the expertise, the discipline, and the passion to make it work.
          </p>
        </div>
        <div className="about__mission-visual" aria-hidden="true">
          <div className="about__orbit">
            <div className="about__orbit-ring about__orbit-ring--1" />
            <div className="about__orbit-ring about__orbit-ring--2" />
            <div className="about__orbit-core">
              <span>TN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
