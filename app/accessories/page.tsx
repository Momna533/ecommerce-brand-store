import { FaArrowRight, FaChevronRight } from "react-icons/fa6";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import Bredcrumbs from "@/app/components/Bredcrumbs";
import ProductCard from "@/app/components/ProductCard";
import avatarImg from "@/app/images/banner-03.jpg";

const page = () => {
  return (
    <>
      <Header />
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
                <span>Men</span>
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
          <Bredcrumbs path="men" />
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
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
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
      <Footer />
    </>
  );
};

export default page;
