// src/components/Hero.jsx

import React from 'react';
import { CContainer } from '@coreui/react';
// La ruta es correcta si la imagen está en: src/assets/fondo-colegio.jpg
import heroBackgroundImage from '../assets/fondo-colegio.jpg';

const heroStyles = `
  .hero-section {
    height: 100vh; /* Ocupa toda la altura de la pantalla */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    background-image: url(${heroBackgroundImage});
    background-size: cover;
    background-position: center;
  }

  /* Capa oscura para que el texto se lea mejor */
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Oscurece la imagen */
  }

  /* Contenedor del texto, para que esté por encima de la capa oscura */
  .hero-content {
    position: relative;
    z-index: 2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Sombra para el texto */
  }
  
  .hero-title {
    font-size: calc(2.5rem + 2.5vw);
    font-weight: 700;
  }
  
  .hero-subtitle {
     font-size: calc(1.5rem + 1.5vw);
     font-weight: 600;
  }
  
  .hero-slogan {
     font-size: calc(1rem + 1vw);
     font-style: italic;
  }
  
  .hero-welcome {
     font-size: calc(1rem + 0.5vw);
     margin-top: 3rem;
  }
  
  .hero-welcome i {
     font-weight: 600;
  }
`;

const Hero = () => {
  return (
    <>
      <style>{heroStyles}</style>
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <CContainer className="hero-content">
          <h1 className="hero-title">I.E. "PERUANO SUIZO"</h1>
          <h2 className="hero-subtitle my-4">UGEL 04 COMAS</h2>
          <p className="hero-slogan">"Unidos por la educación, guiados por la excelencia"</p>
          <p className="hero-welcome">
            Bienvenidos a nuestra <i>Institución Educativa</i>
          </p>
        </CContainer>
      </div>
    </>
  );
};

export default Hero;