"use client";

import { useState } from "react";
import FeaturedProduct from "./FeaturedProduct";

const FeaturedProducts = ({ featuredProducts, setFeaturedProducts }) => {
  return (
    <>
      {featuredProducts.map((item) => (
        <FeaturedProduct key={item.id} {...item} />
      ))}
    </>
  );
};

export default FeaturedProducts;
