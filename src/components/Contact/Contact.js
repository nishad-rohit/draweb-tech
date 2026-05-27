import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const CONTACT_INFO = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 1C6.7 1 4 3.7 4 7c0 4.5 6 12 6 12s6-7.5 6-12c0-3.3-2.7-6-6-6Z" stroke="#38bdf8" strokeWidth="1.4" fill="rgba(56,189,248,0.1)"/>
        <circle cx="10" cy="7" r="2" stroke="#38bdf8" strokeWidth="1.2" fill="rgba(56,189,248,0.2)"/>
      </svg>
    ),
    label: 'Office',
    value: 'Business Village, Deira, Dubai, UAE',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="#38bdf8" strokeWidth="1.4" fill="rgba(56,189,248,0.1)"/>
        <path d="M2 7l8 5 8-5" stroke="#38bdf8" strokeWidth="1.2"/>
      </svg>
    ),
    label: 'Email',
    value: 'hello@technovasolutions.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 3h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5V16c0 .6-.4 1-1 1C6.7 17 3 10 3 4c0-.6.4-1 1-1Z" stroke="#38bdf8" strokeWidth="1.4" fill="rgba(56,189,248,0.1)"/>
      </svg>
    ),
    label: 'Phone',
    value: '+971 4 123 4567',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#38bdf8" strokeWidth="1.4" fill="rgba(56,189,248,0.1)"/>
        <path d="M10 5v5l3.5 3.5" stroke="#38bdf8" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Business Hours',
    value: 'Sun – Thu, 9:00 AM – 6:00 PM',
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_email: 'nishad.rohit@outlook.com',
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(null), 5000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__bg-accent" aria-hidden="true" />

      <div className="contact__inner">
        {/* Top CTA banner */}
        <div className="contact__cta-banner">
          <div className="contact__cta-text">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-heading">
              Ready to Build Your Next{' '}
              <span className="text-accent">Digital Product?</span>
            </h2>
            <p className="section-sub">
              Tell us about your project. Our team will review your requirements and get back to
              you within 24 hours with a tailored solution proposal.
            </p>
          </div>
          <div className="contact__cta-info">
            {CONTACT_INFO.map(({ icon, label, value }) => (
              <div className="contact__info-item" key={label}>
                <div className="contact__info-icon">{icon}</div>
                <div>
                  <p className="contact__info-label">{label}</p>
                  <p className="contact__info-value">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="contact__form-wrap">
          <h3 className="contact__form-title">Send Us a Message</h3>

          {status === 'success' && (
            <div className="contact__alert contact__alert--success">
              ✓ Message sent! We'll reply to {form.email || 'your email'} within 24 hours.
            </div>
          )}
          {status === 'error' && (
            <div className="contact__alert contact__alert--error">
              ✗ Something went wrong. Please try again or email us directly.
            </div>
          )}

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Smith"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell us about your project, goals, and timeline..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact__submit" disabled={status === 'sending'}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
                <path d="M2 9l14-7-7 14V9H2Z" fill="currentColor"/>
              </svg>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
