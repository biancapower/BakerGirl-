import React from 'react';
import InstaFeed from '../components/InstaFeed';
import { Jumbotron, Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';


export default function () {
  return (
    <div className="page-g">
      <Container>
        <Col>
          <Row>
            <InstaFeed />
          </Row>   
        </Col>
      </Container>
    </div>
  )
}
