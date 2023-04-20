import React from 'react'
import UncontrolledExample from './CarouselComponent.js';
import NavBar from './NavBar.js';
import { Col, Container,Row } from 'react-bootstrap';
import CarouselSmallComponent from './CarouselSmallComponent.js';
import Footer from './Footer.js';
export default function HomePage() {

    const BJJPicture = require('../assets/WinstonX.jpg')
  return (
    <div className='backGround'>
        <NavBar/>
      <UncontrolledExample/>
      <br></br>
      <Container>
        <div className="HomeDiv text-center">
            <div>WHY</div>
            <div>TEAM - CAMA</div>
        </div>
        <br/>
        <h1 className='text-center listText'>We provide an excellent training enviornment</h1>
        <br></br>
        <Row>
        <Col lg={7} md={7} sm={12} className='d-flex justify-content-center'><CarouselSmallComponent/></Col>
        <Col lg={5} md={5} sm={12} className='listText text-center '>
            <Row>
                <Col className='listTextSpacing' lg={12} xs={6}>Muay-Thai</Col>
                <Col className='listTextSpacing' lg={12} xs={6}>Brazilian Jiu-Jitsu</Col>
                <Col className='listTextSpacing' lg={12} xs={12}>Traditional Taekwondo</Col>
            </Row>
        </Col>
        </Row>
        <br/>
        <div className='text-center listText'>
        <div>Our Mission:</div>
        <div>EMPOWER & PROMOTE</div>    
        </div>    

        <br/>
        <Row className='d-flex justify-content-between'>
            <Col lg={6} md={6} xs={12} className='HomeEmpower'>
                <img className='caraselIMG' src={BJJPicture}/>
            </Col>
            <Col lg={5} md={5} xs={12} className='BGUnity'>
                <Row>
                    <Col className='HomeEmpowerBG text-center' lg={12} md={12} xs={6}>INTEGRITY</Col>
                    <Col className='HomeEmpowerBG text-center' lg={12} md={12} xs={6}>UNITY</Col>
                    <Col className='HomeEmpowerBG text-center' lg={12} md={12} xs={6}>RESPECT</Col>
                    <Col className='HomeEmpowerBG text-center' lg={12} md={12} xs={6}>DESCIPLINE</Col>
                </Row>
            </Col>
        </Row>

        <br/>
                <div className='paragraphText'>
                    <p>We believe that physical skill and talent comes second to proper Attitude and character. Most people can learn to fight and hurt but a lot of people need to battle & crush negativity within themselves.</p>
                    <p>
                    That being a lack of discipline, self-confidence, self-doubt, laziness, anger, hate... The first step is believing in yourself and making a positive change.
                    </p>
                    <p className='text-center'>"The journey of a thousand miles begins with a single step"</p>
                </div>
      </Container>
      <Footer/>
    </div>
  )
}
