const express = require('express');
const decksRouter = express.Router();
const Deck = require('../models/deck.js')

decksRouter.get('/', (req, res) => {
    res.send('Deck Index Page')
})

module.exports = decksRouter;
