import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { Button, Container, Media, Card, Jumbotron } from 'reactstrap';
import Logo from '../assets/images/Logo.png';

export default function CakeButton() {
  return (
    <Switch>
      <Route>
    <div>
      <Jumbotron>

          <h1 className="display-5">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
          <p className="lead">
          <Link to="/CreateACake"><Button class="primary">Create A Cake</Button></Link>

          </p>
        </Jumbotron>
    </div>
  </Route>
    </Switch>
  );
};
