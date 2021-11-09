import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../style.css';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Modal,
  Button,
  Form,
} from 'react-bootstrap/';
import Signup from '../pages/Signup';
import Auth from '../utils/auth';
import Login from '../pages/Login';

function MyOtherModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Login />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal(props) {
  const updateModals = () => {
    props.setModalShow(false);
    props.setLoginShow(true);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Button eventKey={2} onClick={updateModals}>
        {' '}
        Login
      </Button>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Sign Up</Modal.Title>
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
  const [loginShow, setLoginShow] = React.useState(false);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand style={{ marginLeft: '2%' }}>
        <Link to="/" className="nav-link">
          NF<span>Y</span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto d-flex justify w-100" justify>
          <Nav.Link href="/category/Latest News">Latest News</Nav.Link>
          <Nav.Link href="/category/Entertainment">Entertainment</Nav.Link>
          <Nav.Link href="/category/Politics">Politics</Nav.Link>
          <Nav.Link href="/category/Sports">Sports</Nav.Link>
          {
            Auth.loggedIn() ? 
          <Nav.Link eventKey={2} href="/profile">
            Dashboard
          </Nav.Link>:
          <Nav.Link eventKey={2} onClick={() => setModalShow(true)}>
            Sign Up/Login
          </Nav.Link>
          }
          {/* <Nav.Link eventKey={2}  onClick={() => setModalShow(true)}> Login</Nav.Link> */}
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            setModalShow={setModalShow}
            setLoginShow={setLoginShow}
          />
          <MyOtherModal show={loginShow} onHide={() => setLoginShow(false)} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

// return (

// const user = null;

//     <Toolbar className={classes.toolbar}>
//       {user?.result ? (
//         <div className={classes.profile}>

//           <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
//         </div>
//       ) : (
//         <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
//       )}
//     </Toolbar>
//   </AppBar>
// );
