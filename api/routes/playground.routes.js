const express = require("express")

const playgroundRouter = express.Router()

playgroundRouter.get('/', homeController)

module.exports = playgroundRouter