import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { formatPrice } from "../utils/helpers";

const ProductCard = ({ id, name, price, image, size }) => {
  return (
    <div className="w-full">
      <div
        className={`h-40 lg:h-36 xl:h-40 group relative ${size} bg-primary-content rounded-lg`}
      >
        <img
          src={image}
          alt={name}
          className="block h-full w-full object-cover group-hover:opacity-50 duration-300 rounded-md"
        />
        <Link
          to={`/products/${id}`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-300"
        >
          <FiSearch className="bg-primary text-base-100 text-4xl p-2 rounded-full " />
        </Link>
      </div>
      <div className="mt-2 flex justify-between capitalize text-sm">
        <p className="font-content tracking-wide">{name}</p>
        <p className="font-heading tracking-widest font-semibold">
          {formatPrice(price)}
        </p>
      </div>
    </div>
  );
};
export default ProductCard;
