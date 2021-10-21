import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../style.css'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap/';

const NavBar = () => {
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
    <Nav.Link eventKey={2} href="/profile">Login</Nav.Link>
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