import React from 'react'
import { Jumbotron, Container } from 'reactstrap';
import { Media } from 'reactstrap';
import BackgroundPicture from '../assets/images/BackgroundPicture.png';
import Logo from '../assets/images/Logo.png';


export default function () {
  return (
    <div>
    <div className="Jumbotron">
       <Container fluid>
            <Media width = "100%" height ="10%" object src={BackgroundPicture} alt="Generic placeholder image" />
       </Container>
    </div>

     <div className="logo">
          <Media id="logo" object src={Logo} alt="Generic placeholder image" />
     </div>

   </div>
  )
}
