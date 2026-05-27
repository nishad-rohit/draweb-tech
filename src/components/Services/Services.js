import React from 'react';
import './Services.css';

const SERVICES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="24" height="16" rx="2" stroke="#38bdf8" strokeWidth="1.5" fill="rgba(56,189,248,0.08)"/>
        <path d="M9 24h10M14 20v4" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 12l3 3 6-6" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Web Application Development',
    desc: 'Scalable, high-performance web apps built with modern frameworks, clean architecture, and enterprise-grade security.',
    tags: ['React', 'Node.js', 'TypeScript', 'REST & GraphQL'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="8" y="2" width="12" height="24" rx="3" stroke="#38bdf8" strokeWidth="1.5" fill="rgba(56,189,248,0.08)"/>
        <path d="M14 20h.01" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round"/>
        <path d="M11 6h6" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Mobile App Development',
    desc: 'Native and cross-platform mobile experiences for iOS and Android — from MVP to enterprise rollout.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="#38bdf8" strokeWidth="1.5" fill="rgba(56,189,248,0.08)"/>
        <path d="M8 14c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="2.5" fill="#38bdf8"/>
      </svg>
    ),
    title: 'UI/UX Design',
    desc: 'Research-driven design that turns complex workflows into beautiful, intuitive digital products.',
    tags: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M7 18c-2.2-.5-4-2.5-4-4.8C3 10.3 5.7 8 9 8c.3 0 .7 0 1 .1C11.1 5.7 13.4 4 16 4c3.3 0 6 2.7 6 6 0 .3 0 .6-.1.9C23.7 11.7 25 13.2 25 15c0 2.2-1.8 4-4 4H7Z" stroke="#38bdf8" strokeWidth="1.5" fill="rgba(56,189,248,0.08)"/>
        <path d="M11 22v-5M14 22v-7M17 22v-4" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Cloud Solutions',
    desc: 'Cloud migration, hybrid infrastructure, DevOps pipelines, and cost governance across AWS, Azure & GCP.',
    tags: ['AWS', 'Azure', 'Kubernetes', 'CI/CD'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L4 8v6c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V8L14 3Z" stroke="#38bdf8" strokeWidth="1.5" fill="rgba(56,189,248,0.08)"/>
        <path d="M10 14l3 3 5-5" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'AI & Automation',
    desc: 'Intelligent automation, machine learning models, and AI-powered workflows that eliminate bottlenecks.',
    tags: ['LLMs', 'Process Automation', 'ML Pipelines', 'ChatBots'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="2" stroke="#38bdf8" strokeWidth="1.5" fill="rgba(56,189,248,0.08)"/>
        <path d="M3 10h22" stroke="#38bdf8" strokeWidth="1.5"/>
        <path d="M7 14h4M7 17h8" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Enterprise Software Development',
    desc: 'Custom ERP, CRM, and business platforms designed to unify operations and drive measurable ROI.',
    tags: ['ERP', 'CRM', 'Integrations', 'Microservices'],
  },
];

const INDUSTRIES = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 28V16L16 4l12 12v12H4Z" stroke="#38bdf8" strokeWidth="1.5" fill="rgba(56,189,248,0.08)"/>
        <rect x="12" y="18" width="8" height="10" rx="1" stroke="#38bdf8" strokeWidth="1.2" fill="rgba(56,189,248,0.12)"/>
      </svg>
    ),
    name: 'Government',
    desc: 'GovTech platforms, e-services, and smart city solutions.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="#38bdf8" strokeWidth="1.5" fill="rgba(56,189,248,0.08)"/>
        <path d="M10 16h12M16 10v12" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    name: 'FinTech',
    desc: 'Digital banking, payments, and financial analytics.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 28V14l8-10 8 10v14" stroke="#38bdf8" strokeWidth="1.5" fill="rgba(56,189,248,0.08)" strokeLinejoin="round"/>
        <path d="M4 28h24" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="10" r="5" stroke="#38bdf8" strokeWidth="1.2" fill="rgba(56,189,248,0.12)"/>
        <path d="M21.5 10h5M24 7.5v5" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    name: 'E-Commerce',
    desc: 'Storefronts, order management, and marketplace platforms.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="18" rx="3" stroke="#38bdf8" strokeWidth="1.5" fill="rgba(56,189,248,0.08)"/>
        <path d="M4 14h24" stroke="#38bdf8" strokeWidth="1.2"/>
        <path d="M10 6v4M22 6v4" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 19h4M10 22h8" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    name: 'Healthcare',
    desc: 'Patient portals, telemedicine, and health data platforms.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="12" width="16" height="16" rx="2" stroke="#38bdf8" strokeWidth="1.5" fill="rgba(56,189,248,0.08)"/>
        <path d="M19 16h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6" stroke="#38bdf8" strokeWidth="1.5" fill="none"/>
        <path d="M3 20h8" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="9" cy="28" r="2" stroke="#38bdf8" strokeWidth="1.2" fill="rgba(56,189,248,0.15)"/>
        <circle cx="21" cy="28" r="2" stroke="#38bdf8" strokeWidth="1.2" fill="rgba(56,189,248,0.15)"/>
      </svg>
    ),
    name: 'Logistics',
    desc: 'Supply chain visibility, fleet tracking, and last-mile tech.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="14" width="24" height="14" rx="2" stroke="#38bdf8" strokeWidth="1.5" fill="rgba(56,189,248,0.08)"/>
        <path d="M4 20h24" stroke="#38bdf8" strokeWidth="1.2"/>
        <path d="M8 14V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" stroke="#38bdf8" strokeWidth="1.5"/>
        <path d="M12 23h8" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    name: 'Real Estate',
    desc: 'PropTech platforms, listings management, and smart buildings.',
  },
];

const Services = () => (
  <>
    <section id="services" className="services">
      <div className="services__bg-accent" aria-hidden="true" />

      <div className="services__inner">
        <div className="services__header">
          <span className="section-tag">What We Build</span>
          <h2 className="section-heading">
            Full-Spectrum{' '}
            <span className="text-accent">IT Services</span>
          </h2>
          <p className="section-sub">
            From concept to deployment, we deliver the complete technology stack — built for
            performance, security, and long-term growth.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map(({ icon, title, desc, tags }) => (
            <div className="service-card" key={title}>
              <div className="service-card__icon">{icon}</div>
              <h3 className="service-card__title">{title}</h3>
              <p className="service-card__desc">{desc}</p>
              <div className="service-card__tags">
                {tags.map(t => (
                  <span className="service-card__tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Industries section */}
    <section id="industries" className="industries">
      <div className="industries__inner">
        <div className="industries__header">
          <span className="section-tag">Sectors We Serve</span>
          <h2 className="section-heading">
            Industries We <span className="text-accent">Specialise In</span>
          </h2>
          <p className="section-sub">
            Deep domain knowledge across the sectors that matter most in the modern digital economy.
          </p>
        </div>

        <div className="industries__grid">
          {INDUSTRIES.map(({ icon, name, desc }) => (
            <div className="industry-card" key={name}>
              <div className="industry-card__icon">{icon}</div>
              <h3 className="industry-card__name">{name}</h3>
              <p className="industry-card__desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Services;
