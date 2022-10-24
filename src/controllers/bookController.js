const bookModel = require("../models/bookModel.js")

const createBookdata = async function(req,res){
    let data = req.body
    let savedData = await bookModel.create(data)
    res.send({msg : savedData })
}

const getBookdata = async function(req, res){
    let allbooks = await bookModel.find()
    res.send({msg : allbooks})
}

module.exports.createBookdata = createBookdata
module.exports.getBookdata = getBookdata