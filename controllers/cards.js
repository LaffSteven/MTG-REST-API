const express = require('express');
const axios = require('axios');
const cardsRouter = express.Router();
const Card = require('../models/card.js')

cardsRouter.get('/data/seed/import', (req, res) => {
    axios.get('http://api.magicthegathering.io/v1/cards?page=1')
        .then((response) => {
            console.log(response.data);
        })
});


cardsRouter.get('/', (req, res) => {
    res.send('Card Index Page')
});

module.exports = cardsRouter;
