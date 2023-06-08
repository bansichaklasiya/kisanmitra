const { cssNumber } = require("jquery");
const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        minlength:3
    },

    email:{
        type:String,
        require:true,
        validate(value){
            if(validator.isEmail(value)){
                throw new Error("Invalid email id")
            }
        }
    },

    phone:{
        type:cssNumber,
        require:true,
        min:10
    },

    message:{
        type:String,
        require:true,
        minlength:3
    },
})

//creat collection