import React from "react";
import "./Services.css"; // Import CSS file

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-heading">IT Services Built for Growth</h2>
      <p className="services-subheading">
        From infrastructure management to cybersecurity, we deliver the complete IT stack with
        measurable uptime and proactive support.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <img src="https://source.unsplash.com/300x200/?it,monitoring" alt="Managed IT services" />
          <h3>Managed IT Services</h3>
          <p>24/7 monitoring, device management, patching, and on-demand support for your teams.</p>
          <ul>
            <li>Help desk & remote support</li>
            <li>Device & asset management</li>
            <li>Monthly performance reporting</li>
          </ul>
        </div>

        <div className="service-card">
          <img src="https://source.unsplash.com/300x200/?cloud,server" alt="Cloud services" />
          <h3>Cloud & DevOps</h3>
          <p>Migrate, optimize, and scale cloud environments with reliable automation.</p>
          <ul>
            <li>AWS, Azure, & hybrid cloud</li>
            <li>CI/CD pipeline automation</li>
            <li>Cost optimization & governance</li>
          </ul>
        </div>

        <div className="service-card">
          <img src="https://source.unsplash.com/300x200/?cybersecurity,data" alt="Cybersecurity" />
          <h3>Cybersecurity</h3>
          <p>Layered security strategy to protect data, devices, and customer trust.</p>
          <ul>
            <li>Threat detection & response</li>
            <li>Backup & disaster recovery</li>
            <li>Compliance readiness</li>
          </ul>
        </div>

        <div className="service-card">
          <img src="https://source.unsplash.com/300x200/?software,development" alt="Software engineering" />
          <h3>Custom Software</h3>
          <p>Purpose-built tools, portals, and integrations tailored to your business workflows.</p>
          <ul>
            <li>Product discovery & UX</li>
            <li>API & system integrations</li>
            <li>Ongoing maintenance</li>
          </ul>
        </div>

        <div className="service-card">
          <img src="https://source.unsplash.com/300x200/?network,datacenter" alt="Infrastructure services" />
          <h3>Infrastructure & Networking</h3>
          <p>Design and manage reliable on-prem and hybrid networks for stable operations.</p>
          <ul>
            <li>Network setup & optimization</li>
            <li>Secure Wi-Fi & VPN</li>
            <li>Server & storage management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
