"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FiltersContainer from "@/components/FiltersContainer";
import BreadCrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/Pagination";
import { useAtom } from "jotai";
import { productsAtom } from "@/atoms";
import { useState } from "react";

const page = () => {
  const [products] = useAtom(productsAtom);
  const [currentPage, setcurrentPage] = useState(1);
  const womenProducts = products.filter(
    (product) => product.category === "women"
  );
  const totalItems = womenProducts.length;
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, item) => item + 1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const firstItemIndex = indexOfLastItem - itemsPerPage;
  const currentItems = womenProducts.slice(firstItemIndex, indexOfLastItem);
  const firstItem = firstItemIndex + 1;
  const lastItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePageChange = (page) => {
    setcurrentPage(page);
  };
  return (
    <>
      <Header />
      <div className="container">
        <FiltersContainer />
        <main>
          <BreadCrumbs path="women" />
          <div className="row">
            Showing {firstItem}-{lastItem} of {totalItems} results
            <form>
              <select name="" id="" className="filters__select">
                <option value="">default</option>
                <option value="">popularity</option>
                <option value="">default</option>
              </select>
            </form>
          </div>
          <div className="products">
            {currentItems.map((product) => {
              return <ProductCard key={product.id} {...product} />;
            })}
          </div>
          <Pagination
            currentPage={currentPage}
            setcurrentPage={setcurrentPage}
            handlePageChange={handlePageChange}
            totalPages={totalPages}
            pages={pages}
          />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default page;
