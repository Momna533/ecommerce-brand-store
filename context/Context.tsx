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

  
  const handleAddToCart = (product) => {
    const itemExistsInCart = cartItems.some((item) => item.id === product);
    if (itemExistsInCart) {
      alert("Item already in cart");
      return;
    }
    const itemAddedToCart = products.find((p) => p.id === product);
    setCartItems((prev) => {
      return [...prev, itemAddedToCart];
    });
  };

  const handleRemoveFromCart = (productId) => {
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

        setCartItems,
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
