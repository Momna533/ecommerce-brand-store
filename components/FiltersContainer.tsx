import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import avatarImg from "@/images/product-accessory1.jpg";

const FiltersContainer = () => {
  return (
    <aside className="filters__container">
      <form className="product__search">
        <input type="text" placeholder="Search" />
        <button type="submit">
          <FaChevronRight />
        </button>
      </form>
      <div className="product__categories">
        <h4>Categories</h4>
        <ul>
          <li>
            <Link href={"accessories"}>
              <span>Accessories</span>
              <span>(7)</span>
            </Link>
          </li>
          <li>
            <Link href={"men"}>
              <span>Men</span>
              <span>(14)</span>
            </Link>
          </li>
          <li>
            <Link href={"women"}>
              <span>Women</span>
              <span>(17)</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bestSeller__container">
        <h4>Best Sellers</h4>
        <ul>
          <li className="bestSeller__entry">
            <div className="bestSeller__entry__image">
              <Image src={avatarImg} alt="shoe" />
            </div>
            <div className="bestSeller__enrty__info">
              <h5>shoes</h5>
              <span>$100</span>
            </div>
          </li>
          <div className="divider"></div>
          <li className="bestSeller__entry">
            <div className="bestSeller__entry__image">
              <Image src={avatarImg} alt="shoe" />
            </div>
            <div className="bestSeller__enrty__info">
              <h5>shoes</h5>
              <span>$100</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default FiltersContainer;
