import React from "react";
import AboutMe from "./AboutMe";
import { Button } from "@mui/material";
import { socials, socialsResponsive } from "../helpers/index";

const Hero = () => {
  return (
    <div className="lg:grid grid-cols-6 h-[80vh] relative max-w-[1920px] w-[100%]">
      <div
        id="leftHero"
        className="col-span-1 flex-col items-center lg:justify-between justify-center relative hidden lg:flex"
      >
        <div className="leading-5 bg-gradient-to-r from-red-500 dark:to-white to-black bg-clip-text text-transparent my-auto rotate-[270deg] w-[300px]">
          <p className="me-10">
            <span className="font-bold text-[20px]">F u l l s t a c k </span>{" "}
            &nbsp; Developer
          </p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center  border border-red-600 dark:shadow-socialShadow shadow-socialShadowDark p-2 rounded-2xl bg-gray-800 dark:bg-transparent">
          {socials.map((item, idx) => {
            return (
              <div
                key={idx}
                className="cursor-pointer text-white dark:text-white dark:hover:text-red-200 hover:text-red-200"
              >
                {item.icon}
              </div>
            );
          })}
        </div>
      </div>
      <div
        id="mainHero"
        className="lg:col-span-5 flex flex-col xl:ms-10 justify-center items-center lg:items-start "
      >
        <div id="hero-text" className="lg:mt-28 xl:ms-24 w-full">
          <div className="text-white text-end flex justify-end lg:hidden">
            <div>
              <div className="flex flex-col gap-1 justify-center items-center  border border-red-600 dark:shadow-socialShadow shadow-socialShadowDark p-2 rounded-2xl bg-gray-800 dark:bg-transparent me-10 mt-2">
                {socialsResponsive.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="cursor-pointer text-white dark:text-white dark:hover:text-red-200 hover:text-red-200"
                    >
                      {item.icon}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="lg:text-[40px] sm:text-[30px] text-[20px] dark:text-white text-black md:ms-32 ms-10 lg:ms-0">
            Hi there
          </div>
          <div className="lg:text-[60px] sm:text-[40px] text-[25px]  md:ms-32 ms-10 lg:ms-0">
            I'm Shayan Golestanipour
          </div>
          <div className="leading-5 bg-gradient-to-r from-red-500 dark:to-white to-black bg-clip-text text-transparent mt-2 lg:hidden md:ms-32 ms-10 ">
            <p className="me-10">
              <span className="font-bold sm:text-[15px]">
                F u l l s t a c k{" "}
              </span>{" "}
              &nbsp; Developer
            </p>
          </div>
          <div className="lg: max-w-[600px] xl:ms-24 mt-5 border border-gray-600 px-5 py-8 rounded-2xl md:ms-32 sm:ms-10 mx-5 lg:hidden">
            <AboutMe />
          </div>
        </div>
        <div className="w-[600px] xl:ms-24 mt-5 border border-gray-600 px-5 py-8 rounded-2xl hidden lg:inline-block">
          <AboutMe />
        </div>
        <div className="lg:w-[80%] me-16 lg:ms-0 w-full mt-16 flex justify-end gap-4">
          <Button
            variant="contained"
            className="bg-gray-800 px-10 lg:py-3 py-2.5 hover:bg-red-900 text-[12px] sm:text-[14px]"
          >
            Skills
          </Button>
          <Button
            variant="outlined"
            className="border border-gray-700 dark:border-gray-400 text-gray-600  dark:text-gray-200 dark:hover:text-red-500 hover:bg-transparent  hover:text-black lg:py-3 py-2.5 hover:border-red-500 dark:hover:border-white text-[12px] sm:text-[14px]"
          >
            My Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
