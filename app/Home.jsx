"use client";
import React, { use, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { RsetDarkMode, selectDarkMode } from "./slices/mainSlices";
import { useDispatch, useSelector } from "react-redux";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SklillsP2 from "./components/SklillsP2";
import { useLocale } from "next-intl";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();
  const localeActive = useLocale();
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({ container: ref });
  console.log(localeActive);

  // can return cookies for dir
  return (
    <div
      // ref={ref}
      className=" bg-white dark:bg-[#161616] flex justify-center relative "
    >
      {/* <svg
        id="progress"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="fixed md:inline-block hidden"
      >
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollYProgress }}
        />
      </svg> */}
      <div className="bg-cover bg-center min-h-[100vh] flex flex-col justify-center items-center w-[100vw]">
        <Nav />
        <Hero />
        <SklillsP2 />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
