"use client";

import React from "react";
import { InfinitySpin } from "react-loader-spinner";

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
      <InfinitySpin
        visible={true}
        width="200"
        color="#0084d6"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default loading;
