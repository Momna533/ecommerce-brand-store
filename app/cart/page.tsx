"use client";

import { FaCartShopping } from "react-icons/fa6";
import shirt from "../assets/sports-shoe1-300x300.jpg";
import PrimaryBtn from "../components/PrimaryBtn";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

const Page = () => {
  const [cart, setCart] = useState([]);
  return (
    <div className="cart">
      <div className="cart__content">
        <h1>Cart</h1>
        {/* <div className="cart__item__header"></div> */}
        {/* <div className="cart__item__heading">
            <button></button>
            <h4>Product</h4>
            <h4>price</h4>
            <h4>quantity</h4>
            <h4>subtotal</h4>
          </div> */}
        {cart.length > 0 ? (
          cart.map((item) => {
            const { id, title, img, price } = item;
            return (
              <div className="cart__item">
                <button onClick={() => removeFromCart(id)}>
                  <CgClose />
                </button>
                <div className="cart__item__img">
                  <img src={img} alt={title} />
                </div>
                <h4>{title}</h4>
                <p>{price}</p>
                <p>amount</p>
                <p>subtotal</p>
              </div>
            );
          })
        ) : (
          <>
            <h3>Cart is currently empty</h3>
            <PrimaryBtn varient="link" to="/store" title="continue shopping" />
          </>
        )}

        {/* <div className="cart__item">
            <div className="cart__item__image">
              <img src={shirt} alt="shirt" />
            </div>
            <div className="cart__item__info">
              <h4>Product Name</h4>
              <h4>Product Category</h4>
              <h4>$100</h4>
              <div className="variations"></div>
              <div className="rating"></div>
              <div className="featured__products__card__content__cart">
                <button className="featured__products__card__content__cart__btn">
                  <FaCartShopping />
                </button>
              </div>
            </div>
          </div> */}
        {/* <div className="cart__collatoral">
          <div className="cart__collatoral__content">
            <h4>Cart Totals</h4>
            <div className="cart__collatoral__subtotal">
              <h4>Subtotal</h4>
              <h4>$100</h4>
            </div>
            <div className="cart__collatoral__total">
              <h4>Total</h4>
              <h4>$100</h4>
            </div>
            <PrimaryBtn title="checkout" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Page;
