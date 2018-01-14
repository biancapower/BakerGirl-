import React from 'react'
import { Jumbotron, Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';
import { Media } from 'reactstrap';
import BackgroundPicture from '../assets/images/BackgroundPicture.png';
import Logo from '../assets/images/Logo.png';


export default function () {
  return (
    <div>
      <div className="header-background"></div>
      <Container>
        <div className="logo">
          <Media id="logo" object src={Logo} alt="Generic placeholder image" />
        </div>
        <Card id="card" className="pr-5 pl-5">
          <div className="card-content">
            <CardTitle className="m-5 pt-4">ABOUT</CardTitle>
            <CardText>Creating delicious cakes, macarons and miniature desserts for your special event or just because. Delivering to you all over Sydney.</CardText>
          </div>
        </Card>
      </Container>
    </div>
  )
}
