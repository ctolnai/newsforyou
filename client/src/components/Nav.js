import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../style.css'
import { Divider } from 'semantic-ui-react';

const Nav = () => {
    return (
      <div>
      <div> <Link to ="/" className="nav-link">NF<span>Y</span>
      </Link><FontAwesomeIcon icon = {faBars} className ='menu-icon'/></div>
      </div>
  );
  };
  
  export default Nav;
         