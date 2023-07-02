const mongoose = require('mongoose')

const connectdb = (url)=>{
    return mongoose.connect(url,{
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
    })
}

module.exports = connectdb