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
            <Nav.Link eventKey={2} href="mailto:name@rapidtables.com">
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
        <Row >
          <Col className="userhero d-flex justify-content-center">
            <h1 className="">User Name</h1>

          </Col>
        </Row>
        <Row className="useremail">
        <Col className="userhero d-flex justify-content-spacebetween p-5">
            <h2 className="">User Email</h2>
            <button type="button" class="btn btn-outline-dark btn-lg">Edit</button>

          </Col>
        </Row>
        <Row className="username">
        <Col className="userhero d-flex justify-content-spacebetween p-5">
            <h2 className="">UserName</h2>
            <button type="button" class="btn btn-outline-dark btn-lg">Edit</button>

          </Col>
        </Row>
        <Row className="name">
        <Col className="userhero d-flex justify-content-spacebetween p-5">
            <h2 className="">Name</h2>
            <button type="button" class="btn btn-outline-dark btn-lg">Edit</button>

          </Col>
        </Row>
      </body>
    </>
  );
};

export default Profile;
