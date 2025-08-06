// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { CContainer } from '@coreui/react';
// 1. HEMOS ELIMINADO 'Youtube' DE ESTA LÍNEA DE IMPORTACIÓN
import { Facebook, Instagram } from 'lucide-react';

const TiktokIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="20" height="20" {...props}>
    <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.25V349.4a162.6 162.6 0 1 1 -185-188.3v89.9A74.62 74.62 0 1 0 237.2 371.8V0h46.72a210.2 210.2 0 0 0 164.1 209.9z"/>
  </svg>
);

const footerStyles = `
  .footer-minimal {
    background-color: #8A2439; /* El color guinda */
    color: white;
    padding: 3rem 0;
  }

  .footer-nav {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem 2.5rem;
  }

  .footer-nav a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease-in-out;
  }

  .footer-nav a:hover {
    color: #ffffff;
  }

  .footer-social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem; /* Aumentamos un poco el espacio entre iconos */
    margin-bottom: 2rem;
  }

  .footer-social-icon {
    color: white;
    text-decoration: none;
    transition: transform 0.2s ease-in-out, color 0.2s;
  }

  .footer-social-icon:hover {
    transform: scale(1.2);
    color: rgba(255,255,255,0.8);
  }

  .footer-copyright {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.7);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 2rem;
    margin-top: 2rem;
  }
  
  .footer-copyright a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: underline;
  }

  .footer-copyright a:hover {
    color: #ffffff;
  }
`;

const Footer = () => {
  return (
    <>
      <style>{footerStyles}</style>

      <footer className="footer-minimal">
        <CContainer>
          <ul className="footer-nav">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros/quienes-somos">Nosotros</Link></li>
            <li><Link to="/admision/proceso">Admisiones</Link></li>
            <li><Link to="/actividades">Actividades</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/comunidad/portal">Portal</Link></li>
          </ul>

          <div className="text-center footer-social-links">
            <a href="https://www.facebook.com/share/1652LyaJaz/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/peruanosuizooficial?igsh=MXdiMGdhcGczNGtiMQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="https://www.tiktok.com/@ieperuanosuizo?_t=ZM-8yFDzKwcZ44&_r=1" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="TikTok">
              <TiktokIcon width="24" height="24" />
            </a>
            {/* 2. EL ENLACE AL ICONO DE YOUTUBE HA SIDO ELIMINADO DE AQUÍ */}
          </div>

          <div className="text-center footer-copyright">
            © {new Date().getFullYear()} I.E. PERUANO SUIZO. Todos los derechos reservados. | <a href="#">Libro de reclamaciones</a>
          </div>
        </CContainer>
      </footer>
    </>
  );
};

export default Footer;