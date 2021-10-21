import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import profileNav from '../components/ProfileNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../style.css';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
} from 'react-bootstrap/';

const Profile = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand style={{ marginLeft: '2%' }}>
          <Link to="/" className="nav-link">
            NF<span>Y</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex justify w-100" justify>
            <Nav.Link href="#">Newsletter</Nav.Link>
            <Nav.Link eventKey={2} href="#">
              Contact Us
            </Nav.Link>
            <Nav.Link eventKey={2} href="#">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <profileNav> </profileNav> */}

      <body className="profileBody">
        <Row className="userhero d-flex justify-content-center">
          <Col>
            <h1 className="">User Name</h1>
          </Col>
        </Row>
        <Row className="useremail">
          <Col>
            <h1 className="">User Email</h1>
          </Col>
        </Row>
        <Row className="username">
          <Col>
            <h1 className="">UserName</h1>
          </Col>
        </Row>
        <Row className="name">
          <Col>
            <h1 className="">Name</h1>
          </Col>
        </Row>
      </body>
    </>
  );
};

export default Profile;
