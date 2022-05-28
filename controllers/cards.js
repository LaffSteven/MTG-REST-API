const express = require('express');
const cardsRouter = express.Router();
const Card = require('../models/card.js')

cardsRouter.get('/data/seed/import', (req, res) => {
    res.send(req.body)
});


cardsRouter.get('/', (req, res) => {
    res.send('Card Index Page')
});

module.exports = cardsRouter;
