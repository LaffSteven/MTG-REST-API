const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    name: String,
    names: [String],
    manaCost: String,
    cmc: Number,
    colors: [String],
    colorIdentity:[String],
    type: String,
    supertypes: [String],
    types: [String],
    subtypes: [String],
    rarity: String,
    set: String,
    text: String,
    artist: String,
    number: String,
    power: String,
    toughness: String,
    loyalty: String,
    layout: String,
    multiverseid: Number,
    imageUrl: String,
    rulings: [
        {
            date: Date,
            text: String
        }
    ],
    foreignName:[
        {
            name: String,
            language: String,
            multiverseid: Number
        }
    ],
    printings: [String],
    originalText: String,
    originaltype: String,
    id: String

});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
