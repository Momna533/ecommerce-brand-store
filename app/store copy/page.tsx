"use client";

import { FC, useState } from "react";
import Header from "../components/Header";
import StoreContent from "./components/storeContent";

const Page: FC = () => {
  const [products, setProducts] = useState([]);
  return (
    <>
      <Header />
      <StoreContent products={products} />
    </>
  );
};

export default Page;
