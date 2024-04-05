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
  return (
    <div className="relative max-w-[1920px] mt-16 md:mt-0 md:p-16 p-2">
      <div id="header" className="text-[70px] rounded-2xl  px-5 max-w-min">
        <div className="flex items-center">
          <span>
            <ViewCompactAltOutlinedIcon className="me-2 text-[50px]" />
          </span>
          <span className="text-[50px] md:text-[70px]">MY.</span>
          <span className="text-[20px] md:text-[30px] text-red-600 md:mt-7 mt-6">
            Projects
          </span>
        </div>
      </div>
      <div className="flex mt-20 max-w-[90vw]">
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
          {items.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                virtualIndex={index}
                className="m-0 p-0 max-w-[500px] cursor-pointer"
              >
                <div className="border border-gray-400 rounded-xl max-w-[100%]">
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
                    <div className="font-bold text-[18px] dark:text-white text-white">
                      {item.title}
                    </div>
                  </div>
                  <CardContent>
                    <p className="dark:text-gray-300 text-gray-800">
                      {item.content}
                    </p>
                  </CardContent>
                  <CardActions className="ms-2 mb-2">
                    <Button
                      size="small"
                      variant="contained"
                      className="text-[12px] flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-5"
                      onClick={() => {
                        console.log("hi");
                      }}
                    >
                      <span>
                        <GitHubIcon fontSize="small" className="text-white" />
                      </span>
                      <span className="mt-1 text-white">GitHub</span>
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      className="dark:text-white text-black text-[12px] ms-2 px-5 border-gray-600 hover:border-red-600"
                    >
                      <span className="mt-1 mb-1">Read More</span>
                    </Button>
                  </CardActions>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
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
    </div>
  );
};

export default Projects;
