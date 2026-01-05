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
        <h2>Request a Consultation</h2>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Company" required />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Work Email" required />
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <select required>
            <option value="">Select a service</option>
            <option value="managed-it">Managed IT Services</option>
            <option value="cloud">Cloud & DevOps</option>
            <option value="cybersecurity">Cybersecurity</option>
            <option value="software">Custom Software</option>
            <option value="infrastructure">Infrastructure & Networking</option>
          </select>
          <textarea placeholder="Tell us about your requirements" rows="5" required></textarea>
          <button type="submit">Request Consultation</button>
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
