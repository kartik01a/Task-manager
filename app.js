const express = require('express')
const app = express()
const port = 3000
const route = require('./routes/routes')
const connectdb = require('./db/connection')
require('dotenv').config()

app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks',route)

const start = async()=>{
    try{
        await connectdb(process.env.MONGO_URL)
        console.log("Database connected successfully")
        app.listen(port,(req,res)=>{
            console.log(`Server running on port ${port}`)
        })
    }
    catch(err){
        console.log(err)
    }
}
start()
