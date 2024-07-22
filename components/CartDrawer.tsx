"use client";

import { FC } from "react";
import PrimaryBtn from "./PrimaryBtn";
import { CgClose } from "react-icons/cg";
import Image from "next/image";
import { useGlobalContext } from "@/context/Context";

const CartDrawer: FC = () => {
  const {
    amount,
    setAmount,
    cartDrawerOpen,
    setCartDrawerOpen,
    cartItems,
    handleRemoveFromCart,
  } = useGlobalContext();

  return (
    <div
      className={`cart__drawer__overlay ${cartDrawerOpen ? "active" : ""}`}
      onClick={() => setCartDrawerOpen(false)}
    >
      <div
        className={`cart__drawer ${cartDrawerOpen ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute w-full flex items-center justify-between p-4">
          <h5 className="m-0">Shopping cart</h5>
          <button
            onClick={() => setCartDrawerOpen(false)}
            className="p-0 text-xl"
          >
            <CgClose />
          </button>
        </div>
        <div className="divider mt-14"></div>
        <div className="h-full flex flex-col">
          <div className="cart__drawer__content overflow-auto flex-1">
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
                            <div className="amount">{amount}</div>*
                            <div className="price">{price}</div>
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
                  <h5 className="font-normal">Nothing in cart yet</h5>
                </div>
              </>
            )}
          </div>
          <div className="cart__drawer__footer">
            <div className="divider"></div>
            <div className="cart__drawer__subtotal">
              <h5>Subtotal</h5>
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
              {cartItems.length > 0 && (
                <PrimaryBtn
                  title="checkout"
                  varient="link"
                  to="/cart"
                  onClick={() => setCartDrawerOpen(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
