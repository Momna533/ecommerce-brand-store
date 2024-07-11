import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Pagination = ({ currentPage, handlePageChange, totalPages, pages }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button
          onClick={() => {
            scrollToTop();
            handlePageChange(currentPage - 1);
          }}
        >
          <FaArrowLeft />
        </button>
      )}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => {
            scrollToTop();
            handlePageChange(page);
          }}
          style={{
            backgroundColor: currentPage === page ? "black" : "white",
            color: currentPage === page ? "white" : "black",
          }}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          onClick={() => {
            scrollToTop();
            handlePageChange(currentPage - 1);
          }}
        >
          <FaArrowRight />
        </button>
      )}
    </div>
  );
};

export default Pagination;
