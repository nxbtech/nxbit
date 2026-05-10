import React from 'react';
import Home from '../components/Hero-Grid/Hero';
import Servicesx from './Servicesx'; // Import de Servicesx
import Parallax from '../components/Parallax';
import Portfolio from './Portfolio'; // Import de la section Portfolio
import Contact from './Contact';

const HomePage = () => {
  return (
    <main>
      {/* Section Home */}
      <section id="home">
        <Home />
      </section>

      {/* Section Services */}
      <section id="services">
        <Servicesx />
      </section>

      {/* Section Parallax */}
      <section id="parallax" className="parallax-wrapper">
        <Parallax />
      </section>

      {/* Section Contact */}
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default HomePage;