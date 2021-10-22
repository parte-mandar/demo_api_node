const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    countryCode:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    }
    
})

module.exports = mongoose.model('user_signups', userSchema);