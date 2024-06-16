import { useSelector } from "react-redux";
import { BreadCrumbs, CartInfo, CartItems } from "../components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Cart = () => {
  const { quantity } = useSelector((store) => store.cartState);
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <main>
      <BreadCrumbs firstLink="cart" />
      {quantity > 0 ? (
        <section className="my-8 align-section-center grid lg:grid-cols-[2fr_1fr] gap-12 items-start">
          <CartItems />
          <div>
            <CartInfo />
            {user && isAuthenticated ? (
              <Link
                to="/checkout"
                type="button"
                className="my-4 btn btn-block btn-sm btn-primary rounded-md font-content uppercase tracking-widest"
              >
                Proceed to checkout
              </Link>
            ) : (
              <button
                className="my-4 btn btn-block btn-sm btn-secondary rounded-md font-content uppercase tracking-widest"
                type="button"
                onClick={() => loginWithRedirect()}
              >
                Login to checkout
              </button>
            )}
          </div>
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
export default Cart;
