import React from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa6";
import avatarImg from "@/app/images/sports-shoe3-300x300.jpg";
import ProductCard from "@/app/components/ProductCard";
import Bredcrumbs from "@/app/components/Bredcrumbs";
import Image from "next/image";
const StoreContent = ({ products }) => {
  return (
    <div className="container">
      <aside className="filters__container">
        <form className="product__search">
          <input type="text" placeholder="Search" />
          <button type="submit">
            <FaChevronRight />
          </button>
        </form>
        <div className="product__categories">
          <h3>Categories</h3>
          <ul>
            <li>
              <span>Accessories</span>
              <span>(7)</span>
            </li>
            <li>
              <span>Men</span>
              <span>(14)</span>
            </li>
            <li>
              <span>Women</span>
              <span>(17)</span>
            </li>
          </ul>
        </div>
        <div className="bestSeller__container">
          <h3>Best Sellers</h3>
          <ul>
            <li className="bestSeller__entry">
              <div className="bestSeller__entry__image">
                <Image src={avatarImg} alt="shoe" />
              </div>
              <div className="bestSeller__enrty__info">
                <h4>shoes</h4>
                <span>$100</span>
              </div>
            </li>
            <div className="divider"></div>
            <li className="bestSeller__entry">
              <div className="bestSeller__entry__image">
                <Image src={avatarImg} alt="shoe" />
              </div>
              <div className="bestSeller__enrty__info">
                <h4>shoes</h4>
                <span>$100</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <main>
        <Bredcrumbs path="store" />
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
          {/* {products.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })} */}
          {/* <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard /> */}
        </div>
        <div className="pagination">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>
            <FaArrowRight />
          </button>
        </div>
      </main>
    </div>
  );
};

export default StoreContent;
