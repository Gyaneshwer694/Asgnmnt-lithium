const orderModel= require("../models/orderModel")

const createOrder= async function (req, res,next) {
    let data= req.headers

    let savedData= await orderModel.create(data)
    res.send({msg: savedData})
}






module.exports.createOrder= createOrder





