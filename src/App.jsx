// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WhatsAppButton from './components/WhatsAppButton';
import { CContainer } from '@coreui/react';

// Componente mejorado para páginas en construcción
const PlaceholderPage = ({ title }) => (
  // Se quita el padding de aquí para que sea consistente
  <CContainer className="text-center py-5">
    <h1 className="display-4 fw-bold" style={{ color: '#8A2439' }}>{title}</h1>
    <p className="lead text-muted mt-3">Esta sección está en construcción. ¡Vuelve pronto!</p>
  </CContainer>
);

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      {/* 
        AQUÍ ESTÁ EL CAMBIO: 
        Añadimos un padding-top al 'main' para que el contenido
        de las páginas internas no se oculte debajo del header fijo.
        La altura aproximada del header es 80px.
      */}
      <main className="flex-grow-1" style={{ paddingTop: '80px' }}>
        <Routes>
          {/* 
            Para la HomePage, necesitamos quitar ese padding superior, 
            ya que el Hero de 100vh se encarga del espacio.
            Lo hacemos envolviendo la página en un div con margen negativo.
          */}
          <Route path="/" element={<div style={{ marginTop: '-80px' }}><HomePage /></div>} />
          
          {/* Rutas de 'Nosotros' */}
          <Route path="/nosotros/quienes-somos" element={<PlaceholderPage title="Quiénes Somos" />} />
          <Route path="/nosotros/infraestructura" element={<PlaceholderPage title="Infraestructura" />} />
          <Route path="/nosotros/directorio" element={<PlaceholderPage title="Directorio" />} />
          
          {/* Rutas de 'Admisiones' */}
          <Route path="/admision/proceso" element={<PlaceholderPage title="Proceso de Matrícula" />} />
          <Route path="/admision/cronograma" element={<PlaceholderPage title="Cronograma y Vacantes" />} />

          {/* Rutas Principales */}
          <Route path="/actividades" element={<PlaceholderPage title="Actividades" />} />
          <Route path="/contacto" element={<PlaceholderPage title="Contacto" />} />
          <Route path="/comunidad/portal" element={<PlaceholderPage title="Portal Comunidad" />} />
          <Route path="/recursos" element={<PlaceholderPage title="Recursos Educativos" />} />

          {/* Ruta 'catch-all' para páginas no encontradas */}
          <Route path="*" element={<PlaceholderPage title="404 - Página no encontrada" />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;