import React from 'react'
import { Container, Card, CardTitle, CardText } from 'reactstrap';
import { Media } from 'reactstrap';
import Logo from '../assets/images/Logo.png';

export default function () {
  return (
    <div>
      <div className="header-background"></div>
      <Container>
        <div className="logo">
          <Media id="logo" object src={Logo} alt="Generic placeholder image" />
        </div>
        <Card id="card" className="pr-5 pl-5 btm-mar">
          <div className="card-content">
            <CardTitle className="m-5 pt-4">CONTACT</CardTitle>
            <CardText>Email: hello.bakergirl@gmail.com</CardText>
            <CardText>Call: 0405 592 325</CardText>
          </div>
        </Card>
      </Container>
    </div>
  )
}
