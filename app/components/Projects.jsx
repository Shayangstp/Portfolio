import React, { useRef, useState } from "react";
//mui
import { Button, CardActions, CardContent } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
//swiper
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ViewCompactAltOutlinedIcon from "@mui/icons-material/ViewCompactAltOutlined";
import { useTheme } from "next-themes";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const blogData = [
  {
    id: 1,
    title: "Top 5 things web sites must have !! 1",
    titleColor: "#4c695b",
    content:
      "design efficient solutions, and implement robust software systems. Effective communication and teamwork are key strengths of the team, as they frequently collaborate, share are key",
  },
  {
    id: 2,
    title: "How buy Domain ?? 2",
    titleColor: "#4c5a69",
    content:
      "design efficient solutions, and implement robust software systems. Effective communication and teamwork are key strengths of the team, as they frequently collaborate, share are key",
  },
  {
    id: 3,
    title: "How start to be programmer the mindset 3",
    titleColor: "#694c69",
    content:
      "design efficient solutions, and implement robust software systems. Effective communication and teamwork are key strengths of the team, as they frequently collaborate, share are key",
  },
  {
    id: 4,
    title: "How start to be programmer the mindset 4",
    titleColor: "#68694c",
    content:
      "design efficient solutions, and implement robust software systems. Effective communication and teamwork are key strengths of the team, as they frequently collaborate, share are key",
  },
  {
    id: 5,
    title: "How start to be programmer the mindset 5",
    titleColor: "#694c4c",
    content:
      "design efficient solutions, and implement robust software systems. Effective communication and teamwork are key strengths of the team, as they frequently collaborate, share are key",
  },
  {
    id: 6,
    title: "How start to be programmer the mindset 6",
    titleColor: "#574c69",
    content:
      "design efficient solutions, and implement robust software systems. Effective communication and teamwork are key strengths of the team, as they frequently collaborate, share are key",
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const [items, setItems] = useState(blogData);
  const t = useTranslations("projects");
  const localeActive = useLocale();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [selectedTitle, setSelectedTitle] = useState();
  const [selectedContent, setSelectedContent] = useState();
  const [isHovered, setIsHovered] = useState(false);

  const swiperRef = useRef(null);

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  console.log(selectedId);
  return (
    <div className="relative max-w-[1440px] w-[100vw] mt-40 mb-20 md:mt-16 p-2">
      <div className="absolute w-[40%] h-[40%] opacity-20 top-[100px]  inset-0 gradient-06" />
      <div
        dir={localeActive === "fa" ? "rtl" : "ltr"}
        id="header"
        className="text-[70px] rounded-2xl px-5 md:ms-10 ms-0"
      >
        <div className="flex items-center">
          <span>
            <ViewCompactAltOutlinedIcon
              className={`me-2 text-[50px] ${
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
              className={`text-[20px] md:text-[30px] text-red-600 md:mt-7  ${
                localeActive === "fa" ? "mt-2" : "mt-5"
              }`}
            >
              {t("title2")}
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-20 max-w-[80vw] mx-auto">
        <Button
          variant="outlined"
          size="small"
          className=" dark:border-gray-500 border-gray-900 dark:text-gray-300 text-gray-800 dark:hover:text-white hover:text-black dark:hover:border-red-300 hover:border-red-700 rounded-xl me-2"
          // onClick={() => {
          //   swiper.slideNext();
          // }}
          onClick={slidePrev}
        >
          <span className="text-[13px]">
            <ArrowCircleLeftOutlinedIcon className="text-[50px]" />
          </span>
        </Button>
        <Swiper
          // navigation={true}
          spaceBetween={10}
          className="mySwiper"
          modules={[Pagination, Navigation]}
          ref={swiperRef}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {/* {items.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                virtualIndex={index}
                className="m-0 p-0 max-w-[500px] cursor-pointer"
              >
                <div
                  dir={localeActive === "fa" ? "rtl" : "ltr"}
                  className="border border-gray-400 rounded-xl max-w-[100%]"
                  onClick={() => {
                    setIsVisible(true);
                    setSelectedId(index);
                  }}
                >
                  <div
                    className={`p-4 rounded-t-xl border-b border-gray-400 h-[100px] slider-item bg-red-900 ${
                      index === 1 ? "active" : ""
                    }`}
                    style={{
                      backgroundColor: `${item.titleColor}${
                        theme === "light" ? "" : "90"
                      }`,
                    }}
                  >
                    <div className="font-bold md:text-[18px] text-[14px] dark:text-white text-white">
                      {item.title}
                    </div>
                  </div>
                  <CardContent>
                    <p className="dark:text-gray-300 text-gray-800 md:text-[15px] text-[12px]">
                      {item.content}
                    </p>
                  </CardContent>
                  <CardActions className="ms-2 mb-2">
                    <Button
                      size="small"
                      variant="contained"
                      className="sm:text-[12px] text-[9px] flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-5"
                      onClick={() => {
                        console.log("hi");
                      }}
                    >
                      <span>
                        <GitHubIcon fontSize="small" className="text-white" />
                      </span>
                      <span className="mt-1 text-white">{t("githubBtn")}</span>
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      className="dark:text-white text-black md:text-[12px] text-[9px] ms-2 px-5 border-gray-600 hover:border-red-600"
                    >
                      <span className="mt-1 mb-1">{t("readMoreBtn")}</span>
                    </Button>
                  </CardActions>
                </div>
                <AnimatePresence initial={false}>
                  {selectedId === index && (
                    <motion.div
                      key="modal"
                      // initial={{ opacity: 0 }}
                      // animate={{ opacity: 1 }}
                      // exit={{ opacity: 0 }}
                      layoutId={selectedId}
                    >
                      {" "}
                      <motion.h5>{item.title}</motion.h5>
                      <motion.h2>{item.content}</motion.h2>
                      <motion.button onClick={() => setSelectedId(null)} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </SwiperSlide>
            );
          })} */}
          {items.map((item, index) => (
            <SwiperSlide
              key={index}
              virtualIndex={index}
              className="m-0 p-0 max-w-[500px] cursor-pointer"
            >
              <div
                dir={localeActive === "fa" ? "rtl" : "ltr"}
                className="border border-gray-400 rounded-xl max-w-[100%] hover:border-black dark:hover:border-gray-200 transition-all ease-in"
                onClick={() => {
                  setIsVisible(true);
                  setSelectedId(item.id);
                  setSelectedContent(item.content);
                  setSelectedTitle(item.title);
                }}
              >
                <div
                  className={`p-4 rounded-t-xl border-b border-gray-400 h-[100px] slider-item bg-red-900 ${
                    index === 1 ? "active" : ""
                  }`}
                  style={{
                    backgroundColor: `${item.titleColor}${
                      theme === "light" ? "" : "90"
                    }`,
                  }}
                >
                  <div className="font-bold md:text-[18px] text-[14px] dark:text-white text-white">
                    {item.title}
                  </div>
                </div>
                <CardContent>
                  <p className="dark:text-gray-300 text-gray-800 md:text-[15px] text-[12px]">
                    {item.content}
                  </p>
                </CardContent>
                <CardActions className="ms-2 mb-2">
                  <Button
                    size="small"
                    variant="contained"
                    className="sm:text-[12px] text-[9px] flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-5"
                    onClick={() => {
                      console.log("hi");
                    }}
                  >
                    <span>
                      <GitHubIcon fontSize="small" className="text-white" />
                    </span>
                    <span className="mt-1 text-white">{t("githubBtn")}</span>
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    className="dark:text-white text-black md:text-[12px] text-[9px] ms-2 px-5 border-gray-600 hover:border-black dark:hover:border-gray-200"
                  >
                    <span className="mt-1 mb-1">{t("readMoreBtn")}</span>
                  </Button>
                </CardActions>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
                  <motion.h5>{selectedTitle}</motion.h5>
                  <motion.button onClick={() => setSelectedId(null)}>
                    <span className="cursor-pointer border transition-all ease-in border-black dark:border-white p-3 rounded-full px-4 hover:bg-gray-900 hover:text-red-500 ">
                      X
                    </span>
                  </motion.button>
                </div>
                <motion.h2>{selectedContent}</motion.h2>
                <div className="flex justify-end">
                  <Button
                    variant="contained"
                    className="mt-10 bg-black hover:bg-gray-800"
                  >
                    Read More
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        <Button
          variant="outlined"
          size="small"
          className=" dark:border-gray-500 border-gray-900 dark:text-gray-300 text-gray-800 dark:hover:text-white hover:text-black dark:hover:border-red-300 hover:border-red-700 rounded-xl ms-2"
          onClick={slideNext}
        >
          <span className="text-[13px]">
            <ArrowCircleRightOutlinedIcon className="text-[50px]" />
          </span>
        </Button>
      </div>
      <div
        dir={`${localeActive === "fa" ? "rtl" : "ltr"}`}
        id="see-more"
        className="flex justify-end max-w-[80vw] mt-5 mx-auto"
      >
        <Button
          className={`py-2 px-4 dark:border-gray-500 border-gray-600  dark:text-white text-black text-[13px] hover:border-black dark:hover:border-white`}
          variant="outlined"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          href={` /${localeActive}/projects`}
        >
          <span className="">{t("seeMore")}</span>{" "}
          <span
            className={`ms-2   transition-all ease-linear ${
              isHovered && localeActive === "fa" && "-translate-x-1"
            } ${localeActive === "en" && isHovered && "translate-x-1"}`}
          >
            <ArrowForwardIcon
              fontSize="small"
              className={`${localeActive === "fa" ? "rotate-[180deg] " : ""} `}
            />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Projects;
