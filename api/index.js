const express = require("express")
const cors = require("cors");
require('dotenv').config();

const learnRouter = require("./routes/app.routes")
const adminRouter = require("./routes/admin.routes")
const connectDB = require("../api/db/init");
const errorMiddleware = require("./middlewares/error_handler");

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

connectDB()

app.use('/', learnRouter)
app.use('/admin', adminRouter)

// app.use(error_handler)

app.use(errorMiddleware)

app.listen(4000, ()=>{
    console.log('listening on http://localhost:3000')
})