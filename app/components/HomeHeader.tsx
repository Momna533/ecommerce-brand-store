"use client";

import { FC } from "react";
import Link from "next/link";
import logo from "@/app/images/logo1-free-img.png";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import MobileHeader from "./MobileHeader";
import Image from "next/image";
import CartDrawer from "./CartDrawer";
import { cartDrawerAtom, mobileDrawerAtom } from "@/atoms";
import { useAtom } from "jotai";

const HomeHeader: FC = () => {
  const [cartDrawerOpen, setCartDrawerOpen] = useAtom(cartDrawerAtom);
  return (
    <>
      <div className="home__header">
        <div className="home__header__content">
          <div className="home__desktop__header">
            <div className="home__header__primary__section">
              <Link className="logo" href="/">
                <Image src={logo} alt="logo" />
              </Link>
              <div className="home__nav__links">
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
            <div className="home__header__primary__section">
              <div className="home__nav__menu">
                <Link className="nav__link" href="/about">
                  About
                </Link>
                <Link className="nav__link" href="/contact">
                  Contact Us
                </Link>
              </div>
              <button
                className="nav__link home__cart__link"
                onClick={() => {
                  setCartDrawerOpen(true);
                }}
              >
                <div className="cart__amount">$0.00</div>
                <FaCartShopping className="cart__icon" />
              </button>
              <Link className="nav__link home__user__link" href="/">
                <FaUser className="user__icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MobileHeader />
      {cartDrawerOpen && <CartDrawer />}
    </>
  );
};

export default HomeHeader;
