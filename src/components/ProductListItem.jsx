import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";

const ProductListItem = ({ id, name, company, description, price, image }) => {
  return (
    <div className="flex justify-between py-4 border-b border-base-300 gap-x-6">
      <div className="flex gap-x-4 md:gap-x-6">
        <Link to={`/products/${id}`}>
          <img
            src={image}
            alt={name}
            className="block h-24 w-60 object-cover rounded-md shadow-md duration-300 border-2 border-transparent hover:border-primary"
          />
        </Link>
        <div>
          <h2 className="font-content font-semibold capitalize text-sm tracking-wide ">
            {name}
          </h2>
          <p className="font-heading text-xs tracking-wider uppercase ">
            {company}
          </p>
          <p className="mt-2 font-content text-xs text-justify tracking-wide leading-normal">
            {description.length > 100
              ? description.substr(0, 100) + "..."
              : description}
          </p>
        </div>
      </div>
      <h1 className="font-heading tracking-widest font-semibold text-sm">
        {formatPrice(price)}
      </h1>
    </div>
  );
};
export default ProductListItem;
