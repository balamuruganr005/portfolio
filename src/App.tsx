import React, { useState } from 'react';
import Loader from './components/Loader'; // Import loader

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) return <Loader mode="initial" onFinish={() => setLoading(false)} />;

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Stats />
      <Contact />
    </div>
  );
}

export default App;
