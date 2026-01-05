import React from "react";
import "./About.css"; // Import CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Draweb Tech</h1>
        <p>A service-based IT provider helping brands go digital, fast.</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Draweb Tech is a multidisciplinary IT studio delivering mobile apps, web applications,
            modern websites, digital marketing, and network security. We combine strategy, design,
            and engineering to launch solutions that keep your business competitive.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to turn complex IT needs into reliable, user-friendly products backed by
            measurable performance and security-first delivery.
          </p>
          <div className="about-metrics">
            <div>
              <h3>10+ Years</h3>
              <p>Industry experience</p>
            </div>
            <div>
              <h3>100+</h3>
              <p>Apps & sites launched</p>
            </div>
            <div>
              <h3>24/7</h3>
              <p>Support & monitoring</p>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img src="https://source.unsplash.com/600x420/?technology,team" alt="IT team collaboration" />
        </div>
      </div>
    </div>
  );
};

export default About;
