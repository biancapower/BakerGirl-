import React, { Component } from 'react';
import './App.css';
import CakesPage from './pages/CakesPage';
import CakeForm from './components/CakeForm'
import AboutPage from './pages/AboutPage'
import AdminPage from './pages/AdminPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
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
            <span><Link to='/'>Homepage</Link></span>
            <span><Link to='/about'>About</Link></span>
            <span><Link to='/contact'>Contact</Link></span>
            <span><Link to='/gallery'>Gallery</Link></span>
            <span><Link to='/cakes'>Admin</Link></span>

          </nav>

          <Switch>
            <Route path='/about' component={AboutPage} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/gallery' component={GalleryPage} />
            <Route path='/cakes' render={
              () => (
                <CakesPage cakes={cakes} />
              )} />
            <Route path='/' render={
              () => (
                <CakeForm onSubmit={this.handleCakeSubmission} />
              )
            } />

          </Switch>
        </div>
      </Router>
    );
  }
}
