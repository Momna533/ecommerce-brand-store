import { useGlobalContext } from "@/context/Context";
import Image from "next/image";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

const FeaturedProduct = ({ id, img, title, price, category }) => {
  const { handleAddToCart } = useGlobalContext();
  return (
    <div className="featured__products__card">
      <Link href={`/${id}`}>
        <div className="featured__products__card__image">
          <Image src={img} alt="product" />
        </div>
      </Link>
      <div className="featured__products__card__content">
        <Link href={`/${id}`}>
          <h4>{title}</h4>
        </Link>
        <div className="category">{category}</div>
        <h5 className="price">{price}</h5>
        <div className="variations"></div>
        <div className="rating"></div>
        <div className="featured__products__card__content__cart">
          <button
            className="featured__products__card__content__cart__btn"
            onClick={() => handleAddToCart(id)}
          >
            <FaCartShopping />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
