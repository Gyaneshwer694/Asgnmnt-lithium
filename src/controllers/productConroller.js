const { count } = require("console")
const productModel = require("../models/productModel")

const createproduct = async function (req, res, next) {
    let data = req.headers

    let savedData = await productModel.create(data)
    res.send({msg: savedData})
}






module.exports.createproduct= createproduct










