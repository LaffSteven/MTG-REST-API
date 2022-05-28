const express = require('express');
const cardsRouter = express.Router();
const Card = require('../models/card.js')


cardsRouter.get('/', (req, res) => {
    res.send('Card Index Page')
})

module.exports = cardsRouter;
