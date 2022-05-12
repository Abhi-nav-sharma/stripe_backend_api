const express= require('express')
const { createAnIntent, getAllIntents, captureAnIntent, refundAnIntent } = require('../controllers/stripe.controller') //import methods from stripe.controller.js
const router= express.Router() //create an express router

// post method on route /api/v1/create_intent to create an intent
router.post('/v1/create_intent',createAnIntent)

// post method to capture an intent
router.post('/v1/capture_intent/:id',captureAnIntent)

//post method to refund an intent
router.post('/v1/create_refund/:id',refundAnIntent)

//get method to get all intents
router.get('/v1/get_intents',getAllIntents)

module.exports= router