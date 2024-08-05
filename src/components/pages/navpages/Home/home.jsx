import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './home.css';
import heroImage from '../../../../assest/Images/herob.jpg';
import Portfolio1 from '../../../../assest/Images/Project1.jpg';
import Portfolio2 from '../../../../assest/Images/Project2.jpg';
import Portfolio3 from '../../../../assest/Images/Project3.jpg';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="hero-text">
              <h1>My company</h1>
              <p>Welcome to my portfolio, where innovation meets expertise in web development. With a keen eye for detail and a passion for crafting intuitive digital experiences, I specialize in creating dynamic, user-centered websites that not only captivate but also convert. Leveraging the latest technologies and industry best practices, I deliver tailored solutions that align with your business goals, ensuring both aesthetic appeal and optimal functionality. Explore my work to see how I can help bring your vision to life</p>
              <p>Welcome to my portfolio, where innovation meets expertise in web development. With a keen eye for detail and a passion for crafting intuitive digital experiences, I specialize in creating dynamic, user-centered websites that not only captivate but also convert. Leveraging the latest technologies and industry best practices, I deliver tailored solutions that align with your business goals, ensuring both aesthetic appeal and optimal functionality. Explore my work to see how I can help bring your vision to life</p>
            </Col>
            <Col md={6} className="hero-image">
              <img src={heroImage} alt="MY company" />
            </Col>
          </Row>
        </Container>
      </div>


     {/* Services Section */}
<Container id="services" className="my-5">
  <h2 className="text-center mb-4">Our Services</h2>
  <Row>
    <Col md={4}>
      <Card className="mb-4 service-card">
        <Card.Body>
          <Card.Title><i className="fas fa-laptop-code service-icon"></i> Web Development</Card.Title>
          <Card.Text>
            Custom web development solutions tailored to your business needs. From responsive design to advanced functionality, I ensure your online presence stands out.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card className="mb-4 service-card">
        <Card.Body>
          <Card.Title><i className="fas fa-drone service-icon"></i> Drone Projects</Card.Title>
          <Card.Text>
            Innovative drone solutions for various applications, including aerial photography and data collection, designed to meet your unique requirements.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card className="mb-4 service-card">
        <Card.Body>
          <Card.Title><i className="fas fa-user-tie service-icon"></i> Consulting</Card.Title>
          <Card.Text>
            Expert advice to help you achieve your business goals, from strategy development to technical implementation, tailored to your specific needs.There are more...
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>



      {/* Portfolio Section */}
<Container id="portfolio" className="my-5">
  <h2 className="text-center mb-4">Our Portfolio</h2>
  <Row>
    <Col md={4} className="mb-4">
      <Card className="portfolio-card">
        <Card.Img variant="top" src={Portfolio1} className="portfolio-img" />
        <Card.Body>
          <Card.Title>TAK8 Rental Cars</Card.Title>
          <Card.Text>
          TAK8 is a user-friendly car rental website offering a seamless booking experience. It features an intuitive search system, secure payment options, and detailed car listings with high-quality images. Optimized for both desktop and mobile, TAK8 ensures convenient access for all users.

          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4} className="mb-4">
      <Card className="portfolio-card">
        <Card.Img variant="top" src={Portfolio2} className="portfolio-img" />
        <Card.Body>
          <Card.Title>QuickTask</Card.Title>
          <Card.Text>
          QuickTask is a versatile task management app designed to help users streamline their daily activities and boost productivity. With features like customizable task lists, deadline reminders, and progress tracking, QuickTask ensures that users can efficiently manage both personal and professional tasks.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4} className="mb-4">
      <Card className="portfolio-card">
        <Card.Img variant="top" src={Portfolio3} className="portfolio-img" />
        <Card.Body>
          <Card.Title>SkyGuard</Card.Title>
          <Card.Text>
          SkyGuard is an innovative drone surveillance system developed to monitor the CECOS University campus. Equipped with high-resolution cameras and advanced AI algorithms, SkyGuard provides real-time aerial footage and analysis, enhancing campus security and operational efficiency.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>



       {/* Testimonials Section */}
      <Container id="testimonials" className="my-5">
        <h2 className="text-center">Client Testimonials</h2>
        <Row>
          <Col md={4}>
            <Card className="testimonial-card mb-4">
              <Card.Body>
                <Card.Text>"Excellent service!"</Card.Text>
                <Card.Footer className="text-muted">Client 1</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="testimonial-card mb-4">
              <Card.Body>
                <Card.Text>"Very professional!"</Card.Text>
                <Card.Footer className="text-muted">Client 2</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="testimonial-card mb-4">
              <Card.Body>
                <Card.Text>"Great results!"</Card.Text>
                <Card.Footer className="text-muted">Client 3</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


      {/* Contact Section */}
    <Container id="contact" className="my-5 text-center contact-section">
     <h2>Contact Us</h2>
     <p>Ready to start your next project? Get in touch with us today!</p>
     <Button variant="primary" href="#contact">Contact Us</Button>
    </Container>
    </div>
  );
};

export default Home;