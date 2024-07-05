"use client";

import { FC } from "react";
import Link from "next/link";
import logo from "@/images/logo@2x-free-img.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import PrimaryBtn from "./PrimaryBtn";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="above__footer">
          <Link href="/">
            <h2>
              SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
            </h2>
          </Link>
        </div>
        <div className="primary__footer">
          <div className="primary__footer__column">
            <Image src={logo} alt="logo" width={90} height={30} />
            <h4>The best look anytime anywhere.</h4>
          </div>
          <div className="primary__footer__column">
            <div className="primary__footer__column__heading">For her</div>
            <Link href="/">Women jeans</Link>
            <Link href="/">Tops and Skirts</Link>
            <Link href="/">Women Jackets</Link>
            <Link href="/">Heels ans Flats</Link>
            <Link href="/">Women Accessories</Link>
          </div>
          <div className="primary__footer__column">
            <div className="primary__footer__column__heading">For him</div>
            <Link href="/">Men Jeans</Link>
            <Link href="/">Men Shirts</Link>
            <Link href="/">Men Shoes</Link>
            <Link href="/">Men Accessories</Link>
            <Link href="/">Men Jackets</Link>
          </div>
          <div className="primary__footer__column">
            <div className="primary__footer__column__heading">Subscribe</div>
            <form>
              <input type="email" placeholder="Enter your email" />
              <PrimaryBtn
                className=""
                onClick={() => console.log("subscribe")}
                title="Subscribe"
              />
            </form>
          </div>
        </div>
        <div className="below__footer">
          <p>Copyright © 2024 Brandstore. Powered by Brandstore.</p>
          <div className="footer__social__links">
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
