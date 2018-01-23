const express = require('express');
const authMiddleware = require('../middleware/auth.js');

const router = express.Router();

// Register a new user
router.post('/register',
  authMiddleware.register,
  authMiddleware.signJWTForUser
);

// Sign in a user
router.post('/signin',
  authMiddleware.signIn,
  authMiddleware.signJWTForUser
);

module.exports = router;
