import React from 'react';
import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaHackerrank,
  FaNetworkWired,
  FaHtml5,
  FaDatabase,
  FaFileExcel,
  FaChartBar,
  FaChartLine,
  FaLinux,
  FaGithub
} from 'react-icons/fa';

const skills = [
  {
    icon: <FaPython size={30} />,
    name: 'Python',
    description: 'Used for scripting, automation and security tools.'
  },
  {
    icon: <FaJava size={30} />,
    name: 'Java',
    description: 'Object-oriented programming used in backend and Android apps.'
  },
  {
    icon: <FaJsSquare size={30} />,
    name: 'JavaScript',
    description: 'Web scripting, DOM manipulation and Chrome extension development.'
  },
  {
    icon: <FaHtml5 size={30} />,
    name: 'HTML/CSS',
    description: 'Structure and style for responsive web apps and UIs.'
  },
  {
    icon: <FaHackerrank size={30} />,
    name: 'Ethical Hacking',
    description: 'Familiar with tools like Nmap, Burp Suite, Metasploit.'
  },
  {
    icon: <FaNetworkWired size={30} />,
    name: 'Network Forensics',
    description: 'VAPT, traffic analysis and packet investigation.'
  },
  {
    icon: <FaDatabase size={30} />,
    name: 'SQL',
    description: 'Querying databases for analysis, reporting, and automation.'
  },
  {
    icon: <FaFileExcel size={30} />,
    name: 'Microsoft Excel',
    description: 'Proficient in formulas, pivot tables, and automation tasks.'
  },
  {
    icon: <FaChartBar size={30} />,
    name: 'Power BI',
    description: 'Data visualization, dashboard creation, and business analytics.'
  },
  {
    icon: <FaChartLine size={30} />,
    name: 'Trading & Analysis',
    description: 'Understanding of financial charts, patterns, and strategy development.'
  },
  {
    icon: <FaLinux size={30} />,
    name: 'Linux',
    description: 'Efficient with terminal commands and security distributions like Kali.'
  },
  {
    icon: <FaGithub size={30} />,
    name: 'Git & GitHub',
    description: 'Version control, team collaboration, and project hosting.'
  }
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
