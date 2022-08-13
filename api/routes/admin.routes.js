const express = require("express")
const {addLessonController, addTopicController} = require("../controllers/app.controller")

const adminRouter = express.Router()

// adminRouter.get('/', homeController)
adminRouter.post('/add/', addLessonController)
adminRouter.post("/add/category", addTopicController)

module.exports = adminRouter
