"use client";

import { useAtom } from "jotai";
import { productsAtom } from "@/atoms";
import usePagination from "@/hooks/usePagination";
import CategoriesLayout from "@/components/CategoriesLayout";
import { usePathname } from "next/navigation";
import React from "react";

const page = () => {
  const pathname = usePathname();
  const path = pathname.split("/");
  const [products] = useAtom(productsAtom);
  const {
    currentPage,
    currentItems,
    firstItem,
    lastItem,
    totalItems,
    handlePageChange,
    totalPages,
    pages,
  } = usePagination(products, 10);
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
