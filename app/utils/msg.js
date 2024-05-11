"use client";
import toast from "react-hot-toast";

export const successMessage = (msg) => {
  return toast.success(msg, {
    className: "bg-gray-700 text-white text-[13px]",
    style: { fontFamily: "iranSans" },
  });
};

export const errorMessage = (msg) => {
  return toast.error(msg, {
    className: "bg-gray-700 text-white text-[13px]",
    style: { fontFamily: "iranSans" },
  });
};
