"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import test from "../assets/test.jpg";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import {
  RsetProjectsData,
  selectProjectsData,
  selectProjectSearch,
  RsetProjectSearch,
  RsetLoading,
  selectLoading,
} from "../slices/mainSlices";
import { useDispatch, useSelector } from "react-redux";
import GitHubIcon from "@mui/icons-material/GitHub";
import LoadingPage from "../components/LoadingPage";
import { motion, AnimatePresence } from "framer-motion";
import { socials } from "../helpers";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { useTranslations, useLocale } from "next-intl";
import createCache from "@emotion/cache";
import {
  selectDarkMode,
  RsetUserHireEmail,
  selectUserHireEmail,
  RsetFormErrors,
  selectFormErrors,
} from "../slices/mainSlices";

const textFeildDark = {
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
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: "white",
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
};
const textFeildLight = {
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
};

const ProjectsCard = () => {
  const localeActive = useLocale();
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [selectedProject, setSelectedProject] = useState({
    title: "",
  });

  const projectsData = useSelector(selectProjectsData);
  const projectSearch = useSelector(selectProjectSearch);
  const loading = useSelector(selectLoading);
  const userEmail = useSelector(selectUserHireEmail);
  const formErrors = useSelector(selectFormErrors);
  const darkMode = useSelector(selectDarkMode);

  const style = darkMode === "dark" ? textFeildDark : textFeildLight;

  const userEmailIsValid = userEmail !== "";
  const userEmailFormatIsValid = /\S+@\S+\.com$/.test(userEmail);

  const validation = () => {
    var errors = {};

    if (!userEmailIsValid) {
      errors.userEmail = true;
    }

    return errors;
  };

  const cacheLtr = createCache({
    key: "muiltr",
    stylisPlugins: [prefixer],
  });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const values = {
    keyword: projectSearch,
  };

  console.log(selectedProject);

  const fetchProject = async () => {
    dispatch(RsetLoading(true));
    const projectRes = await axios.post("/api/projects", values);
    console.log(projectRes);
    if (projectRes.data.code === 200) {
      dispatch(RsetProjectsData(projectRes.data.projects));
      dispatch(RsetLoading(false));
    } else {
      console.log("error on projects API");
      dispatch(RsetLoading(false));
    }
  };

  useEffect(() => {
    fetchProject();
  }, [projectSearch]);

  const handelContactEmail = async (e) => {
    e.preventDefault();
    if (userEmailIsValid && !userEmailFormatIsValid) {
      errorMessage(t("contactEmailFormat"));
    }

    if (userEmailIsValid && userEmailFormatIsValid) {
      // setLoading(true);
      const values = {
        name: userEmail,
        email: userEmail,
        subject: selectedProject.title,
        message: "githubCode",
      };
      const postContactEmailRes = await postContactEmail(values);
      if (postContactEmailRes.data.code === 200) {
        // setLoading(false);
        // successMessage(t("contactSuccessMessage"));
        dispatch(RsetUserHireEmail(""));
        dispatch(RsetFormErrors(""));
      } else {
        // setLoading(false);
        errorMessage(t("contactErrorMessage"));
      }
    } else {
      dispatch(
        RsetFormErrors(
          validation({
            userEmail,
          })
        )
      );
    }
  };

  return (
    <div className="mt-16 mb-10 flex flex-wrap gap-5 gap-y-10 justify-center items-center">
      {loading ? (
        <LoadingPage />
      ) : (
        projectsData.map((project, index) => {
          return (
            <div
              key={index}
              id="card"
              className="border dark:border-gray-400 border-black max-w-[30%] max-h-[800px] rounded-2xl p-5 dark:shadow-projectShadowDark shadow-projectShadow"
            >
              <div id="image" className="p-5 rounded-t-2xl relative">
                <Image
                  src={test}
                  className="rounded-2xl border-2 border-black shadow"
                />
                <div
                  id="project-name"
                  className="absolute w-[150px] h-[60px] -bottom-3 left-2 text-white  dark:bg-red-800 bg-red-600 flex justify-center items-center"
                >
                  {project.titleEn}
                </div>
              </div>
              <div id="content" className="p-5">
                <header
                  id="header"
                  className="mt-5 dark:text-white text-black font-bold text-[35px]"
                >
                  this is Header
                </header>
                <div
                  id="line"
                  className="border-t dark:border-white border-black mt-3"
                ></div>
                <div id="content" className="mt-5 leading-7">
                  {project.contentEn}
                  <span className="text-blue-400 hover:text-blue-500 cursor-pointer ms-1">
                    ...ReadMore
                  </span>
                </div>
                <div id="line" className="border-t border-gray-600 mt-3"></div>
                <div id="hashtags" className="flex flex-wrap gap-2 mt-3">
                  {project.hashtags.map((item) => {
                    return (
                      <p
                        className="cursor-pointer  text-blue-400 hover:text-blue-500"
                        onClick={() => {
                          dispatch(RsetProjectSearch(item));
                        }}
                      >
                        #{item}
                      </p>
                    );
                  })}
                </div>
                {project.isConfidential ? (
                  <div
                    id="buttons"
                    className="flex justify-end gap-3 mt-10"
                    onClick={() => {
                      setOpenModal(true);
                    }}
                  >
                    <Button
                      variant="contained"
                      className=" dark:text-black text-white dark:bg-white bg-black dark:hover:bg-gray-300 hover:bg-gray-700"
                      onClick={() => {
                        setSelectedId(project._id);
                        setSelectedProject({ title: project.titleEn });
                      }}
                    >
                      <span className="me-2">
                        <GitHubIcon />
                      </span>
                      <span className="mt-1">GitHub</span>
                    </Button>
                  </div>
                ) : (
                  <a
                    href={project.github}
                    id="buttons"
                    className="flex justify-end gap-3 mt-10"
                    target="_blank"
                  >
                    <Button
                      variant="contained"
                      className=" dark:text-black text-white dark:bg-white bg-black dark:hover:bg-gray-300 hover:bg-gray-700"
                    >
                      <span className="me-2">
                        <GitHubIcon />
                      </span>
                      <span className="mt-1">GitHub</span>
                    </Button>
                  </a>
                )}
              </div>
            </div>
          );
        })
      )}
      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              className="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)} // Close modal when clicking on backdrop
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layoutId={selectedId}
              className="modal p-5 border border-black dark:border-white"
            >
              <div className="border-b border-black dark:border-white mb-5 py-8 flex justify-between">
                <motion.h5>{selectedProject.title}</motion.h5>
                <motion.button onClick={() => setSelectedId(null)}>
                  <span className="cursor-pointer border transition-all ease-in border-black dark:border-white p-3 rounded-full px-4 hover:bg-gray-900 hover:text-red-500 ">
                    X
                  </span>
                </motion.button>
              </div>
              <motion.h2>
                For access the github code of {selectedProject.title} project
                please message to me
              </motion.h2>
              <div className="flex gap-2 items-center justify-center mt-10">
                <CacheProvider
                  value={localeActive === "fa" ? cacheRtl : cacheLtr}
                >
                  <TextField
                    error={userEmailIsValid ? false : formErrors.userEmail}
                    id="standard-basic"
                    value={userEmail}
                    label="email"
                    variant="standard"
                    className="mt-5 me-3"
                    onChange={(e) => {
                      dispatch(RsetUserHireEmail(e.target.value));
                    }}
                    sx={style}
                  />
                </CacheProvider>
                <Button
                  size="small"
                  className="dark:text-white mt-2 text-white border-black px-3 py-3 rounded-xl dark:bg-black bg-gray-900 sm:text-[12px] text-[10px] hover:dark:bg-gray-800 hover:bg-gray-800"
                  onClick={handelContactEmail}
                >
                  <span>
                    {/* {loading === false ? ( */}
                    send Email
                    {/* ) : (
                      <div className="px-3">
                        <ButtonLoader2
                          height={20}
                          width={50}
                          color={theme === "dark" ? "black" : "white"}
                        />
                      </div>
                    )} */}
                  </span>
                  {/* <ArrowOutwardOutlinedIcon
                    fontSize="small"
                    className={`${
                      localeActive === "fa" ? "rotate-[270deg]" : ""
                    }`}
                  /> */}
                </Button>
              </div>
              <div className="flex gap-4 mt-10 justify-center">
                {socials.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="cursor-pointer text-black dark:text-white dark:hover:text-red-200 hover:text-red-400"
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsCard;
