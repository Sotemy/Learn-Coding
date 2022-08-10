const asyncHandler = require("express-async-handler")
const App = require("../db/schemas/app.schema")

const homeController = asyncHandler(async(req,res) => {
    const data = await App.find()
    return res.status(200).json(data)
})

const addController = asyncHandler(async(req,res)=>{
    const {title, text} = req.body;
    if (title && text) {
        const data = await App.findOne({title})
        if(data){
            throw new Error("Title exists")
        }
        const new_data = await App.create({title: title, text: text})
        if (new_data) {
            return res.status(200).json({message: 'Created'})
        }
        throw new Error('Some error')
    }
    throw new Error('not all fields filled')
})

module.exports = {addController, homeController}