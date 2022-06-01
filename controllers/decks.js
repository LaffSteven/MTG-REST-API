const express = require('express');
const router = express.Router();
const cors = require('cors')
const Deck = require('../models/deck.js')

router.get('/', (req, res) => {
    Deck.find({}, (err, foundDecks) => {
        res.json(foundDecks)
    })
})

router.post('/', (req, res) => {
    Deck.create(req.body, (err, createdDeck) => {
        if (err) {
            console.log(err.message);
        }
        console.log(`Created new deck: ${createdDeck.name}`);
    })
})

module.exports = router;
