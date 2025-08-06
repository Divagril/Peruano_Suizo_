// src/components/Header.jsx

import React, { useState, useEffect } from 'react';
// 1. IMPORTAMOS useLocation PARA SABER EN QUÉ PÁGINA ESTAMOS
import { Link, NavLink, useLocation } from 'react-router-dom'; 
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CButton,
} from '@coreui/react';
import logo from '../assets/logo.png'; 

const headerStyles = `
  /* ... (todos los demás estilos se mantienen igual) ... */
  .navbar-custom {
    transition: background-color 0.3s ease-in-out;
    background-color: transparent;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .navbar-custom.scrolled {
    background-color: #8A2439;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  .navbar-brand-custom {
    font-weight: bold;
    font-size: 1.25rem;
  }
  .navbar-custom .navbar-nav .nav-link,
  .navbar-custom .navbar-nav .dropdown-toggle {
    color: white;
    font-weight: 500;
    transition: color 0.2s;
  }
  .navbar-custom .navbar-nav .nav-link:hover,
  .navbar-custom .navbar-nav .dropdown-toggle:hover {
    color: rgba(255, 255, 255, 0.8);
  }
  .navbar-custom .navbar-brand {
     color: white;
  }
  .navbar-custom .navbar-brand:hover {
     color: rgba(255, 255, 255, 0.9);
  }
  .navbar-custom .dropdown-menu {
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
  }
  .navbar-custom .dropdown-item {
    color: white;
    padding: 0.5rem 1.25rem;
  }
  .navbar-custom .dropdown-item:hover {
    background-color: #8A2439;
    color: white;
  }
`;

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // 2. OBTENEMOS LA UBICACIÓN ACTUAL
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Solo necesitamos detectar el scroll si estamos en la homepage
      if (isHomePage) {
        const isScrolled = window.scrollY > 10;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      }
    };
    
    // Si no estamos en la homepage, el header siempre está "scrolled"
    if (!isHomePage) {
        setScrolled(true);
    } else {
        setScrolled(window.scrollY > 10);
    }

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [location, isHomePage, scrolled]); // Se actualiza cuando cambia la página

  return (
    <>
      <style>{headerStyles}</style>
      {/* 3. APLICAMOS LA CLASE 'scrolled' SIEMPRE, EXCEPTO EN LA HOME AL INICIO */}
      <CNavbar expand="lg" colorScheme="dark" className={`navbar-custom fixed-top ${scrolled ? 'scrolled' : ''}`}>
        <CContainer fluid>
          <CNavbarBrand as={Link} to="/" className="navbar-brand-custom d-flex align-items-center">
            <img src={logo} alt="Logo I.E. Peruano Suizo" width="45" height="45" className="d-inline-block align-top me-3" />
            <span>I.E. "PERUANO SUIZO"</span>
          </CNavbarBrand>
          
          <CNavbarToggler aria-label="Toggle navigation" onClick={() => setVisible(!visible)} style={{ borderColor: 'rgba(255,255,255,0.5)' }} />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav className="ms-auto mb-2 mb-lg-0">
              <CNavItem>
                <CNavLink as={NavLink} to="/">Inicio</CNavLink>
              </CNavItem>
              <CDropdown variant="nav-item">
                <CDropdownToggle>Nosotros</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem as={Link} to="/nosotros/quienes-somos">Quiénes Somos</CDropdownItem>
                  <CDropdownItem as={Link} to="/nosotros/infraestructura">Infraestructura</CDropdownItem>
                  <CDropdownItem as={Link} to="/nosotros/directorio">Directorio</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CDropdown variant="nav-item">
                <CDropdownToggle>Admisiones 2025</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem as={Link} to="/admision/proceso">Proceso de Matrícula</CDropdownItem>
                  <CDropdownItem as={Link} to="/admision/cronograma">Cronograma y Vacantes</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CNavItem>
                <CNavLink as={NavLink} to="/actividades">Actividades</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink as={NavLink} to="/contacto">Contacto</CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CButton as={Link} to="/comunidad/portal" color="light" variant="outline" className="ms-lg-2 mt-2 mt-lg-0">
              Portal Comunidad
            </CButton>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
};

export default Header;