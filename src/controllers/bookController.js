const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {

    let books = await BookModel.find().select( {
        bookName:1, authorName:1 , _id: 0
    })
    res.send({msz: books})
}

//3-
const getBooksInYear = async function (req, res) {
    let saveData= await BookModel.find({year:2000})
     res.send({msz: saveData})
 }

//4-
const getParticularBooks = async function (req, res) {
    let tofind = req.body
    console.log(tofind)
    let allbooks= await BookModel.find(tofind)
    res.send({msg: allbooks})
}

//5-
const getXINRBooks = async function (req, res) {
    let saveData= await BookModel.find( {'prices.indianPrice': {$in:[100,200,500]} } )
     res.send({msz: saveData})
 }

 //6-
 const getRandomBooks =  async function (req, res) {
    let books = await BookModel.find( {
        $or: [ {stockAvailable:true},{totalPages: {$gte:500}}]
    })
    res.send({msz: books})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks

