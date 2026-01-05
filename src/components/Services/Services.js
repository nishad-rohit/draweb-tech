import React from "react";
import "./Services.css"; // Import CSS file

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-heading">IT Services for Digital Growth</h2>
      <p className="services-subheading">
        Choose a dedicated team for product development, digital marketing, and security that
        keeps your business running fast and safe.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <img src="https://source.unsplash.com/300x200/?mobile,app" alt="Mobile app development" />
          <h3>Mobile App Development</h3>
          <p>Native and cross-platform apps built for performance, UX, and user retention.</p>
          <ul>
            <li>iOS & Android development</li>
            <li>Product strategy & UX</li>
            <li>App store launch support</li>
          </ul>
        </div>

        <div className="service-card">
          <img src="https://source.unsplash.com/300x200/?web,application" alt="Web application development" />
          <h3>Web Application Development</h3>
          <p>Scalable web apps, admin portals, and customer platforms tailored to your goals.</p>
          <ul>
            <li>Custom dashboards & portals</li>
            <li>API & systems integration</li>
            <li>Performance optimization</li>
          </ul>
        </div>

        <div className="service-card">
          <img src="https://source.unsplash.com/300x200/?website,design" alt="Website design and development" />
          <h3>Website Design & Development</h3>
          <p>High-converting marketing sites with clear messaging and fast load times.</p>
          <ul>
            <li>Branding & visual design</li>
            <li>SEO-ready architecture</li>
            <li>CMS or custom builds</li>
          </ul>
        </div>

        <div className="service-card">
          <img src="https://source.unsplash.com/300x200/?digital,marketing" alt="Digital marketing" />
          <h3>Digital Marketing</h3>
          <p>Campaigns and growth strategies that build visibility and qualified demand.</p>
          <ul>
            <li>SEO & content strategy</li>
            <li>Paid ads & retargeting</li>
            <li>Analytics & reporting</li>
          </ul>
        </div>

        <div className="service-card">
          <img src="https://source.unsplash.com/300x200/?cybersecurity,network" alt="Network security" />
          <h3>Network Security</h3>
          <p>Protect your infrastructure with proactive monitoring and secure architecture.</p>
          <ul>
            <li>Firewall & endpoint security</li>
            <li>Threat monitoring & response</li>
            <li>Backup & disaster recovery</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
