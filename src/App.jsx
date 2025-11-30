import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about-us">
        <About />
      </section>

      <section id="product">
        <Services />
      </section>

      <section id="contact-us">
        <Contact />
        <Footer />
      </section>
    </div>
  );
};

export default App;