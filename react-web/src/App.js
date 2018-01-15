import React, { Component } from 'react';
import './stylesheets/styles.css';
import CakesPage from './pages/CakesPage';
import CakeForm from './components/CakeForm'
import AboutPage from './pages/AboutPage'
import AdminPage from './pages/AdminPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import ThanksPage from './pages/ThanksPage'
import * as cakesAPI from './api/cakes'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'



export class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

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
        <div>
          <div className="App">
            {/* NAVBAR */}
            <div color="faded" light expand="md" className="top-navbar">
              <div className="top-nav">
                <div className="nav-item">
                  <NavLink href="/" className="link-text" >Home</NavLink>
                </div>
                <div className="nav-item">
                  <NavLink href="/about" className="link-text">About</NavLink>
                </div>
                <div className="nav-item">
                  <NavLink href="/gallery" className="link-text">Gallery</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink href="/contact" className="link-text">Contact</NavLink>
                </div>
              </div>
            </div>

            <Switch>
              <Route path='/about' component={AboutPage} />
              <Route path='/contact' component={ContactPage} />
              <Route path='/gallery' component={GalleryPage} />
              <Route path='/thanks' component={ThanksPage} />
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

          {/* FOOTER */}
          <div color="faded" light expand="md" className="footer">
            <div className="top-nav">
              <div className="nav-item">
                <NavLink href="/" className="link-text" >© 2017</NavLink>
              </div>
              <div className="nav-item">
                  <NavLink href="/contact" className="link-text">Admin</NavLink>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
