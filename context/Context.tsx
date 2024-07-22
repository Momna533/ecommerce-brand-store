"use client";

import React, { useState } from "react";
import { data } from "@/utils";

const AppContext = React.createContext();

const featured = data.filter((item) => item.featured);
const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [cartItems, setCartItems] = useState([]);
  const [featuredItems, setFeaturedItems] = useState(featured);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const [isRoutePage, setIsRoutePage] = useState(false);
  const [amount, setAmount] = useState(0);
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);

  const handleAddToCart = (productId) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId ? { ...product, inCart: true } : product
      )
    );

    const itemAddedToCart = products.find((p) => p.id === productId);
    const itemAleadyInCart = products.some((p) => p.id === productId);
    if (itemAleadyInCart) {
      console.log("Item already in cart");
    }
    setCartItems((prev) => {
      return [...prev, itemAddedToCart];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId ? { ...product, inCart: false } : product
      )
    );

    const itemRemovedFromCart = cartItems.filter(
      (item) => item.id !== productId
    );
    setCartItems(itemRemovedFromCart);
  };
  return (
    <AppContext.Provider
      value={{
        products,
        featuredItems,
        setFeaturedItems,
        cartItems,
        cartDrawerOpen,
        setCartDrawerOpen,
        mobileDrawerOpen,
        setMobileDrawerOpen,
        isHomePage,
        setIsHomePage,
        isRoutePage,
        setIsRoutePage,
        amount,
        setAmount,
        setCartItems,
        numberOfCartItems,
        handleAddToCart,
        handleRemoveFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
