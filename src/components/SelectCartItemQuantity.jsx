import { useDispatch } from "react-redux";
import { updateCart } from "../features/cart/cartSlice";

const SelectCartItemQuantity = ({ cartItemId, productQuantity, stock }) => {
  const dispatch = useDispatch();
  const quantityOptions = Array.from({ length: stock }, (_, index) => {
    return index + 1;
  });
  return (
    <label className="flex items-center gap-4 w-full">
      <select
        value={productQuantity}
        className="select select-xs md:select-sm select-primary select-bordered font-heading w-16 md:w-20"
        onChange={(e) =>
          dispatch(
            updateCart({ cartItemId, newQuantity: parseInt(e.target.value) })
          )
        }
      >
        {quantityOptions.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </label>
  );
};
export default SelectCartItemQuantity;
