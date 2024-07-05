import { productsAtom } from "@/atoms";
import { useAtom } from "jotai";
import React, { useState } from "react";

const usePagination = ({ category, itemsPerPage = 10 }) => {
  const [products] = useAtom(productsAtom);
  const [currentPage, setcurrentPage] = useState(1);
  const totalPages = Math.ceil(currentPage / itemsPerPage);
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  console.log(filteredProducts);

  const currentItems = [];
  return { currentItems };
};

export default usePagination;
