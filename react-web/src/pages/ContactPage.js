import React from 'react'
import { Jumbotron, Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';
import { Media } from 'reactstrap';
import BackgroundPicture from '../assets/images/BackgroundPicture.png';
import Logo from '../assets/images/Logo.png';

export default function () {
  return (
    <div>
    <Jumbotron fluid></Jumbotron>
      <Container>
     <div className="logo">
          <Media id="logo" object src={Logo} alt="Generic placeholder image" />
     </div>
        <Card id="card">
          <CardTitle>Contact</CardTitle>
        <CardText>Email: </CardText>
        </Card>
      </Container>
    </div>
  )
}
