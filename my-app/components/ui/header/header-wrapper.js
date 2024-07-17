"use client";
import React from "react";
import useStore from "@/components/store/store";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const HeaderWrapper = () => {
  const { showSidebar, toggleSidebar } = useStore();
  return (
    <header
      className={`${showSidebar ? "absolute right-0 lg:relative" : "fixed"} top-0 w-full lg:fixed`}
    >
      <div className="navbar bg-base-100">
        <div className="flex-1" onClick={toggleSidebar}>
          {showSidebar ? (
            <RxCross2 size={"1.5rem"} />
          ) : (
            <GiHamburgerMenu size={"1.5rem"} />
          )}
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderWrapper;
