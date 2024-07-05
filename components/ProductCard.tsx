import { FC } from "react";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import Image from "next/image";
const ProductCard: FC = ({ id, title, img, category, price }) => {
  return (
    <div className="featured__products__card products__card">
      <Link href={`/${category}/${id}`}>
        <div className="featured__products__card__image">
          <Image src={img} alt="product" />
        </div>
      </Link>
      <div className="featured__products__card__content">
        <Link href={`/accessories/${id}`}>
          <h4>{title}</h4>
        </Link>
        <p>{category}</p>
        <p>{price}</p>
        <div className="variations"></div>
        <div className="rating"></div>
        <div className="featured__products__card__content__cart">
          <button
            className="featured__products__card__content__cart__btn"
            // onClick={() => addToCart(id)}
          >
            <FaCartShopping />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
