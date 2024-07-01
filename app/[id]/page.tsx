import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import placeHolderImage from "@/app/images/product-accessory2-600x600.jpg";

const page = () => {
  return (
    <>
      <Header />
      <div className="">
        <div className="container">
          <div className="flex flex-1 px-2 bg-blue-900">
            <Image src={placeHolderImage} className="object-cover" />
          </div>
          <div className="flex flex-1 px-2 bg-yellow-900">right</div>
        </div>
      </div>
      ;
      <Footer />
    </>
  );
};

export default page;
