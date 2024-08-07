import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";
const BreadCrumbs = ({ path }) => {
  return (
    <div className="breadcrumbs">
      <Link href="/">Home</Link> <FaChevronRight /> <span>{path}</span>
    </div>
  );
};

export default BreadCrumbs;
