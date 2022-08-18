const asyncHandler = require("express-async-handler")
const Topic = require("../db/schemas/topic.schema")
const Lessons = require("../db/schemas/lessons.schema")

const homeController = asyncHandler(async(req,res) => {
    const data = await Topic.find().populate("lessons")
    return res.status(200).json(data)
})

const addLessonController = asyncHandler(async(req,res)=>{
    const {title, text, topic} = req.body;

    if (title && text && topic){
        const topic_exists = await Topic.findOne({title: topic})
        if (topic_exists){
            const lesson_exists = await Lessons.findOne({title}).findOne({topic:topic})


            if (lesson_exists){
                throw new Error('lesson exists')
            }

            const new_lesson = await Lessons.create({title: title, text: text, topic: topic_exists.title})

            if (new_lesson){

                topic_exists.lessons.push(new_lesson._id)
                topic_exists.save();
                  return res.json(new_lesson)

            }
            throw new Error(new_lesson)

        }
        throw new Error("exists")
    }
    throw new Error('Not all fields filled')
})

const addTopicController = asyncHandler(async(req,res)=>{
    const {title, text} = req.body;
    if (title && text) {
        const data = await Topic.findOne({title})
        if(data){
            throw new Error("Title exists")
        }
        const new_data = await Topic.create({title: title, text: text})
        if (new_data) {
            return res.status(200).json({message: 'Created'})
        }
        throw new Error('Some error')
    }
    throw new Error('not all fields filled')
})

const topicHandler = asyncHandler(async(req, res)=>{
    const title = req.params.title;
    const data = await Lessons.find({topic: title})
    return res.json(data)
})

const lessonHandler = asyncHandler(async(req, res)=>{
    const topic = req.params.title;
    const lesson = req.params.lesson;
    const data = await Lessons.findOne({topic: topic, title: lesson})
    return res.json(data)
})

module.exports = {addLessonController, homeController, addTopicController, topicHandler, lessonHandler}