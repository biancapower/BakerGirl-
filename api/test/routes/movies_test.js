"use strict"

const chai = require('chai');
const expect = chai.expect;
const app = require('../../app');
const Movie = require('../../models/movie');

chai.use(require('chai-http'));

describe("Movies API", function() {
  let server;
  const port = 7010;

  before(function(done) {
    server = app.listen(port, done);
  });

  after(function(done) {
    server.close(done);
  });

  beforeEach(function(done) {
    Movie.create({
      title: "Legally Blonde",
      yearReleased: 2001,
      comments: [{ body: "Very funny" }]
    }, done)
  });

  afterEach(function(done) {
    Movie.remove({}, done)
  });

  it("should return a list of movies", function() {
    return chai.request(app)
      .get('/movies')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.length(1);
      })
  })

  it("should create a movie", function() {
    return chai.request(app)
      .post('/movies')
      .field('title', 'Legally Blonde 2')
      .field('yearReleased', 2003)
      .then(function(res) {
        expect(res).to.have.status(201)
      })
  });
})
