import { FaArrowRight } from "react-icons/fa6";

const Pagination = () => {
  return (
    <div className="pagination">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
