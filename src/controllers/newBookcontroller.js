const newAuthorModel = require('../models/newAuthorModel')
const newBookModel = require('../models/newBookModel')
const publisherModel = require('../models/publisherModel')

const createnewBook= async function (req, res) {
    let newBook = req.body
    let bookCreated = await newBookModel.create(newBook)
    res.send({data: bookCreated})
}
const getnewBook = async function(req, res){
    let newBooks = await newBookModel.find()
    res.send({msg : newBooks})
    
}
const completeBookdetails= async function(req,res){
    let specificBook = await newBookModel.find().populate('Author_id').populate('publisher_id')
    res.send({data: specificBook})
}

module.exports.createnewBook= createnewBook
module.exports.getnewBook= getnewBook
module.exports.completeBookdetails = completeBookdetails