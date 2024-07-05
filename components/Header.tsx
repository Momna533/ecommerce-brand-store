"use client";

import { FC } from "react";
import Link from "next/link";
import logo from "../images/logo@2x-free-img.png";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import MobileHeader from "./MobileHeader";
import Image from "next/image";
import MobileDrawer from "./MobileDrawer";
import CartDrawer from "./CartDrawer";
import { cartDrawerAtom, mobileDrawerAtom } from "@/atoms";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);
  return (
    <Link href={href}>
      <div className={`${isActive ? "text-blue-600" : "text-gray-700"}`}>
        {children}
      </div>
    </Link>
  );
};

const Header: FC = () => {
  const [cartDrawerOpen, setCartDrawerOpen] = useAtom(cartDrawerAtom);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useAtom(mobileDrawerAtom);

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
                <NavLink href="/store">Everything</NavLink>
                <NavLink href="/women">Women</NavLink>
                <NavLink href="/men">Men</NavLink>
                <NavLink href="/accessories">Accessories</NavLink>
              </div>
            </div>
            <div className="header__primary__section">
              <div className="nav__menu">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/contact">Contact Us</NavLink>
              </div>
              <button
                className="nav__link header__cart__link"
                onClick={() => setCartDrawerOpen(true)}
              >
                <div className="cart__amount">$0.00</div>
                <FaCartShopping className="cart__icon" />
              </button>
              <Link className="nav__link user__link" href="cart">
                <FaUser className="user__icon" />
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