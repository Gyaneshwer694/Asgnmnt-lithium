const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema ( {
    publisherName : String,
    headQuarters : String
} , { timestamps: true } )