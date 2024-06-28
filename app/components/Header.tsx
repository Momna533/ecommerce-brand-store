"use client";

import { FC, useState } from "react";
import Link from "next/link";
import logo from "../images/logo@2x-free-img.png";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import MobileHeader from "./MobileHeader";
import Image from "next/image";
import MobileDrawer from "./MobileDrawer";
import CartDrawer from "./CartDrawer";

const Header: FC = () => {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <>
      <div className="header">
        <div className="header__content">
          <div className="desktop__header">
            <div className="header__primary__section">
              <Link className="logo" href="/">
                <Image src={logo} alt="logo" />
              </Link>
              <div className="nav__links">
                <Link className="nav__link" href="/store">
                  Everything
                </Link>
                <Link className="nav__link" href="/women">
                  Women
                </Link>
                <Link className="nav__link" href="/men">
                  Men
                </Link>
                <Link className="nav__link" href="/accessories">
                  Accessories
                </Link>
              </div>
            </div>
            <div className="header__primary__section">
              <div className="nav__menu">
                <Link className="nav__link" href="/about">
                  About
                </Link>
                <Link className="nav__link" href="/contact">
                  Contact Us
                </Link>
              </div>
              <button
                className="nav__link cart__link"
                onClick={() => setCartDrawerOpen(true)}
              >
                <div className="cart__amount">$0.00</div>
                <FaCartShopping />
              </button>
              <Link className="nav__link user__link" href="cart">
                <FaUser />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MobileHeader />
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
