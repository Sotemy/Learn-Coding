const mongoose = require("mongoose")

const appSchema = mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Please add text'],
        unique: true
    },
    text: {
        type: String,
        required: [true, 'Please add text']
    }, 
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
},{
    timestamps: true
})

module.exports = mongoose.model('App', appSchema)