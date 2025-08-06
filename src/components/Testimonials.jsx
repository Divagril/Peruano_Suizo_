// src/components/Testimonials.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { CContainer, CRow, CCol } from '@coreui/react';

// 1. Importamos los iconos que usaremos de la librería 'lucide-react'
import {
  Users,           // Para Personal / Plana Docente
  Trophy,          // Para Actividades
  BookOpen,        // Para Recursos
  Network,         // Para Organigrama
  ClipboardEdit,   // Para Proceso de Matrícula
  LogIn            // Para Intranet
} from 'lucide-react';

// 2. Definimos la información de cada icono/enlace
const sections = [
  {
    title: 'Personal',
    icon: <Users size={70} strokeWidth={1.5} />,
    link: '/nosotros/directorio', // Enlazamos a la página de Directorio
    colorClass: 'label-personal'
  },
  {
    title: 'Actividades',
    icon: <Trophy size={70} strokeWidth={1.5} />,
    link: '/actividades', // Enlazamos a Actividades
    colorClass: 'label-actividades'
  },
  {
    title: 'Recursos',
    icon: <BookOpen size={70} strokeWidth={1.5} />,
    link: '/recursos', // Enlazamos a Recursos
    colorClass: 'label-recursos'
  },
  {
    title: 'Organigrama',
    icon: <Network size={70} strokeWidth={1.5} />,
    link: '/nosotros/directorio', // Puede enlazar a Directorio también
    colorClass: 'label-organigrama'
  },
  {
    title: 'Matrícula',
    icon: <ClipboardEdit size={70} strokeWidth={1.5} />,
    link: '/admision/proceso', // Enlazamos al proceso de admisión
    colorClass: 'label-matricula'
  },
  {
    title: 'Intranet',
    icon: <LogIn size={70} strokeWidth={1.5} />,
    link: '/comunidad/portal', // Enlazamos al portal de la comunidad
    colorClass: 'label-intranet'
  }
];

// 3. Estilos CSS para recrear el diseño que te gusta
const iconNavStyles = `
  .icon-nav-section {
    background-color: #f8f9fa; /* Un gris muy claro de fondo */
  }
  
  .icon-card-link {
    text-decoration: none;
    color: #212529;
    display: block;
    padding: 1.5rem 1rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    text-align: center;
    height: 100%;
  }

  .icon-card-link:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.1);
  }

  .icon-card-icon {
    margin-bottom: 1.5rem;
    color: #333;
  }

  .icon-card-label {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    border-radius: 50px; /* Bordes totalmente redondeados */
    color: white;
    font-weight: bold;
    font-size: 0.9rem;
  }
  
  /* Colores para cada etiqueta */
  .label-personal { background-color: #f77f00; } /* Naranja */
  .label-actividades { background-color: #0077b6; } /* Azul */
  .label-recursos { background-color: #6a00f4; } /* Morado */
  .label-organigrama { background-color: #fca311; } /* Amarillo */
  .label-matricula { background-color: #2a9d8f; } /* Verde azulado */
  .label-intranet { background-color: #e63946; } /* Rojo */

  .values-section h3 {
    color: var(--cui-primary); /* Color guinda institucional */
    font-weight: 700;
  }
  
  .values-text {
    color: #495057;
    font-weight: 500;
    letter-spacing: 2px;
  }
`;

// 4. El componente que renderiza todo
const IconNav = () => {
  return (
    <>
      <style>{iconNavStyles}</style>
      <div className="py-5 icon-nav-section">
        <CContainer>
          <h2 className="text-center mb-5 display-6 fw-bold text-primary">Accesos Directos</h2>
          <CRow className="g-4 justify-content-center">
            {sections.map((section) => (
              <CCol md={4} lg={2} key={section.title}>
                <Link to={section.link} className="icon-card-link">
                  <div className="icon-card-icon">
                    {section.icon}
                  </div>
                  <div className={`icon-card-label ${section.colorClass}`}>
                    {section.title}
                  </div>
                </Link>
              </CCol>
            ))}
          </CRow>

          {/* 5. SECCIÓN DE VALORES AÑADIDA AQUÍ ABAJO */}
          <div className="text-center mt-5 pt-4 values-section">
            <h3 className="mb-3">NUESTROS VALORES</h3>
            <p className="lead values-text">
              RESPETO - RESPONSABILIDAD - PERSEVERANCIA - TOLERANCIA
            </p>
          </div>
        </CContainer>
      </div>
    </>
  );
};

// Cambiamos el nombre de la exportación para que coincida con el componente
export default IconNav; 