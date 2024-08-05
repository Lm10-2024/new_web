import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../footer/footer.css'
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We are a team of passionate web developers dedicated to delivering top-notch solutions to our clients.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/services" className="text-light">Services</a></li>
              <li><a href="/about" className="text-light">About</a></li>
              <li><a href="/portfolio" className="text-light">Portfolio</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              Email: info@yourcompany.com <br />
              Phone: +123 456 7890
            </p>
            <div className="d-flex">
              <a href="https://www.facebook.com" className="text-light me-3"><FaFacebook size="1.5em" /></a>
              <a href="https://www.twitter.com" className="text-light me-3"><FaTwitter size="1.5em" /></a>
              <a href="https://www.instagram.com" className="text-light me-3"><FaInstagram size="1.5em" /></a>
              <a href="https://www.linkedin.com" className="text-light me-3"><FaLinkedin size="1.5em" /></a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
