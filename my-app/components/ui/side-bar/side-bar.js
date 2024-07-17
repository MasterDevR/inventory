"use client";

import React, { useState, useEffect } from "react";
import Wrapper from "./wrapper";
import { BsBoxFill } from "react-icons/bs";
import { LuBoxes } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { usePathname } from "next/navigation";

import useStore from "@/components/store/store";
import Link from "next/link";
const SideBarContainer = () => {
  const showSidebar = useStore((state) => state.showSidebar);

  const sideBarLink = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdDashboard size={"1.5rem"} />,
    },
    {
      path: "/inventory",
      name: "Inventory",
      icon: <BsBoxFill size={"1.5rem"} />,
    },
    {
      path: "/messages",
      name: "Messages",
      icon: <FaMessage size={"1.5rem"} />,
    },
    {
      path: "/reports",
      name: "Report",
      icon: <FaChartBar size={"1.5rem"} />,
    },
    {
      path: "/request",
      name: "Request",
      icon: <HiDocumentReport size={"1.5rem"} />,
    },
    {
      path: "/setting",
      name: "Setting",
      icon: <IoMdSettings size={"1.5rem"} />,
    },
  ];
  const pathname = usePathname();

  return (
    <Wrapper showSidebar={showSidebar}>
      <div className="flex items-center gap-x-2 pb-3 pt-3">
        <LuBoxes size={"1.5rem"} className="text-white" />

        {showSidebar && (
          <>
            <span className={`hidden font-bold text-white md:block`}>UDM</span>
            <span className={`text-sm font-bold text-white`}>INVENTORY</span>
          </>
        )}
      </div>
      <main
        className={`flex flex-col ${!showSidebar && "items-center"} relative gap-y-10`}
      >
        {sideBarLink.map((link) => {
          return (
            <div
              key={link.name}
              className={` ${pathname === link.path ? "text-white" : "text-gray-300"} text-sm lg:text-2xl`}
            >
              <Link
                href={link.path}
                className={`relative flex items-center gap-x-2`}
              >
                {link.icon}
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
