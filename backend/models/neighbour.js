const mongoose = require('mongoose');

const neighbourSchema = new mongoose.Schema({
    id: Number,
    name: String,
    city: String,
    safety: Number,
    affordability: Number,
    public_transport: Number,
    walkability: Number,
    noise_level: Number,
    green_space: Number,
    internet_speed: Number,
    climate_score: Number,
    description: String
}, { timestamps: true });

const Neighbour = mongoose.model("Neighbour", neighbourSchema);

module.exports = Neighbour;
