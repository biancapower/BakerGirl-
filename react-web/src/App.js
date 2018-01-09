import React, { Component } from 'react';
import './App.css';
import CakesPage from './pages/CakesPage';
import CakeForm from './components/CakeForm'
import AboutPage from './pages/AboutPage'
import * as cakesAPI from './api/cakes'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'



export class App extends Component {
  state = { cakes: null }

  componentDidMount() {
    cakesAPI.all()
      .then((cakes) => {
        this.setState({ cakes })
      })
  }

  handleCakeSubmission = (cake) => {
    this.setState(({ cakes }) => {
      return { cakes: [cake].concat(cakes) }
    });
    cakesAPI.save(cake);
  }

  render() {
    const { cakes } = this.state;
    return (
      <Router>
        <div className="App">
          <nav>
            <span><Link to='/about'>About</Link></span>
            <span><Link to='/cakes'>Home</Link></span>
            <span><Link to='/cakes/new'>New cake</Link></span>
          </nav>

          <Switch>
            <Route path='/about' component={AboutPage} />
            <Route path='/cakes/new' render={
              () => (
                <CakeForm onSubmit={this.handleCakeSubmission} />
              )
            } />
            <Route path='/cakes' render={
              () => (
                <CakesPage cakes={cakes} />
              )} />
          </Switch>
        </div>
      </Router>
    );
  }
}
