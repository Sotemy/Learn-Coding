const mongoose = require("mongoose")

const lessonsSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Please add text'],
        unique: true
    },
    text: {
        type: String,
        required: [true, 'Please add text'],
    }, 
    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topics"
    }

},{
    timestamps: true
})

module.exports = mongoose.model('Lessons', lessonsSchema)