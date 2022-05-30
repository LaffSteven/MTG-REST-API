const express = require('express');
const axios = require('axios');
const cors = require('cors')
const router = express.Router();
const Card = require('../models/card.js')


// only call seed route when working on localhost (already used, please don't run again)
const jsonCardSeed = require('./card-seed.json');
router.get('/data/seed/import', (req, res) => {
    Card.insertMany(response.data.cards, (err, foundCards) => {
        if (err) {
            console.log(err.message);
        }
        console.log("Card Data Uploaded");
        res.send("Card Seed Data Uploaded")
    });
});

const callSeed = (pageNum) => {
    Card.insertMany(response.data.cards, (err, foundCards) => {});
}


router.get('/', (req, res) => {
    Card.find({}, (err, foundCards) => {
        res.json(foundCards)
    }).limit(10);
});

module.exports = router;
