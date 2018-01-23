const chai = require('chai');
const expect = chai.expect;
const app = require('../../app');
const Cake = require('../../models/cake');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);


it("should return a list of cake order", function() {
   chai.request(app)
  .get('/cakes')
});


it("create a new cake", function() {
    chai.request(app)
  .post('/CreateACake')
  .then(function (err, res) {
    expect(err).to.be.json;
    expect(res).to.have.status(201);
  })
});

it("request for authentication", function() {
    chai.request(app)
   .post('/signin')
   .auth('email', 'password')
});
