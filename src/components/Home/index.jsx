import React from 'react';
import { Element, Link } from 'react-scroll';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Typewriter from "typewriter-effect";

import Porfile from '../../images/faruk.jpg';

const smooth_duration = 50;

const Index = () => {
  return (
    <Element id="home" className='section home-section adjust-nav'>
          <Container >
            <Row className="align-items-center">
              <Col md={6}>
                <Row>
                  <p className='greetings'>Hi, my name is</p>
                  {/* https://www.youtube.com/watch?v=rc50owRPdUI&t=11s */}
                  <h1 className='my-name'>MD Obaidullah Al-Faruk </h1>
                  <h2 className='my-job'>
                    <Typewriter
                      className='my-job'
                      options={{
                        loop: true
                      }}
                      onInit={(typewriter) => {
                        typewriter.typeString('the web.')
                        .pauseFor(2000)
                        .start();
                      }}
                    />
                  </h2>
                  <p className='job-focus'>A Backend focused Web Developer building the Backend of Websites and Web Applications that leads to the success of the overall product</p>
                </Row>
                <Row>
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    activeClass="active"
                    className="nav-link"
                    duration={smooth_duration}
                    offset={-70}
                  >
                    <Button className='contact-me' size="lg">
                      Contact me
                    </Button>
                  </Link>
                </Row>
                 
              </Col>
              <Col md={6}>
                <Image 
                  className='profile-image'
                  src={Porfile} 
                  thumbnail
                  responsive
                />
              </Col>
            </Row>
          </Container>
    </Element>
  )
}

export default Index;