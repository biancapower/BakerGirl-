import React, { Component } from 'react';
import './stylesheets/styles.css';
import CakesPage from './pages/CakesPage';
import CakeForm from './components/CakeForm'
import AboutPage from './pages/AboutPage'
import AdminPage from './pages/AdminPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import ThanksPage from './pages/ThanksPage'
import Instagram from './components/Instagram'

import * as cakesAPI from './api/cakes'
import * as instagramAPI from './api/instagram'
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
  CardFooter,
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
      isOpen: false,
      instagramData: null
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

    instagramAPI.all()
      .then((instagramData) => {
        this.setState (( { instagramData }) => {
          return { instagramData: instagramData }
        });
      })
  }


  handleCakeSubmission = (cake) => {
      this.setState(({ cakes }) => {
        return { cakes: [cake].concat(cakes) }
      });
      cakesAPI.save(cake);
    }

//render instagram with cakes

  render() {
    const { cakes, instagramData } = this.state;
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
              <Route path='/gallery' render={
                () => (
                  <GalleryPage instagramData={instagramData} />
                )} />
              <Route path='/' render={
                () => (
                  <Instagram instagramData={instagramData} />
                )
              } />
              <Route path='/thanks' component={ThanksPage} />
              <Route path='/admin' render={
                () => (
                  <AdminPage cakes={cakes} />
                )} />
              <Route path='/' render={
                () => (
                  <CakeForm onSubmit={this.handleCakeSubmission} />
                )
              } />
            </Switch>
          </div>
          <div color="faded" light expand="md" className="footer text-center">
                <Link to="/" className="link-text px-5" >© 2018 </Link>
                <Link to="/admin" className="link-text px-5">Admin</Link>
          </div>
        </div>
      </Router>
    );
  }
}
