"use client";
import React from "react";
import Image from "next/image";
import resume from "../../public/Shayan-Golestanipour-Resume.png";

const PDFViewer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={resume}
        className="mt-10 mb-24 w-[80%] border border-gray-500"
      />
    </div>
  );
};

export default PDFViewer;
