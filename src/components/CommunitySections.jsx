// src/components/CommunitySections.jsx

import React from 'react';
import { CContainer, CRow, CCol, CCard, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import { Link } from 'react-router-dom';

// 1. Actualizamos la información para los turnos de secundaria.
const turnos = [
  { 
    title: 'Turno Mañana', 
    level: 'Nivel Secundaria',
    description: 'Ofrecemos educación secundaria completa en nuestro horario matutino. Horario: 7:30 AM - 1:00 PM.', 
    link: '/admision/proceso' 
  },
  { 
    title: 'Turno Tarde', 
    level: 'Nivel Secundaria',
    description: 'Educación secundaria de calidad en el horario de la tarde. Horario: 1:30 PM - 6:30 PM.', 
    link: '/admision/proceso' 
  },
];

const CommunitySections = () => {
  return (
    <div className="py-5 bg-light"> 
      <CContainer>
        {/* 2. Cambiamos el título principal para ser más específico. */}
        <h2 className="text-center mb-5 display-6 fw-bold text-primary">SECUNDARIA - TURNOS</h2>
        
        <CRow className="g-4 justify-content-center">
          {turnos.map((turno) => (
            <CCol md={5} key={turno.title}>
              <CCard className="text-center h-100 shadow-sm">
                <CCardBody className="d-flex flex-column p-4">
                  <CCardTitle as="h3" className="mb-2">{turno.title}</CCardTitle>
                  
                  {/* 3. Añadimos un subtítulo dentro de la tarjeta para indicar "Nivel Secundaria". */}
                  <p className="fw-bold text-muted mb-3">{turno.level}</p>
                  
                  <CCardText className="flex-grow-1">{turno.description}</CCardText>
                  
                  <CButton as={Link} to={turno.link} color="primary" variant="outline" className="mt-auto align-self-center">
                    Más Información →
                  </CButton>
                </CCardBody>
              </CCard>
            </CCol>
          ))}
        </CRow>
      </CContainer>
    </div>
  );
};

export default CommunitySections;