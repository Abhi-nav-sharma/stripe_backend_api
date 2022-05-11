const express= require('express') //import express
const app = express() //create an express app
require('dotenv').config()
const striperouter= require('./routes/stripe.router') //import stripe router from stripe.route.js
const PORT=process.env.PORT //port number

app.use(express.json()) //add body-parser

app.use('/',striperouter) //mount stripe router to '/'

// create a start function to start the backend server
const start=()=>{
    app.listen(PORT,(req,res)=>{
        console.log('listening on port',PORT)
    })
}

//export the start function
module.exports= start