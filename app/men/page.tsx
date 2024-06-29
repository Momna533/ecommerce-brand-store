"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import FiltersContainer from "@/app/components/FiltersContainer";
import BreadCrumbs from "@/app/components/BreadCrumbs";
import ProductCard from "@/app/components/ProductCard";
import Pagination from "@/app/components/Pagination";
import { useAtom } from "jotai";
import { productsAtom } from "@/atoms";

const page = () => {
  const [products, setProducts] = useAtom(productsAtom);
  const menProducts = products.filter((product) => product.category === "men");
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
            {menProducts.map((product) => {
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
