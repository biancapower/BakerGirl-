import React from 'react';
import InstaFeed from '../components/InstaFeed';
import { Jumbotron, Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';


export default function () {
  return (
    <Container>
      <Col>
        <Row className="m-5 text-center">
          <InstaFeed />
        </Row>   
      </Col>
    </Container>
  )
}
