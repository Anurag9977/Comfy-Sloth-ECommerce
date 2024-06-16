import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CheckoutForm from "./CheckoutForm";
import { themes } from "../utils/constants";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
const StripeCheckout = () => {
  const cart = useSelector((store) => store.cartState);
  const { theme } = useSelector((store) => store.themeState);
  const [clientSecret, setClientSecret] = useState("");
  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post("/.netlify/functions/stripe-payment", {
        cart: cart,
      });
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    createPaymentIntent();
  }, []);
  const appearance = {
    theme: theme === themes.light ? "stripe" : "night",
    variables: {
      fontFamily: "'Nunito', sans-serif",
    },
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <section className="w-full shadow-sm rounded-md bg-base-200">
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )}
    </section>
  );
};
export default StripeCheckout;
