const mongoose = require('mongoose')

// bcrypt = require(bcrypt),
// SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
    // _id: false,

    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
    
})

module.exports = mongoose.model('admin_signups', userSchema);