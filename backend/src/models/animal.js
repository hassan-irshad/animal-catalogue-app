const mongoose = require('mongoose');

const Animal = new mongoose.model('Animal', {
    _id: String,
    name: String,
    description: String,
    imageUrl: String,
    userId: String
})

module.exports = { Animal }
