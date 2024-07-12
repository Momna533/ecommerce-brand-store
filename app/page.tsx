"use client";
import { FC } from "react";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { featuredAtom } from "@/atoms";
import { useAtom } from "jotai";

const Page: FC = () => {
  const [featuredProducts, setFeaturedProducts] = useAtom(featuredAtom);
  return (
    <>
      <Header />
      <Hero />
      <div className="featured__products">
        <h2>Featured Products</h2>
        <div className="heading__border"></div>
        <div className="featured__products__content">
          <FeaturedProducts
            featuredProducts={featuredProducts}
            setFeaturedProducts={setFeaturedProducts}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
