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
    if (req.query.skip) {
        Card.find({}, (err, foundCards) => {
            res.json(foundCards)
        }).limit(20).skip(Number(req.query.skip));
    } else {
        Card.find({}, (err, foundCards) => {
            res.json(foundCards)
        }).limit(20);
    }
});

// serach by card name
router.get('/search', (req, res) => {
    Card.find({name: {$regex: '^'+req.query.name, $options:'i'}}, (err, foundCards) => {
        if (err) {
            console.log(err.message);
        }
        res.json(foundCards);
    });
});

router.delete('/:id', (req, res) => {
    Card.deleteOne({_id : req.params.id}, (err, deletedCard) => {
        res.send(`Deleted ${deletedCard.name} with ID:${deletedCard._id}`)
    });
});

router.post('/', (req, res) => {
    Card.create(req.body, (err, newCard) => {
        if (err) {
            console.log(err.message);
        }
    });
});

router.get('/:id', (req, res) => {
    Card.findById(req.params.id, (err, foundCard) => {
        res.json(foundCard);
    })
})

module.exports = router;
