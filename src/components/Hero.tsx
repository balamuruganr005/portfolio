import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <main className="hero">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="highlight">R Balamurugan</span>
      </motion.h1>
      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Turning passion into cybersecurity solutions
      </motion.p>
      <div className="cta-buttons">
        <a href="#contact" className="btn primary"><FaEnvelope /> Get In Touch</a>
        <a href="#projects" className="btn secondary"><FaGithub /> View Projects</a>
      </div>
    </main>
  );
};

export default Hero;
