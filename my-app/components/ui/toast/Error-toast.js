import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const errorToast = ({ message }) => {
  toast.error(`${message}`, {
    position: "bottom-right",
  });
  return <ToastContainer />;
};

export default errorToast;
