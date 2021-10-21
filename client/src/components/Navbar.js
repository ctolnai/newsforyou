import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../style.css'
import { Navbar, Container, Nav, NavDropdown, Modal, Button } from 'react-bootstrap/';


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
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


const NavBar = () => {
  const modalLoader = () => {
        return (<MyVerticallyCenteredModal/>)
  }
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
    <Nav.Link eventKey={2} onClick = {modalLoader}> Login</Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
  );
  };
  
  export default NavBar;
         