const mongoose = require('mongoose');

const deckSchema = new mongoose.Schema({

})

const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;
