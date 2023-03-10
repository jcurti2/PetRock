const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Owner = new Schema(
    { 
        name: { type: String, required: true },
        money: { type: Number, required: true},
        picture: { type: String, required: false},
    },
    {timestamps: true}
)

module.exports = mongoose.model('Owner', Owner)