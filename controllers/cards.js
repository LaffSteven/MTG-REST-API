const express = require('express');
const axios = require('axios');
const cardsRouter = express.Router();
const Card = require('../models/card.js')

cardsRouter.get('/data/seed/import', (req, res) => {
    console.log('test seed import');
    axios.get('http://api.magicthegathering.io/v1/cards?page=1')
        .then((response) => {
            // console.log(response.data.cards);
            Card.insertMany(response.data.cards, (err, foundCards) => {
                console.log(`Found ${response.data.cards.length} cards to import`);
                console.log(`The collection now has ${Card.count()} cards`);
            });
        });
});


cardsRouter.get('/', (req, res) => {
    res.send('Card Index Page')
});

module.exports = cardsRouter;
