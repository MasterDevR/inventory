"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegUserCircle, FaLockOpen, FaLock } from "react-icons/fa";
const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex h-screen items-center justify-center md:bg-zinc-50">
      <div className="flex w-full max-w-sm flex-col items-center justify-center gap-y-8 rounded-2xl bg-white p-10 md:w-5/12 md:shadow-xl">
        <div className="flex flex-col items-center gap-y-5">
          <Image
            src="/images/inventory.png"
            alt="Universidad_de_Manila_seal.png"
            width={180}
            height={180}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          <h1 className="text-2xl font-black tracking-widest text-green-950">
            UDM INVENTORY
          </h1>
        </div>
        <form className="flex w-full flex-col gap-y-3">
          <div>
            <input
              className="peer w-full border p-2 pl-10 text-sm tracking-widest text-gray-700 lg:rounded lg:shadow"
              id="username"
              type="text"
              placeholder="Username"
            />
            <FaRegUserCircle
              size={"1.1rem"}
              className="relative bottom-7 left-2 text-gray-400 peer-focus:text-black"
            />
          </div>
          <div>
            <input
              className="peer w-full appearance-none rounded border p-2 pl-10 text-sm tracking-widest text-gray-700 shadow"
              type={`${showPassword ? "text" : "password"}`}
              id="password"
              placeholder="Password"
            />
            {showPassword ? (
              <FaLockOpen
                size={"1rem"}
                className="relative bottom-7 left-2 cursor-pointer text-gray-400 peer-focus:text-black"
                onClick={showPasswordHandler}
              />
            ) : (
              <FaLock
                size={"1rem"}
                className="relative bottom-7 left-2 cursor-pointer text-gray-400 peer-focus:text-black"
                onClick={showPasswordHandler}
              />
            )}
          </div>
          <button className="rounded-md border-2 border-gray-300 p-2 font-bold tracking-widest text-gray-400 hover:border-green-950 hover:bg-green-950 hover:text-white">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
