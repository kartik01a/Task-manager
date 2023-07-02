const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,'Must provide a name'],
        maxlength:[20, "Name lenght cannot exceed 20 characters"],
    },
    completed:{
        type:Boolean,
        default:false,
    }
})

module.exports = mongoose.model('TASK',taskSchema)