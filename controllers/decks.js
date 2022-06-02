const express = require('express');
const router = express.Router();
const cors = require('cors')
const Deck = require('../models/deck.js')

router.get('/', (req, res) => {
    Deck.find({}, (err, foundDecks) => {
        res.json(foundDecks)
    })
})

router.delete('/:id', (req, res) => {
    Deck.deleteOne({_id : req.params.id}, (err, deletedDeck) => {
        res.send(`Deleted ${deletedDeck.name} with ID:${deletedDeck._id}`)
    });
});

router.post('/', (req, res) => {
    Deck.create(req.body, (err, createdDeck) => {
        if (err) {
            console.log(err.message);
        }
        console.log(`Created new deck: ${createdDeck.name}`);
        res.json(createdDeck)
    })
})

module.exports = router;
