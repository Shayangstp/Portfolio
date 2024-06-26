import React, { useRef } from "react";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import {
  otherSkills,
  backendSkills,
  frontSkills,
  skillsDesc,
  mySkills,
} from "../helpers/index";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { fadeIn } from "../helpers/motion";
import { useTheme } from "next-themes";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../slices/mainSlices";

const SklillsP2 = () => {
  const { theme } = useTheme();
  const t = useTranslations("Skills");
  const localeActive = useLocale();
  const scrollRef = useRef(null);
  const darkMode = useSelector(selectDarkMode);

  const bulletColor = darkMode === "dark" ? "white" : "black";

  console.log(bulletColor);

  return (
    <div
      id="skill-section"
      className="relative max-w-[1440px] w-[100vw] md:mt-28 mt-20 md:mb-20 mb-0 md:p-16 sm:p-2 p-0"
    >
      <div className="absolute w-[40%] h-[40%] opacity-20 top-[10px] left-auto inset-0 gradient-03" />
      <div className="absolute w-[40%] h-[40%] opacity-20 top-[500px] inset-0 gradient-04" />
      <div className="absolute w-[40%] h-[40%] opacity-20 top-[1300px] inset-0 gradient-05" />
      <div
        id="header"
        className="text-[70px] py-2 px-5"
        dir={`${localeActive === "fa" ? "rtl" : "ltr"}`}
      >
        <div className="flex items-center">
          <span>
            <HandymanOutlinedIcon
              fontSize="large"
              className={`me-2 ${
                localeActive === "fa" ? "text-red-500 mt-6" : ""
              }`}
            />
          </span>
          <span
            className={`${
              localeActive === "fa" ? "text-[30px]" : "text-[50px]"
            } md:text-[70px]`}
          >
            {t("title1")}
          </span>
          {localeActive === "en" && (
            <span
              className={`text-[20px] md:text-[30px] text-blue-500 dark:text-red-600 md:mt-7  ${
                localeActive === "fa" ? "mt-0" : "mt-5"
              }`}
            >
              {t("title2")}
            </span>
          )}
        </div>
      </div>
      <div id="skills_list" className="grid grid-cols-6 md:mt-8 mt-3">
        <div id="skill_detail" className="col-span-6">
          <div
            id="FrontEnd_Skills"
            className="flex flex-col gap-10 rounded-2xl"
          >
            {skillsDesc.map((item, idx) => {
              return (
                <div key={idx} className=" p-10 rounded-2xl">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-[32px] border-b border-blue-500  dark:border-red-500 py-2"
                  >
                    {t(item.title)}
                  </motion.div>
                  <motion.div
                    initial={{ x: -100 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    className="mt-5 md:text-[15px] text-[13px]"
                  >
                    {t(item.desc)}
                  </motion.div>
                  <motion.div
                    initial={{ x: -100 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    id="front-skill-set"
                    className="mt-10"
                  >
                    {item.title === "frontEnd" &&
                      frontSkills.map((item, idx) => {
                        return (
                          <div
                            key={idx}
                            className="border-b border-gray-600 pb-3 md:p-3 flex md:flex-row flex-col md:gap-10 gap-5 md:justify-between sm:justify-normal mt-5"
                          >
                            <span>
                              <RadioButtonCheckedIcon
                                fontSize="small"
                                sx={{
                                  color: bulletColor,
                                }}
                              />{" "}
                              <span className="ms-2 mt-1 text-[14px] text-blue-700 dark:text-red-100">
                                {t(item.title)}
                              </span>
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, idx) => {
                                return (
                                  <div key={idx}>
                                    <span className="text-[12px] md:text-[14px]">
                                      {skill.title}
                                    </span>
                                    <span className=" ms-1">
                                      {idx !== item.skills.length - 1
                                        ? "/"
                                        : ""}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    {item.title === "backEnd" &&
                      backendSkills.map((item, idx) => {
                        return (
                          <div
                            key={idx}
                            className="border-b border-gray-600 pb-3  md:p-3 flex md:flex-row flex-col md:gap-10 gap-5 md:justify-between sm:justify-normal mt-5"
                          >
                            <span className="ms-2 mt-1 text-[14px] text-blue-700 dark:text-red-100">
                              <RadioButtonCheckedIcon
                                fontSize="small"
                                sx={{
                                  color: bulletColor,
                                }}
                              />{" "}
                              <span className="ms-2 mt-1 text-[14px]">
                                {t(item.title)}
                              </span>
                            </span>
                            <div key={idx} className="flex flex-wrap gap-2">
                              {item.skills.map((skill, idx) => {
                                return (
                                  <div key={idx}>
                                    <span className="text-[12px] md:text-[14px]">
                                      {skill.title}
                                    </span>
                                    <span className=" ms-1">
                                      {idx !== item.skills.length - 1
                                        ? "/"
                                        : ""}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    {item.title === "other" &&
                      otherSkills.map((item, idx) => {
                        return (
                          <div
                            key={idx}
                            className="border-b border-gray-600 pb-3 md:p-3 flex md:flex-row flex-col md:gap-10 gap-5 md:justify-between sm:justify-normal mt-5"
                          >
                            <span className="ms-2 mt-1 text-[14px] text-blue-700 dark:text-red-100">
                              <RadioButtonCheckedIcon
                                fontSize="small"
                                sx={{
                                  color: bulletColor,
                                }}
                              />{" "}
                              <span className="ms-2 mt-1 text-[14px]">
                                {t(item.title)}
                              </span>
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, idx) => {
                                return (
                                  <div key={idx}>
                                    <span className="text-[12px] md:text-[14px]">
                                      {skill.title}
                                    </span>
                                    <span className=" ms-1">
                                      {idx !== item.skills.length - 1
                                        ? "/"
                                        : ""}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SklillsP2;
