import React from 'react';
import { Element } from 'react-scroll'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Index = () => {

  const email = 'obaidullah.faruk05@gmail.com';
  const mobile = '+880-1622283760';

  const openMail = (event) => {
      window.location.href = `mailto:${email}`;
      event.preventDefault();
  }

  const openDial = (event) => {
    // const mailto = `mailto: ${s}`  
    window.location.href = `tel:${mobile}`;
    event.preventDefault();
  }

  const sendEmail = (event) => {
    console.log(event)
    event.preventDefault();
  }

  return (
    <Element id="contact" className='section contact-section'>
        <h1 className='section-title'>Contact Me </h1>
        <Container>
          <Row>
            <Col md={6} xs={12}>
            <div>
            <FontAwesomeIcon icon={faPhone} className="contact-icon"/>
              <span className='contact-description contact-info' onClick={openDial}>{mobile}</span>
            </div>
            </Col>
            <Col md={6} xs={12}>
            <div>
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon"/>
              <span className='contact-description contact-info' onClick={openMail}>{email}</span>
            </div>
            </Col>
          </Row>
          {/* <Row className="mt-5">
            <Col xs={12} md={12}>
            <Form onSubmit={sendEmail}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="clientName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="emailSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Need assitance" />
              </Form.Group>
            </Row>
              <Form.Group className="mb-3" controlId="clientEmail">
                <Form.Label className='form-label'>Your Email Address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="clientMessage">
                <Form.Label>You Message</Form.Label>
                <Form.Control as="textarea" size="lg" rows={5} placeholder='Please write your message here..' />
              </Form.Group>
              <Button variant="primary" type="submit" className="float-right">
                Send Message
              </Button>
           </Form>
            </Col>
           
          </Row> */}
        </Container>
    </Element>
  )
}

export default Index;