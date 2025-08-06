// src/components/Events.jsx

import React from 'react';
import { CContainer, CRow, CCol, CCard, CCardBody } from '@coreui/react';
import { Star } from 'lucide-react'; // Usaremos un icono de estrella para destacar

// 1. DATOS DE EJEMPLO: Puedes cambiar estos valores cuando lo necesites.
const dashboardData = {
  turnoManana: {
    title: 'Turno Mañana',
    grades: [
      { year: '1ro Secundaria', percentage: 95 },
      { year: '2do Secundaria', percentage: 92 },
      { year: '3ro Secundaria', percentage: 98, isTopGrade: true }, // 'isTopGrade' destaca esta barra
      { year: '4to Secundaria', percentage: 96 },
      { year: '5to Secundaria', percentage: 94 },
    ],
    topStudent: {
      name: 'Ana Lucía Quispe',
      grade: '3ro "A"',
    },
  },
  turnoTarde: {
    title: 'Turno Tarde',
    grades: [
      { year: '1ro Secundaria', percentage: 94 },
      { year: '2do Secundaria', percentage: 97, isTopGrade: true }, // 'isTopGrade' destaca esta barra
      { year: '3ro Secundaria', percentage: 93 },
      { year: '4to Secundaria', percentage: 95 },
      { year: '5to Secundaria', percentage: 91 },
    ],
    topStudent: {
      name: 'Carlos Mendoza Rojas',
      grade: '2do "B"',
    },
  },
};

// 2. Estilos para la nueva sección
const attendanceStyles = `
  .attendance-card {
    background-color: rgba(0, 0, 0, 0.2); /* Fondo semi-transparente para las tarjetas */
    border-radius: 0.75rem;
    padding: 1.5rem;
    height: 100%;
  }

  .grade-progress-row {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .grade-name {
    width: 140px; /* Ancho fijo para alinear los nombres */
    font-weight: 500;
  }

  .progress-bar-container {
    flex-grow: 1;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    height: 20px;
    overflow: hidden;
  }

  .progress-bar-fill {
    height: 100%;
    background-color: #ffffff; /* Barra blanca por defecto */
    border-radius: 50px;
    transition: width 0.5s ease-in-out;
    text-align: right;
    padding-right: 10px;
    color: #8A2439;
    font-weight: bold;
    font-size: 0.8rem;
    line-height: 20px;
  }

  .progress-bar-best {
    background-color: #ffd700; /* Color dorado para el mejor promedio */
  }

  .top-student-card {
    background-color: rgba(255, 255, 255, 0.9);
    color: #8A2439;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-top: 1.5rem;
    text-align: center;
  }

  .top-student-card h5 {
    font-weight: bold;
  }
`;

const PunctualityDashboard = () => {
  const renderTurno = (turnoData) => (
    <div className="attendance-card">
      <h3 className="text-center text-white mb-4">{turnoData.title}</h3>
      {turnoData.grades.map((grade) => (
        <div key={grade.year} className="grade-progress-row">
          <div className="grade-name">{grade.year}</div>
          <div className="progress-bar-container">
            <div
              className={`progress-bar-fill ${grade.isTopGrade ? 'progress-bar-best' : ''}`}
              style={{ width: `${grade.percentage}%` }}
            >
              {grade.percentage}%
            </div>
          </div>
        </div>
      ))}
      <div className="top-student-card">
        <h5><Star size={20} className="me-2" style={{ fill: '#ffd700', color: '#fca311' }}/>Alumno Destacado</h5>
        <p className="lead mb-0">{turnoData.topStudent.name}</p>
        <p className="text-muted">{`Puntualidad Perfecta - ${turnoData.topStudent.grade}`}</p>
      </div>
    </div>
  );

  return (
    <>
      <style>{attendanceStyles}</style>
      <div className="bg-primary text-white py-5">
        <CContainer>
          <h2 className="text-center mb-5 display-6 fw-bold">Cuadro de Honor: Asistencia y Puntualidad</h2>
          <CRow className="g-4">
            <CCol md={6}>
              {renderTurno(dashboardData.turnoManana)}
            </CCol>
            <CCol md={6}>
              {renderTurno(dashboardData.turnoTarde)}
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  );
};

export default PunctualityDashboard;