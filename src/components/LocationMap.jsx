// src/components/LocationMap.jsx

import React from 'react';
import { CRow, CCol } from '@coreui/react';
// 1. He eliminado los iconos sociales de esta línea de importación
import { GraduationCap, MapPin, Phone, Mail } from 'lucide-react';

// --- ESTILOS PARA ESTE COMPONENTE (sin cambios) ---
const mapStyles = `
  .map-info-container {
    padding: 0;
    margin: 0;
    max-width: 100%;
    overflow: hidden;
  }
  .map-iframe-wrapper {
    position: relative;
    height: 450px;
  }
  .map-iframe-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
  .info-panel {
    background-color: #8A2439;
    color: white;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .info-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.5rem;
  }
  .info-icon {
    margin-right: 1rem;
    flex-shrink: 0;
  }
  .info-text h5 {
    font-size: 1.1rem;
    font-weight: bold;
    color: white;
    margin-bottom: 0.25rem;
  }
  .info-text p {
    margin: 0;
    color: rgba(255, 255, 255, 0.9);
  }
  /* Estilos para iconos sociales (se pueden quedar o eliminar, no afecta) */
  .social-icon-map { 
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    color: white;
    text-decoration: none;
    margin-right: 10px;
    transition: all 0.2s ease-in-out;
  }
  .social-icon-map:hover {
    background-color: white;
    color: #8A2439;
  }
`;

const LocationMap = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.1332906148383!2d-77.0621791240177!3d-11.967182688307698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce33af0c2fb7%3A0xfa189f710f75fc77!2sInstituci%C3%B3n%20Educativa%20Peruano%20Suizo!5e0!3m2!1ses-419!2spe!4v1716075345995!5m2!1ses-419!2spe";

  return (
    <>
      <style>{mapStyles}</style>
      <div className="map-info-container">
        <CRow className="g-0">
          <CCol md={8}>
            <div className="map-iframe-wrapper">
              <iframe
                src={mapSrc}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Colegio Peruano Suizo"
              ></iframe>
            </div>
          </CCol>
          <CCol md={4}>
            <div className="info-panel">
              <div className="info-item">
                <div className="info-icon"><GraduationCap size={30} /></div>
                <div className="info-text">
                  <h5>Educación Secundaria</h5>
                  <p>Turno Mañana y Tarde</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><MapPin size={30} /></div>
                <div className="info-text">
                  <h5>Dirección</h5>
                  <p>C. 13A, Comas 15311</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Phone size={30} /></div>
                <div className="info-text">
                  <h5>Teléfono</h5>
                  <p>(01) 5256288</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Mail size={30} /></div>
                <div className="info-text">
                  <h5>Email</h5>
                  <p>adminps@peruanosuizo.edu.pe</p>
                </div>
              </div>
              
              {/* 2. El bloque de código que mostraba los iconos ha sido eliminado de aquí. */}

            </div>
          </CCol>
        </CRow>
      </div>
    </>
  );
};

export default LocationMap;