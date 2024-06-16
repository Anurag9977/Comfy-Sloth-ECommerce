import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice, uniqueValues } from "../utils/helpers";
import {
  clearFilters,
  updateFilters,
} from "../features/products/productsSlice";
const ProductFilters = () => {
  const dispatch = useDispatch();
  const {
    allProducts,
    minPrice,
    maxPrice,
    filters: { search, category, company, color, price, freeShipping },
  } = useSelector((store) => store.productsState);

  const categories = uniqueValues(allProducts, "category");
  const companies = uniqueValues(allProducts, "company");
  const colors = uniqueValues(allProducts, "colors");

  return (
    <div className="my-2 grid grid-cols-1 lg:flex lg:flex-col gap-y-4 lg:gap-y-2">
      {/* FILTER - SEARCH */}
      <label className="input input-sm input-bordered rounded-md flex items-center gap-2 w-1/2 lg:w-full">
        <input
          type="text"
          value={search}
          className="grow font-content tracking-wide"
          placeholder="Search"
          onChange={(e) =>
            dispatch(updateFilters({ name: "search", value: e.target.value }))
          }
        />
        <FiSearch />
      </label>
      {/* FILTER - CATEGORIES */}
      <div>
        <h1 className="font-heading font-semibold tracking-wider my-2">
          Category
        </h1>
        <div className="grid grid-cols-3 lg:grid-cols-1 gap-y-2 lg:gap-y-0">
          {categories.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-3 my-1 w-max">
                <input
                  type="radio"
                  name="radio-1"
                  className="radio radio-sm"
                  value={item}
                  checked={item === category}
                  onChange={(e) =>
                    dispatch(
                      updateFilters({
                        name: "category",
                        value: e.target.value,
                      })
                    )
                  }
                />
                <span className="font-content tracking-wide capitalize text-sm">
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {/* FILTER - COMPANIES */}
      <label className="form-control w-1/2 lg:w-full">
        <div className="label">
          <span className="label-text font-heading tracking-wider font-semibold text-base">
            Company
          </span>
        </div>
        <select
          className="select select-sm rounded-md select-bordered font-content text-sm tracking-wide capitalize"
          value={company}
          onChange={(e) =>
            dispatch(updateFilters({ name: "company", value: e.target.value }))
          }
        >
          {companies.map((company, index) => {
            return (
              <option key={index} className="text-sm">
                {company}
              </option>
            );
          })}
        </select>
      </label>

      <section className="mt-4 grid grid-cols-2 lg:grid-cols-1 gap-8 6lg:gap-">
        {/* FILTER - COLORS */}
        <div>
          <h1 className="font-heading font-semibold tracking-wider mb-2">
            Colors :{" "}
          </h1>
          <div className="flex flex-wrap items-center gap-1">
            {colors.map((item, index) => {
              if (item === "all") {
                return (
                  <button
                    key={index}
                    className={`font-content capitalize tracking-wide btn btn-xs btn-circle duration-300 ${
                      color === "all" && "btn-outline border-2"
                    }`}
                    onClick={() =>
                      dispatch(updateFilters({ name: "color", value: "all" }))
                    }
                  >
                    all
                  </button>
                );
              }
              return (
                <div
                  key={index}
                  className={`w-max border-2 p-1 rounded-full flex items-center duration-300 hover:border-base-content ${
                    item === color
                      ? "border-base-content"
                      : "border-transparent"
                  }`}
                >
                  <button
                    type="button"
                    style={{ backgroundColor: item }}
                    className={`h-3 w-3 rounded-full cursor-pointer`}
                    onClick={() =>
                      dispatch(updateFilters({ name: "color", value: item }))
                    }
                  ></button>
                </div>
              );
            })}
          </div>
        </div>
        {/* FILTER - PRICE RANGE */}
        <div>
          <h1 className="font-heading font-semibold tracking-wide">Price</h1>
          <p className="font-heading tracking-wider my-2 text-sm">
            {formatPrice(price)}
          </p>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={(e) =>
              dispatch(
                updateFilters({
                  name: "price",
                  value: parseInt(e.target.value),
                })
              )
            }
            className="range range-xs range-secondary"
          />
        </div>
        {/* FILTER - FREE SHIPPING */}
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-x-4 lg:gap-0 lg:justify-between">
            <span className="label-text font-heading font-semibold tracking-wide text-base">
              Free Shipping
            </span>
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              checked={freeShipping}
              onChange={() =>
                dispatch(
                  updateFilters({ name: "freeShipping", value: !freeShipping })
                )
              }
            />
          </label>
        </div>
        {/* CLEAR FILTERS */}
        <div className="self-center">
          <button
            type="button"
            className="btn btn-block btn-secondary btn-sm rounded-md font-content tracking-wider capitalize"
            onClick={() => dispatch(clearFilters())}
          >
            Clear Filters
          </button>
        </div>
      </section>
    </div>
  );
};
export default ProductFilters;
