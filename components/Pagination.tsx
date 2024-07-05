import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Pagination = ({
  currentPage,
  setcurrentPage,
  handlePageChange,
  totalPages,
  pages,
}) => {
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button onClick={() => handlePageChange(currentPage - 1)}>
          <FaArrowLeft />
        </button>
      )}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          style={{
            backgroundColor: currentPage === page ? "black" : "white",
            color: currentPage === page ? "white" : "black",
          }}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button onClick={() => handlePageChange(currentPage - 1)}>
          <FaArrowRight />
        </button>
      )}
    </div>
  );
};

export default Pagination;
