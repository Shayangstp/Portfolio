import React from "react";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import {
  otherSkills,
  backendSkills,
  frontSkills,
  skillsDesc,
  mySkills,
} from "../helpers/index";

const SklillsP2 = () => {
  return (
    <div className="relative max-w-[1920px] w-[100%] mt-32 md:p-16 p-2">
      <div id="header" className="text-[70px] py-2 px-5 max-w-min">
        <div className="flex items-center">
          <span>
            <HandymanOutlinedIcon className="me-2 text-[50px]" />
          </span>
          <span className="text-[50px] md:text-[70px]">Skills.</span>
          <span className="text-[20px] md:text-[30px] text-red-600 md:mt-7 mt-5">
            Development
          </span>
        </div>
      </div>
      <div id="skills_list" className="grid grid-cols-6 mt-10">
        <div id="skill_detail" className="col-span-6">
          <div
            id="FrontEnd_Skills"
            className="flex flex-col gap-10 rounded-2xl"
          >
            {skillsDesc.map((item, idx) => {
              return (
                <div className=" p-10 rounded-2xl ">
                  <header className="text-[32px] border-b border-gray-900 dark:border-gray-500 py-2">
                    {item.title}
                  </header>
                  <p className="mt-5 md:text-[15px] text-[13px]">{item.desc}</p>
                  <div id="front-skill-set" className="mt-10">
                    {item.title === "FrontEnd" &&
                      frontSkills.map((item, idx) => {
                        return (
                          <div className="border-b border-gray-600 pb-3 md:p-3 flex md:flex-row flex-col md:gap-10 gap-5 md:justify-between sm:justify-normal mt-5">
                            <span className="dark:text-red-600 text-red-900">
                              <RadioButtonCheckedIcon fontSize="small" />{" "}
                              <span className="ms-2 mt-1 text-[14px]">
                                {item.title}
                              </span>
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, idx) => {
                                return (
                                  <div>
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
                    {item.title === "BackEnd" &&
                      backendSkills.map((item, idx) => {
                        return (
                          <div className="border-b border-gray-600 pb-3  md:p-3 flex md:flex-row flex-col md:gap-10 gap-5 md:justify-between sm:justify-normal mt-5">
                            <span className="dark:text-red-600 text-red-900">
                              <RadioButtonCheckedIcon fontSize="small" />{" "}
                              <span className="ms-2 mt-1 text-[14px]">
                                {item.title}
                              </span>
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, idx) => {
                                return (
                                  <div>
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
                    {item.title === "Other" &&
                      otherSkills.map((item, idx) => {
                        return (
                          <div className="border-b border-gray-600 pb-3 md:p-3 flex md:flex-row flex-col md:gap-10 gap-5 md:justify-between sm:justify-normal mt-5">
                            <span className="dark:text-red-600 text-red-900">
                              <RadioButtonCheckedIcon fontSize="small" />{" "}
                              <span className="ms-2 mt-1 text-[14px]">
                                {item.title}
                              </span>
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, idx) => {
                                return (
                                  <div>
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
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div id="other_skills" className="flex flex-col mt-24 rounded-2xl">
            <div className="border border-dashed border-gray-500 p-5 rounded-2xl ">
              <header className="text-[20px] border-b p-2">
                {skillsDesc[2].title}
              </header>
              <p className="mt-3">{skillsDesc[2].desc}</p>
              {otherSkills.map((item, idx) => {
                return (
                  <div className="border-b-2 p-2 flex gap-5 justify-between mt-5">
                    <span className="text-red-600">
                      <RadioButtonCheckedIcon fontSize="small" />{" "}
                      <span className="ms-2 mt-1">{item.title}</span>
                    </span>
                    <div className="flex">
                      {item.skills.map((skill, idx) => {
                        return (
                          <div>
                            <span>{skill.title}</span>
                            <span className="me-1 ms-1">
                              {idx !== item.skills.length - 1 ? "/" : ""}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SklillsP2;
