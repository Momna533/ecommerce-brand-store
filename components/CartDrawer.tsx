"use client";

import { FC } from "react";
import PrimaryBtn from "./PrimaryBtn";
import { CgClose } from "react-icons/cg";
import Image from "next/image";
import { useGlobalContext } from "@/context/Context";

const CartDrawer: FC = () => {
  const { cartDrawerOpen, setCartDrawerOpen, cartItems, handleRemoveFromCart } =
    useGlobalContext();

  return (
    <div className={`cart__drawer__overlay ${cartDrawerOpen ? "active" : ""}`}>
      <div className={`cart__drawer ${cartDrawerOpen ? "active" : ""}`}>
        <div className="cart__drawer__top flex flex-col">
          <div className="cart__drawer__header">
            <h4>Shopping cart</h4>
            <button onClick={() => setCartDrawerOpen(false)}>
              <CgClose />
            </button>
          </div>
          <div className="divider"></div>
          <div className="cart__drawer__content overflow-auto">
            {cartItems.length > 0 ? (
              cartItems.map((item) => {
                const { id, title, img, price } = item;
                return (
                  <>
                    <div className="cart__drawer__content__entry" key={id}>
                      <div className="cart__drawer__content__entry__left">
                        <div className="cart__drawer__content__entry__img">
                          <Image src={img} alt={title} />
                        </div>
                        <div className="cart__drawer__content__entry__info">
                          <h5>{title}</h5>
                          <span>
                            <div className="amount">0</div>*
                            <div className="price">$999</div>
                          </span>
                        </div>
                      </div>
                      <div className="cart__drawer__content__entry__right">
                        <button onClick={() => handleRemoveFromCart(id)}>
                          <CgClose />
                        </button>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <>
                <div className="flex items-center justify-center h-full w-full mt-20">
                  <h5>Nothing in cart yet</h5>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="cart__drawer__footer">
          <div className="divider"></div>
          <div className="cart__drawer__subtotal">
            <h4>Subtotal</h4>
            <div className="cart__total">$150.00</div>
          </div>
          <div className="divider"></div>
          <div className="cart__drawer__btns">
            <PrimaryBtn
              title="view cart"
              varient="link"
              to="/cart"
              onClick={() => setCartDrawerOpen(false)}
            />
            <PrimaryBtn
              title="checkout"
              onClick={() => setCartDrawerOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
