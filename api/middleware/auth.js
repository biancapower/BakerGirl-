const passport = require('passport');
const JWT = require('jsonwebtoken');
const User = require('../models/user');

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

function register(req, res, next) {
  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });

  User.register(user, req.body.password, (error, user) => {
    if (error) {
      next(error);
      return;
    }
    // Store user in the req object itselt so that it is accessible
    // by following middlewares...
    req.user = user;
    next();
  })
}

function signJWTForUser(req, res) {
  const user = req.user;
  const token = JWT.sign({
    // Payload
      email: user.email
    },
    'topsecret',
    {
      algorithm: 'HS256',
      expiresIn: '7 days',
      subject: user._id.toString()
    }
  );

  res.json({ token })
}

module.exports = {
  initialize: [ passport.initialize(), passport.session() ],
  register,
  signJWTForUser,
  signIn: passport.authenticate('local', { session: true })
}
