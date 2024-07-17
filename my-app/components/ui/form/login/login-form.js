"use client";
import React, { useState } from "react";
import { FaRegUserCircle, FaLockOpen, FaLock } from "react-icons/fa";
import LoginFormImage from "./login-form-image";
import ToastWrapper from "../../toast/toast-wrapper";
import axios from "axios";
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setError] = useState({ status: undefined, message: "" });
  const url = process.env.NEXT_PUBLIC_URL;
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const username = formData.get("username");
      const password = formData.get("password");

      const response = await axios.post(`${url}/login`, {
        username,
        password,
      });
      if (response.data.status === 200) {
        console.log(response.data.status);
      } else {
        setError({
          status: response.data.status,
          message: response.data.message,
        });
      }
    } catch (err) {
      setError({
        status: 500,
        message: err.message,
      });
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-white md:bg-zinc-50">
      <div className="flex w-full max-w-lg flex-col items-center justify-center gap-y-8 rounded-2xl bg-white p-10 md:w-8/12 md:shadow-xl">
        <LoginFormImage />
        <form className="flex w-full flex-col gap-y-3" onSubmit={submitHandler}>
          <div>
            <input
              className={`peer w-full border p-2 pl-10 text-sm tracking-widest text-gray-700 lg:rounded lg:shadow`}
              id="username"
              type="text"
              placeholder="Username"
              pattern="[0-9\-]*"
              title="Only numbers and hyphens are allowed"
              name="username"
            />
            <FaRegUserCircle
              size={"1.1rem"}
              className="relative bottom-7 left-2 text-gray-400 peer-focus:text-black"
            />
          </div>
          <div>
            <input
              className={`peer w-full appearance-none rounded border p-2 pl-10 text-sm tracking-widest text-gray-700 shadow`}
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              name="password"
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
          <button
            type="submit"
            className="rounded-md border-2 border-gray-300 p-2 font-bold tracking-widest text-gray-400 hover:border-green-950 hover:bg-green-950 hover:text-white"
          >
            LOGIN
          </button>
        </form>
      </div>
      {isError.status !== undefined && <ToastWrapper isError={isError} />}
    </div>
  );
};

export default LoginForm;
