"use client";

import FeaturedProduct from "./FeaturedProduct";
import { useGlobalContext } from "@/context/Context";

const FeaturedProducts = () => {
  const { featuredItems } = useGlobalContext();
  return (
    <>
      <div className="featured__products">
        <h2>Featured Products</h2>
        <div className="heading__border"></div>
        <div className="featured__products__content">
          {featuredItems.map((item) => (
            <FeaturedProduct key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
