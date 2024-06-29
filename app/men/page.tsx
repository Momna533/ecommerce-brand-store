"use client";

import { FaArrowRight, FaChevronRight } from "react-icons/fa6";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import FiltersContainer from "@/app/components/FiltersContainer";
import Image from "next/image";
import BreadCrumbs from "@/app/components/BreadCrumbs";
import ProductCard from "@/app/components/ProductCard";
import avatarImg from "@/app/images/banner-03.jpg";
import bag1 from "@/app/images/product-bag1-300x300.jpg";
import bag2 from "@/app/images/product-bag3-300x300.jpg";
import productMJeans3 from "@/app/images/product-m-jeans3-300x300.jpg";
import productMJeans4 from "@/app/images/product-m-jeans4-300x300.jpg";
import productWJeans2 from "@/app/images/product-w-jeans2-300x300.jpg";
import jeans3 from "@/app/images/product-w-jeans1-300x300.jpg";
import productWJeans1 from "@/app/images/product-m-jeans1-300x300.jpg";
import accessory1 from "@/app/images/product-accessory1-300x300.jpg";
import productAccessory3 from "@/app/images/product-accessory3-300x300.jpg";
import productAccessory2 from "@/app/images/product-accessory2-300x300.jpg";
import productWJeans4 from "@/app/images/product-w-jeans4-300x300.jpg";
import productHoodie3 from "@/app/images/product-hoodie3-300x300.jpg";
import productHoodie1 from "@/app/images/product-hoodie1-300x300.jpg";
import productHoodie2 from "@/app/images/product-hoodie1-300x300.jpg";
import productHoodie4 from "@/app/images/product-hoodie4.jpg-300x300.jpg";
import productBag2 from "@/app/images/product-bag2-300x300.jpg";
import productBag3 from "@/app/images/product-bag3-300x300.jpg";
import productBag4 from "@/app/images/product-bag4-300x300.jpg";
import tshirt4 from "@/app/images/tshirt4-300x300.jpg";
import tshirt1 from "@/app/images/tshirt1-300x300.jpg";
import tshirt2 from "@/app/images/tshirt2-300x300.jpg";
import tshirt3 from "@/app/images/tshirt3-300x300.jpg";
import tshirt7 from "@/app/images/tshirt7-300x300.jpg";
import productMjeans2 from "@/app/images/product-m-jeans2-300x300.jpg";
import sportsShoe1 from "@/app/images/sports-shoe1-300x300.jpg";
import sportsShoe2 from "@/app/images/sports-shoe2-600x600.jpg";
import sportsShoe3 from "@/app/images/sports-shoe3-300x300.jpg";
import sportsShoe4 from "@/app/images/sports-shoe4-600x600.jpg";
import sportsShoe5 from "@/app/images/sports-shoe5-600x600.jpg";
import { useState } from "react";
import Pagination from "@/app/components/Pagination";

