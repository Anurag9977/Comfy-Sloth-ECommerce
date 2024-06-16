import { useSelector } from "react-redux";
import { formatPrice } from "../utils/helpers";

const CartInfo = () => {
  const { subtotal, tax, shipping, orderTotal } = useSelector(
    (store) => store.cartState
  );

  return (
    <section className="w-full bg-base-200 rounded-lg px-8 py-4">
      {/* SUBTOTAL */}
      <div className="flex justify-between items-center pb-1 border-b border-base-content text-sm xl:text-base">
        <p className="font-content tracking-wide capitalize">subtotal</p>
        <p className="font-heading tracking-wider">{formatPrice(subtotal)}</p>
      </div>
      {/* TAX */}
      <div className="flex justify-between items-center pt-2 pb-1 border-b border-base-content text-sm xl:text-base">
        <p className="font-content tracking-wide capitalize">tax</p>
        <p className="font-heading tracking-wider">{formatPrice(tax)}</p>
      </div>
      {/* SHIPPING */}
      <div className="flex justify-between items-center pt-2 pb-1 border-b border-base-content text-sm xl:text-base">
        <p className="font-content tracking-wide capitalize">shipping</p>
        <p className="font-heading tracking-wider">{formatPrice(shipping)}</p>
      </div>
      {/* ORDER TOTAL */}
      <div className="flex justify-between items-center pt-4 pb-1 text-base xl:text-lg">
        <p className="font-content tracking-wide capitalize">order total</p>
        <p className="font-heading tracking-wider font-semibold">
          {formatPrice(orderTotal)}
        </p>
      </div>
    </section>
  );
};
export default CartInfo;
