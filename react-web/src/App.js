import React, { Component } from 'react';
import './App.css';
import MoviesPage from './pages/MoviesPage';
import MovieForm from './components/MovieForm'
import AboutPage from './pages/AboutPage'
import * as moviesAPI from './api/movies'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

// export function getMovies() {
//   return moviesAPI.all()
//     .then(movies => {
//       movies
//     })
// }

export class App extends Component {
  state = { movies: null }

  componentDidMount() {
    moviesAPI.all()
      .then((movies) => {
        this.setState({ movies })
      })
  }

  handleMovieSubmission = (movie) => {
    this.setState(({movies}) => {
      return { movies: [movie].concat(movies)}
    });
    moviesAPI.save(movie);
  }

  render() {
    const { movies } = this.state;
    return (
      <Router>
        <div className="App">
          <nav>
          <span><Link to='/about'>About</Link></span>
          <span><Link to='/movies'>Home</Link></span>
          <span><Link to='/movies/new'>New movie</Link></span>
        </nav>

        <Switch>
        <Route path='/about' component={AboutPage}/>
        <Route path='/movies/new' render={
          () => (
            <MovieForm onSubmit={this.handleMovieSubmission} />
          )
        }/>
        <Route path='/movies' render={
          () => (
            <MoviesPage movies={movies}/>
          )}/>
          </Switch>
      </div>
    </Router>
    );
  }
}
