import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../style.css'
import { Navbar, Container, Nav, NavDropdown, Modal, Button, Form } from 'react-bootstrap/';
import Signup from '../pages/Signup';


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
   <Signup />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>

    </Modal>
  );
}


const NavBar = () => {
  const [modalShow, setModalShow] = React.useState(false);
    return (

<Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark">
<Navbar.Brand style = {{ marginLeft: '2%' }}><Link to ="/" className="nav-link">NF<span>Y</span></Link></Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="me-auto d-flex justify w-100" justify>
    <Nav.Link href="/latestnews">Latest News</Nav.Link>
    <Nav.Link href="/entertainment">Entertainment</Nav.Link>
    <Nav.Link href="/politics">Politics</Nav.Link>
    <Nav.Link eventKey={2} href="/sports">Sports</Nav.Link>
    <Nav.Link eventKey={2}  onClick={() => setModalShow(true)}> Login</Nav.Link>
    
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  </Nav>
</Navbar.Collapse>
</Navbar>
  );
  };
  
  export default NavBar;
         