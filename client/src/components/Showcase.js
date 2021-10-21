import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'
import { Row, Container, Col } from 'react-bootstrap/';
import Sports from "./Sports"


const Showcase = ({ news }) => {
  // if (!news.length) {
  //   return <h3>No News</h3>;
  // }

  return (
    <Container>
    <Row>
      <Col sm={12} md={4} className = "trending">
<Sports />
      </Col>
      <Col sm={12} md={4} className = "headline">
column 2
      </Col>
      <Col sm={12} md={4} className = "latest">
column 3
      </Col>
      
    </Row>
   
  </Container>
  );
};

export default Showcase;
