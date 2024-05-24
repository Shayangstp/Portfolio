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
      className=" bg-white dark:bg-[#161616] flex justify-center relative"
    >
      <div className="bg-cover bg-center min-h-[100vh] flex flex-col justify-center items-center w-[100vw]">
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
