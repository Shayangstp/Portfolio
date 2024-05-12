"use client";
import React from "react";
import Nav from "../../components/Nav";
import Resume from "../../components/Resume";

const Page = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="max-w-[1440px] w-[100%]">
        <Nav />
        <Resume />
      </div>
    </div>
  );
};

export default Page;
