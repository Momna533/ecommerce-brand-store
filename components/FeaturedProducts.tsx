"use client";

import { data } from "@/utils";
import FeaturedProduct from "./FeaturedProduct";
import { useGlobalContext } from "@/context/Context";
import SingleProductCard from "./SingleProductCard";
import { useSelector } from "react-redux";

const FeaturedProducts = () => {
  const { products } = useGlobalContext();
  const featuredProducts = products.filter((item) => item.featured);
  return (
    <>
      <div className="featured__products">
        <h2>Featured Products</h2>
        <div className="heading__border"></div>
        <div className="featured__products__content">
          {featuredProducts.map((item) => (
            <SingleProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
