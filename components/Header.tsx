"use client";

// import { FC } from "react";
import Link from "next/link";
import routeLogo from "@/images/logo@2x-free-img.png";
import homeLogo from "@/images/logo1-free-img.png";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import MobileHeader from "./MobileHeader";
import Image from "next/image";
import MobileDrawer from "./MobileDrawer";
import CartDrawer from "./CartDrawer";
import { cartDrawerAtom, mobileDrawerAtom } from "@/atoms";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";

const Header = () => {
  const [homePage, setHomePage] = useState(true);
  const [routePage, setRoutePage] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useAtom(cartDrawerAtom);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useAtom(mobileDrawerAtom);

  const path = usePathname();
  useEffect(() => {
    if (path === "/" || path === "/about" || path === "/contact") {
      setHomePage(true);
      setRoutePage(false);
    } else if (
      path === "/store" ||
      path === "/women" ||
      path === "/men" ||
      path === "/accessories" ||
      path === "/cart"
    ) {
      setHomePage(false);
      setRoutePage(true);
    }
  }, [path, setHomePage, setRoutePage]);
  return (
    <>
      <div className={homePage ? "home__header" : routePage ? "header" : ""}>
        <div
          className={
            homePage
              ? "home__header__content"
              : routePage
              ? "header__content"
              : ""
          }
        >
          <div
            className={
              homePage
                ? "home__desktop__header"
                : routePage
                ? "desktop__header"
                : ""
            }
          >
            <div
              className={
                homePage
                  ? "home__header__primary__section"
                  : routePage
                  ? "header__primary__section"
                  : ""
              }
            >
              <Link className="logo" href="/">
                <Image
                  src={homePage ? homeLogo : routePage ? routeLogo : ""}
                  alt="logo"
                />
              </Link>
              <div
                className={
                  homePage ? "home__nav__links" : routePage ? "nav__links" : ""
                }
              >
                {homePage ? (
                  <HomeNavLinks />
                ) : routePage ? (
                  <RouteNavLinks />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div
              className={
                homePage
                  ? "home__header__primary__section"
                  : routePage
                  ? "header__primary__section"
                  : ""
              }
            >
              <div
                className={
                  homePage ? "home__nav__menu" : routePage ? "nav__menu" : ""
                }
              >
                {homePage ? (
                  <>
                    <Link href="/about" className="nav__link">
                      About
                    </Link>
                    <Link href="/contact" className="nav__link">
                      Contact Us
                    </Link>
                  </>
                ) : routePage ? (
                  <>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/contact">Contact Us</NavLink>
                  </>
                ) : (
                  ""
                )}
              </div>
              <button
                className={`nav__link ${
                  homePage
                    ? "home__cart__link"
                    : routePage
                    ? "header__cart__link"
                    : ""
                }`}
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
      {mobileDrawerOpen && <MobileDrawer />}
      {cartDrawerOpen && <CartDrawer />}
    </>
  );
};

const HomeNavLinks = () => {
  return (
    <>
      <Link href="/store" className="nav__link">
        Everything
      </Link>
      <Link href="/women" className="nav__link">
        Women
      </Link>
      <Link href="/men" className="nav__link">
        Men
      </Link>
      <Link href="/accessories" className="nav__link">
        Accessories
      </Link>
    </>
  );
};
const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={`${
        isActive ? "text-blue-600 nav__link active" : "text-gray-700 nav__link"
      }`}
    >
      {children}
    </Link>
  );
};
const RouteNavLinks = () => {
  return (
    <>
      <NavLink href="/store">Everything</NavLink>
      <NavLink href="/women">Women</NavLink>
      <NavLink href="/men">Men</NavLink>
      <NavLink href="/accessories">Accessories</NavLink>
    </>
  );
};

export default Header;
