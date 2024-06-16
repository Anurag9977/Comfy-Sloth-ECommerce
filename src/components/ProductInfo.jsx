import { useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
import { useState } from "react";
import RatingStars from "./RatingStars";
import SelectColorOptions from "./SelectColorOptions";
import SelectQuantity from "./SelectQuantity";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductInfo = () => {
  const dispatch = useDispatch();
  const {
    id,
    name,
    images,
    description,
    company,
    reviews,
    stars,
    colors,
    category,
    price,
    stock,
    shipping,
  } = useLoaderData();
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [productQuantity, setProductQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        cartItemId: id + selectedColor,
        name,
        company,
        price,
        selectedColor,
        productQuantity,
        stock,
        image: images[0],
        freeShipping: shipping,
      })
    );
  };

  return (
    <div className="font-content">
      <h1 className="capitalize text-base md:text-lg font-bold tracking-wide">
        {name}
      </h1>
      <h3 className="font-heading text-sm md:text-base uppercase tracking-wider">
        {company}
      </h3>
      <div className="flex items-center gap-x-2 mt-2">
        <RatingStars stars={stars} />
        <p className="text-xs sm:text-sm tracking-wider">
          ({reviews} Customer Reviews)
        </p>
      </div>
      <h3 className="font-heading tracking-widest font-semibold my-4 text-base md:text-lg">
        {formatPrice(price)}
      </h3>
      <p className="text-xs md:text-sm text-justify leading-loose md:leading-relaxed">
        {description}
      </p>
      <div className="my-4 pt-4 border-t border-neutral-content grid grid-cols-2 gap-y-4 items-center">
        <p className="tracking-wide capitalize font-semibold text-xs md:text-sm">
          Category : <span className="font-normal">{category}</span>
        </p>
        <p className="justify-self-end text-xs md:text-sm tracking-wide capitalize font-semibold">
          Availability :
          {stock === 0 ? (
            <span className="font-normal text-error"> Out of Stock</span>
          ) : (
            <span className="font-normal"> In Stock</span>
          )}
        </p>
        {/* SELECT PRODUCT COLOR AND QUANTITY AND ADD TO CART */}
        {stock > 0 && (
          <>
            <SelectColorOptions
              colors={colors}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
            <div className="justify-self-end">
              <SelectQuantity
                productQuantity={productQuantity}
                setProductQuantity={setProductQuantity}
                stock={stock}
              />
            </div>
            <button
              type="button"
              className="btn btn-xs sm:btn-sm btn-secondary text-xs sm:text-sm font-content rounded-md tracking-widest w-max capitalize"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default ProductInfo;
