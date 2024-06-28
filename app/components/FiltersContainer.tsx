import { FaChevronRight } from "react-icons/fa6";

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
              <img src={avatarImg} alt="shoe" />
            </div>
            <div className="bestSeller__enrty__info">
              <h4>shoes</h4>
              <span>$100</span>
            </div>
          </li>
          <div className="divider"></div>
          <li className="bestSeller__entry">
            <div className="bestSeller__entry__image">
              <img src={avatarImg} alt="shoe" />
            </div>
            <div className="bestSeller__enrty__info">
              <h4>shoes</h4>
              <span>$100</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default FiltersContainer;
