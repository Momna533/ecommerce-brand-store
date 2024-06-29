"use client";

import Link from "next/link";
import logo from "@/app/images/logo@2x-free-img.png";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import MobileDrawer from "./MobileDrawer";
import { useState } from "react";
import Image from "next/image";
import CartDrawer from "@/app/components/CartDrawer";
const Header = () => {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  return (
    <>
      <div className="mobile__header">
        <div className="mobile__header__content">
          <Link className="logo" href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <div className="mobile__header__primary__section">
            <button
              className="mobile__header__nav__link mobile__header__cart__link"
              onClick={() => {
                console.log("a");
                setCartDrawerOpen(true);
              }}
            >
              <div className="cart__amount">$0.00</div>
              <FaCartShopping className="cart__icon" />
            </button>
            <button
              className="menu__btn"
              onClick={() => {
                console.log("b");
                setMobileDrawerOpen(true);
              }}
            >
              <FaHamburger className="menu__icon" />
            </button>
          </div>
        </div>
      </div>
      {mobileDrawerOpen && (
        <MobileDrawer
          mobileDrawerOpen={mobileDrawerOpen}
          setMobileDrawerOpen={setMobileDrawerOpen}
        />
      )}
      {cartDrawerOpen && (
        <CartDrawer
          cartDrawerOpen={cartDrawerOpen}
          setCartDrawerOpen={setCartDrawerOpen}
        />
      )}
    </>
  );
};

export default Header;
