import React from 'react'
import NavBar from './NavBar'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import Footer from './Footer'

export default function ContactUsPage() {
    const Location = require('../assets/Location.jpg')

    return (
        <div className='container-fluid backGround'><NavBar />
            <Container>
                <Row className='ContactUsDiv2'>
                    <Col lg={12} className='text-center'>
                        Contact us
                    </Col>
                    <Row>
                        <Col lg={6} md={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group></Col>
                        <Col lg={6} md={6}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <Form.Control type="text" placeholder="Full Name" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6}><Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="number" placeholder="Phone Number:" />
                        </Form.Group></Col>
                        <Col lg={6} md={6}><Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Class of interest" />
                        </Form.Group></Col>
                    </Row>
                    <Form>
                        <textarea className='textArea ContactUsText' placeholder="Questions, Comments, Etc..."></textarea>
                    </Form>
                    <Button variant="danger" style={{width: 100}}>Submit</Button>
                </Row>
                <br/>
                <Row className='ContactUsDiv'>
                    <div className='text-center'>LOCATION</div>
                    <div className='text-center'>8909 THORNTON ROAD #2</div>
                    <div className='text-center'>STOCKTON, CA 95209</div>
                   
                    <Container>
                    <br/>
                        <Row>

                        
                    <Col lg={6} md={6} sm={6} className='text-center'>
                        <h1 className='footerText'>Gym Hours</h1>
                        <h3 className='footerText'>Sunday: (Closed)</h3>
                        <h3 className='footerText'>Monday: 5PM to 9PM</h3>
                        <h3 className='footerText'>Tuesday: 5PM to 9PM</h3>
                        <h3 className='footerText'>Wednesday: 5PM to 9PM</h3>
                        <h3 className='footerText'>Thursday: 5PM to 9PM</h3>
                        <h3 className='footerText'>Friday: 5PM to 9PM</h3>
                        <h3 className='footerText'>Saturday: 9AM to 12PM</h3>
                    </Col>


                    <Col lg={6} md={6} sm={6} xs={12} className='hero-container d-flex justify-content-center'><img className='location-image' src={Location}/></Col>
                    </Row>
                    </Container>

                </Row>
            </Container>
            <Footer/>
        </div>
    )
}
