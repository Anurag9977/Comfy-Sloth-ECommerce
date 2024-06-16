import { FaRegTrashCan } from "react-icons/fa6";
import SelectCartItemQuantity from "./SelectCartItemQuantity";
import { formatPrice } from "../utils/helpers";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../features/cart/cartSlice";

const CartItem = ({
  cartItemId,
  name,
  company,
  image,
  price,
  stock,
  selectedColor,
  productQuantity,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-3 gap-x-8 md:gap-0 items-center border-b py-2 border-base-300">
      <div className="flex gap-x-4">
        <img
          src={image.url}
          alt={name}
          className="block h-16 w-20 md:h-20 md:w-28 object-cover rounded-md shadow-md duration-300 border-2 border-transparent hover:border-primary"
        />
        <div className="flex flex-col gap-y-1">
          <h1 className="w-max font-content text-sm capitalize tracking-wide">
            {name}
          </h1>
          <p className="font-heading uppercase text-xs tracking-wider">
            {company}
          </p>
          <div
            style={{ backgroundColor: selectedColor }}
            className="mt-1 md:mt-2 h-3 w-3 md:h-4 md:w-4 rounded-full"
          ></div>
        </div>
      </div>
      <div className="justify-self-end xl:justify-self-center flex items-center gap-x-2 md:gap-x-4">
        <SelectCartItemQuantity
          cartItemId={cartItemId}
          productQuantity={productQuantity}
          stock={stock}
        />

        <button
          className="tooltip tooltip-right font-content"
          data-tip="Remove Item"
          onClick={() => dispatch(removeCartItem({ cartItemId }))}
        >
          <FaRegTrashCan className="text-error text-xs md:text-sm" />
        </button>
      </div>
      <p className="font-content font-semibold text-sm tracking-wider justify-self-end">
        {formatPrice(price)}
      </p>
    </div>
  );
};
export default CartItem;
