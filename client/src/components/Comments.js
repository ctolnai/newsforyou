import React from 'react';
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Row,
    Col,
    Form,
    Button,
    Card,
    Stack
  } from 'react-bootstrap/';

function Comments() {
return (
    <div>
              <Form.Label style={{ margin: "10px" }}>Edit your username or email address below:</Form.Label>
      <Form  style={{ margin: "20px" }}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control name="username" type="username" placeholder="Enter username" value='sds'
             />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" value='sds'
             />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit Changes
        </Button>
      </Form>
    </div>
);
};
export default Comments;
// onSubmit={handleFormSubmit}
// onChange={handleChange}
// onChange={handleChange}