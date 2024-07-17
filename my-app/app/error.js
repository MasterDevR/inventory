"use client";
import Image from "next/image";
import React from "react";

const error = () => {
  return (
    <div>
      <div className="m-auto flex h-screen flex-col items-center justify-center md:flex-row">
        <Image
          src="/images/sadness.png"
          alt="Universidad_de_Manila_seal.png"
          width="250"
          height="250"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="ml-4 flex flex-col justify-between gap-y-3">
          <h1 className="font-bold">Something Went Wrong.</h1>
          <h2>Please Contact The Admin For Immediate Action.</h2>
          <span>{`Don't worry everything is under control.`}</span>
        </div>
      </div>
    </div>
  );
};

export default error;
