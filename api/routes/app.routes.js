const express = require("express")
const { homeController, addController } = require("../controllers/app.controller")

const learnRouter = express.Router()

learnRouter.get('/', homeController)
learnRouter.post('/add', addController)


module.exports = learnRouter