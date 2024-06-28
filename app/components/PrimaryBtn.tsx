import Link from "next/link";

const PrimaryBtn = ({ title, varient, to, onClick }) => {
  if (varient === "link") {
    return (
      <Link
        className="primary__btn primary__btn__link"
        href={to}
        onClick={onClick}
      >
        {title}
      </Link>
    );
  }
  return (
    <button className="primary__btn" onClick={onClick}>
      {title}
    </button>
  );
};

export default PrimaryBtn;
