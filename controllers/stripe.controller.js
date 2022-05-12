require('dotenv').config()
//import stripe and pass the secret key
const stripe = require('stripe')(process.env.SECRET_KEY)

const createAnIntent = async (req, res) => {
//creates an intent with status requires_action and status changes to requires_capture after completing next_action using stripe_sdk
//have to authenticate using link in next_action.use_stripe_sdk.stripe_js
    try {
        //create a payment_intent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: req.body.currency,
            capture_method:req.body.capture_method
        });
        if (!paymentIntent) {
            //if no intent created return error as response
            return res.status(402).json({ status: 'failure', error: err.toString() })
        }
        else{
            try{
                //confirm the paymentintent using pm_card_visa payment_method
                const confirmIntent = await stripe.paymentIntents.confirm(
                    paymentIntent.id,{
                        payment_method:req.body.payment_method
                    }
                );
                if (!confirmIntent) {
                    //if no intent confirmed return error as response
                    return res.status(402).json({ status: 'failure', error: err.toString() })
                }
                //return the intent with requires_action status
                //authenticate using link in next_action.use_stripe_sdk.stripe_js
                //intent will move to rquires_capture status
                return res.status(200).json({ data: confirmIntent })
            }
            catch(err){
                //return the error as response
                return res.status(500).json({ status: 'failure', error: err.toString() })
            }
        }
    }
    catch (err) {
        //return the error as response
        return res.status(500).json({ status: 'failure', error: err.toString() })
    }
}

const captureAnIntent = async (req, res) => {
// capture an intent having status requires_capture
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
        return res.status(200).json({ data: paymentIntent })
    }
    catch (err) {
        //return the error as response
        return res.status(500).json({ status: 'failure', error: err.toString() })
    }
}

const refundAnIntent = async (req, res) => {
    //refund an intent having status succeeded
    try {
        //create refund on payment intent
        const refund = await stripe.refunds.create({
            payment_intent: req.params.id
        });
        if(!refund){
            //if no intent found return error as response
            return res.status(402).json({ status: 'failure', error: err.toString() })
        }
        //return refund object
        return res.status(200).json({ data: refund })
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


module.exports = { createAnIntent, captureAnIntent, refundAnIntent, getAllIntents}
