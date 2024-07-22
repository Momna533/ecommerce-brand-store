import { FC } from "react";
import Link from "next/link";
import { FaCartPlus, FaCartShopping } from "react-icons/fa6";
import Image from "next/image";
import { useGlobalContext } from "@/context/Context";
const ProductCard: FC = ({ id, title, img, category, price }) => {
  const { handleAddToCart, inCart, setInCart } = useGlobalContext();
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
        <div className="category">{category}</div>
        <h5 className="price">{price}</h5>
        <div className="variations"></div>
        <div className="rating"></div>
        <div className="featured__products__card__content__cart">
          <button
            className="featured__products__card__content__cart__btn"
            onClick={() => {
              handleAddToCart(id);
            }}
          >
            {inCart ? <FaCartPlus /> : <FaCartShopping />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
