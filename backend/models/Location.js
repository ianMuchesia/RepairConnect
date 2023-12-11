const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lat: {
        type: Number,
        required: true,
        trim: true
    },
    lon: {
        type: Number,
        required: true,
        trim: true
    },
});

module.exports = mongoose.model('Location', LocationSchema);