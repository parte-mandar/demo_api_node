const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    categoryId:{
        type:Number,
        required:true,
    },
    categoryName:{
        type:String,
        required:true,
        unique:true
    },
    lastModified:{
        type: Date, 
        required:true,
        default: Date.now
    }
})

module.exports = mongoose.model('champ_categories', userSchema);