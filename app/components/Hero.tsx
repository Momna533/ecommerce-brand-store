import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__banner">
          <h1>Raining Offers For Hot Summer!</h1>
          <h3>25% Off On All Products</h3>
          <div className="cta__btns">
            <button className="primary__cta__btn primary__btn">Shop Now</button>
            <button className="secondary__cta__btn primary__btn">
              Fnd More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
