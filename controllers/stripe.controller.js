require('dotenv').config()
//import stripe and pass the secret key
const stripe = require('stripe')(process.env.SECRET_KEY)

const createAnIntent = async (req, res) => {
//creates an intent and redirect to payment page with client_secret
//once payment completes status of payment intent changes to requires_capture
    try {
        //create payment intent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: req.body.currency,
            payment_method_types: req.body.payment_method_types,
            capture_method: req.body.capture_method,
            automatic_payment_methods:req.body.automatic_payment_methods,
            payment_method_types: req.body.payment_method_types
        });
        if (!paymentIntent) {
            //if no intent created return error as response
            return res.status(402).json({ status: 'failure', error: err.toString() })
        }
        //return payment intent payment page
        return res.redirect(`https://stripe-payment-page.netlify.app?client_secret=${paymentIntent.client_secret}`)
    }
    catch (err) {
        //return the error as response
        return res.status(500).json({ status: 'failure', error: err.toString() })
    }
}

const captureAnIntent = async (req, res) => {
// capture an intent with status requires_capture
// after capture status changes to succeeded
    try {
        //capture payment intent with id in req.params.id
        const paymentIntent = await stripe.paymentIntents.capture(
            req.params.id
        );
        if (!paymentIntent) {
            //if no intent found return error as response
            return res.status(402).json({ status: 'failure', error: err.toString() })
        }
        //return payment intent object
        return res.status(200).json({ status: 'success', data: paymentIntent })
    }
    catch (err) {
        //return the error as response
        return res.status(500).json({ status: 'failure', error: err.toString() })
    }
}

const getAllIntents = async (req, res) => {
// Get the list of 5 last created payment intents
    try {
        //get last 5 payment intents
        const paymentIntents = await stripe.paymentIntents.list({
            limit: 5,
        });
        if (!paymentIntents) {
            //if no payment intent return error as response
            return res.status(402).json({ status: 'failure', error: err.toString() })
        }
        //return payment intens
        return res.status(200).json({ status: 'success', data: paymentIntents })
    }
    catch (err) {
        //return the error as response
        return res.status(500).json({ status: 'failure', error: err.toString() })
    }
}


module.exports = { createAnIntent, captureAnIntent, getAllIntents}
