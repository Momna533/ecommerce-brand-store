"use client";

import { FaCartShopping } from "react-icons/fa6";
import shirt from "../assets/sports-shoe1-300x300.jpg";
import PrimaryBtn from "../../components/PrimaryBtn";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useGlobalContext } from "@/context/Context";
import Image from "next/image";

const Page = () => {
  const { cartItems } = useGlobalContext();

  return (
    <>
      <Header />
      <div className="cart container">
        <div className="cart__content w-full">
          <h1>Cart</h1>
          {cartItems.length > 0 ? (
            <table className="cart__table">
              <thead className="cart__table__head">
                <tr>
                  <td>Product</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Subtotal</td>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => {
                  const { id, title, img, price, amount } = item;
                  return (
                    <tr key={id}>
                      <td>{title}</td>
                      <td>{price}</td>
                      <td>{amount}</td>
                      <td>
                        <div className="cart__item__img">
                          <Image src={img} alt="cart__item__image" />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="pt-24 pb-24">
              <h3>Cart is currently empty</h3>
              <PrimaryBtn
                varient="link"
                to="/store"
                title="continue shopping"
              />
            </div>
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
      <Footer />
    </>
  );
};

export default Page;
