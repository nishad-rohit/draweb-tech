import React from "react";
import "./Contact.css"; // Import CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Contact Header */}
      <div className="contact-header">
        <h1>Tell us about your project</h1>
        <p>Share your goals and we’ll respond with a tailored plan for your business.</p>
      </div>

      {/* Contact Details Section */}
      <div className="contact-details">
        <div className="contact-info">
          <h3>Office</h3>
          <p>Business Village, Deira, Dubai</p>
        </div>
        <div className="contact-info">
          <h3>Email</h3>
          <p>hello@drawebtech.com</p>
        </div>
        <div className="contact-info">
          <h3>Phone</h3>
          <p>+971 55 328 23790</p>
        </div>
        <div className="contact-info">
          <h3>Hours</h3>
          <p>Sun - Thu: 9:00 AM - 6:00 PM</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <div className="form-header">
          <h2>Request a Consultation</h2>
          <p>Tell us what you need and we’ll reply within one business day.</p>
        </div>
        <form className="contact-form">
          <div className="contact-form-grid">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" type="text" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input id="company" type="text" placeholder="Company or brand name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Work Email</label>
              <input id="email" type="email" placeholder="name@company.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="tel" placeholder="+971 55 000 0000" required />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Needed</label>
              <select id="service" required>
                <option value="">Select a service</option>
                <option value="mobile-apps">Mobile App Development</option>
                <option value="web-apps">Web Application Development</option>
                <option value="websites">Website Design & Development</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="network-security">Network Security</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="budget">Estimated Budget</label>
              <select id="budget">
                <option value="">Select a range</option>
                <option value="below-20k">Below AED 20K</option>
                <option value="20k-50k">AED 20K - 50K</option>
                <option value="50k-100k">AED 50K - 100K</option>
                <option value="100k-plus">AED 100K+</option>
              </select>
            </div>
          </div>
          <div className="form-group form-group-full">
            <label htmlFor="message">Project Details</label>
            <textarea
              id="message"
              placeholder="Tell us about your requirements, timeline, and goals."
              rows="5"
              required
            ></textarea>
          </div>
          <div className="form-actions">
            <button type="submit">Request Consultation</button>
            <span className="form-note">We respect your privacy and never share your data.</span>
          </div>
        </form>
      </div>

      {/* Google Maps Embed */}
      <div className="contact-map">
        <h2>Find Us</h2>
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.1234567890123!2d55.1234567890123!3d25.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c1234567890%3A0x1234567890abcdef!2sBusiness%20Village%2C%20Deira%2C%20Dubai!5e0!3m2!1sen!2sae!4v1615867033717!5m2!1sen!2sae"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
