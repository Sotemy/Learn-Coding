const mongoose = require("mongoose")

const lessonsSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Please add title'],
    },
    text: {
        type: String,
        required: [true, 'Please add text'],
    }, 
    topic: {
        type: mongoose.Schema.Types.String,
        ref: "Topics"
    }

},{
    timestamps: true
})

module.exports = mongoose.model('Lessons', lessonsSchema)