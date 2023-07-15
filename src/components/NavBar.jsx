import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import esp from './spain.png';
import uk from './uk.png';
import logo from './Logo1.png';


export const NavBar = () => {

  const [t, i18n] = useTranslation("global");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); // Guarda el idioma seleccionado en el localStorage
  };
  return (
    <div className="col-lg-12" id='nav'>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3" id='navbar'>
          <Container>
            <Navbar.Brand><img src={logo} alt='logo' width='240px'></img></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/">{t("header.home")}</Nav.Link>
                  <Nav.Link as={Link} to="/about-us">{t("header.about-us")}</Nav.Link>
                  <Nav.Link as={Link} to="/wipes">{t("header.wipes")}</Nav.Link>
                  <Nav.Link as={Link} to="/wipepod">{t("header.wipepod")}</Nav.Link>
                  <Nav.Link as={Link} to="/gym-zone">{t("header.gym-zone")}</Nav.Link>
                  <NavDropdown
                    title={t("header.discover")}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/contact-us">{t("header.contact")}</Nav.Link>
                  <button id="languaje-b" onClick={() => changeLanguage("es")}><img src={esp} alt='spain' width='35px'></img></button>
                  <button id="languaje-b" onClick={() => changeLanguage("en")}><img src={uk} alt='uk' width='35px'></img></button>

                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
  
}
