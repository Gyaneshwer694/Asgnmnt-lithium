const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    
    name: String,
	balance:{
        type : Number,
        default : 100
    },   // Default balance at user registration is 100
	address: String,
	gender: {
        type: String,
        enum: ["male", "female", "Others"] 
    },  // Allowed values are - “male”, “female”, “other”
	isFreeAppUser: {
        type : Boolean,
        default : false
    },
    age: Number,
}); 

module.exports = mongoose.model('User2', userSchema)   //users
