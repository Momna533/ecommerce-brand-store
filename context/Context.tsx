"use client";

import React, { useEffect, useState } from "react";
import { data } from "@/utils";

const AppContext = React.createContext();

const featured = data.filter((item) => item.featured);
const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [cartItems, setCartItems] = useState([]);
  const [featuredItems, setFeaturedItems] = useState(featured);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const [isRoutePage, setIsRoutePage] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  const handleAddToCart = (productId) => {
    const product = products.find((item) => item.id === productId);
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) =>
        prevProduct.id === productId
          ? { ...prevProduct, inCart: true }
          : prevProduct
      )
    );
    setCartItems((prevCartItems) => {
      const itemAlreadyInCart = prevCartItems.find(
        (item) => item.id === productId
      );
      if (itemAlreadyInCart) {
        return prevCartItems.map((item) =>
          item.id === productId ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        return [...prevCartItems, { ...product, amount: 1 }];
      }
    });
  };

  useEffect(() => {
    const newCartTotal = cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.price * cartItem.amount;
    }, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

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
        setCartItems,
        cartTotal,
        setCartTotal,
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
