import Link from "next/link";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__banner">
          <h1>Raining Offers For Hot Summer!</h1>
          <h3>25% Off On All Products</h3>
          <div className="cta__btns">
            <button className="primary__cta__btn primary__btn">
              <Link href="/store">Shop Now</Link>
            </button>
            <button className="secondary__cta__btn primary__btn">
              <Link href="/contact">Find More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
