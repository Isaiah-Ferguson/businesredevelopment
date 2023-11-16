import React from 'react'
import { Col, Row } from 'react-bootstrap';

export default function Footer() {

  const logo = require("../assets/Logo.png");
  const FB = require("../assets/facebook.png");
  const TWITTER = require("../assets/Twitter.png");
  const TIKTOK = require("../assets/Tiktok.png");
  const YT = require("../assets/youtube.png");

  return (
    <div className='container-fluid Footer'>
      <br/>
      <Row>
      <Col lg={4} md={4} sm={12}>
          <div className='d-flex justify-content-center'>
          <img className="NavLogo" src={logo}/>
          </div>
          <div>
            <h1 className='text-center'>Connect With Us</h1>
            <Row className='d-flex justify-content-center'> 
            <Col lg={8} className='d-flex justify-content-evenly'>
            <img className='footerIcon' src={YT}/>
            <img className='footerIcon' src={FB}/>
            <img className='footerIcon' src={TWITTER}/>
            <img className='footerIcon' src={TIKTOK}/></Col>
            </Row>

          </div>
        </Col>

        <Col lg={4} md={4} sm={6} xs={12}>
          <h3 className='footerText'>
            Develeopers Git-Hubs
          </h3>
          <div className='footerText'>
            Isaiah Ferguson
          </div>
        </Col>

        <Col lg={4} md={4} sm={6} xs={12}>
        <h3 className='footerText'>
        Contact Us
          </h3>
          <div className='footerText'>
          E-mail: Cama5638@gmail.com
          </div>
          <div className='footerText'>
          Phone Number: 209 482-1352
          </div>
          <div className='footerText'>
          Address: 8909 Thornton road suite #2
          </div>
        </Col>
      </Row>
      <br/>
    </div>
  )
}
