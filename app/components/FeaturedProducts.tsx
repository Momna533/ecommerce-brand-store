"use client";

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
