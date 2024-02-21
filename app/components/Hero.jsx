import React from "react";
import AboutMe from "./AboutMe";
import { Button } from "@mui/material";
import { socials } from "../helpers/index";

const Hero = () => {
  return (
    <div className="grid grid-cols-6 h-[80vh] relative max-w-[1920px] w-[100%]">
      <div
        id="leftHero"
        className="col-span-1 flex flex-col items-center justify-between relative"
      >
        <div className="leading-5 bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent my-auto rotate-[270deg]">
          <p className="me-10">
            <span className="font-bold text-[20px]">F u l l s t a c k </span>{" "}
            &nbsp; Developer
          </p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center mb-5 border border-red-600 shadow-socialShadow p-3 rounded-2xl">
          {socials.map((item, idx) => {
            return (
              <div
                key={idx}
                className="hover:text-red-600 cursor-pointer text-gray-400"
              >
                {item.icon}
              </div>
            );
          })}
        </div>
      </div>
      <div
        id="mainHero"
        className="col-span-5 flex flex-col ms-10 justify-center"
      >
        <div id="hero-text" className="mt-28 ms-24">
          <div className="text-[40px] dark:text-white text-blue-500">
            Hi there
          </div>
          <div className="text-[60px]">I'm Shayan Golestanipour</div>
        </div>
        <div className="w-[50%] ms-24 mt-5 border border-gray-600 px-5 py-8 rounded-2xl">
          <AboutMe />
        </div>
        <div className="w-[80%] mt-16 flex justify-end gap-4">
          <Button
            variant="contained"
            className="bg-gray-800 px-10 py-3 hover:bg-red-900"
          >
            Skills
          </Button>
          <Button
            variant="outlined"
            className="border border-gray-700 text-gray-300 py-3 hover:border-red-800"
          >
            My Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
