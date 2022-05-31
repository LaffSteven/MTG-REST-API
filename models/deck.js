const mongoose = require('mongoose');

const deckSchema = new mongoose.Schema({
  name: String,
  deck: [{}]
})

const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;
