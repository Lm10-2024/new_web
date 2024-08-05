import React, { useState } from 'react'; // Import useState
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './header.css'; // Ensure custom CSS is imported

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => setIsNavOpen(!isNavOpen);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="fixed-top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>My Company</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
          onClick={handleToggle}
        >
          <span className={`navbar-toggler-icon ${isNavOpen ? 'open' : ''}`}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className={isNavOpen ? 'show' : ''}>
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link onClick={handleToggle}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link onClick={handleToggle}>Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link onClick={handleToggle}>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolio">
              <Nav.Link onClick={handleToggle}>Portfolio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/testimonials">
              <Nav.Link onClick={handleToggle}>Testimonials</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link onClick={handleToggle}>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
