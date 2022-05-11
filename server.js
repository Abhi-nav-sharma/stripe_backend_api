const express= require('express') //import express
const app = express() //create an express app
const PORT=5000 //port number

app.use(express.json()) //add body-parser

// create a start function to start the backend server
const start=()=>{
    app.listen(PORT,(req,res)=>{
        console.log('listening on port',PORT)
    })
}

//export the start function
module.exports= start