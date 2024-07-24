"use client";

import { FC } from "react";
import PrimaryBtn from "./PrimaryBtn";
import { CgClose } from "react-icons/cg";
import Image from "next/image";
import { useGlobalContext } from "@/context/Context";
import Link from "next/link";

const CartDrawer: FC = () => {
  const {
    cartDrawerOpen,
    setCartDrawerOpen,
    cartItems,
    cartTotal,
    handleRemoveFromCart,
  } = useGlobalContext();

  return (
    <div
      className={`bg-[#00000080] fixed top-0 right-0 bottom-0 left-0 h-[100vh] flex items-start justify-end transition-opacity z-50 ${
        cartDrawerOpen ? "flex opacity-1 visible" : "opacity-0 hidden"
      }`}
      onClick={() => setCartDrawerOpen(false)}
    >
      <div
        className={`bg-white w-[450px] h-full relative flex flex-col transition-all z-50 ${
          cartDrawerOpen ? "right-0" : "right-[-450px]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute w-full flex items-center justify-between p-4">
          <h5 className="text-[#333] capitalize font-bold">Shopping cart</h5>
          <button
            onClick={() => setCartDrawerOpen(false)}
            className="p-0 text-xl"
          >
            <CgClose />
          </button>
        </div>
        <div className="divider mt-14"></div>
        <div className="h-full flex flex-col">
          <div className="flex flex-col gap-[0.75em] p-[0.75em] overflow-auto flex-1">
            {cartItems.length > 0 ? (
              cartItems.map((item) => {
                const { id, title, img, price, amount } = item;
                return (
                  <>
                    <div
                      className="flex items-center gap-[0.5em] justify-between w-full"
                      key={id}
                    >
                      <Link
                        className="flex items-center gap-[0.5em]"
                        href={`${id}`}
                        onClick={() => setCartDrawerOpen(false)}
                      >
                        <div>
                          <Image
                            src={img}
                            alt={title}
                            className="w-[70px] h-[70px] object-cover"
                          />
                        </div>
                        <div>
                          <h5 className="text-[#333] capitalize font-bold">
                            {title}
                          </h5>
                          <span className="flex items-center gap-[0.25em] text-black">
                            <div>{amount}</div>*<div>{price}</div>
                          </span>
                        </div>
                      </Link>
                      <div>
                        <button
                          onClick={() => handleRemoveFromCart(id)}
                          className="border border-gray-400 bg-transparent cursor-pointer transition-all rounded-full p-[0.25em] flex items-center justify-center text-gray-400 hover:border-black hover:text-black"
                        >
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
                  <h5 className="text-[#333] font-normal">
                    Nothing in cart yet ...
                  </h5>
                </div>
              </>
            )}
          </div>
          <div>
            <div className="divider"></div>
            <div className="flex items-center justify-between p-4">
              <h5>Subtotal</h5>
              <div className="cart__total">${cartTotal}</div>
            </div>
            <div className="divider"></div>
            <div className="flex flex-col items-center justify-between gap-[0.5em] p-4">
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
