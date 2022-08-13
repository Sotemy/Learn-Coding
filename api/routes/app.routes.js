const express = require("express")
const { homeController, topicHandler, lessonHandler } = require("../controllers/app.controller")

const learnRouter = express.Router()

learnRouter.get('/', homeController)
learnRouter.get('/:title', topicHandler)
learnRouter.get('/:title/:lesson', lessonHandler)


module.exports = learnRouter