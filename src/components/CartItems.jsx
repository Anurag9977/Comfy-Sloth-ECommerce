import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../features/cart/cartSlice";

const CartItems = () => {
  const { cartItems } = useSelector((store) => store.cartState);
  const dispatch = useDispatch();
  return (
    <div className="w-full flex flex-col">
      {cartItems.map((item) => {
        const { cartItemId } = item;
        return <CartItem key={cartItemId} {...item} />;
      })}
      <button
        type="button"
        className="my-8 self-center btn w-max btn-error btn-sm font-content tracking-widest rounded-md capitalize"
        onClick={() => dispatch(clearCart())}
      >
        Clear cart
      </button>
    </div>
  );
};
export default CartItems;
