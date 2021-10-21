import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'
import { Row, Container, Col } from 'react-bootstrap/';


const Showcase = ({ news }) => {
  // if (!news.length) {
  //   return <h3>No News</h3>;
  // }

  return (
    <Container className ="showcaseCon">
    <Row>
      <Col sm={12} md={4} className = "trending">

      </Col>
      <Col sm={12} md={4} className = "headline">

      </Col>
      <Col sm={12} md={4} className = "latest">

      </Col>
      
    </Row>
   
  </Container>
  );
};

export default Showcase;
