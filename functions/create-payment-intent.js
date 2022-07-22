require('dotenv').config()

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)

//function to validate data fetched from redux store to netlify functions.
exports.handler = async function (event, context) {
  //if there is data from server as response is received in body
  if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body)

    const calculateOrderAmount = () => {
      return shipping_fee + total_amount
    }

    //console.log(cart)

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: 'inr',
      })

      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: err.message }),
      }
    }
  }

  return {
    statusCode: 200,
    body: 'Create Paymen Intent',
  }
}
