import { createSlice } from "@reduxjs/toolkit";
import { productLayout, productSortOptions } from "../../utils/constants";

const defaultState = {
  allProducts: [],
  featuredProducts: [],
  filteredProducts: [],
  layout: productLayout.grid,
  sort: productSortOptions.nameA,
  minPrice: 0,
  maxPrice: 0,
  filters: {
    search: "",
    category: "all",
    company: "all",
    color: "all",
    price: 0,
    freeShipping: false,
  },
};

const productSlice = createSlice({
  name: "products",
  initialState: defaultState,
  reducers: {
    switchLayout: (state, action) => {
      state.layout =
        state.layout === productLayout.grid
          ? productLayout.list
          : productLayout.grid;
    },
    setProducts: (state, action) => {
      const { allProducts, featuredProducts } = action.payload;
      const prices = allProducts.map((item) => item.price);
      const maxPrice = Math.max(...prices);
      return {
        ...state,
        featuredProducts,
        allProducts,
        filteredProducts: allProducts,
        maxPrice: maxPrice,
        filters: { ...state.filters, price: maxPrice },
      };
    },
    sortProducts: (state, action) => {
      switch (state.sort) {
        case productSortOptions.nameA:
          state.filteredProducts = state.filteredProducts.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          break;
        case productSortOptions.nameZ:
          state.filteredProducts = state.filteredProducts.sort((a, b) =>
            b.name.localeCompare(a.name)
          );
          break;
        case productSortOptions.priceLow:
          state.filteredProducts = state.filteredProducts.sort(
            (a, b) => a.price - b.price
          );
          break;
        case productSortOptions.priceHigh:
          state.filteredProducts = state.filteredProducts.sort(
            (a, b) => b.price - a.price
          );
          break;
        default:
          break;
      }
    },
    updateSort: (state, action) => {
      state.sort = action.payload;
    },
    updateFilters: (state, action) => {
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    },
    filterProducts: (state, action) => {
      const { search, category, company, color, price, freeShipping } =
        state.filters;
      state.filteredProducts = state.allProducts.filter((product) => {
        return (
          product.name.includes(search) &&
          (category === "all" || category === product.category) &&
          (company === "all" || company === product.company) &&
          (color === "all" || product.colors.find((item) => item === color)) &&
          product.price <= price &&
          (freeShipping ? product.shipping === freeShipping : true)
        );
      });
    },
    clearFilters: (state, action) => {
      return {
        ...state,
        filters: { ...defaultState.filters, price: state.maxPrice },
      };
    },
  },
});

export default productSlice.reducer;

export const {
  switchLayout,
  setProducts,
  sortProducts,
  updateSort,
  updateFilters,
  filterProducts,
  clearFilters,
} = productSlice.actions;
