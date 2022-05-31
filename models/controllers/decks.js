const express = require('express');
const router = express.Router();
const cors = require('cors')
const Deck = require('../deck.js')

router.get('/', (req, res) => {
    res.send('Deck Index Page')
})

module.exports = router;
