"use client";

import React from "react";
import { LoadPage } from "../utils/Loader";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../slices/mainSlices";

const LoadingPage = () => {
  const darkMode = useSelector(selectDarkMode);
  return (
    <div className="flex justify-center mt-[10%] min-h-[100vh]">
      <LoadPage color={darkMode === "dark" ? "white" : "black"} />
    </div>
  );
};

export default LoadingPage;
