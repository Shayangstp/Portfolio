import React from "react";
import AboutMe from "./AboutMe";
import { Button } from "@mui/material";
import { socials, socialsResponsive } from "../helpers/index";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Hero = () => {
  const router = useRouter();
  const t = useTranslations("Hero");
  const localeActive = useLocale();

  return (
    <div
      dir={localeActive === "fa" ? "rtl" : "ltr"}
      className="lg:grid grid-cols-6 relative max-w-[1440px] w-[100%]"
    >
      <div
        id="leftHero"
        className="col-span-1 flex-col items-center lg:justify-between justify-center relative hidden lg:flex mt-20"
      >
        <div className="leading-5 bg-gradient-to-r from-red-500 dark:to-white to-black bg-clip-text text-transparent my-auto rotate-[270deg] w-[500px] p-2 h-[50px]">
          <p className="me-10">
            <span className="font-bold text-[40px] text-center tracking-widest">
              Fullstack{" "}
            </span>{" "}
            &nbsp; <span className="text-[25px]">Developer</span>
          </p>
        </div>
      </div>
      <div
        id="mainHero"
        className="lg:col-span-4 flex flex-col justify-center lg:items-start items-center mx-auto mt-20 lg:mt-0"
      >
        <div id="hero-text" className="lg:mt-28">
          <div
            id="Hi"
            className="lg:text-[40px] sm:text-[30px] text-[20px] dark:text-white text-black ms-6 lg:ms-0"
          >
            {t("title1")}
          </div>
          <div
            id="imShayan"
            className="lg:text-[50px] sm:text-[40px] text-[25px] ms-6 lg:ms-0 mb-5 mt-4"
          >
            {t("title2")}
          </div>
          <div className="leading-5 bg-gradient-to-r from-red-500 dark:to-white to-black bg-clip-text text-transparent mt-2 lg:hidden  ms-6 ">
            <p className="me-10">
              <span className="font-bold sm:text-[15px]">
                F u l l s t a c k{" "}
              </span>{" "}
              &nbsp; Developer
            </p>
          </div>
          <div className="max-w-[700px] mt-5 border border-gray-600 px-5 py-8 rounded-2xl  sm:ms-6  mx-5 lg:hidden">
            <AboutMe />
          </div>
          <div
            id="socials-responsive"
            className="text-white text-end flex justify-end lg:hidden me-5"
          >
            <div className="flex gap-4 justify-center items-center  border border-red-600 dark:shadow-socialShadow shadow-socialShadowDark px-3 py-2 pb-3 rounded-2xl bg-gray-800 dark:bg-transparent mt-5">
              {socialsResponsive.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    className="cursor-pointer text-white dark:text-white dark:hover:text-red-200 hover:text-red-200"
                    href={item.href}
                  >
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[700px] mt-5 border border-gray-600 px-5 py-8 rounded-2xl hidden lg:inline-block">
          <AboutMe />
        </div>
      </div>

      <div className="col-span-1 flex-col items-center justify-around relative hidden lg:flex">
        <div
          dir="ltr"
          id="experience"
          className="flex items-center mt-10 p-3 rounded-2xl  bg-gradient-to-b dark:from-gray-800 from-white dark:to-gray-900 border to-gray-200 dark:border-gray-800 border-gray-50"
        >
          <div className="flex flex-col mt-2 ">
            <span className="ms-8 text-gray-500  dark:text-gray-400 text-[15px]">
              Years
            </span>
            <span className="text-[15px]">Experience</span>
          </div>
          <div
            className={`text-[50px] ${localeActive === "fa" ? "mt-3" : "mt-2"} `}
          >
            3
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center  border border-red-600 dark:shadow-socialShadow shadow-socialShadowDark p-2 py-4 rounded-2xl bg-gray-800 dark:bg-transparent">
          {socials.map((item, idx) => {
            return (
              <div
                key={idx}
                className="cursor-pointer text-white dark:text-white dark:hover:text-red-200 hover:text-red-200"
              >
                <a
                  href={`${item.href}`}
                  target={`${item.href === "#email" ? "" : "_blank"}`}
                >
                  {item.icon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
