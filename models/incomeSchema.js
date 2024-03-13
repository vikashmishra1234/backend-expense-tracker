const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:[true,"title is required"],
        maxLength:[20,"title should less than 20 char"]
    },
    reference:{
        type:String,
        required:[true,"description is required"]
    },
  
    amount:{
        type:Number,
        required:[true,"price is required"],
        maxLength:[8,"price can not exceed 8 chars"]
    },
 
   
    date:{
        type:Date,
        
    }
},{timestamps:true})

module.exports = mongoose.model('income',incomeSchema);