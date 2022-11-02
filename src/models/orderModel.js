const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema( {
    
    userId: String,  
	productId: String, 
	amount: Number,
	isFreeAppUser: Boolean , 
	date: Date,
}); 


    