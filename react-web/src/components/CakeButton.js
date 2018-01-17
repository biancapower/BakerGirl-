import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { Button, Container, Media, Card, Jumbotron } from 'reactstrap';
import Logo from '../assets/images/Logo.png';

export default function CakeButton() {
  return (
    <Switch>
      <Route>
    <div>
      <Jumbotron className="home-jumbo">

          <h1 className="display-6">BAKERGIRL</h1>
          <p className="lead">Hi I'm Erin and welcome to BakerGirl, a home for all things sweet</p>

          <Link to="/CreateACake"><Button className="button">Create A Cake</Button></Link>

        </Jumbotron>
    </div>
  </Route>
    </Switch>
  );
};
