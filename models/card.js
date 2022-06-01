const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    object: String,
    id: String,
    oracle_id: String,
    multiverse_ids: [Number],
    mtgo_id: Number,
    mtgo_foil_id: Number,
    tcgplayer_id: Number,
    cardmarket_id: Number,
    name: String,
    lang: String,
    released_at: String,
    uri: String,
    scryfall_uri: String,
    layout: String,
    highres_image: Boolean,
    image_status: String,
    image_uris: {
        small: String,
        normal: String,
        large: String,
        png: String,
        art_crop: String,
        border_crop: String
    },
    mana_cost: String,
    cmc: Number,
    power: String,
    toughness: String,
    loyalty: String,
    type_line: String,
    oracle_text: String,
    colors: [],
    color_identity: [],
    keywords: [],
    legalities: {},
    games:[String],
    reserved: Boolean,
    foil: Boolean,
    nonfoil: Boolean,
    finishes:[String],
    oversized: Boolean,
    promo: Boolean,
    reprint: Boolean,
    variation: Boolean,
    set_id: String,
    set: String,
    set_name: String,
    set_type: String,
    set_uri: String,
    set_search_uri: String,
    scryfall_set_uri: String,
    rulings_uri: String,
    prints_search_uri: String,
    collector_number: String,
    digital: Boolean,
    rarity: String,
    flavor_text: String,
    card_back_id: String,
    artist: String,
    artist_ids: [String],
    illustration_id: String,
    border_color: String,
    frame: String,
    full_art: Boolean,
    textless: Boolean,
    booster: Boolean,
    story_spotlight: Boolean,
    edhrec_rank: Number,
    prices: {},
    related_uris: {}
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
