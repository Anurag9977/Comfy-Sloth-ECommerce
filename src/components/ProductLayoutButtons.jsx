import { IoGridOutline } from "react-icons/io5";
import { LuLayoutList } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { switchLayout } from "../features/products/productsSlice";
import { productLayout } from "../utils/constants";

const ProductLayoutButtons = () => {
  const { layout } = useSelector((store) => store.productsState);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-x-1">
      <button
        type="button"
        className={`p-2 rounded-full duration-300 ${
          layout === productLayout.grid
            ? "bg-primary text-base-100"
            : "hover:bg-base-300 text-base-content"
        }`}
        disabled={layout === productLayout.grid}
        onClick={() => dispatch(switchLayout())}
      >
        <IoGridOutline className="text-lg" />
      </button>
      <button
        type="button"
        className={`p-2 rounded-full duration-300 ${
          layout === productLayout.list
            ? "bg-primary text-base-100"
            : "hover:bg-base-300 text-base-content"
        }`}
        disabled={layout === productLayout.list}
        onClick={() => dispatch(switchLayout())}
      >
        <LuLayoutList className="text-lg" />
      </button>
    </div>
  );
};
export default ProductLayoutButtons;
