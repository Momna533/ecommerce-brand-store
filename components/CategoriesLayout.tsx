"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FiltersContainer from "@/components/FiltersContainer";
import BreadCrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/Pagination";
import SingleProductCard from "./SingleProductCard";

const CategoriesLayout = ({
  breadcrumbsPath,
  currentPage,
  currentItems,
  firstItem,
  lastItem,
  totalItems,
  handlePageChange,
  totalPages,
  pages,
}) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="container">
        <FiltersContainer />
        <main>
          <BreadCrumbs path={breadcrumbsPath} />
          <div className="row">
            <div className="search__results">
              Showing {firstItem}-{lastItem} of {totalItems} results
            </div>
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
              return <SingleProductCard key={product.id} {...product} />;
            })}
          </div>
          <Pagination
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            totalPages={totalPages}
            pages={pages}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CategoriesLayout;
