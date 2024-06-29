import { CgClose } from "react-icons/cg";
import { FaUser } from "react-icons/fa6";
import Link from "next/link";
import { useAtom } from "jotai";
import { mobileDrawerAtom } from "@/atoms";

const MobileDrawer = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useAtom(mobileDrawerAtom);

  return (
    <div className={`mobile__drawer ${mobileDrawerOpen ? "active" : ""}`}>
      <button
        onClick={() => setMobileDrawerOpen(false)}
        className="close__menu__btn"
      >
        <CgClose />
      </button>
      <div className="mobile__drawer__content">
        <div className="mobile__drawer__links">
          <Link
            className="nav__link user__link"
            href="cart"
            onClick={() => setMobileDrawerOpen(false)}
          >
            <FaUser />
          </Link>
          <Link
            className="nav__link"
            href="/store"
            onClick={() => setMobileDrawerOpen(false)}
          >
            Everything
          </Link>
          <Link
            className="nav__link"
            href="/women"
            onClick={() => setMobileDrawerOpen(false)}
          >
            Women
          </Link>
          <Link
            className="nav__link"
            href="/men"
            onClick={() => setMobileDrawerOpen(false)}
          >
            Men
          </Link>
          <Link
            className="nav__link"
            href="/accessories"
            onClick={() => setMobileDrawerOpen(false)}
          >
            Accessories
          </Link>
          <Link
            className="nav__link"
            href="/about"
            onClick={() => setMobileDrawerOpen(false)}
          >
            About
          </Link>
          <Link
            className="nav__link"
            href="/contact"
            onClick={() => setMobileDrawerOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
