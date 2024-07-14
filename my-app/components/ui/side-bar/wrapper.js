import React from "react";

const Wrapper = ({ children, showSidebar }) => {
  return (
    <div
      className={`sticky h-screen bg-green-800 ${showSidebar ? "w-52" : "w-16"} transition-all duration-300 ease-in-out`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
