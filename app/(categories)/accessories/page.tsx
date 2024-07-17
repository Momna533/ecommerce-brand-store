"use client";

import usePagination from "@/hooks/usePagination";
import CategoriesLayout from "@/components/CategoriesLayout";
import { usePathname } from "next/navigation";
import React from "react";
import { useGlobalContext } from "@/context/Context";

const page = () => {
  const pathname = usePathname();
  const path = pathname.split("/");
  const { products } = useGlobalContext();
  const accessories = products.filter(
    (product) => product.category === "accessories"
  );

  const {
    currentPage,
    currentItems,
    firstItem,
    lastItem,
    totalItems,
    handlePageChange,
    totalPages,
    pages,
  } = usePagination(accessories, 10);
  return (
    <>
      <CategoriesLayout
        breadcrumbsPath={path}
        currentPage={currentPage}
        currentItems={currentItems}
        firstItem={firstItem}
        lastItem={lastItem}
        totalItems={totalItems}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
        pages={pages}
      />
    </>
  );
};

export default page;
