const userModel = require('../models/userModel')
const productModel = require('../models/productModel')
const orderModel = require('../models/orderModel')


const createOrder= async function (req, res) {
   
    let userId = req.body.userId;
    let productId = req.body.productId;
    let flag = req.headers["isfreeappuser"]

    if(!userId){
     return   res.send("User Id is required");
    }

   let  user = await userModel.findById(userId);
    if(!user){
      return  res.send(" The User Id is not present in Database")
    }

    if(!productId){
     return   res.send("Product Id is required")
    }

   let  product = await productModel.findById(productId);
    if(!product){
     return   res.send("The product Id is not present in Database")
    }

    else {

        if(flag == "true"){
            let order = await orderModel.updateOne(req.body ,{ $set : {amount : 0 , isFreeAppUser : flag}},{upsert : true , new : true});
            
            res.send({ msg : "Order Details have been updated" , order})
        }

        else {

            let priceObj = await productModel.findOne({_id : req.body.productId}).select({_id : 0 , price : 1});
            let updatedBalance = await userModel.updateOne({_id : req.body.userId} , {$inc : { balance : -priceObj.price }});
            let updatedOrder = await orderModel.updateOne(req.body,{$set : {amount : priceObj.price , isFreeAppUser : false}},{upsert : true , new : true})
          
            res.send({msg : "User and Order details have been updated" , updatedBalance , updatedOrder})
        }

    }
   

}

       
       
       
             

module.exports.orderpurchase=createOrder





