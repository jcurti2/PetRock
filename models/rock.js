const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Rock = new Schema(
    {
        name: {type: String, required:true},
        image: { type: String, required: true},
        rarity: {type: Number, required: true},
        cost: {type: Number, requied: true},
        owner_id:{type: Schema.Types.ObjectId, ref: 'owner_id'} 
    },
    { timestamps: true }
)

module.exports = mongoose.model('Rock', Rock)