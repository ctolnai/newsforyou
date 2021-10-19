import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../style.css'

const Nav = () => {
    return (
      <nav> <Link to ="/" className="nav-link">NF<span>Y</span></Link><FontAwesomeIcon icon = {faBars} className ='menu'/></nav>
 
  );
  };
  
  export default Nav;
         