import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import profileNav from '../components/ProfileNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { QUERY_SINGLE_USER } from '../utils/queries';
import Auth from '../utils/auth';
import { UPDATE_USER } from '../utils/mutations';
import '../style.css';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
  Form,
  Button,
  Stack
} from 'react-bootstrap/';

const Profile = () => {

  // NEED TO RUN QUERY_USER AND RETURN DATA AS C_USERNAME C_EMAIL C_PASSWORD
  // THEN SET THE BELOW CODE TO SET THE DEFAULT VALUES TO THE RETURNED DATA
  // WHEN UPDATE_USER IS PUSHED, PUSHED VALUES SHOULD BE EQUAL TO THE STORED VALUES UNLES THEY WERE CHANGED IN UI 

  const { loading, data } = useQuery(QUERY_SINGLE_USER);
  const userData = !loading? data.userById: []



  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [updateUser, { error, name }] = useMutation(UPDATE_USER);
  useEffect(() => {  
    console.log(userData)  
    setFormState({ username: userData.username, email: userData.email, password: userData.password })
  }, [data])

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value)

    setFormState({
      // ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await updateUser({
        variables: { ...formState },
      });

    } catch (e) {
      console.error(e);
    }

  };

  return (

    <div>
            {loading ? ( 
              
              <div>Loading...</div>
            
            ) : (
              <Form onSubmit= {handleFormSubmit}>
             <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter username" value={formState.username}
                  onChange={handleChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={formState.email}
                  onChange={handleChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={formState.password}
                  onChange={handleChange}/>
              </Form.Group>
              
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            )}

            {/* {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )} */}
          </div>
  );


  // return (
  //   <>
  //     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  //       <Navbar.Brand style={{ marginLeft: '2%' }}>
  //         <Link to="/" className="nav-link">
  //           NF<span>Y</span>
  //         </Link>
  //       </Navbar.Brand>
  //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //       <Navbar.Collapse id="responsive-navbar-nav">
  //         <Nav className="me-auto d-flex justify w-100" justify>
  //           <Nav.Link href="#">Newsletter</Nav.Link>
  //           <Nav.Link eventKey={2} href="mailto:name@rapidtables.com">
  //             Contact Us
  //           </Nav.Link>
  //           <Nav.Link eventKey={2} href="#">
  //             Logout
  //           </Nav.Link>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Navbar>
  //     {/* <profileNav> </profileNav> */}

  //     <body className="profileBody">
  //       <Row >
  //         <Col className="userhero d-flex justify-content-center">
  //           <h1 className="">User Name</h1>

  //         </Col>
  //       </Row>
  //       <Row className="useremail">
  //       <Col className="userhero d-flex justify-content-spacebetween p-5">

  //          <h2 className="">User Email</h2>
  //           <button type="button" class="btn btn-outline-dark btn-lg">Edit</button>

  //         </Col>
  //       </Row>
  //       <Row className="username">
  //       <Col className="userhero d-flex justify-content-spacebetween p-5">
  //           <h2 className="">UserName</h2>
  //           <button type="button" class="btn btn-outline-dark btn-lg">Edit</button>

  //         </Col>
  //       </Row>
  //       <Row className="name">
  //       <Col className="userhero d-flex justify-content-spacebetween p-5">
  //           <h2 className="">Name</h2>
  //           <button type="button" class="btn btn-outline-dark btn-lg">Edit</button>

  //         </Col>
  //       </Row>
  //     </body>
  //   </>
  // );
};

export default Profile;
