const express= require('express')
const { createAnIntent, getAllIntents } = require('../controllers/stripe.controller') //import methods from stripe.controller.js
const router= express.Router() //create an express router

// post method on route /api/v1/create_intent to create an intent
router.post('/v1/create_intent',createAnIntent)

//get method to get all intents
router.get('/v1/get_intents',getAllIntents)

module.exports= router