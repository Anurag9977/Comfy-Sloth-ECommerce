import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import ShippingForm from "./ShippingForm";
const CheckoutForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  // FORM STATES
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !address || !pincode) {
      toast.error("Please enter all required fields");
      return;
    }
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });
    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    } else {
      navigate("/confirmation?status=success");
      dispatch(clearCart());
    }
    setIsLoading(false);
  };

  return (
    <form
      className="flex flex-col gap-y-4 p-4"
      id="payment-form"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-y-2 font-content text-sm md:text-base">
        <p className="tracking-wide">
          Test Success Card Number :{" "}
          <span className="font-heading tracking-wider">
            4242 4242 4242 4242
          </span>
        </p>
        <p className="tracking-wide">
          Test Declined Card Number :{" "}
          <span className="font-heading tracking-wider">
            4000 0000 0000 0002
          </span>
        </p>
      </div>
      <div className="bg-base-300 py-4 px-8">
        <PaymentElement />
      </div>
      <ShippingForm
        name={name}
        address={address}
        pincode={pincode}
        setName={setName}
        setAddress={setAddress}
        setPincode={setPincode}
      />
      <button
        disabled={isLoading || !stripe || !elements}
        type="submit"
        id="submit"
        className="btn btn-block btn-primary rounded-md font-heading tracking-wider capitalize text-base md:text-lg"
      >
        {isLoading ? (
          <span className="loading loading-spinner text-primary"></span>
        ) : (
          "Pay now"
        )}
      </button>
    </form>
  );
};
export default CheckoutForm;
