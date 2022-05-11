require('dotenv').config()
//import stripe and pass the secret key
const stripe = require('stripe')(process.env.SECRET_KEY)


const createAnIntent = async (req, res) => {
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
        //return payment intent object as response
        return res.status(200).json({ status: 'success', data: paymentIntent })
    }
    catch (err) {
        //return the error as response
        return res.status(500).json({ status: 'failure', error: err.toString() })
    }
}

const getAllIntents = async (req, res) => {
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


module.exports = { createAnIntent, getAllIntents}
