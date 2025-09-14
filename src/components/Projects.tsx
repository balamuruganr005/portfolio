import React from 'react';
import { FaTelegramPlane, FaShieldAlt, FaBug, FaNetworkWired } from 'react-icons/fa';

const projects = [
  {
    icon: <FaTelegramPlane size={30} />,
    name: 'Cybercrime Bot (EN/TN)',
    description: 'A Telegram bot that educates users about cybercrime in both English and Tamil.'
  },
  {
    icon: <FaBug size={30} />,
    name: 'Malware Detection Extension',
    description: 'Chrome extension that scans and detects malicious behaviors in visited pages.'
  },
  {
    icon: <FaShieldAlt size={30} />,
    name: 'DDoS Mitigation System',
    description: 'System to detect and neutralize distributed denial-of-service attacks intelligently.'
  },
  {
    icon: <FaNetworkWired size={30} />,
    name: 'Advanced VAPT + Forensics',
    description: 'Penetration testing and network forensics toolset currently under development.'
  }
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-icon">{project.icon}</div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
