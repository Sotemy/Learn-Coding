const mongoose = require("mongoose")


const topicSchema = mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Please add title'],
        unique: true
    },
    lessons: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Lessons'
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Topics', topicSchema)