import React from 'react'
import NavBar from './NavBar'
import { Row, Container, Col } from 'react-bootstrap'
import Footer from './Footer';

export default function AboutUs() {
  const Isaiah = require('../assets/CouchIsaiah.jpg');
  const Sensei = require('../assets/Sensei.png');
  const Tina = require('../assets/TinaPunch.jpg');
  const Angelo = require('../assets/Angelo.jpg');
  const PhiloPic = require('../assets/Promotion1.jpg');
  return (
    <div className='backGround container-fluid'>
    <NavBar/>
    <br/>
    <Container>
      <div className='HomeDiv text-center'>
      OUR PHILOSOPHY
      <div>
     <img className='heroimgs' src={PhiloPic}/>
     </div>
      </div>
        <br/>
        <div className='AboutUsFont'>
          <p>At CAMA we take a personalized approach to help you with all your exercise, fitness, and health needs.</p>
          <p>We strive to promote the physical as well as mental health benefits of martial arts training through honest & sincere instruction.</p>
          <p>We feel that the word "art" in martial arts has tremendous value, yet the most important aspect is the individual.</p>
          <p>Therefore the individual will have a thorough understanding of what they are learning rather than just becoming a product of the school or instructor.</p>
        </div>
        <br/>
        <Row>
          <div  className='HomeDiv text-center'>
            OUR COACHES
          </div>
          </Row>
          <Row>
            <Col lg={3} md={6} sm={6} className="hero-container">
              <img src={Sensei} alt="hero" className="hero-image2" />
      <div className="hero-text"> <p>Louie Concepcion</p> </div>
      </Col>
            <Col lg={3} md={6} sm={6} className="hero-container">
              <img src={Isaiah} alt="hero" className="hero-image2" />
      <div className="hero-text"> <p>Isaiah Ferguson</p> </div>
      </Col>
            <Col lg={3} md={6} sm={6} className="hero-container">
              <img src={Angelo} alt="hero" className="hero-image" />
      <div className="hero-text"> <p>Angelo Garcia</p> </div>
      </Col>
            <Col lg={3} md={6} sm={6} className="hero-container">
              <img src={Tina} alt="hero" className="hero-image" />
      <div className="hero-text"> <p>Tina Tagorda</p> </div>
      </Col>
          
        </Row>
    </Container>
    <br/>
    <div className='d-flex justify-content-center'>
    <Footer/>
    </div>
    </div>
  )
}
