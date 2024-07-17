"use client";

import Link from "next/link";
import logo from "@/images/logo@2x-free-img.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import MobileDrawer from "./MobileDrawer";
import Image from "next/image";
import CartDrawer from "@/components/CartDrawer";
import { useGlobalContext } from "@/context/Context";

const Header = () => {
  const {
    cartDrawerOpen,
    setCartDrawerOpen,
    mobileDrawerOpen,
    setMobileDrawerOpen,
  } = useGlobalContext();

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
              onClick={() => setCartDrawerOpen(true)}
            >
              <div className="cart__amount">$0.00</div>
              <FaCartShopping className="cart__icon" />
            </button>
            <button
              className="menu__btn"
              onClick={() => {
                setMobileDrawerOpen(true);
              }}
            >
              <FaHamburger className="menu__icon" />
            </button>
          </div>
        </div>
      </div>
      {mobileDrawerOpen && <MobileDrawer />}
      {cartDrawerOpen && <CartDrawer />}
    </>
  );
};

export default Header;
