const express = require('express');
const axios = require('axios');
const cors = require('cors')
const router = express.Router();
const Card = require('../models/card.js')

//___________________
// Import Seed Data
//___________________
// only call seed route when working on localhost
// const seedData = require('../models/seed.json')
// router.get('/data/seed/import', (req, res) => {
//     console.log("Starting Data Upload");
//         Card.insertMany(seedData, (err, foundCards) => {
//             if (err) {
//                 console.log(err.message);
//             }
//             console.log("Card Data Uploaded");
//             res.send("Card Seed Data Uploaded")
//         });
// });

router.get('/', (req, res) => {
    Card.find({}, (err, foundCards) => {
        res.json(foundCards)
    }).limit(10);
});

// serach by card name
router.get('/:name', (req, res) => {
    Card.find({name: name}, (err, foundCard) => {
        res.json(foundCard);
    })
})

module.exports = router;
