// src/components/Loader.tsx
import React, { useEffect, useState } from 'react';
import './Loader.css';
import hackerLogo from '../assets/hacker-logo.png'; // For full load
import { FaReact } from 'react-icons/fa';

interface LoaderProps {
  onFinish: () => void;
  mode: 'initial' | 'transition';
}

const Loader = ({ onFinish, mode }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const duration = mode === 'initial' ? 3000 : 1000;

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);
      if (percent >= 100) {
        clearInterval(interval);
        setTimeout(onFinish, 200);
      }
    }, 30);
  }, [mode]);

  return (
    <div className="loader-container">
      <div className="loader-box">
        {mode === 'initial' ? (
          <img src={hackerLogo} alt="Hacker Logo" className="loader-logo large" />
        ) : (
          <FaReact size={60} color="#00f0ff" className="react-spin" />
        )}
        <h1 className="glitch">{mode === 'initial' ? 'INITIALIZING' : 'LOADING'}</h1>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="decrypt-text">{mode === 'initial' ? 'Decrypting Content' : 'Fetching Data'}</p>
        <p className="percent-text">{Math.floor(progress)}%</p>
      </div>
    </div>
  );
};

export default Loader;
