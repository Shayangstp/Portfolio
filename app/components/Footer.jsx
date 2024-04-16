import React, { useState } from "react";
import Link from "next/link";
import { socials } from "../helpers/index";
import { Button, TextField } from "@mui/material";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import { useTheme } from "next-themes";

const Footer = () => {
  const [activeLink, setActiveLink] = useState("/");
  const { theme } = useTheme();
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      <li>
        <Link
          href="/"
          className={`flex items-center ${
            activeLink === "/" ? "text-[#ff0000]" : "dark:text-white text-black"
          } hover:text-[#ff0000] text-sm`}
          onClick={() => handleLinkClick("/")}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className={`flex items-center ${
            activeLink === "#services"
              ? "text-[#ff0000]"
              : "dark:text-white text-black"
          } hover:text-[#ff0000] text-sm`}
          onClick={() => handleLinkClick("#services")}
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className={`flex items-center ${
            activeLink === "#AboutUS"
              ? "text-[#ff0000]"
              : "dark:text-white text-black"
          } hover:text-[#ff0000] text-sm`}
          onClick={() => handleLinkClick("#AboutUS")}
        >
          AboutUS
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className={`flex items-center ${
            activeLink === "#ContactUS"
              ? "text-[#ff0000]"
              : "dark:text-white text-black"
          } hover:text-[#ff0000] text-sm`}
          onClick={() => handleLinkClick("#ContactUS")}
        >
          ContactUS
        </Link>
      </li>
    </ul>
  );
  return (
    <div className="max-w-[1920px] w-[100%] mt-20 p-16 bg-gradient-to-b dark:from-[#161616] from-[#fff] dark:to-[#260b0b] to-red-200 bg-opacity-80">
      <div
        id="ready_toGrow"
        className="flex flex-col justify-center items-center text-white"
      >
        <div className="dark:text-white text-black font-bold lg:text-[100px] md:text-[70px] text-[30px]">
          Ready to Grow ?
        </div>
        <p className="dark:text-white text-gray-700 text-center sm:text-start text-[10px] md:text-[15px] lg:text-[20px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
          cupiditate
        </p>
        <div className="flex items-end mt-5">
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            color=""
            className="mt-5 me-3"
            sx={
              theme === "dark"
                ? {
                    "& input": {
                      color: "white",
                    },
                    "& label": {
                      color: "white",
                    },
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "white",
                    },
                    "& label.Mui-focused": {
                      color: "red",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "red",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#E0E3E7",
                      },
                      "&:hover fieldset": {
                        borderColor: "#B2BAC2",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "red",
                      },
                    },
                  }
                : {
                    "& input": {
                      color: "black",
                    },
                    "& label": {
                      color: "black",
                    },
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "black",
                    },
                    "& label.Mui-focused": {
                      color: "red",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "red",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#E0E3E7",
                      },
                      "&:hover fieldset": {
                        borderColor: "#B2BAC2",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "red",
                      },
                    },
                  }
            }
          />
          <Button
            size="small"
            className="dark:text-black text-white border-black px-3 py-3 rounded-xl dark:bg-white bg-gray-900 sm:text-[12px] text-[10px] hover:dark:bg-gray-200 hover:bg-gray-800"
          >
            <span>Hire.Me</span>
            <ArrowOutwardOutlinedIcon fontSize="small" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-5 mt-28 mb-10">
        <div id="lable" className="lg:col-span-1 col-span-3 lg:text-end">
          <div className="dark:text-white text-black">Shayan_gstp</div>
        </div>
        <div id="navFooter" className="col-span-3 lg:inline-block hidden">
          <ul className="flex gap-5 justify-center ">{navList}</ul>
        </div>
        <div id="social" className="lg:col-span-1 col-span-2">
          <div className="flex gap-2 md:gap-5 lg:justify-start justify-end">
            {socials.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="hover:text-red-600 cursor-pointer dark:text-gray-300"
                >
                  {item.icon}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-center pt-10 me-5 md:text-[13px] text-[10px]">
        <p>Copyrights © 2024 Your Shayan_gstp. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
