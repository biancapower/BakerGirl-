const express = require('express');
const Cake = require('../models/cake');
const Person = require('../models/person');

const router = express.Router();

const authorize = (req, res, next) => {
  next(); return;
  if (req.user) {
    next();
  } else {
    res.status(403).end();
  }
}

router.get('/', (req, res) => {
  Cake.find()
    .populate('director')
    .populate('crew.person')
    .populate('cast.actor')
    .populate('cast.character')
    .then(cakes => res.json(cakes))
    .catch(error => res.json({ error }))
});

router.post('/', (req, res) => {
  Cake.create(req.body)
    .then((cake) => {
      res.status(201).json(cake).end();
    })
    .catch(error => res.json({ error }))
});

module.exports = router;
