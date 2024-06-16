exports.handler = async (event, context) => {
  require("dotenv").config();
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const calculateOrderAmount = (cart) => {
    return Math.round(cart.orderTotal);
  };
  const { cart } = JSON.parse(event.body);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(cart),
    currency: "inr",
    description: "Test Payment",
    shipping: {
      name: "Jay Doe",
      address: {
        line1: "510 Townsend St",
        postal_code: "98140",
        city: "San Francisco",
        state: "CA",
        country: "US",
      },
    },
  });
  return {
    statusCode: 200,
    body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
  };
};
