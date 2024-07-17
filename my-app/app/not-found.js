"use client";
import Image from "next/image";
import React from "react";

const pageNotFound = () => {
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
          <h1 className="font-bold">Page Not Found.</h1>
          <h2>Please Enter A Valid URL.</h2>
        </div>
      </div>
    </div>
  );
};

export default pageNotFound;
