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
            <button className="bg-[#f5f7f9] text-black uppercase font-semibold hover:bg-black hover:text-white py-3 px-6 transition-all">
              <Link href="/store" className="text-sm">
                Shop Now
              </Link>
            </button>
            <button className="bg-transparent border-[#f5f7f9] text-[#f5f7f9] uppercase font-semibold hover:bg-[#f5f7f9] hover:text-black py-3 px-6 transition-all">
              <Link href="/contact" className="text-sm">
                Find More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
