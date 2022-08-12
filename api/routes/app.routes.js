const express = require("express")
const {addLessonController, homeController, addTopicController} = require("../controllers/app.controller")

const learnRouter = express.Router()

learnRouter.get('/', homeController)
learnRouter.post('/add/', addLessonController)
learnRouter.post("/add/category", addTopicController)


module.exports = learnRouter