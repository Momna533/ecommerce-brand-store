import { useState } from "react";

const usePagination = (category, itemsPerPage = 10) => {
  const [currentPage, setcurrentPage] = useState(1);
  const totalItems = category.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, item) => item + 1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const firstItemIndex = indexOfLastItem - itemsPerPage;
  const currentItems = category.slice(firstItemIndex, indexOfLastItem);
  const firstItem = firstItemIndex + 1;
  const lastItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  return {
    currentPage,
    currentItems,
    firstItem,
    lastItem,
    totalItems,
    handlePageChange,
    totalPages,
    pages,
  };
};

export default usePagination;
