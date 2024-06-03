import React, { useRef, useState } from "react";
//mui
import { CardActions, CardContent } from "@mui/material";
import { Button } from "@material-tailwind/react";
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
import { useRouter } from "next/navigation";

const blogData = [
  {
    id: 1,
    title: "Order Tracking",
    titleColor: "#4c695b",
    content:
      "The order tracking app is designed for both customers and factory staff to track orders that design and coded as front and back by my self. It allows staff to manage the current location of each order and monitor the quantities loaded onto pallets or vehicles. The app also tracks the loading time for each warehouse vehicle. It covers the entire process from order submission to delivery, enabling staff to oversee every step and allowing managers to monitor the entire workflow. This app is built for four factories and warehouses.",
  },
  {
    id: 2,
    title: "AVL",
    titleColor: "#4c5a69",
    content:
      "The AVL (Automatic Vehicle Location) app gathers data from the GPS devices installed in each company vehicle, allowing us to track their location and speed. The app also provides information on how many hours the vehicles are on the road or stopped. It includes a driver management panel and a user management panel, enabling efficient management of GPS devices and other tasks. This app simplifies these processes for our users.",
  },
  {
    id: 3,
    title: "Automation",
    titleColor: "#694c69",
    content:
      "The automation app transforms the entire company into a paperless environment, streamlining tasks for our personnel. This comprehensive application allows employees to manage their work efficiently. With this app, users can check paychecks, request leave, obtain mission tickets, and view personnel details. Additionally, factories can process work requests from customers or staff, and manage vehicles and machines based on these requests. The app also includes warehouse management and facilitates requests from the warehouse.",
  },
  {
    id: 4,
    title: "VPN-Support",
    titleColor: "#68694c",
    content:
      "The SaaS application is designed to provide software services to clients. The main idea behind this web app is to offer software as a service. It includes custom-built authentication, developed using Next.js and MongoDB. The application also features a ticketing system for user issues, which are managed through messaging. Additionally, there is an admin panel to manage user needs and a download panel for app versions",
  },
  {
    id: 5,
    title: "BOTIK",
    titleColor: "#694c4c",
    content:
      "My E-commerce application, inspired by Amazon, is built using Next.js and MongoDB. It includes all the essential features of an e-commerce platform, such as adding items to the cart, instant purchases, wishlists, order lists, and user profiles. User authentication is secured with email verification. Additionally, the app features an admin panel for managing orders and purchased products, creating product cards, and uploading new products. A comprehensive search functionality is also integrated into the web app",
  },
  {
    id: 6,
    title: "BFIT",
    titleColor: "#574c69",
    content:
      "Welcome to our fitness application! Our primary goal is to ensure that you perform every gym exercise correctly. With over a decade of personal experience in fitness sports, I've meticulously curated a collection of instructional GIFs and integrated YouTube APIs for each exercise. This resource empowers users to execute movements with precision, maximizing the effectiveness of their workouts.Please note that our app utilizes third-party APIs, which are subject to limitations. Currently, access is capped at 500 requests per month. This restriction ensures optimal performance and availability for all users. Thank you for choosing our platform to enhance your fitness journey.",
  },
  {
    id: 7,
    title: "Koreh managment",
    titleColor: "#1c3f75",
    content:
      "Introducing Koreh Management, an application designed to empower users in efficiently managing koreh in factory settings. In the company where I work, we manufacture glasses that necessitate koreh for melting. Koreh production is a daily task, coupled with periodic maintenance requirements. This application streamlines the management of all relevant data and Primary Maintenance (PM) for each koreh.With Koreh Management, users gain the capability to oversee at least 50 koreh across all factories effortlessly. This comprehensive tool enhances operational efficiency and ensures smooth handling of critical manufacturing processes.",
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const router = useRouter();
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

  const truncateText = (text, maxWords) => {
    const wordsArray = text.split(" ");
    console.log(wordsArray);
    if (wordsArray.length <= maxWords) {
      return text;
    }
    const wordsTruncate = wordsArray.slice(0, maxWords).join(" ") + "...";
    return wordsTruncate;
  };

  return (
    <div className="relative max-w-[1440px] w-[100vw] mt-28 mb-20 md:mt-16 p-2">
      <div className="absolute w-[40%] h-[40%] opacity-20 top-[100px]  inset-0 gradient-06" />
      <div
        dir={localeActive === "fa" ? "rtl" : "ltr"}
        id="header"
        className="text-[70px] rounded-2xl px-5 md:ms-10 ms-0"
      >
        <div className="flex items-center">
          <span>
            <ViewCompactAltOutlinedIcon
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
              className={`text-[20px] md:text-[30px] dark:text-red-600 text-blue-500  md:mt-7  ${
                localeActive === "fa" ? "mt-2" : "mt-5"
              }`}
            >
              {t("title2")}
            </span>
          )}
        </div>
      </div>
      <div
        dir={`${localeActive === "fa" ? "rtl" : "ltr"}`}
        className={`dark:text-gray-300 text-gray-800 md:text-[13px] text-[12px] ${
          localeActive === "fa"
            ? "md:me-24 mt-5 leading-7 px-5 md:px-0"
            : "md:ms-24 px-5 md:px-0"
        }`}
      >
        <p>{t("subTitle")}</p>
      </div>
      <div className="flex justify-center  md:mt-20 mt-10 max-w-[100vw] mx-auto">
        <button
          variant="outlined"
          size="small"
          className="border px-1 dark:border-gray-500 border-gray-900 dark:text-gray-300 text-gray-800 dark:hover:text-white hover:text-black dark:hover:border-white hover:border-blue-700 rounded-xl me-2 flex items-center justify-center transition-all"
          onClick={slidePrev}
          style={{
            zIndex: 1,
          }}
        >
          <span className="text-[13px]">
            <ArrowCircleLeftOutlinedIcon className="text-[50px]" />
          </span>
        </button>
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
          {items.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                virtualIndex={index}
                className="m-0 p-0 max-w-[500px] cursor-pointer"
              >
                <div
                  // dir={localeActive === "fa" ? "rtl" : "ltr"}
                  className="border border-gray-400 rounded-xl max-w-[100%]"
                  onClick={() => {
                    setIsVisible(true);
                    setSelectedId(index);
                  }}
                >
                  <div
                    className={`p-4 rounded-t-xl border-b border-gray-400 slider-item bg-red-900 ${
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
                  <CardContent className="h-[200px]">
                    <p className="dark:text-gray-300 text-gray-800 md:text-[15px] text-[12px]">
                      {truncateText(item.content, 50)}
                    </p>
                  </CardContent>
                  <div className="border border-gray-500 w-[80%] ms-2"></div>
                  <div className="ms-4 mb-2 py-5 flex">
                    <Button
                      size="small"
                      variant="contained"
                      className="sm:text-[12px] text-[9px] flex items-center gap-2 bg-gray-800 hover:bg-gray-700 py-2 px-4"
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
                      className="dark:text-red-300 text-black md:text-[12px] text-[9px] ms-2 py-2.5 px-4 border-gray-600 hover:dark:border-white hover:dark:text-red-200"
                    >
                      <span className="mt-1 mb-1">{t("readMoreBtn")}</span>
                    </Button>
                  </div>
                </div>
                {/* <AnimatePresence initial={false}>
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
                </AnimatePresence> */}
              </SwiperSlide>
            );
          })}
          {/* {items.map((item, index) => (
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
                    className="md:text-[12px] text-[9px] flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-5"
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
          ))} */}
        </Swiper>
        {/* <AnimatePresence>
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
        </AnimatePresence> */}
        <button
          className="border px-1 dark:border-gray-500 border-gray-900 dark:text-gray-300 text-gray-800 dark:hover:text-white hover:text-black dark:hover:border-white hover:border-blue-700 rounded-xl ms-2 flex items-center justify-center transition-all"
          onClick={() => slideNext()}
        >
          <span className="text-[13px]">
            <ArrowCircleRightOutlinedIcon className="text-[50px]" />
          </span>
        </button>
      </div>
      <div
        dir={`${localeActive === "fa" ? "rtl" : "ltr"}`}
        id="see-more"
        className="flex justify-end max-w-[80vw] mt-5 mx-auto"
      >
        <Button
          className={`py-2 px-4 dark:border-gray-500 border-gray-600  dark:text-white text-black md:text-[13px] text-[10px] hover:border-black dark:hover:border-white`}
          variant="outlined"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            router.push(`/${localeActive}/projects`);
          }}
        >
          <span className="">{t("seeMore")}</span>
          <span
            className={`ms-2 transition-all ease-linear ${
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
