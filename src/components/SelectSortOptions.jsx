import { useDispatch, useSelector } from "react-redux";
import { productSortOptions } from "../utils/constants";
import { sortProducts, updateSort } from "../features/products/productsSlice";

const SelectSortOptions = () => {
  const { sort } = useSelector((store) => store.productsState);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center font-content text-xs lg:text-sm font-semibold gap-x-2">
      Sort By :
      <select
        value={sort}
        onChange={(e) => dispatch(updateSort(e.target.value))}
        className="select select-ghost font-normal py-1 text-xs lg:text-sm"
      >
        <option value={productSortOptions.nameA}>Name (A-Z)</option>
        <option value={productSortOptions.nameZ}>Name (Z-A)</option>
        <option value={productSortOptions.priceLow}>Price (Low-High) </option>
        <option value={productSortOptions.priceHigh}>Price (High-Low)</option>
      </select>
    </div>
  );
};
export default SelectSortOptions;
