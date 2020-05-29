const mongoose = require('mongoose');

const enterSchema = mongoose.Schema({
    id: Number,
    name: String,
    prise: Number,
    about: String,
    img: String
}, { versionKey: false });

const Event = mongoose.model('events', enterSchema);

module.exports = { Event };
