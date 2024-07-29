"use client";

import { data } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const featured = data.filter((item) => item.featured);

const appSlice = createSlice({
  name: "app",
  initialState: {
    products: data,
    cartItems: [],
    featuredItems: featured,
    cartDrawerOpen: true,
    mobileDrawerOpen: false,
    isHomePage: true,
    isRoutePage: false,
    cartTotal: 0,
  },
  reducers: {
    addToCart(state, action) {
      const productId = action.payload;
      const product = state.products.find((item) => item.id === productId);
      state.products = state.products.map((prevProduct) =>
        prevProduct.id === productId
          ? { ...prevProduct, inCart: true }
          : prevProduct
      );
      const itemAlreadyInCart = state.cartItems.find(
        (item) => item.id === productId
      );
      if (itemAlreadyInCart) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === productId ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        state.cartItems = [...state.cartItems, { ...product, amount: 1 }];
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      state.products = state.products.map((product) =>
        product.id === productId ? { ...product, inCart: false } : product
      );
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
    },
    setCartDrawerOpen(state, action) {
      state.cartDrawerOpen = action.payload;
    },
    setMobileDrawerOpen(state, action) {
      state.mobileDrawerOpen = action.payload;
    },
    setIsHomePage(state, action) {
      state.isHomePage = action.payload;
    },
    setIsRoutePage(state, action) {
      state.isRoutePage = action.payload;
    },
    setCartTotal(state, action) {
      state.cartTotal = action.payload;
    },
    calculateCartTotal(state) {
      state.cartTotal = state.cartItems.reduce(
        (total, item) => total + item.price * item.amount,
        0
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  setCartDrawerOpen,
  setMobileDrawerOpen,
  setIsHomePage,
  setIsRoutePage,
  setCartTotal,
  calculateCartTotal,
} = appSlice.actions;

export default appSlice.reducer;
