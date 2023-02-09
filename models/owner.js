const { Schema } = require('mongoose')

const Owner = new Schema(
    { 
        name: { type: String, required: true },
        money: { type: Number, required: true},
        picture: { type: String, required: false}
    },
    {timestamps: true}
)

module.exports = Owner