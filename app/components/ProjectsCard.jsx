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
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useRouter } from "next/navigation";
import { postContactEmail } from "../services/emailContact";

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
  const router = useRouter();
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
              className="lg:max-w-[31%] md:max-w-[40%] max-w-[80%] rounded-2xl p-5"
            >
              <Card
                sx={{ maxWidth: 400, minHeight: 700 }}
                className="flex flex-col justify-between bg-transparent border dark:border-gray-400 border-gray-700 p-2 rounded-2xl dark:shadow-projectShadowDark shadow-projectShadow"
              >
                <CardActionArea className="flex flex-col h-full">
                  <div id="image" className="p-5 rounded-t-2xl relative">
                    <Image src={test} className="" />
                    <div
                      id="project-name"
                      className="absolute rounded-2xl w-[150px] h-[60px] -bottom-3 left-2 text-white  dark:bg-red-800 bg-red-600 flex justify-center items-center"
                    >
                      {project.titleEn}
                    </div>
                  </div>
                  <CardContent className="flex-grow flex flex-col">
                    {/* <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="mt-5 text-black dark:text-white"
                    >
                      this is Header
                    </Typography> */}
                    <div
                      id="line"
                      className="border-t dark:border-white border-black mt-5"
                    ></div>
                    <Typography
                      variant="body2"
                      className="text-black dark:text-white mt-6 leading-6"
                    >
                      {localeActive === "en"
                        ? project.contentEn
                        : project.contentFa}
                      <span
                        className="text-blue-400 hover:text-blue-500 cursor-pointer ms-1 text-[15px] md:text-[13px] lg:text-[15px]"
                        onClick={() => {
                          router.push(`/projects/${project._id}`);
                        }}
                      >
                        ...ReadMore
                      </span>
                    </Typography>
                    <div
                      id="line"
                      className="border-t dark:border-white border-black mt-10"
                    ></div>
                    <Typography
                      variant="body2"
                      className="text-black dark:text-white mt-3 flex flex-wrap gap-2"
                    >
                      {project.hashtags.map((item) => {
                        return (
                          <p
                            className="cursor-pointer  text-blue-400 hover:text-blue-500 text-[15px] md:text-[13px] lg:text-[15px]"
                            onClick={() => {
                              dispatch(RsetProjectSearch(item));
                            }}
                          >
                            #{item}
                          </p>
                        );
                      })}
                    </Typography>
                    <div className="flex justify-end">
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
                            className=" dark:text-black text-white dark:bg-white bg-black dark:hover:bg-gray-300 hover:bg-gray-700 relative"
                            onClick={() => {
                              setSelectedId(project._id);
                              setSelectedProject({ title: project.titleEn });
                            }}
                          >
                            <span className="me-2">
                              <GitHubIcon />
                            </span>
                            <span className="mt-1">GitHub</span>
                            <span className="me-2 absolute -top-1 -right-1.5">
                              <LockIcon
                                fontSize="small"
                                className="text-[13px]"
                              />
                            </span>
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
                  </CardContent>
                </CardActionArea>
              </Card>
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
