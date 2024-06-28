import { FC } from "react";
import Link from "next/link";
import productImg from "@/app/images/product-accessory2.jpg";
import { FaCartShopping } from "react-icons/fa6";
import Image from "next/image";
const ProductCard: FC = ({ title, img, category, price }) => {
  return (
    <div className="products__card">
      <Link href={`/product/${title}`}>
        <div className="featured__products__card__image">
          <Image src={img} alt={title} />
        </div>
      </Link>
      <div className="featured__products__card__content">
        <Link href={`/product/${title}`}>
          <h4>{title}</h4>
        </Link>
        <p>{category}</p>
        <p>{price}</p>
        <div className="variations"></div>
        <div className="rating"></div>
        <div className="featured__products__card__content__cart">
          <button className="featured__products__card__content__cart__btn">
            <FaCartShopping />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
