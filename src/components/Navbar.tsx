import React, { useState } from 'react';
import {
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaAddressCard
} from 'react-icons/fa';
import Loader from './Loader'; // Import Loader component

const Navbar = () => {
  const [sectionLoading, setSectionLoading] = useState(false);
  const [targetId, setTargetId] = useState<string | null>(null);

  const handleNavClick = (id: string) => {
    setTargetId(id);
    setSectionLoading(true);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      setSectionLoading(false);
    }, 1000); // 1-second loader
  };

  return (
    <>
      {sectionLoading && <Loader mode="transition" onFinish={() => setSectionLoading(false)} />}
      <header className="navbar">
        <div className="logo">balamurugan@cyber_warrior:~$</div>
        <ul className="nav-links">
          <li>
            <button onClick={() => handleNavClick('about')}>
              <FaUser /> About
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('skills')}>
              <FaCode /> Skills
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('projects')}>
              <FaProjectDiagram /> Projects
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('contact')}>
              <FaAddressCard /> Contact
            </button>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
