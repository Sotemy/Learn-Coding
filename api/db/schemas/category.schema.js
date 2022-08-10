const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Please add text'],
        unique: true
    },
    text: {
        type: String,
        required: [true, 'Please add text']
    }, 
    img: {
        type: String,
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Category', categorySchema)