const data = [
  {
    id: 1,
    img: sportsShoe1,
    title: "dnk yellow shoes",
    price: "$120.00",
    category: "men",
    featured: true,
  },
  {
    id: 2,
    img: sportsShoe1,
    title: "dnk blue shoes",
    price: "$200.00-$240.00",
    category: "men",
    featured: true,
  },
  {
    id: 3,
    img: productWJeans4,
    title: "Dark brown jeans",
    price: "$150.00",
    category: "men",
    featured: true,
  },
  {
    id: 4,
    img: productWJeans2,
    title: "Blue denim jeans",
    price: "$150.00",
    category: "women",
    featured: true,
  },
  {
    id: 5,
    img: jeans3,
    title: "Basic grey jeans",
    price: "$150.00",
    category: "women",
    featured: true,
  },
  {
    id: 6,
    img: productWJeans1,
    title: "Blue denim shorts",
    price: "$130.00",
    category: "women",
    featured: true,
  },
  {
    id: 7,
    img: accessory1,
    title: "Anchor braceet",
    price: "$150.00-$180.00",
    category: "accessories",
    featured: true,
  },
  {
    id: 8,
    img: productAccessory2,
    title: "boho bangle braceet",
    price: "$150.00-$170.00",
    category: "accessories",
    featured: true,
  },
  {
    id: 9,
    img: bag2,
    title: "light brown purse",
    price: "$150.00",
    category: "accessories",
    featured: true,
  },
  {
    id: 10,
    img: productBag3,
    title: "Bright red bag",
    price: "$100.00-$140.00",
    category: "accessories",
    featured: true,
  },
  {
    id: 11,
    img: productAccessory2,
    title: "Anchor Bracelet",
    price: "$100.00-$140.00",
    category: "accessories",
    featured: false,
  },
  {
    id: 12,
    img: productWJeans4,
    title: "Basic grey jeans",
    price: "$100.00-$140.00",
    category: "women",
    featured: true,
  },
  {
    id: 13,
    img: productHoodie1,
    title: "Black Hoodie",
    price: "$100.00-$140.00",
    category: "men",
    featured: false,
  },
  {
    id: 14,
    img: productBag2,
    title: "Black over-the-shoulder handbag",
    price: "$100.00-$140.00",
    category: "accessories",
    featured: false,
  },
  {
    id: 15,
    img: productHoodie2,
    title: "Blue Hoodie",
    price: "$100.00-$140.00",
    category: "men",
    featured: false,
  },
  {
    id: 16,
    img: tshirt4,
    title: "DNK Blue TShirt",
    price: "$40.00",
    category: "men",
    featured: false,
  },
  {
    id: 17,
    img: productBag4,
    title: "Bright gold purse with chain",
    price: "$150.00",
    category: "accessories",
    featured: false,
  },
  {
    id: 18,
    img: productAccessory3,
    title: "Buddha Bracelet",
    price: "$150.00",
    category: "accessories",
    featured: false,
  },
  {
    id: 19,
    img: productMjeans2,
    title: "Dark blue denim jeans",
    price: "$150.00",
    category: "men",
    featured: false,
  },
  {
    id: 20,
    img: productMJeans4,
    title: "Dark grey jeans",
    price: "$150.00",
    category: "men",
    featured: false,
  },
  {
    id: 21,
    img: sportsShoe1,
    title: "dnk black shoes",
    price: "$200.00-$240.00",
    category: "women",
    featured: true,
  },
  {
    id: 22,
    img: sportsShoe2,
    title: "dnk blue shoes",
    price: "$200.00-$240.00",
    category: "men",
    featured: false,
  },
  {
    id: 23,
    img: sportsShoe3,
    title: "dnk green shoes",
    price: "$200.00-$240.00",
    category: "women",
    featured: false,
  },
  {
    id: 24,
    img: sportsShoe4,
    title: "dnk red shoes",
    price: "$200.00-$240.00",
    category: "men",
    featured: false,
  },
  {
    id: 25,
    img: sportsShoe5,
    title: "dnk yellow shoes",
    price: "$200.00-$240.00",
    category: "men",
    featured: false,
  },
  {
    id: 26,
    img: tshirt1,
    title: "DNK Green TShirt",
    price: "$40.00",
    category: "men",
    featured: false,
  },
  {
    id: 27,
    img: tshirt2,
    title: "Flammingo tshirt",
    price: "$40.00",
    category: "women",
    featured: false,
  },
  {
    id: 28,
    img: tshirt3,
    title: "Grey Pattern tshirt",
    price: "$40.00",
    category: "women",
    featured: false,
  },
  {
    id: 29,
    img: productMJeans3,
    title: "Faint washed Blue denim jeans",
    price: "$150.00",
    category: "women",
    featured: false,
  },
  {
    id: 30,
    img: productHoodie3,
    title: "Green Hoodie",
    price: "$100.00-$140.00",
    category: "women",
    featured: false,
  },
  {
    id: 31,
    img: productHoodie4,
    title: "Red Hoodie",
    price: "$100.00-$140.00",
    category: "men",
    featured: false,
  },
  {
    id: 32,
    img: tshirt7,
    title: "lemon tshirt",
    price: "$100.00-$140.00",
    category: "women",
    featured: false,
  },
  {
    id: 33,
    img: tshirt7,
    title: "light brown purse",
    price: "$100.00-$140.00",
    category: "accessories",
    featured: false,
  },
];

const page = () => {
  const [products, setProducts] = useState(data);

  return (
    <>
      <Header />
      <div className="container">
        <FiltersContainer />
        <main>
          <BreadCrumbs path="men" />
          <div className="row">
            <p className="search__results">Showing 1-12 of 31 results</p>
            <form>
              <select name="" id="" className="filters__select">
                <option value="">default</option>
                <option value="">popularity</option>
                <option value="">default</option>
              </select>
            </form>
          </div>
          <div className="products">
            {products.map((product) => {
              return <ProductCard key={product.id} {...product} />;
            })}
          </div>
          <Pagination />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default page;
