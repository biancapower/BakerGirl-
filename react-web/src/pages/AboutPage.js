import React from 'react'
import { Container, Card, CardTitle, CardText, Media } from 'reactstrap';
import BackgroundPicture from '../assets/images/BackgroundPicture2.jpeg';
import Logo from '../assets/images/Logo.png';

export default function () {
  return (
    <div>
      <div className="header-background"></div>
      <div>
        <Container>
          <div className="logo">
            <Media id="logo" object src={Logo} alt="Generic placeholder image" />
          </div>
          <Card id="card" className="pr-5 pl-5 btm-mar">
            <div className="card-content">
              <CardTitle className="m-5 pt-4">ABOUT</CardTitle>
              <CardText>Creating delicious cakes, macarons and miniature desserts for your special event or just because. Delivering to you all over Sydney.</CardText>
            </div>
          </Card>
        </Container>
    </div>
  </div>

  )
}
