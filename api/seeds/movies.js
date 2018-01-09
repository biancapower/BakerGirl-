const Movie = require('../models/movie');

Movie.create([
  {
      title: "Wonder Woman",
      yearReleased: 2017,
      star: "Gal Gadot"
  },
  {
      title: "Star Wars",
      yearReleased: 1977,
      star: "Carrie Fisher"
  }
]);
