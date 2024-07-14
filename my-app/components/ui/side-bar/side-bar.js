"use client";

import React, { useState, useEffect } from "react";
import Wrapper from "./wrapper";
import { BsBoxFill } from "react-icons/bs";
import { LuBoxes } from "react-icons/lu";
import { usePathname, useSearchParams } from "next/navigation";

import Link from "next/link";
const SideBarContainer = () => {
  const [showSidebar, setShowSideBar] = useState(false);
  const sideBarLink = [
    {
      path: "/inventory",
      name: "Inventory",
    },
  ];
  const pathname = usePathname();

  return (
    <Wrapper showSidebar={showSidebar}>
      <div className="flex justify-center gap-x-2 border-b border-amber-600 pb-3 pt-3">
        <LuBoxes
          size={"1.3rem"}
          className="text-white"
          onClick={() => {
            setShowSideBar(!showSidebar);
          }}
        />

        {showSidebar && (
          <span className={`font-bold text-white`}>UDM INVENTORY</span>
        )}
      </div>
      <main
        className={`relative top-52 flex flex-col ${!showSidebar && "items-center"} gap-5`}
      >
        {sideBarLink.map((link) => {
          return (
            <div
              key={link.name}
              className={`text-xl ${pathname === link.path ? "text-white" : "text-gray-300"}`}
            >
              <Link
                href={link.path}
                className={`relative flex items-center gap-x-2 ${showSidebar && "left-4"}`}
              >
                <BsBoxFill size={"1.5rem"} />
                {showSidebar && <span>{link.name}</span>}
              </Link>
            </div>
          );
        })}
      </main>
    </Wrapper>
  );
};

export default SideBarContainer;
