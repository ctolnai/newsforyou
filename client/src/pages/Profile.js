import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../utils/queries';
import NavBar from '../components/Navbar';
import Header from '../components/Header';
import { UPDATE_USER } from '../utils/mutations';
import '../style.css';
import { Form, Button, Card } from 'react-bootstrap/';


const UserData = () => {

  const { loading, data } = useQuery(QUERY_SINGLE_USER);
  const userData = !loading ? data.userById : []
  if (loading) {
    return (<div> Loading... </div>)
  } 
    console.log(userData)
    return (
      <Profile userData={userData} />
    )
}


const Profile = ({ userData }) => {

  const [formState, setFormState] = useState({ username: '', email: '' });
  const [updateUser, { data }] = useMutation(UPDATE_USER);
  useEffect(() => {
    console.log(userData.username)
    setFormState({ username: userData.username, email: userData.email })
  }, [data])


  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value)

    setFormState({
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    alert("Your information has been updated");
    try {
       await updateUser({
        variables: { ...formState },

      });
    } catch (e) {
      console.error(e);
    }

  };

  return (

    <div>

      <NavBar />
      <Header />

      <Card style={{ width: '18rem', height: 'auto', justifyContent: 'center', margin: '15px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Card.Body style={{ backgroundColor: 'red' }}>Dashboard</Card.Body>
      </Card>
      <Form.Label style={{ margin: "10px" }}>Edit your username or email address below:</Form.Label>
      <Form onSubmit={handleFormSubmit} style={{ margin: "20px" }}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control name="username" type="username" placeholder="Enter username" value={formState.username}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" value={formState.email}
            onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit Changes
        </Button>
      </Form>

    </div>
  );
};

export default UserData;
