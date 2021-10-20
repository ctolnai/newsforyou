import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import '../style.css'
import { Divider } from 'semantic-ui-react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap/';

const NavBar = () => {
    return (

<Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark">
<Container>
<Navbar.Brand><Link to ="/" className="nav-link">NF<span>Y</span></Link></Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="me-auto d-flex justify w-100" justify>
    <Nav.Link href="/latestnews">Latest News</Nav.Link>
    <Nav.Link href="/entertainment">Entertainment</Nav.Link>
    
  
    <Nav.Link href="/politics">Politics</Nav.Link>
    <Nav.Link eventKey={2} href="#weather">
      Sports
    </Nav.Link>
  </Nav>
</Navbar.Collapse>
</Container>
</Navbar>
  );
  };
  
  export default NavBar;
         