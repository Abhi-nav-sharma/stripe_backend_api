const express= require('express')
const { createAnIntent } = require('../controllers/stripe.controller') //import methods from stripe.controller.js
const router= express.Router() //create an express router

// post method on route /api/v1/create_intent to create an intent
router.post('/v1/create_intent',createAnIntent)

module.exports= router