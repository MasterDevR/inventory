import React from "react";
import useStore from "@/components/store/store";
const Wrapper = ({ children }) => {
  const showSidebar = useStore((state) => state.showSidebar);

  return (
    <aside
      className={`sticky bottom-0 top-16 lg:top-0 ${showSidebar ? "w-2/6 opacity-100 lg:w-2/12" : "w-0 opacity-0 lg:w-20"} transition-all duration-700 ease-in-out lg:block lg:opacity-100`}
    >
      <div
        className={`z-50 flex h-[90dvh] flex-col gap-y-52 bg-green-800 p-5 lg:relative lg:h-[100dvh] lg:w-full`}
      >
        {children}
      </div>
    </aside>
  );
};

export default Wrapper;
