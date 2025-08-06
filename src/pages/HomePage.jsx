// src/pages/HomePage.jsx

import React from 'react';
import Hero from '../components/Hero';
import CommunitySections from '../components/CommunitySections';
import Events from '../components/Events';
import Testimonials from '../components/Testimonials';
import LocationMap from '../components/LocationMap'; // <-- 1. IMPORTA EL NUEVO COMPONENTE

const HomePage = () => {
  return (
    <>
      <Hero />
      <CommunitySections />
      <Events />
      <Testimonials />
      <LocationMap /> {/* <-- 2. AÑADE EL COMPONENTE AQUÍ, ANTES DEL FINAL */}
    </>
  );
};

export default HomePage;