import React from 'react'
import { Button, Col, Container, Nav, Navbar, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ContactUsModal from './ContactUsModal';
export default function NavBar() {

  const logo = require("../assets/Logo.png");
  return (
    <>

    <Navbar expand="lg">
      <Container fluid>
      <img className="NavLogo" src={logo}/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
          </Nav>
          <Form className="NavDiv ">
          <Nav.Link  className='navbarLinks navbarText' as={Link} to="/">Home</Nav.Link>
          <Nav.Link className='navbarText navbarLinks' as={Link} to="/AboutUs">About Us</Nav.Link>
          <Nav.Link className='navbarText navbarLinks' as={Link} to="/ClassPage">Classes</Nav.Link>
          <Nav.Link className='navbarText navbarLinks' as={Link} to="/ContactUsPage">Contact Us</Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}
