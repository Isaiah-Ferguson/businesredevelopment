import React from 'react'
import UncontrolledExample from './CarouselComponent.js';
import NavBar from './NavBar.js';
import { Col, Container,Row } from 'react-bootstrap';
import Footer from './Footer.js';

export default function ClassPage() {
  const MTPic = require('../assets/ChristionKnee.jpg');
  const BJJPic = require('../assets/Triangle.jpg');
  const TKDPic = require('../assets/Sammy2.jpg');
  const GroupMt = require('../assets/mt.jpg')
  const TKDGroup = require('../assets/TKDtina.jpeg');
  const GroupBJJ = require('../assets/GroupPicture2.jpg')
  
  return (
    <div className='backGround'>
      <NavBar/>
      <Container>
        <Row className='HomeDiv text-center'>
          <div>
          Classes
          </div>
        </Row>
        <Row>
        <Col lg={4} md={4} xs={4} className="hero-container">
      <img src={MTPic} alt="hero" className="hero-image" />
      <div className="hero-text">
        <h1>Muay Thai</h1>
      </div>
    </Col>
    <Col lg={4} md={4} xs={4} className="hero-container">
      <img src={BJJPic} alt="hero" className="hero-image" />
      <div className="hero-text">
        <h1>Brazilian Jiu Jitsu</h1>
      </div>
    </Col>
    <Col lg={4} md={4} xs={4} className="hero-container">
      <img src={TKDPic} alt="hero" className="hero-image" />
      <div className="hero-text">
        <h1>Taekwondo</h1>
      </div>
    </Col>
    </Row>
    <Row className='HomeDiv text-center'>
          <div>
          Muay Thai
          </div>
          <img src={GroupMt}/>
        </Row>
        <br/>
        <Row className='classDiv'>

        <div className='text-center classHeader'>
        Current Muay-Thai Program
        </div>
        <div className='Footer'>
          <p className='Ptag'>Kickboxing / Muay Thai training utilizes the eight striking weapons of the human body: punching, kicking, knees & elbows. The training consists of partner exercises & drills to develop striking speed, power, accuracy & agility. Students learn the use of Heavy Bags, Focus Mitts, Thai Pads along with Kicking Shields.</p>
          <p className='Ptag'>The training is accompanied by training rounds of 2 - 3 minute duration excellent for conditioning & burning major calories. Sparring is encouraged, but only when the student is ready & at the discretion of the instructor. Our classes are designed to provide you with personal attention & assistance. They are an excellent complement to your weight-workout routine.</p>
          <p className='classHeader'>Schedule</p>
          <p className='Ptag'>Mon / Wed / Fri</p>
          <p className='Ptag'>7:15pm - 8:15pm</p>
        </div>
        </Row>
        <Row className='HomeDiv text-center'>
          <div>
          Brazilian Jiu-Jitsu
          </div>
          <img src={GroupBJJ}/>
        </Row>
        <br/>
        <Row className='classDiv'>
        <div className='text-center classHeader'>
        Current Brazilian Jiu-Jitsu Program
        </div>
        <div className='Footer'>
          <p className='Ptag'>Our Jiu-Jitsu classes are designed to improve the health, performance and mental acuity of the beginner & expert alike. The techniques are based on efficiency and effectiveness in controlling and / or subduing your attacker.</p>
          <p className='Ptag'>Self-defense techniques along with throws and take downs round out this art with main emphasis on ground control and escapes.</p>
          <p className='classHeader'>Schedule</p>
          <p className='Ptag'>Mon / Wed / Fri</p>
          <p className='Ptag'>6:00pm - 7:15pm</p>
        </div>
        </Row>
        <Row className='HomeDiv text-center'>
          <div>
          Taekwondo
          </div>
          <img src={TKDGroup}/>
        </Row>
        <br/>
        <Row className='classDiv'>
        <div className='text-center classHeader'>
        Current Taekwondo Program
        </div>
        <div className='Footer'>
          <p className='Ptag'>Taekwondo is a Korean martial art that utilizes dynamic kicking, striking and blocking. It is an excellent art for both children and adults.</p>
          <p className='Ptag'>It emphasizes the traditional tenets of martial arts such as, Courtesy, Integrity, Perseverance, Self-Control and Indomitable Spirit. It also develops functional fitness, strength, speed, balance and flexibility.</p>
          <p className='classHeader'>Schedule</p>
          <p className='Ptag'>Tues & Thurs</p>
          <ul className='Ptag'>(Kids Beginner) 6:00pm - 6:45pm</ul>
          <ul className='Ptag'>(Kids Inter / Adv) 5:15pm - 6:00pm</ul>
          <ul className='Ptag'>(Adults 12 & up) 7:00pm - 8:00pm</ul>
          <p className='Ptag'>Saturday</p>
          <ul className='Ptag'l>(Kids - All) 9:30am - 10:15am</ul>
          <ul className='Ptag'>(Adults: 12 & up) 10:30am - 11:30am</ul>
          </div>
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}
