"use client";

import React, { useMemo } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAtom } from "jotai";
import { productsAtom } from "@/atoms";

const page = () => {
  const pathname = usePathname();
  const pathId = pathname.split("/").pop();

  const [products] = useAtom(productsAtom);

  const product = useMemo(() => {
    return products.find((item) => item.id == pathId);
  }, [products, pathId]);

  const { id, title, img, price, category } = product;

  // const productIds = products.map((product) => product.id);
  // const productId = productIds.filter((item) => item.id === id);
  // console.log(productId);

  return (
    <>
      <Header />
      <div className="">
        <div className="container single__product__container">
          <div className="flex flex-1">
            <Image
              src={img}
              className="object-cover w-full h-full"
              alt="single product image"
            />
          </div>
          <div className="flex flex-col flex-1 px-2">
            <p className="mb-4">Home/Men/{title}</p>
            <h4 className="mb-4 capitalize">{category}</h4>
            <h1 className="text-3xl font-normal mb-4 capitalize">{title}</h1>
            <div className="mb-4 flex items-center gap-2">
              <h2 className="m-0 text-xl font-bold">{price}</h2>free shipping
            </div>
            <p className="mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
              fugit mollitia! Repellat quos voluptates, voluptas nihil beatae
              fugiat tempore non in consectetur assumenda aspernatur dolores
              molestias quod, doloribus a ex?
            </p>
            <div className="divide-y">
              <div className="py-2">colors</div>
              <div className="flex items-center gap-4 py-4">
                <div>amount</div>
                <button className="primary__btn min-w-60 text-xs font-semibold p-0">
                  add to cart
                </button>
              </div>
              <div className="py-2">category:{category}</div>
            </div>
          </div>
        </div>
      </div>
      ;
      <Footer />
    </>
  );
};

export default page;
