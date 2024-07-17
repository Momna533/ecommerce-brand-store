"use client";

import Link from "next/link";
import routeLogo from "@/images/logo@2x-free-img.png";
import homeLogo from "@/images/logo1-free-img.png";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import MobileHeader from "./MobileHeader";
import Image from "next/image";
import MobileDrawer from "./MobileDrawer";
import CartDrawer from "./CartDrawer";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useGlobalContext } from "@/context/Context";

const Header = () => {
  const {
    cartDrawerOpen,
    setCartDrawerOpen,
    isHomePage,
    setIsHomePage,
    isRoutePage,
    setIsRoutePage,
    mobileDrawerOpen,
  } = useGlobalContext();

  const path = usePathname();
  useEffect(() => {
    if (path === "/" || path === "/about" || path === "/contact") {
      setIsHomePage(true);
      setIsRoutePage(false);
    } else if (
      path === "/store" ||
      path === "/women" ||
      path === "/men" ||
      path === "/accessories" ||
      path === "/cart"
    ) {
      setIsHomePage(false);
      setIsRoutePage(true);
    }
  }, [path, setIsHomePage, setIsRoutePage]);
  return (
    <>
      <div
        className={isHomePage ? "home__header" : isRoutePage ? "header" : ""}
      >
        <div
          className={
            isHomePage
              ? "home__header__content"
              : isRoutePage
              ? "header__content"
              : ""
          }
        >
          <div
            className={
              isHomePage
                ? "home__desktop__header"
                : isRoutePage
                ? "desktop__header"
                : ""
            }
          >
            <div
              className={
                isHomePage
                  ? "home__header__primary__section"
                  : isRoutePage
                  ? "header__primary__section"
                  : ""
              }
            >
              <Link className="logo" href="/">
                <Image
                  src={isHomePage ? homeLogo : isRoutePage ? routeLogo : ""}
                  alt="logo"
                />
              </Link>
              <div
                className={
                  isHomePage
                    ? "home__nav__links"
                    : isRoutePage
                    ? "nav__links"
                    : ""
                }
              >
                {isHomePage ? (
                  <HomeNavLinks />
                ) : isRoutePage ? (
                  <RouteNavLinks />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div
              className={
                isHomePage
                  ? "home__header__primary__section"
                  : isRoutePage
                  ? "header__primary__section"
                  : ""
              }
            >
              <div
                className={
                  isHomePage
                    ? "home__nav__menu"
                    : isRoutePage
                    ? "nav__menu"
                    : ""
                }
              >
                {isHomePage ? (
                  <>
                    <Link href="/about" className="nav__link">
                      About
                    </Link>
                    <Link href="/contact" className="nav__link">
                      Contact Us
                    </Link>
                  </>
                ) : isRoutePage ? (
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
                  isHomePage
                    ? "home__cart__link"
                    : isRoutePage
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
