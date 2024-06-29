"use client";

import React from "react";
import { Rings } from "react-loader-spinner";

const loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Rings
        visible={true}
        height="120"
        width="120"
        color="#0084d6"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default loading;
