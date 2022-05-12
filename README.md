# stripe_backend_api
Backend API for Stripe Payment gateway integration.
### API deployed url 
https://stripe-backend-api.herokuapp.com/
### Available Operations
```
 Create intent for payment
  • POST /api/v1/create_intent
  
 Capture the created intent
  • POST /api/v1/capture_intent/:id
  
 Create a refund for the created intent 
  • POST /api/v1/create_refund/:id
  
  Get a List of all intents
   • GET /api/v1/get_intents
```
You can use deployed url to run the available backend operations or can run the project using following steps:
### Run this project
1. Clone the project
```js
  git clone https://github.com/Abhi-nav-sharma/stripe_backend_api.git
```
2. Inside the project create a .env file and add the follwing details:
```
  SECRET_KEY= YOUR_STRIPE_SECRET_KEY_HERE
  PORT= PORT_NUMBER_TO_RUN_THE_SERVER_HERE
```
3. Install the node_modules and required packages using following command:
```
 npm install
```
4. Run the server using command:
```
  npm start
```
### To create an intent
```js
  • method : POST 
  • url: http://localhost:5000/v1/create_intent
  • body: {
            "amount": 1199, // Amount intended to be collected by this PaymentIntent.
            "currency":  "inr", // Three-letter ISO currency code, in lowercase
            "payment_method":"pm_card_amex_threeDSecureNotSupported", // This card doesn’t support 3DS and the PaymentIntent proceeds without performing authentication.
            "capture_method": "manual" // Allows to capture the funds until later
           }
  • Response will return PaymentIntent object with status 'requires_capture'
  {
    "data": {
        "id": "pi_3KyYP9SEXx4PYjuZ1UyJqzwU",
        "object": "payment_intent",
        "amount": 1199,
        "amount_capturable": 1199,
        "amount_details": {
            "tip": {}
        },
        "amount_received": 0,
        "application": null,
        "application_fee_amount": null,
        "automatic_payment_methods": null,
        "canceled_at": null,
        "cancellation_reason": null,
        "capture_method": "manual",
        "charges": {
            "object": "list",
            "data": [
                {
                    "id": "ch_3KyYP9SEXx4PYjuZ1vC1gQuT",
                    "object": "charge",
                    "amount": 1199,
                    "amount_captured": 0,
                    "amount_refunded": 0,
                    "application": null,
                    "application_fee": null,
                    "application_fee_amount": null,
                    "balance_transaction": null,
                    "billing_details": {
                        "address": {
                            "city": null,
                            "country": null,
                            "line1": null,
                            "line2": null,
                            "postal_code": null,
                            "state": null
                        },
                        "email": null,
                        "name": null,
                        "phone": null
                    },
                    "calculated_statement_descriptor": "ASHIMA FASHION POINT",
                    "captured": false,
                    "created": 1652348037,
                    "currency": "inr",
                    "customer": null,
                    "description": null,
                    "destination": null,
                    "dispute": null,
                    "disputed": false,
                    "failure_balance_transaction": null,
                    "failure_code": null,
                    "failure_message": null,
                    "fraud_details": {},
                    "invoice": null,
                    "livemode": false,
                    "metadata": {},
                    "on_behalf_of": null,
                    "order": null,
                    "outcome": {
                        "network_status": "approved_by_network",
                        "reason": null,
                        "risk_level": "normal",
                        "risk_score": 54,
                        "seller_message": "Payment complete.",
                        "type": "authorized"
                    },
                    "paid": true,
                    "payment_intent": "pi_3KyYP9SEXx4PYjuZ1UyJqzwU",
                    "payment_method": "pm_1KyYPASEXx4PYjuZtZVLqv12",
                    "payment_method_details": {
                        "card": {
                            "brand": "amex",
                            "checks": {
                                "address_line1_check": null,
                                "address_postal_code_check": null,
                                "cvc_check": null
                            },
                            "country": "US",
                            "exp_month": 5,
                            "exp_year": 2023,
                            "fingerprint": "a3YdyVvCKwtRP7xb",
                            "funding": "credit",
                            "installments": null,
                            "last4": "0005",
                            "mandate": null,
                            "network": "amex",
                            "three_d_secure": null,
                            "wallet": null
                        },
                        "type": "card"
                    },
                    "receipt_email": null,
                    "receipt_number": null,
                    "receipt_url": "https://pay.stripe.com/receipts/acct_1Kxw5fSEXx4PYjuZ/ch_3KyYP9SEXx4PYjuZ1vC1gQuT/rcpt_LfuDKshPDz9GAhBmwUcvvivakVhZo9F",
                    "refunded": false,
                    "refunds": {
                        "object": "list",
                        "data": [],
                        "has_more": false,
                        "total_count": 0,
                        "url": "/v1/charges/ch_3KyYP9SEXx4PYjuZ1vC1gQuT/refunds"
                    },
                    "review": null,
                    "shipping": null,
                    "source": null,
                    "source_transfer": null,
                    "statement_descriptor": null,
                    "statement_descriptor_suffix": null,
                    "status": "succeeded",
                    "transfer_data": null,
                    "transfer_group": null
                }
            ],
            "has_more": false,
            "total_count": 1,
            "url": "/v1/charges?payment_intent=pi_3KyYP9SEXx4PYjuZ1UyJqzwU"
        },
        "client_secret": "pi_3KyYP9SEXx4PYjuZ1UyJqzwU_secret_hUOnpMzm4t2TgtnzBDHv27Req",
        "confirmation_method": "automatic",
        "created": 1652348035,
        "currency": "inr",
        "customer": null,
        "description": null,
        "invoice": null,
        "last_payment_error": null,
        "livemode": false,
        "metadata": {},
        "next_action": null,
        "on_behalf_of": null,
        "payment_method": "pm_1KyYPASEXx4PYjuZtZVLqv12",
        "payment_method_options": {
            "card": {
                "installments": null,
                "mandate_options": null,
                "network": null,
                "request_three_d_secure": "automatic"
            }
        },
        "payment_method_types": [
            "card"
        ],
        "processing": null,
        "receipt_email": null,
        "review": null,
        "setup_future_usage": null,
        "shipping": null,
        "source": null,
        "statement_descriptor": null,
        "statement_descriptor_suffix": null,
        "status": "requires_capture", //<------------------- status is requires_capture
        "transfer_data": null,
        "transfer_group": null
    }
}
```
### To capture an intent
```js
  • method : POST 
  • url: http://localhost:5000/v1/capture_intent/PaymentIntentID
  • Response will return a PaymentIntent object with status="succeeded" if the PaymentIntent was capturable. Returns an error if the PaymentIntent was not capturable or an invalid amount to capture was provided.
  {
    "data": {
        "id": "pi_3KyYP9SEXx4PYjuZ1UyJqzwU",
        "object": "payment_intent",
        "amount": 1199,
        "amount_capturable": 0,
        "amount_details": {
            "tip": {}
        },
        "amount_received": 1199,
        "application": null,
        "application_fee_amount": null,
        "automatic_payment_methods": null,
        "canceled_at": null,
        "cancellation_reason": null,
        "capture_method": "manual",
        "charges": {
            "object": "list",
            "data": [
                {
                    "id": "ch_3KyYP9SEXx4PYjuZ1vC1gQuT",
                    "object": "charge",
                    "amount": 1199,
                    "amount_captured": 1199,
                    "amount_refunded": 0,
                    "application": null,
                    "application_fee": null,
                    "application_fee_amount": null,
                    "balance_transaction": "txn_3KyYP9SEXx4PYjuZ1ZMAvNHP",
                    "billing_details": {
                        "address": {
                            "city": null,
                            "country": null,
                            "line1": null,
                            "line2": null,
                            "postal_code": null,
                            "state": null
                        },
                        "email": null,
                        "name": null,
                        "phone": null
                    },
                    "calculated_statement_descriptor": "ASHIMA FASHION POINT",
                    "captured": true,
                    "created": 1652348037,
                    "currency": "inr",
                    "customer": null,
                    "description": null,
                    "destination": null,
                    "dispute": null,
                    "disputed": false,
                    "failure_balance_transaction": null,
                    "failure_code": null,
                    "failure_message": null,
                    "fraud_details": {},
                    "invoice": null,
                    "livemode": false,
                    "metadata": {},
                    "on_behalf_of": null,
                    "order": null,
                    "outcome": {
                        "network_status": "approved_by_network",
                        "reason": null,
                        "risk_level": "normal",
                        "risk_score": 54,
                        "seller_message": "Payment complete.",
                        "type": "authorized"
                    },
                    "paid": true,
                    "payment_intent": "pi_3KyYP9SEXx4PYjuZ1UyJqzwU",
                    "payment_method": "pm_1KyYPASEXx4PYjuZtZVLqv12",
                    "payment_method_details": {
                        "card": {
                            "brand": "amex",
                            "checks": {
                                "address_line1_check": null,
                                "address_postal_code_check": null,
                                "cvc_check": null
                            },
                            "country": "US",
                            "exp_month": 5,
                            "exp_year": 2023,
                            "fingerprint": "a3YdyVvCKwtRP7xb",
                            "funding": "credit",
                            "installments": null,
                            "last4": "0005",
                            "mandate": null,
                            "network": "amex",
                            "three_d_secure": null,
                            "wallet": null
                        },
                        "type": "card"
                    },
                    "receipt_email": null,
                    "receipt_number": null,
                    "receipt_url": "https://pay.stripe.com/receipts/acct_1Kxw5fSEXx4PYjuZ/ch_3KyYP9SEXx4PYjuZ1vC1gQuT/rcpt_LfuDKshPDz9GAhBmwUcvvivakVhZo9F",
                    "refunded": false,
                    "refunds": {
                        "object": "list",
                        "data": [],
                        "has_more": false,
                        "total_count": 0,
                        "url": "/v1/charges/ch_3KyYP9SEXx4PYjuZ1vC1gQuT/refunds"
                    },
                    "review": null,
                    "shipping": null,
                    "source": null,
                    "source_transfer": null,
                    "statement_descriptor": null,
                    "statement_descriptor_suffix": null,
                    "status": "succeeded",
                    "transfer_data": null,
                    "transfer_group": null
                }
            ],
            "has_more": false,
            "total_count": 1,
            "url": "/v1/charges?payment_intent=pi_3KyYP9SEXx4PYjuZ1UyJqzwU"
        },
        "client_secret": "pi_3KyYP9SEXx4PYjuZ1UyJqzwU_secret_hUOnpMzm4t2TgtnzBDHv27Req",
        "confirmation_method": "automatic",
        "created": 1652348035,
        "currency": "inr",
        "customer": null,
        "description": null,
        "invoice": null,
        "last_payment_error": null,
        "livemode": false,
        "metadata": {},
        "next_action": null,
        "on_behalf_of": null,
        "payment_method": "pm_1KyYPASEXx4PYjuZtZVLqv12",
        "payment_method_options": {
            "card": {
                "installments": null,
                "mandate_options": null,
                "network": null,
                "request_three_d_secure": "automatic"
            }
        },
        "payment_method_types": [
            "card"
        ],
        "processing": null,
        "receipt_email": null,
        "review": null,
        "setup_future_usage": null,
        "shipping": null,
        "source": null,
        "statement_descriptor": null,
        "statement_descriptor_suffix": null,
        "status": "succeeded", //<------------------- status is succeeded
        "transfer_data": null,
        "transfer_group": null
    }
}
```
### To create a refund for the created intent
```js
  • method : POST 
  • url: http://localhost:5000/v1/create_refund/PaymentIntentID
  • Response will return the Refund object if the refund succeeded. Throws an error if the Charge/PaymentIntent has already been refunded, or if an invalid identifier was provided.
  {
    "data": {
        "id": "re_3KyYP9SEXx4PYjuZ1czEznPD",
        "object": "refund",
        "amount": 1199,
        "balance_transaction": "txn_3KyYP9SEXx4PYjuZ1TcFYvcj",
        "charge": "ch_3KyYP9SEXx4PYjuZ1vC1gQuT",
        "created": 1652348809,
        "currency": "inr",
        "metadata": {},
        "payment_intent": "pi_3KyYP9SEXx4PYjuZ1UyJqzwU",
        "reason": null,
        "receipt_number": null,
        "source_transfer_reversal": null,
        "status": "succeeded",
        "transfer_reversal": null
    }
}
```
### To get a list of all intents
```js
   • method : GET 
   • url : http://localhost:5000/v1/get_intents
   • Response will return an object with a data property that contains an array of up to limit PaymentIntents
   {
    "status": "success",
    "data": {
        "object": "list",
        "data": [
            {
                "id": "pi_3KyYP9SEXx4PYjuZ1UyJqzwU",
                "object": "payment_intent",
                "amount": 1199,
                "amount_capturable": 0,
                "amount_details": {
                    "tip": {}
                },
                "amount_received": 1199,
                "application": null,
                "application_fee_amount": null,
                "automatic_payment_methods": null,
                "canceled_at": null,
                "cancellation_reason": null,
                "capture_method": "manual",
                "charges": {
                    "object": "list",
                    "data": [
                        {
                            "id": "ch_3KyYP9SEXx4PYjuZ1vC1gQuT",
                            "object": "charge",
                            "amount": 1199,
                            "amount_captured": 1199,
                            "amount_refunded": 1199,
                            "application": null,
                            "application_fee": null,
                            "application_fee_amount": null,
                            "balance_transaction": "txn_3KyYP9SEXx4PYjuZ1ZMAvNHP",
                            "billing_details": {
                                "address": {
                                    "city": null,
                                    "country": null,
                                    "line1": null,
                                    "line2": null,
                                    "postal_code": null,
                                    "state": null
                                },
                                "email": null,
                                "name": null,
                                "phone": null
                            },
                            "calculated_statement_descriptor": "ASHIMA FASHION POINT",
                            "captured": true,
                            "created": 1652348037,
                            "currency": "inr",
                            "customer": null,
                            "description": null,
                            "destination": null,
                            "dispute": null,
                            "disputed": false,
                            "failure_balance_transaction": null,
                            "failure_code": null,
                            "failure_message": null,
                            "fraud_details": {},
                            "invoice": null,
                            "livemode": false,
                            "metadata": {},
                            "on_behalf_of": null,
                            "order": null,
                            "outcome": {
                                "network_status": "approved_by_network",
                                "reason": null,
                                "risk_level": "normal",
                                "risk_score": 54,
                                "seller_message": "Payment complete.",
                                "type": "authorized"
                            },
                            "paid": true,
                            "payment_intent": "pi_3KyYP9SEXx4PYjuZ1UyJqzwU",
                            "payment_method": "pm_1KyYPASEXx4PYjuZtZVLqv12",
                            "payment_method_details": {
                                "card": {
                                    "brand": "amex",
                                    "checks": {
                                        "address_line1_check": null,
                                        "address_postal_code_check": null,
                                        "cvc_check": null
                                    },
                                    "country": "US",
                                    "exp_month": 5,
                                    "exp_year": 2023,
                                    "fingerprint": "a3YdyVvCKwtRP7xb",
                                    "funding": "credit",
                                    "installments": null,
                                    "last4": "0005",
                                    "mandate": null,
                                    "network": "amex",
                                    "three_d_secure": null,
                                    "wallet": null
                                },
                                "type": "card"
                            },
                            "receipt_email": null,
                            "receipt_number": null,
                            "receipt_url": "https://pay.stripe.com/receipts/acct_1Kxw5fSEXx4PYjuZ/ch_3KyYP9SEXx4PYjuZ1vC1gQuT/rcpt_LfuDKshPDz9GAhBmwUcvvivakVhZo9F",
                            "refunded": true,
                            "refunds": {
                                "object": "list",
                                "data": [
                                    {
                                        "id": "re_3KyYP9SEXx4PYjuZ1czEznPD",
                                        "object": "refund",
                                        "amount": 1199,
                                        "balance_transaction": "txn_3KyYP9SEXx4PYjuZ1TcFYvcj",
                                        "charge": "ch_3KyYP9SEXx4PYjuZ1vC1gQuT",
                                        "created": 1652348809,
                                        "currency": "inr",
                                        "metadata": {},
                                        "payment_intent": "pi_3KyYP9SEXx4PYjuZ1UyJqzwU",
                                        "reason": null,
                                        "receipt_number": null,
                                        "source_transfer_reversal": null,
                                        "status": "succeeded",
                                        "transfer_reversal": null
                                    }
                                ],
                                "has_more": false,
                                "total_count": 1,
                                "url": "/v1/charges/ch_3KyYP9SEXx4PYjuZ1vC1gQuT/refunds"
                            },
                            "review": null,
                            "shipping": null,
                            "source": null,
                            "source_transfer": null,
                            "statement_descriptor": null,
                            "statement_descriptor_suffix": null,
                            "status": "succeeded",
                            "transfer_data": null,
                            "transfer_group": null
                        }
                    ],
                    "has_more": false,
                    "total_count": 1,
                    "url": "/v1/charges?payment_intent=pi_3KyYP9SEXx4PYjuZ1UyJqzwU"
                },
                "client_secret": "pi_3KyYP9SEXx4PYjuZ1UyJqzwU_secret_hUOnpMzm4t2TgtnzBDHv27Req",
                "confirmation_method": "automatic",
                "created": 1652348035,
                "currency": "inr",
                "customer": null,
                "description": null,
                "invoice": null,
                "last_payment_error": null,
                "livemode": false,
                "metadata": {},
                "next_action": null,
                "on_behalf_of": null,
                "payment_method": "pm_1KyYPASEXx4PYjuZtZVLqv12",
                "payment_method_options": {
                    "card": {
                        "installments": null,
                        "mandate_options": null,
                        "network": null,
                        "request_three_d_secure": "automatic"
                    }
                },
                "payment_method_types": [
                    "card"
                ],
                "processing": null,
                "receipt_email": null,
                "review": null,
                "setup_future_usage": null,
                "shipping": null,
                "source": null,
                "statement_descriptor": null,
                "statement_descriptor_suffix": null,
                "status": "succeeded",
                "transfer_data": null,
                "transfer_group": null
            },
            {
                "id": "pi_3KyYBBSEXx4PYjuZ0fFS9IEz",
                "object": "payment_intent",
                "amount": 1199,
                "amount_capturable": 1199,
                "amount_details": {
                    "tip": {}
                },
                "amount_received": 0,
                "application": null,
                "application_fee_amount": null,
                "automatic_payment_methods": null,
                "canceled_at": null,
                "cancellation_reason": null,
                "capture_method": "manual",
                "charges": {
                    "object": "list",
                    "data": [
                        {
                            "id": "ch_3KyYBBSEXx4PYjuZ0Zq3mRYS",
                            "object": "charge",
                            "amount": 1199,
                            "amount_captured": 0,
                            "amount_refunded": 0,
                            "application": null,
                            "application_fee": null,
                            "application_fee_amount": null,
                            "balance_transaction": null,
                            "billing_details": {
                                "address": {
                                    "city": null,
                                    "country": null,
                                    "line1": null,
                                    "line2": null,
                                    "postal_code": null,
                                    "state": null
                                },
                                "email": null,
                                "name": null,
                                "phone": null
                            },
                            "calculated_statement_descriptor": "ASHIMA FASHION POINT",
                            "captured": false,
                            "created": 1652347170,
                            "currency": "inr",
                            "customer": null,
                            "description": null,
                            "destination": null,
                            "dispute": null,
                            "disputed": false,
                            "failure_balance_transaction": null,
                            "failure_code": null,
                            "failure_message": null,
                            "fraud_details": {},
                            "invoice": null,
                            "livemode": false,
                            "metadata": {},
                            "on_behalf_of": null,
                            "order": null,
                            "outcome": {
                                "network_status": "approved_by_network",
                                "reason": null,
                                "risk_level": "normal",
                                "risk_score": 47,
                                "seller_message": "Payment complete.",
                                "type": "authorized"
                            },
                            "paid": true,
                            "payment_intent": "pi_3KyYBBSEXx4PYjuZ0fFS9IEz",
                            "payment_method": "pm_1KyYBBSEXx4PYjuZyKbyCagL",
                            "payment_method_details": {
                                "card": {
                                    "brand": "amex",
                                    "checks": {
                                        "address_line1_check": null,
                                        "address_postal_code_check": null,
                                        "cvc_check": null
                                    },
                                    "country": "US",
                                    "exp_month": 5,
                                    "exp_year": 2023,
                                    "fingerprint": "a3YdyVvCKwtRP7xb",
                                    "funding": "credit",
                                    "installments": null,
                                    "last4": "0005",
                                    "mandate": null,
                                    "network": "amex",
                                    "three_d_secure": null,
                                    "wallet": null
                                },
                                "type": "card"
                            },
                            "receipt_email": null,
                            "receipt_number": null,
                            "receipt_url": "https://pay.stripe.com/receipts/acct_1Kxw5fSEXx4PYjuZ/ch_3KyYBBSEXx4PYjuZ0Zq3mRYS/rcpt_Lftzu9smnAQ6SMrfSC1XgzwwKLHd7hs",
                            "refunded": false,
                            "refunds": {
                                "object": "list",
                                "data": [],
                                "has_more": false,
                                "total_count": 0,
                                "url": "/v1/charges/ch_3KyYBBSEXx4PYjuZ0Zq3mRYS/refunds"
                            },
                            "review": null,
                            "shipping": null,
                            "source": null,
                            "source_transfer": null,
                            "statement_descriptor": null,
                            "statement_descriptor_suffix": null,
                            "status": "succeeded",
                            "transfer_data": null,
                            "transfer_group": null
                        }
                    ],
                    "has_more": false,
                    "total_count": 1,
                    "url": "/v1/charges?payment_intent=pi_3KyYBBSEXx4PYjuZ0fFS9IEz"
                },
                "client_secret": "pi_3KyYBBSEXx4PYjuZ0fFS9IEz_secret_TAerTAfniUdZVpaibuXNYIBDt",
                "confirmation_method": "automatic",
                "created": 1652347169,
                "currency": "inr",
                "customer": null,
                "description": null,
                "invoice": null,
                "last_payment_error": null,
                "livemode": false,
                "metadata": {},
                "next_action": null,
                "on_behalf_of": null,
                "payment_method": "pm_1KyYBBSEXx4PYjuZyKbyCagL",
                "payment_method_options": {
                    "card": {
                        "installments": null,
                        "mandate_options": null,
                        "network": null,
                        "request_three_d_secure": "automatic"
                    }
                },
                "payment_method_types": [
                    "card"
                ],
                "processing": null,
                "receipt_email": null,
                "review": null,
                "setup_future_usage": null,
                "shipping": null,
                "source": null,
                "statement_descriptor": null,
                "statement_descriptor_suffix": null,
                "status": "requires_capture",
                "transfer_data": null,
                "transfer_group": null
            },
            {
                "id": "pi_3KyXNhSEXx4PYjuZ1sKIhccC",
                "object": "payment_intent",
                "amount": 1199,
                "amount_capturable": 0,
                "amount_details": {
                    "tip": {}
                },
                "amount_received": 1199,
                "application": null,
                "application_fee_amount": null,
                "automatic_payment_methods": null,
                "canceled_at": null,
                "cancellation_reason": null,
                "capture_method": "manual",
                "charges": {
                    "object": "list",
                    "data": [
                        {
                            "id": "ch_3KyXNhSEXx4PYjuZ1nWI1ate",
                            "object": "charge",
                            "amount": 1199,
                            "amount_captured": 1199,
                            "amount_refunded": 1199,
                            "application": null,
                            "application_fee": null,
                            "application_fee_amount": null,
                            "balance_transaction": "txn_3KyXNhSEXx4PYjuZ1rbF80iy",
                            "billing_details": {
                                "address": {
                                    "city": null,
                                    "country": null,
                                    "line1": null,
                                    "line2": null,
                                    "postal_code": null,
                                    "state": null
                                },
                                "email": null,
                                "name": null,
                                "phone": null
                            },
                            "calculated_statement_descriptor": "ASHIMA FASHION POINT",
                            "captured": true,
                            "created": 1652344102,
                            "currency": "inr",
                            "customer": null,
                            "description": null,
                            "destination": null,
                            "dispute": null,
                            "disputed": false,
                            "failure_balance_transaction": null,
                            "failure_code": null,
                            "failure_message": null,
                            "fraud_details": {},
                            "invoice": null,
                            "livemode": false,
                            "metadata": {},
                            "on_behalf_of": null,
                            "order": null,
                            "outcome": {
                                "network_status": "approved_by_network",
                                "reason": null,
                                "risk_level": "normal",
                                "risk_score": 48,
                                "seller_message": "Payment complete.",
                                "type": "authorized"
                            },
                            "paid": true,
                            "payment_intent": "pi_3KyXNhSEXx4PYjuZ1sKIhccC",
                            "payment_method": "pm_1KyXNhSEXx4PYjuZtmf0HIRe",
                            "payment_method_details": {
                                "card": {
                                    "brand": "amex",
                                    "checks": {
                                        "address_line1_check": null,
                                        "address_postal_code_check": null,
                                        "cvc_check": null
                                    },
                                    "country": "US",
                                    "exp_month": 5,
                                    "exp_year": 2023,
                                    "fingerprint": "a3YdyVvCKwtRP7xb",
                                    "funding": "credit",
                                    "installments": null,
                                    "last4": "0005",
                                    "mandate": null,
                                    "network": "amex",
                                    "three_d_secure": null,
                                    "wallet": null
                                },
                                "type": "card"
                            },
                            "receipt_email": null,
                            "receipt_number": null,
                            "receipt_url": "https://pay.stripe.com/receipts/acct_1Kxw5fSEXx4PYjuZ/ch_3KyXNhSEXx4PYjuZ1nWI1ate/rcpt_LftAYPNcRZyi4NcSsrlxN5DSxj8Jrk0",
                            "refunded": true,
                            "refunds": {
                                "object": "list",
                                "data": [
                                    {
                                        "id": "re_3KyXNhSEXx4PYjuZ1IEnpMqs",
                                        "object": "refund",
                                        "amount": 1199,
                                        "balance_transaction": "txn_3KyXNhSEXx4PYjuZ1kOAgN2V",
                                        "charge": "ch_3KyXNhSEXx4PYjuZ1nWI1ate",
                                        "created": 1652344242,
                                        "currency": "inr",
                                        "metadata": {},
                                        "payment_intent": "pi_3KyXNhSEXx4PYjuZ1sKIhccC",
                                        "reason": null,
                                        "receipt_number": null,
                                        "source_transfer_reversal": null,
                                        "status": "succeeded",
                                        "transfer_reversal": null
                                    }
                                ],
                                "has_more": false,
                                "total_count": 1,
                                "url": "/v1/charges/ch_3KyXNhSEXx4PYjuZ1nWI1ate/refunds"
                            },
                            "review": null,
                            "shipping": null,
                            "source": null,
                            "source_transfer": null,
                            "statement_descriptor": null,
                            "statement_descriptor_suffix": null,
                            "status": "succeeded",
                            "transfer_data": null,
                            "transfer_group": null
                        }
                    ],
                    "has_more": false,
                    "total_count": 1,
                    "url": "/v1/charges?payment_intent=pi_3KyXNhSEXx4PYjuZ1sKIhccC"
                },
                "client_secret": "pi_3KyXNhSEXx4PYjuZ1sKIhccC_secret_kaqZIaNeKkd67SnQByksEubuI",
                "confirmation_method": "automatic",
                "created": 1652344101,
                "currency": "inr",
                "customer": null,
                "description": null,
                "invoice": null,
                "last_payment_error": null,
                "livemode": false,
                "metadata": {},
                "next_action": null,
                "on_behalf_of": null,
                "payment_method": "pm_1KyXNhSEXx4PYjuZtmf0HIRe",
                "payment_method_options": {
                    "card": {
                        "installments": null,
                        "mandate_options": null,
                        "network": null,
                        "request_three_d_secure": "automatic"
                    }
                },
                "payment_method_types": [
                    "card"
                ],
                "processing": null,
                "receipt_email": null,
                "review": null,
                "setup_future_usage": null,
                "shipping": null,
                "source": null,
                "statement_descriptor": null,
                "statement_descriptor_suffix": null,
                "status": "succeeded",
                "transfer_data": null,
                "transfer_group": null
            }
        ],
        "has_more": true,
        "url": "/v1/payment_intents"
    }
}
```
