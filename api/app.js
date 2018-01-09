const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./middleware/auth');

// Create the app
const app = express();

app.use(require('cookie-parser')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(require('express-session')(
  { secret: 'secret', resave: false, saveUninitialized: false }
));
app.use(authMiddleware.initialize);

// Movies router/controller
const moviesRouter = require('./routes/movies');
app.use('/movies', moviesRouter);
app.use('/auth', require('./routes/auth'));

app.get('/', (req, res) => {
  res.json({
    resources: [{
      movies: '/movies'
    }]
  })
});

module.exports = app
