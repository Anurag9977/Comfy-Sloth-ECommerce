import { useSelector } from "react-redux";
import { BreadCrumbs, CartInfo } from "../components";
import { Link } from "react-router-dom";
import StripeCheckout from "../components/StripeCheckout";

const Checkout = () => {
  const { quantity } = useSelector((store) => store.cartState);
  return (
    <main>
      <BreadCrumbs firstLink="checkout" />
      {quantity > 0 ? (
        <section className="my-8 align-section-center grid lg:grid-cols-[2fr_1fr] gap-12 items-start">
          <StripeCheckout />
          <CartInfo />
        </section>
      ) : (
        <section className="my-8 align-section-center flex flex-col gap-8">
          <h1 className="font-content tracking-wide md:text-lg">
            Your cart is currently empty...
          </h1>
          <Link
            to="/products"
            className="w-max self-center btn btn-sm btn-primary rounded-md font-content text-sm tracking-wider"
          >
            Keep Shopping
          </Link>
        </section>
      )}
    </main>
  );
};
export default Checkout;
