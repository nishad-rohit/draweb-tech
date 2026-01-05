import React from "react";
import "./About.css"; // Import CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Draweb Tech</h1>
        <p>Service-driven IT expertise for modern businesses.</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Draweb Tech is a service-based IT provider delivering managed services, cloud
            engineering, and cybersecurity solutions for companies across the GCC. We combine
            strategic planning with hands-on delivery to help teams scale with confidence.
          </p>
          <h2>Our Mission</h2>
          <p>
            We exist to keep your technology reliable, secure, and future-ready. Our mission is
            to be the long-term IT partner that businesses rely on for measurable results and
            always-on support.
          </p>
          <div className="about-metrics">
            <div>
              <h3>10+ Years</h3>
              <p>Industry experience</p>
            </div>
            <div>
              <h3>95%</h3>
              <p>Tickets resolved in 24h</p>
            </div>
            <div>
              <h3>ISO-ready</h3>
              <p>Compliance support</p>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img src="https://source.unsplash.com/600x420/?it,teamwork" alt="IT team collaboration" />
        </div>
      </div>
    </div>
  );
};

export default About;
