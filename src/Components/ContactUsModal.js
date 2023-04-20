import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Form, Row, Dropdown, DropdownButton } from 'react-bootstrap';

export default function ContactUsModal() {
    const [show, setShow] = useState(false);
    const [dropdown, setDropdown] = useState("DropDown")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDropdown = (value) => {
        setDropdown(value);
    }

 return (
     <>
  <p className='navbarText' onClick={handleShow}> Contact Us </p>

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Contact Us Directly</Modal.Title>
     </Modal.Header>
     <Modal.Body>
        <Row>
        <Col lg={6}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group></Col>
        <Col lg={6}>
    <Form.Group className="mb-3" controlId="formBasicPassword">
                            
    <Form.Control type="text" placeholder="Full Name" />
    </Form.Group>
     </Col>
    </Row>
      <Row>
        <Col lg={6}><Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Phone Number:" />
       </Form.Group></Col>
           <Col lg={6}><Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Class of interest" />
       </Form.Group></Col>
                    </Row>
                    <Form>
                       <textarea className='textArea'placeholder="Questions, Comments, Etc..."></textarea>
                    </Form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
