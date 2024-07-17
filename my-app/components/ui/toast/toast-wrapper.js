"use client";
import React from "react";
import Warning_Toast from "./warning";

const toastWrapper = ({ isError }) => {
  return (
    <div>{isError && <Warning_Toast message={`${isError.message}`} />}</div>
  );
};

export default toastWrapper;
