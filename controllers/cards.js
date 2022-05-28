const express = require('express');
const axios = require('axios');
const cardsRouter = express.Router();
const Card = require('../models/card.js')


// only call seed route when working on localhost (already used, please don't run again)
// let pageIndex = 1;
// cardsRouter.get('/data/seed/import', (req, res) => {
//     res.send(`Imported page #${pageIndex}`)
//     callSeed(pageIndex);
//     pageIndex++
// });
//
// const callSeed = (pageNum) => {
//     axios.get(`http://api.magicthegathering.io/v1/cards?page=${pageNum}`)
//         .then((response) => {
//             Card.insertMany(response.data.cards, (err, foundCards) => {
//                 console.log(`Imported Page #${pageNum}`);
//             });
//     });
// }


cardsRouter.get('/', (req, res) => {
    res.send('Card Index Page')
});

module.exports = cardsRouter;
