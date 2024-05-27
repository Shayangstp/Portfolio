import React from "react";
import AboutMe from "./AboutMe";
import { Button, Hidden } from "@mui/material";
import { socials, socialsResponsive } from "../helpers/index";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import AddvertisedBanner from "./AddvertisedBanner";
import { TitleText, TypingText } from "./TypingTest";

const Hero = () => {
  const router = useRouter();
  const t = useTranslations("Hero");
  const localeActive = useLocale();

  return (
    <div
      dir={localeActive === "fa" ? "rtl" : "ltr"}
      className="lg:grid grid-cols-6 relative max-w-[1440px] w-[100vw]"
    >
      {/* blur bg */}
      {/* <div className="absolute w-[40%] h-[40%] opacity-20 top-[100px]  inset-0 gradient-01" />
      <div
        className={`absolute w-[40%] h-[40%] opacity-20 top-[300px] ${
          localeActive === "fa" ? "right-[1000px]" : "left-[1000px]"
        }  inset-0 gradient-02`}
      /> */}
      <div
        id="leftHero"
        className="col-span-1 flex-col items-center lg:justify-between justify-center relative hidden lg:flex mt-20"
      >
        <motion.div
          animate={{ y: [500, 0], rotate: 270 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="leading-5 translate-y-[-5000px] bg-gradient-to-r from-red-500 dark:to-white to-black bg-clip-text text-transparent my-auto  w-[500px] p-2 h-[50px] relative"
        >
          <p className="me-10">
            <span className="font-bold text-[40px] text-center tracking-widest">
              Fullstack
            </span>{" "}
            &nbsp; <span className="text-[25px]">Developer</span>
          </p>
        </motion.div>
      </div>
      <div
        id="mainHero"
        className="lg:col-span-4 flex flex-col justify-center lg:items-start items-center mx-auto mt-20 lg:mt-0"
      >
        <div id="hero-text" className="lg:mt-28">
          <motion.div
            id="Hi"
            // className="lg:text-[40px] sm:text-[30px] text-[20px] dark:text-white text-black ms-6 lg:ms-0 font-extrabold"
          >
            <TypingText
              title={t("title1") + "''"}
              textStyles="lg:text-[40px] sm:text-[30px] text-[20px] dark:text-white text-black ms-6 lg:ms-0 font-extrabold"
            />
          </motion.div>
          <div id="imShayan">
            <TitleText
              title={t("title2")}
              textStyles="lg:text-[50px] sm:text-[40px] text-[25px] ms-6 lg:ms-0 mb-5 mt-4"
            />
          </div>
          <motion.div
            animate={{ x: [200, 0] }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="leading-5 bg-gradient-to-r from-red-500 dark:to-white to-black bg-clip-text text-transparent mt-2 lg:hidden  ms-6 "
          >
            <p className="me-10">
              <span className="font-bold sm:text-[15px] ">
                F u l l s t a c k{" "}
              </span>{" "}
              &nbsp; Developer
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="max-w-[700px] mt-5 border border-x-8 dark:border-gray-200 border-gray-900 px-5 py-8 rounded-2xl  sm:ms-6  mx-5 lg:hidden"
          >
            <AboutMe />
          </motion.div>
          <div
            id="socials-responsive"
            className="text-white text-end flex justify-end lg:hidden me-5"
          >
            <motion.div
              animate={{ x: [400, 0] }}
              transition={{ ease: "easeInOut", duration: 1 }}
              className="flex gap-4 translate-x-[2000] justify-center items-center  border  px-3 py-2 pb-3 rounded-2xl  dark:bg-transparent mt-5 dark:shadow-socialShadowDark shadow-socialShadow"
            >
              {socialsResponsive.map((item, idx) => {
                return (
                  <motion.div
                    whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.3 }}
                    key={idx}
                    className="cursor-pointer text-black dark:text-white dark:hover:text-red-200 hover:text-red-400"
                  >
                    <a
                      href={`${item.href}`}
                      target={`${item.href === "#email" ? "" : "_blank"}`}
                    >
                      {item.icon}
                    </a>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="w-[700px] mt-5 border border-y-8 dark:border-gray-200 border-gray-900 px-5 py-8 rounded-2xl hidden lg:inline-block"
        >
          <AboutMe />
        </motion.div>
      </div>

      <div className="col-span-1 flex-col items-center justify-around relative hidden lg:flex">
        <motion.div
          animate={{ x: [200, 0] }}
          transition={{ ease: "easeInOut", duration: 1 }}
          dir="ltr"
          id="experience"
          className="flex translate-x-[2000px] items-center mt-10 p-3 rounded-2xl  bg-gradient-to-b dark:from-gray-800 from-white dark:to-gray-900 border to-gray-200 dark:border-gray-800 border-gray-50"
        >
          <div className="flex flex-col mt-2 ">
            <span className="ms-8 text-gray-500  dark:text-gray-400 text-[15px]">
              Years
            </span>
            <span className="text-[15px]">Experience</span>
          </div>
          <div
            className={`text-[50px] ${
              localeActive === "fa" ? "mt-3" : "mt-2"
            } `}
          >
            3
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [400, 0] }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="flex flex-col translate-y-[2000px] gap-4 justify-center items-center  border dark:shadow-socialShadowDark shadow-socialShadow px-4 py-6 rounded-2xl bg-transparent dark:bg-transparent"
        >
          {socials.map((item, idx) => {
            return (
              <motion.div
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }}
                key={idx}
                className="cursor-pointer text-black dark:text-white dark:hover:text-red-200 hover:text-red-400"
              >
                <a
                  href={`${item.href}`}
                  target={`${item.href === "#email" ? "" : "_blank"}`}
                >
                  {item.icon}
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <div className="mt-40 mx-auto max-w-[1440px]">
        <AddvertisedBanner />
      </div>
    </div>
  );
};

export default Hero;
