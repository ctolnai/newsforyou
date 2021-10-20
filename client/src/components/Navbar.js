import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../style.css'
import { Divider } from 'semantic-ui-react';
import { Navbar, Container, Stack } from 'react-bootstrap/';

const NavBar = () => {
    return (
        <Navbar>
        <Container>
            <Stack direction = "horizontal" gap = {3}>
          <Navbar.Brand><Link to ="/" className="nav-link">NF<span>Y</span></Link></Navbar.Brand>
          <Navbar.Collapse className="justify-content-end ms-auto">
            <Navbar.Text>
            <FontAwesomeIcon icon = {faBars} className ='menu-icon'/>
            </Navbar.Text>
          </Navbar.Collapse>
          </Stack>
        </Container>
      </Navbar>
  );
  };
  
  export default NavBar;
         