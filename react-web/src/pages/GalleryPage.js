import React from 'react';
import { Link } from 'react-router-dom';
import InstaFeed from '../components/InstaFeed';
import { Container, Row, Col, Media } from 'reactstrap';
import Instagram from '../assets/images/instagram-logo.png';


export default function () {
  return (
    <Container className="cont">
      <Col>
        <Row className="m-5 pt-3 text-center">
          <Col>
            <h2><a href="https://www.instagram.com/_bakergirl/" target="_blank"><Media id="insta-logo" object src={Instagram} alt="Instagram Logo" />Follow us on Instagram</a></h2>
          </Col>
        </Row>
        <Row className="m-5 text-center">
          <InstaFeed />
        </Row>   
      </Col>
    </Container>
  )
}
