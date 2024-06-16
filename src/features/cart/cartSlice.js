import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  quantity: 0,
  subtotal: 0,
  tax: 499,
  shipping: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    calculateTotals: (state, action) => {
      state.tax = 0.1 * state.subtotal;
      state.orderTotal = state.subtotal + state.tax + state.shipping;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    addToCart: (state, action) => {
      const { cartItemId, price, productQuantity, freeShipping, stock } =
        action.payload;
      const findCartItem = state.cartItems.find(
        (item) => item.cartItemId === cartItemId
      );
      if (findCartItem) {
        const newProductQuantity =
          findCartItem.productQuantity + productQuantity;
        if (newProductQuantity > stock) {
          findCartItem.productQuantity = stock;
          toast.error("Stock exceeded");
        } else {
          findCartItem.productQuantity = newProductQuantity;
          state.quantity += productQuantity;
          state.shipping += freeShipping ? 0 : 199 * newProductQuantity;
          state.subtotal += price * productQuantity;
          cartSlice.caseReducers.calculateTotals(state);
          toast.success("Item added to cart");
        }
      } else {
        state.cartItems.push(action.payload);
        state.quantity += productQuantity;
        state.shipping += freeShipping ? 0 : 199 * productQuantity;
        state.subtotal += price * productQuantity;
        cartSlice.caseReducers.calculateTotals(state);
        toast.success("Item added to cart");
      }
    },
    updateCart: (state, action) => {
      const { cartItemId, newQuantity } = action.payload;
      const findCartItem = state.cartItems.find(
        (item) => item.cartItemId === cartItemId
      );
      let { productQuantity, freeShipping, price } = findCartItem;
      state.quantity += newQuantity - productQuantity;
      state.shipping += freeShipping
        ? 0
        : 199 * (newQuantity - productQuantity);
      state.subtotal += price * (newQuantity - productQuantity);
      findCartItem.productQuantity = newQuantity;
      cartSlice.caseReducers.calculateTotals(state);
    },
    removeCartItem: (state, action) => {
      const { cartItemId } = action.payload;
      const findCartItem = state.cartItems.find(
        (item) => item.cartItemId === cartItemId
      );
      const { productQuantity, freeShipping, price } = findCartItem;
      state.quantity -= productQuantity;
      state.shipping -= freeShipping ? 0 : 199 * productQuantity;
      state.subtotal -= price * productQuantity;
      state.cartItems = state.cartItems.filter(
        (item) => item.cartItemId !== cartItemId
      );
      cartSlice.caseReducers.calculateTotals(state);
    },
    clearCart: (state, action) => {
      localStorage.removeItem("cart");
      return defaultState;
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, updateCart, clearCart, removeCartItem } =
  cartSlice.actions;
