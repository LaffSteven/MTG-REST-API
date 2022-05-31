const express = require('express');
const axios = require('axios');
const cors = require('cors')
const router = express.Router();
const Card = require('../card.js')

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
router.get('/search', (req, res) => {
    console.log(`Searching for: ${req.query.name}`);
    Card.find({name: {$regex: '^'+req.query.name, $options:'i'}}, (err, foundCards) => {
        if (err) {
            console.log(err.message);
        }
        res.json(foundCards);
    })
})


router.delete('/:id', (req, res) => {
    Card.deleteOne({_id : req.params.id}, (err, deletedCard) => {
        res.send(`Deleted ${deletedCard.name} with ID:${deletedCard._id}`)
    })
})

router.delete('/cards/:id', (req, res) => {
  console.log(req.params.id);
  Card.findByIdAndRemove(req.params.id, (err, cardDelete) => {
    res.json(cardDelete)
  })
})

module.exports = router;
