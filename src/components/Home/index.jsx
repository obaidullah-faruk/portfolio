import React from 'react';
import './style.css';
import { Element, Link } from 'react-scroll';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Typewriter from "typewriter-effect";

const smooth_duration = 50;

const index = () => {
  return (
    <Element id="home" className='section home-section adjust-nav'>
          <Container >
            <Row className="align-items-center">
              <Col md={6}>
                <p className='green-greetings'>Hi, my name is</p>
                
                <h1 className='my-name'>MD Obaidullah Al-Faruk </h1>
                <h2 className='my-job'>
                  <Typewriter
                    className='my-job'
                    options={{
                      loop: true
                    }}
                    onInit={(typewriter) => {
                      typewriter.typeString('I build things for the web.')
                      .pauseFor(2000)
                      .start();
                    }}
                  />
                </h2>
                  <p className='job-focus'>A Backend focused Web Developer building the Backend of Websites and Web Applications that leads to the success of the overall product</p>
                  <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  activeClass="active"
                  className="nav-link"
                  duration={smooth_duration}
                  offset={-70}
                >
                  <Button variant="light">
                    Contact me
                  </Button>
                </Link>
              </Col>
              <Col>
              </Col>
            </Row>
          </Container>
    </Element>
  )
}

export default index;











// const index = () => {
//   return (
//     <Element id="home" className='section home-section adjust-nav' >
//           <Container>
//             <Row className="align-items-center">
//               <Col className="order-md-1">
//                 <p>Hi, my name is</p>
//                 <h1 className='my-name'>MD Obaidullah Al-Faruk </h1>
//                 <h2>I build things for the web.</h2>
//                   <p className='designation-title'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
//                   <Link
//                   to="contact"
//                   spy={true}
//                   smooth={true}
//                   activeClass="active"
//                   className="nav-link"
//                   duration={smooth_duration}
//                   offset={-70}
//                 >
//                   <Button variant="light">
//                     Contact me
//                   </Button>
//                 </Link>
//               </Col>
//             </Row>
//           </Container>
//     </Element>
//   )
// }