import React from 'react'
import { Link } from "react-scroll";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../images/logo.svg';

const smooth_duration = 50;
const Topbar = () => {

  return (
    <Navbar className='protfolio-navbar'  collapseOnSelect expand="lg" variant="dark" fixed="top" >
      <Container>
        <Navbar.Brand href="#home"><img
              className='logo-background'
              alt="React Logo"
              src={Logo}
              width="35"
              height="35"
            /> Obaidullah Al-Faruk</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            
        <Nav className="ml-auto">
             <Nav.Item>
             <Link
                  to={"home"}
                  spy={true}
                  smooth={true}
                  activeClass="active"
                  className="nav-link"
                  duration={smooth_duration}
                  offset={-70}
                >
                  Home
                </Link>
             </Nav.Item>
             <Nav.Item>
             <Link
                  to={"experience"}
                  spy={true}
                  smooth={true}
                  activeClass="active"
                  className="nav-link"
                  duration={smooth_duration}
                  offset={-70}
                >
                  Experience
                </Link>
             </Nav.Item>
             <Nav.Item>
             <Link
                  to={"skills"}
                  spy={true}
                  smooth={true}
                  activeClass="active"
                  className="nav-link"
                  duration={smooth_duration}
                  offset={-70}
                >
                  Skills
                </Link>
             </Nav.Item>
             <Nav.Item>
             <Link
                  to={"projects"}
                  spy={true}
                  smooth={true}
                  activeClass="active"
                  className="nav-link"
                  duration={smooth_duration}
                  offset={-70}
                >
                  Projects
                </Link>
             </Nav.Item>
             {/* <Nav.Item>
             <Link
                  to={"resume"}
                  spy={true}
                  smooth={true}
                  activeClass="active"
                  className="nav-link"
                  duration={smooth_duration}
                  offset={-70}
                >
                  Resume
                </Link>
             </Nav.Item> */}
             <Nav.Item>
             <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  activeClass="active"
                  className="nav-link"
                  duration={smooth_duration}
                  offset={-70}
                >
                  Contact
                </Link>
             </Nav.Item>
           </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar