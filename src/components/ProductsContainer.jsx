import { useDispatch, useSelector } from "react-redux";
import ProductLayoutButtons from "./ProductLayoutButtons";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import SelectSortOptions from "./SelectSortOptions";
import { productLayout } from "../utils/constants";
import { useEffect } from "react";
import {
  filterProducts,
  sortProducts,
} from "../features/products/productsSlice";
const ProductsContainer = () => {
  const dispatch = useDispatch();
  const { filteredProducts, layout, filters, sort } = useSelector(
    (store) => store.productsState
  );

  useEffect(() => {
    dispatch(filterProducts());
    dispatch(sortProducts());
  }, [filters, sort]);

  return (
    <section>
      <div className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_auto_1fr_auto] items-center gap-4">
        <ProductLayoutButtons />
        <h1 className="font-content tracking-wide text-sm lg:text-base hidden sm:block">
          {filteredProducts.length} Product(s) Found
        </h1>
        <hr className="h-[1px] border-neutral-content" />
        <SelectSortOptions />
      </div>
      <h1 className="font-content tracking-wide text-sm lg:text-base sm:hidden mt-4">
        {filteredProducts.length} Product(s) Found
      </h1>
      {filteredProducts.length === 0 ? (
        <h1 className="mt-8 font-content font-semibold lg:text-lg tracking-wide ">
          Sorry, no products matched your search.
        </h1>
      ) : (
        <div className="mt-4">
          {layout === productLayout.grid ? (
            <ProductsGrid products={filteredProducts} />
          ) : (
            <ProductsList products={filteredProducts} />
          )}
        </div>
      )}
    </section>
  );
};
export default ProductsContainer;
