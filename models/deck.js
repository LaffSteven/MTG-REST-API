const mongoose = require('mongoose');

const deckSchema = new mongoose.Schema({
    name: String,
    cardList: [
        {
            card_id: String,
            card_name: String
        }
    ]
})

const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;
